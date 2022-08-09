import type { NextPage } from 'next'

import BlogPageContent from '../src/pages/blog/BlogPageContent'
import { BlogPost } from '../src/pages/blog/types/blogTypes'
import { getPosts } from '../src/pages/blog/utils'

const Blog: NextPage<{posts: BlogPost[]}> = ({
  posts
}) => {
  return <BlogPageContent posts={posts}/>
}

export default Blog

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  }
}