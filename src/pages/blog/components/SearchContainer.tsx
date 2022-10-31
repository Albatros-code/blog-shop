import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useRouter } from 'next/router'
import React from 'react'
import { blog } from '../../../../config'
import Pagination from '../../../components/pagination/Pagination'
import { BlogPost, BlogPostLight } from '../types/blogTypes'
import BlogSearchItem from './BlogSearchItem'
import styles from './SearchContainer.module.css'

type SearchContainerProps = {
    posts: BlogPostLight[]
}

const SearchContainer = ({
    posts
}: SearchContainerProps) => {
    const { query, replace, push, isReady } = useRouter()
    
    const {title, page, tags} = query
    const pageNo = parseInt(page ? page.toString() : '1')
    const tag = Array.isArray(tags) ? tags.join() : tags
    const matchedBlogPosts = title ? 
        posts.filter((post) => post.title.toLowerCase().includes((title as string)))
        : tag ? posts.filter((post) => post.tags.includes(tag)) : []
    const resultPageCount = Math.ceil(matchedBlogPosts.length / blog.searResultsPerPage) || 1

    React.useEffect(() => {
        if (isReady){
            if (!title && !tags) {replace('/blog/1'); return}
            if (title && tags) replace({query: Object.fromEntries(Object.entries(query).filter(([key]) => key !== 'tags') )})
            if (!page) replace({query: { ...query, page: 1 }})
            if (pageNo > resultPageCount) push({query: { ...query, page: resultPageCount }})
        }
    }, [page, title, tags, isReady, pageNo, push, query, replace, resultPageCount])

    const header = title ? `${matchedBlogPosts.length} matching results for '${title}'`
        : `${matchedBlogPosts.length} matching results for tag ${tags}`

  return (
    <>
        <header className={styles.header}>{header}</header>
        {matchedBlogPosts.length ?
        matchedBlogPosts
            .slice((pageNo - 1) * blog.searResultsPerPage, (pageNo) * blog.searResultsPerPage)
            .map(post => <BlogSearchItem key={post.slug} details={post}/>)
        :
        <div>No posts found.</div>
        }
        <Pagination count={resultPageCount} onChange={(page: number) => {push({query: { ...query, page}})}} page={pageNo}/>
    </>
  )
}

export default SearchContainer