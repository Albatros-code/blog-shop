import type { InferGetStaticPropsType } from 'next'

import BlogPageSearch from '../../src/pages/blog/BlogPageSearch'
import { getSideSectionDetails } from '../../src/pages/blog/utils'

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogPageSearch {...props}/>
}

export default Blog

export async function getStaticProps() {
  const { posts, sideSectionDetails } = await getSideSectionDetails()

  return {
    props: {
      posts,
      sideSectionDetails
    },
  }
}