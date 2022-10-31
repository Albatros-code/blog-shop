import { useRouter } from 'next/router'
import React from 'react'
import { navigation } from '../../../../config'
import Layout from '../../../components/layout/Layout'
import AboutSection from './AboutSection'
import RecentPostsSection from './RecentPostsSection'
import SearchBar from './SearchBar'
import TagsSection from './TagsSection'
import { BlogPost } from '../types/blogTypes'
import styles from './BlogWrapper.module.css'

interface BlogWrapperProps {
    children: React.ReactNode
    details: BlogSideSectionDetails
}

export type BlogSideSectionDetails = {
  recentPosts: BlogPost[]
  tags: string[]
  imageUrl: string
}

const BlogWrapper = ({
    children,
    details: {
      recentPosts,
      tags,
      imageUrl
    }
}: BlogWrapperProps) => {
  const router = useRouter()
  return (

    <Layout activeLink={navigation.blog.link}>
    <div>
      <div className={styles.pageSections}>
        <div className={styles.postsSection}>
          {children}
        </div>
        <div className={styles.sideSection}>
          <SearchBar onSearch={(search: string) => {router.push(`/blog/search?title=${search}`)}}/>
          <header>About blog</header>
          <AboutSection imageUrl={imageUrl}/>
          <header>Recent Posts</header>
          <RecentPostsSection posts={recentPosts} />
          <header>Tags</header>
          <TagsSection tags={tags}/>
        </div>
      </div>

    </div>
  </Layout>
  )
}

export default BlogWrapper