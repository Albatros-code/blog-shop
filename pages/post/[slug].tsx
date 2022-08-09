import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../src/components/layout/Layout'
import styles from '../../styles/Home.module.css'
import { navigation } from '../../config'
import { fetchEntries } from '../../src/utils/blog/fetchEntries'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { PostApiModel, PostModel } from '../../src/types/models/postModel'
import BlogPostContent from '../../src/pages/blog/pages/post/BlogPostContent'
import { getPosts } from '../../src/pages/blog/utils'

const Post: NextPage<{posts: any}> = (props: any) => {
const router = useRouter()
const { slug } = router.query
const { post } = props
const { date, title, image } = post

  return (
    <BlogPostContent post={post}/>
  )
}

export default Post

const getSlug = (title: string) => title.toLowerCase().replace(' ', '-')

export async function getStaticPaths() {
  const res = await fetchEntries({content_type: 'blogPost'}) as {fields: PostApiModel}[]
  const paths = res?.map(({fields: post}) => ({params: { slug: getSlug(post.title)}  }))
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context: any) {
  const contextSlug = context.params.slug
  
  const posts = await getPosts()
  const currentPost = posts?.find(post => post.slug === contextSlug)
  return {
    props: {
      posts,
      post: currentPost
    },
  }
}