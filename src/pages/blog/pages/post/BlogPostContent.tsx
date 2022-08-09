import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import React from 'react'
import { navigation } from '../../../../../config'
import Layout from '../../../../components/layout/Layout'
import { BlogPost } from '../../types/blogTypes'
import styles from './BlogPostContent.module.css'

interface BlogPostContent {
    post: BlogPost
}

const BlogPostContent = ({
    post
}: BlogPostContent) => {
  return (
    <Layout activeLink={navigation.blog.link}>
    <div >
      <h1 className={styles.title}>{post.title}</h1>
      <h3>{post.date.substring(0, 10)}</h3>
      <div className="post">
        <img width="500px" alt={post.image.description} src={`https:${post.image.url}`} />
        <div className="text">
          <div>
            {documentToReactComponents(post.content)}
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default BlogPostContent