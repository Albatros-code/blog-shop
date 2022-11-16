import type { InferGetStaticPropsType, NextPage } from 'next'
import { fetchEntries } from '../../../src/utils/blog/fetchEntries'
import { PostApiModel } from '../../../src/types/models/postModel'
import BlogPostContent from '../../../src/pages/blog/pages/post/BlogPostContent'
import { getPosts, getSideSectionDetails, getTags } from '../../../src/pages/blog/utils'

const Post = ({post, sideSectionDetails}: InferGetStaticPropsType<typeof getStaticProps>)=> {
  if(!post) return null
  return (
    <BlogPostContent post={post} sideSectionDetails={sideSectionDetails}/>
  )
}

export default Post

const getSlug = (title: string) => title.toLowerCase().replaceAll(' ', '-')

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
  const { posts, sideSectionDetails } = await getSideSectionDetails()
  const currentPost = posts?.find(post => post.slug === contextSlug)
  return {
    props: {
      post: currentPost,
      sideSectionDetails
    },
  }
}