import Link from 'next/link'
import React from 'react'
import { getDate } from '../../../utils/common/date'
import { BlogPost } from '../types/blogTypes'
import styles from './RecentPostsSection.module.css'

interface RecentPostsSectionProps {
    posts: BlogPost[]
}

const RecentPostsSection = ({
    posts
}: RecentPostsSectionProps) => {

  return (
    <div className={styles.container}>
        {posts.map(post => 
        <Link href={`/blog/post/${post.slug}`} key={post.slug}>
            <a className={styles.listItem}>
                <div className={styles.image}>
                    <div style={{backgroundImage: `url(https:${post.image.url})`}}/>
                </div>    
                <div>
                    <p className={styles.title}>{post.title}</p>
                    <p className={styles.subtitle}>{getDate(new Date(post.date))}</p>
                </div>

            </a>
        </Link>
        )}
    </div>
  )
}

export default RecentPostsSection