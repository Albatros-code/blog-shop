import React from 'react'
import { BlogPost } from '../types/blogTypes'
import styles from './BlogPostCard.module.css'
import Router from 'next/router'
import { navigation } from '../../../../config'
import Link from 'next/link'

interface BlogPostCardProps {
    post: BlogPost
}

const BlogPostCard = ({
  post
}: BlogPostCardProps) => {
  
  
  return (
    <div className={styles.container}>
        <div style={{backgroundImage: `url(${post.image.url})`}} className={styles.image}/>
        <span className={styles.title}>{post.title}</span>
        <span className={styles.subtitle}>{(new Date(post.date)).toLocaleDateString("pl-PL")}</span>
        <p className={styles.description}>{post.description}</p>
        <Link href={`/blog/post/${post.slug}`}><a className={styles.button}>Read More</a></Link>
    </div>
  )
}

export default BlogPostCard