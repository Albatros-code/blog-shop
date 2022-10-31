import React from 'react'
import BlogWrapper, { BlogSideSectionDetails } from './components/BlogWrapper'
import PostsContainer from './components/PostsContainer'
import { BlogPost } from './types/blogTypes'

interface BlogPageContentProps {
    posts: BlogPost[]
    numberOfPosts: number
    sideSectionDetails: BlogSideSectionDetails
}

const BlogPageContent = ({
    posts,
    sideSectionDetails,
    numberOfPosts,
}: BlogPageContentProps) => {
  
  return (
    <BlogWrapper details={sideSectionDetails}>
      <PostsContainer posts={posts} numberOfPosts={numberOfPosts}/>
    </BlogWrapper>
  )
}

export default BlogPageContent