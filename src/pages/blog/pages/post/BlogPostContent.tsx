import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import { getDate } from '../../../../utils/common/date'
import BlogWrapper, { BlogSideSectionDetails } from '../../components/BlogWrapper'
import { BlogPost } from '../../types/blogTypes'
import styles from './BlogPostContent.module.css'

interface BlogPostContent {
    post: BlogPost
    sideSectionDetails: BlogSideSectionDetails
}

const BlogPostContent = ({
    post,
    sideSectionDetails,
}: BlogPostContent) => {
  const { title, content, date, description, image, tags, slug} = post
  return (
    <BlogWrapper details={sideSectionDetails}>
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <div className={styles.postDetails}>
        <span className={styles.date}>{getDate(new Date(date))}</span>
        <span className={styles.date}>-</span>
        <div className={styles.tags}>
          {tags.map((tag => <span key={tag} className={styles.tag}>{tag}</span>))}
        </div>
      </div>
      <div className={styles.image} style={{backgroundImage: `url("${image.url}")`}}/>
      <div>{documentToReactComponents(content, {
        renderNode: {
          ["embedded-asset-block"]: (node) => {
            const imageName = node.data.target.sys.id + '_' + node.data.target.sys.updatedAt.slice(0,19).replace(/[-T:]/g, '')
            const imageExtWithDot = node.data.target.fields.file.fileName.replace(/(\w+)(\.\w+)$/, "$2")
            const imagePath = '/post/' + slug + '/' + imageName + imageExtWithDot
            return <img src={imagePath} className={styles.imagePost}/>;
          },
        },
      })}</div>
    </div>
  </BlogWrapper>
  )
}

export default BlogPostContent