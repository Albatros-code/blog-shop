import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../src/components/layout/Layout'
import styles from '../../styles/Home.module.css'
import { navigation } from '../../config'
import { fetchEntries } from '../../src/utils/blog/fetchEntries'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { PostApiModel, PostModel } from '../../src/types/models/postModel'
import BlogPostContent from '../../src/pages/blog/pages/post/BlogPostContent'
import { getPosts } from '../../src/pages/blog/utils'

const Order: NextPage = () => {
const router = useRouter()
const { orderID } = router.query

  return (
    <div>
      Order: {orderID}
    </div>
  )
}

export default Order
