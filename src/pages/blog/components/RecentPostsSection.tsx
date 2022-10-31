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
            <div className={styles.listItem} key={post.slug}>
                <div className={styles.image}>
                    <div style={{backgroundImage: `url(https:${post.image.url})`}}/>
                </div>    
                <div>
                    <p className={styles.title}>{post.title}</p>
                    <p className={styles.subtitle}>{getDate(new Date(post.date))}</p>
                </div>

            </div>
        )}
    </div>
  )
}

export default RecentPostsSection