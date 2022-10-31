import Link from 'next/link'
import React from 'react'
import { getDate } from '../../../utils/common/date'
import { BlogPostLight } from '../types/blogTypes'
import styles from './BlogSearchItem.module.css'

type BlogSearchItemProps = {
    details: BlogPostLight
}

const BlogSearchItem = ({
  details: {
    title,
    tags,
    date,
    description,
    slug
  }
}: BlogSearchItemProps) => {
  return (
    <div key={title} className={styles.container}>
        <header className={styles.title}>{title}</header>
        <div className={styles.postDetails}>
          <span className={styles.date}>{getDate(new Date(date))}</span>
          <span className={styles.date}>-</span>
          <div className={styles.tags}>
            {tags.map((tag => <span key={tag} className={styles.tag}>{tag}</span>))}
          </div>
        </div>
        <p>{description}</p>
        <Link href={`/blog/post/${slug}`}><a className={styles.button}>Read More</a></Link>
    </div>
  )
}

export default BlogSearchItem