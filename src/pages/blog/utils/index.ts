import { BlogPost, BlogPostEntry } from '../types/blogTypes'
import { fetchEntries } from './contentful'

export async function getPosts(): Promise<BlogPost[] | null>{
    const res = await fetchEntries<BlogPostEntry>({content_type: 'blogPost'})
    if (!res) return null
    const posts = res?.map((p) => {
      const { title, date, image, content } = p.fields
      const slug = title.toLowerCase().replace(' ', '-')
      return ({
        slug,
        title,
        date,
        image: {
            title: image.fields.title,
            description: image.fields.description,
            url: image.fields.file.url
        },
        content
      })
    })
    return posts
}