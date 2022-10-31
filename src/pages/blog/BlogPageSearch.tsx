import React from 'react'
import BlogWrapper, { BlogSideSectionDetails } from './components/BlogWrapper'
import PostsContainer from './components/PostsContainer'
import SearchContainer from './components/SearchContainer'
import { BlogPost, BlogPostLight } from './types/blogTypes'

interface BlogPageContentProps {
    posts: BlogPostLight[]
    sideSectionDetails: BlogSideSectionDetails
}

const BlogPageContent = ({
    posts,
    sideSectionDetails,
}: BlogPageContentProps) => {
  
  return (
    <BlogWrapper details={sideSectionDetails}>
      <SearchContainer posts={posts} />
    </BlogWrapper>
  )
}

export default BlogPageContent