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
        <div style={{backgroundImage: `url(https:${post.image.url})`}} className={styles.image}/>
        <span className={styles.title}>{post.title}</span>
        <span className={styles.subtitle}>{(new Date(post.date)).toLocaleDateString("pl-PL")}</span>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo dignissimos accusamus, amet earum vitae? Est ipsa at iusto ratione perspiciatis impedit nihil alias commodi blanditiis, id reprehenderit amet rerum!</p>
        <Link href={`/post/${post.slug}`}><a className={styles.button}>Read More</a></Link>
    </div>
  )
}

export default BlogPostCard