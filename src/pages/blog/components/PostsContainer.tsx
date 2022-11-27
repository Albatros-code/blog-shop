import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { blog } from '../../../../config'
import Pagination from '../../../components/pagination/Pagination'
import { BlogPost } from '../types/blogTypes'
import BlogPostCard from './BlogPostCard'
import styles from './PostsContainer.module.css'



type PostsContainerProps = {
  posts: BlogPost[] 
  numberOfPosts: number
}

const PostsContainer = ({
  posts,
  numberOfPosts
}: PostsContainerProps) => {
  const router = useRouter()
  const { pageNo } = router.query
  const page = parseInt(pageNo?.toString() || '1')

  const pagesCount = Math.ceil((numberOfPosts - 1) / blog.postsPerPage)

  return (
    <>
    <div className={clsx(styles.postsContainer, page === 1 && styles.firstPage)}>
            {posts.map((post: BlogPost) => {
              return (
                <div key={post.title}>
                  <BlogPostCard post={post}/>
                </div>
              )
            })}
          </div>
          <div className={styles.postsContainerFooter}>
            <Pagination className={styles.paginationBar} count={pagesCount} page={page} onChange={(pageNo) => {
              router.push(`/blog/${pageNo}`)
              }}/>
          </div>
    </>
          
  )
}

export default PostsContainer