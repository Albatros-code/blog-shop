import type { NextPage } from 'next'

import Layout from '../src/components/layout/Layout'
import styles from '../styles/Home.module.css'
import { navigation } from '../config'
import { fetchEntries } from '../src/utils/blog/fetchEntries'
import Post from '../src/components/blog/Post'
import Link from 'next/link'

const Blog: NextPage<{posts: any}> = (props) => {
  const { posts } = props
  return (
    <Layout activeLink={navigation.blog.link}>
      <div >
        <h1 className={styles.title}>Blog</h1>

        <h2>
          Recent posts
        </h2>

        <div className="posts">
          {posts.map((post: any) => {
            return (
              <li key={post.title}>
                <Link href={`/post/${post.slug}`}>
                  <a>
                    {(new Date(post.date)).toLocaleDateString("pl-PL")} - {post.title}
                  </a>
                </Link>
              </li>
            )
          })}
        </div>

      </div>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const res = await fetchEntries({content_type: 'blogPost'})
  if (!res) return {props: { posts: []}}
  const posts = await res?.map((p) => {
    const post = p.fields as any
    const slug = post.title.toLowerCase().replace(' ', '-')
    return {...post, slug}
  })

  return {
    props: {
      posts,
    },
  }
}