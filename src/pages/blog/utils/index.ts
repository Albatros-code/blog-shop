import { BlogPost, BlogPostEntry, BlogPostLight } from '../types/blogTypes'
import { fetchEntries, getContentfulAsset, getContentType } from './contentful'

export async function getPosts(): Promise<BlogPost[] | null>{
    const res = await fetchEntries<BlogPostEntry>({content_type: 'blogPost'})
    if (!res) return null
    const posts = res?.map((p) => {
      const { title, description, date, image, content, tags } = p.fields
      const { createdAt, } = p.sys
      const slug = title.toLowerCase().replace(' ', '-')
      // const tags = p.metadata.tags.map(el => el.sys.id)
      return ({
        slug,
        title,
        description,
        date: date || createdAt,
        image: {
            title: image.fields?.title,
            description: image.fields?.description || null,
            url: image.fields.file?.url
        },
        content,
        tags
      })
    })
    return posts
}

export async function getPostsLight() {
  return (await getPosts())?.map((item): BlogPostLight => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    date: item.date,
    tags: item.tags
  })) || null
}

export function _getTags(posts: BlogPost[]){
  const tagSet = new Set<string>()
  posts.forEach(({tags}) => tags.forEach(tag => tagSet.add(tag)))
  return Array.from(tagSet)
}

export async function getTags(){
  const blogPost = await getContentType('blogPost')
  return blogPost?.fields.find(field => field.id === 'tags')?.items?.validations[0].in || []
}

export async function getAsset(id: string){
  return await getContentfulAsset(id)
}

export async function getSideSectionDetails(){
  const posts = await getPosts() || []
  const tags = await getTags()
  const imageUrl = (await getAsset('2xMwV93Rttokqf5QMcOOYr'))?.fields.file.url || ''
  return ({
    sideSectionDetails: {
      recentPosts: posts.slice(0, 5),
      tags,
      imageUrl, 
    },
    posts
  })
}