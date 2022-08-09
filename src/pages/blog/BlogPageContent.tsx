import Link from 'next/link'
import React from 'react'
import { navigation } from '../../../config'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import Layout from '../../components/layout/Layout'
import styles from './BlogPageContent.module.css'
import AboutSection from './components/AboutSection'
import BlogPostCard from './components/BlogPostCard'
import RecentPostsSection from './components/RecentPostsSection'
import SearchBar from './components/SearchBar'
import TagsSection from './components/TagsSection'
import { BlogPost } from './types/blogTypes'

const sortByDate = (dateA: string, dateB: string) => (new Date(dateB)).getTime() - new Date(dateA).getTime()

interface BlogPageContent {
    posts: BlogPost[]
}

const tags = ['Travel', 'Books', 'Art', 'Lifestyle', 'Health']

const BlogPageContent = ({
    posts
}: BlogPageContent) => {

  const sortedPosts = posts
    .reduce((posts: BlogPost[], post) => {
      Array.from({ length: 50 }, (x, i) => {
        posts.push({...post, title: 'Post ' + Math.floor(Math.random() * 1000), date:  new Date((new Date().getTime()) - (Math.random() * new Date().getTime() / 2)).toISOString()})
      });
      
      return posts
    }, [])
    .sort((a, b) => sortByDate(a.date, b.date))

  return (
    <Layout activeLink={navigation.blog.link}>
    <div>
      <div className={styles.pageSections}>
        <div className={styles.postsContainer}>
          {sortedPosts.map((post: any) => {
            return (
              <div key={post.title}>
                <Link href={`/post/${post.slug}`}>
                    <BlogPostCard post={post}/>
                </Link>
              </div>
            )
          })}
        </div>
        <div className={styles.sideSection}>
          <SearchBar />
          <header>About blogger</header>
          <AboutSection />
          <header>Recent Posts</header>
          <RecentPostsSection posts={posts.slice(0, 5)} />
          <header>Tags</header>
          <TagsSection tags={tags}/>
        </div>
      </div>

    </div>
  </Layout>
  )
}

export default BlogPageContent