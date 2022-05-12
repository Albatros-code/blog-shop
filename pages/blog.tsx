import type { NextPage } from 'next'

import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import { navigation } from '../config'

const Blog: NextPage = () => {
  return (
    <Layout activeLink={navigation.blog.link}>
      <div >
        <h1 className={styles.title}>Blog</h1>

        <p>
          blog content
        </p>

      </div>
    </Layout>
  )
}

export default Blog
