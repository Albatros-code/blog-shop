import { blog } from '../../../../config'
import downloadImage from '../../../utils/common/downloadImages'
import { BlogPost, BlogPostEntry, BlogPostLight } from '../types/blogTypes'
import { fetchEntries, getContentfulAsset, getContentType } from './contentful'
import fs from 'fs'
import { Document } from '@contentful/rich-text-types'
import path from 'path'

let posts: Promise<BlogPost[] | null> | null = null
export async function getPosts () {
  if (posts === null) {
    posts = _getPosts()
  }
  return posts
}

async function _getPosts (): Promise<BlogPost[] | null> {
  console.log('called!')
  const res = await fetchEntries<BlogPostEntry>({ content_type: 'blogPost' })
  if (res == null) return null
  const posts = await Promise.all(res?.map(async (p) => {
    const { title, description, date, image, content, tags } = p.fields
    const { createdAt } = p.sys
    const slug = title.toLowerCase().replaceAll(' ', '-')
    const { localPath } = await getAndSaveImage(image.sys.id, './public/blog/', slug) || {}
    downloadRichTextImages(content, slug)
    return ({
      slug,
      title,
      description,
      date: date || createdAt,
      image: {
        title: image.fields?.title,
        description: image.fields?.description || null,
        url: localPath || image.fields.file.url
      },
      content,
      tags
    })
  }))
  return posts
}

function downloadRichTextImages(postContent: Document, slug: string){
  const imageList: string[] = []
  const pathToStore = path.resolve('./public/post/', slug)
  
  postContent.content.forEach((node) => {
    if (node.nodeType === 'embedded-asset-block'){
      const id = node.data.target.sys.id
      imageList.push(id)
      getAndSaveImage(id, pathToStore, id)
    }
  })

  if(imageList.length){
    const files = fs.readdirSync(pathToStore)
    files.forEach(fileName => {
      if(imageList.includes(fileName.replace(/(\w+)(_\d+\.\w+)/, '$1'))) return
      fs.unlink(path.resolve(pathToStore, fileName), () => null)
    })
  }

}

export async function getPostsLight () {
  return (await _getPosts())?.map((item): BlogPostLight => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    date: item.date,
    tags: item.tags
  })) || null
}

export function _getTags (posts: BlogPost[]) {
  const tagSet = new Set<string>()
  posts.forEach(({ tags }) => tags.forEach(tag => tagSet.add(tag)))
  return Array.from(tagSet)
}

export async function getTags () {
  const blogPost = await getContentType('blogPost')
  return (blogPost?.fields.find(field => field.id === 'tags')?.items?.validations[0].in) || []
}

export async function getAsset (id: string) {
  return await getContentfulAsset(id)
}

function getCurrentImageVersion(pathToFile: string, name: string){
  const files = fs.readdirSync(pathToFile);  
  const matchingFiles = files.filter(file => file.match(`${name}_.*`)).sort()
  const currentFileName = matchingFiles.pop()
  matchingFiles.forEach(fileName => {fs.unlink(pathToFile + '/' + fileName, () => null)})

  if (!currentFileName) return null
  const currentCreatedAt = currentFileName && currentFileName.substring(currentFileName.lastIndexOf('_') + 1, currentFileName.lastIndexOf('.'))
  return {
    createdAt: currentCreatedAt || null,
    details: {
      fileName: currentFileName,
      localPath: pathToFile.replace('./public','') + '/' + currentFileName,
      promise: currentFileName ? Promise.resolve(currentFileName) : Promise.reject()
    }
  }
}

function createDirectoryIfNotExist(path: string){
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }
}

export async function getAndSaveImage (id: string, pathToStore: string, imageName: string) {
  createDirectoryIfNotExist(pathToStore)
  const asset = (await getAsset(id))
  if (!asset) throw new Error (`Asset with id ${id} is not available.`)
  const imageUrl = asset?.fields?.file?.url
  const createdAt = asset?.sys.updatedAt.slice(0,19).replace(/[-T:]/gi, '')
  const fileName = `${imageName}_${createdAt}`

  const currentFile = getCurrentImageVersion(pathToStore, imageName)

  if (!currentFile || currentFile.createdAt !== createdAt) {
    try {
      const result = downloadImage(`https:${imageUrl}`, pathToStore, fileName)
      await result.promise
      if (currentFile) fs.unlink(pathToStore + '/' + currentFile.details.fileName, () => null)
      return result
    } catch (error) {
      return null
    }
  }
  return currentFile ? currentFile.details : null
}

export async function getSideSectionDetails () {
  const posts = await getPosts() || []
  const tags = await getTags()
  const imageUrl = (await getAsset(blog.images.aboutSection))?.fields.file.url || ''
  return ({
    sideSectionDetails: {
      recentPosts: posts.slice(0, 5),
      tags,
      imageUrl
    },
    posts
  })
}
