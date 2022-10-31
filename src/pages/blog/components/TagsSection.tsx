import { useRouter } from 'next/router'
import React from 'react'
import styles from './TagsSection.module.css'

interface TagsSectionProps {
  tags: string[]
}

const TagsSection = ({
  tags
}: TagsSectionProps) => {
  const router = useRouter()

  const handleTagClick = (tag: TagsSectionProps['tags'][number]) => () => {
    router.push(`/blog/search?tags=${tag}`)
  }

  return (
    <div className={styles.container}>
      {tags.map(tag => <button key={tag} className={styles.tagContainer} onClick={handleTagClick(tag)}>{tag}</button>)}
    </div>
  )
}

export default TagsSection