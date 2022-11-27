import type { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { blog } from '../../config'

import BlogPageContent from '../../src/pages/blog/BlogPageContent'
import { BlogSideSectionDetails } from '../../src/pages/blog/components/BlogWrapper'
import { BlogPost } from '../../src/pages/blog/types/blogTypes'
import { getAsset, getPosts, getSideSectionDetails, getTags } from '../../src/pages/blog/utils'

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogPageContent {...props}/>
}

export default Blog

export async function getStaticPaths() {
    const posts = await getPosts() || []
    const numberOfPages = Math.ceil(((posts?.length) - 1) / blog.postsPerPage)
    const paths = Array.from({length: numberOfPages}, (_, k) => ({params: { pageNo: k + 1 + ''}}))
    return {
      paths,
      fallback: false
    };
  }

interface StaticProps {
  posts: BlogPost[],
  numberOfPosts: number
  sideSectionDetails: BlogSideSectionDetails
}

export const getStaticProps:GetStaticProps<StaticProps, {pageNo: string}> = async (context) => {
  const { pageNo = '1' } = context.params || {}
  const page = parseInt(pageNo)
  const { posts, sideSectionDetails } = await getSideSectionDetails()
  
  const filteredPosts = posts
    .slice(...pagePostsRange(page, blog.postsPerPage))

  return {
    props: {
      posts: filteredPosts,
      numberOfPosts: posts.length,
      sideSectionDetails
    },
  }
}

const pagePostsRange = (pageNo: number, postsPerPage: number) => {
  switch (pageNo) {
    case 1:
      return [0, postsPerPage + 1]  
    default:
      return [pageNo - 1, pageNo].map(el => el * postsPerPage + 1)
  }
}