import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../src/components/layout/Layout'
import styles from '../../styles/Home.module.css'
import { navigation } from '../../config'
import { fetchEntries } from '../../src/utils/blog/fetchEntries'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { PostApiModel, PostModel } from '../../src/types/models/postModel'

const Post: NextPage<{posts: any}> = (props: any) => {
const router = useRouter()
const { slug } = router.query
const { post } = props
const { date, title, image } = post

  return (
    <Layout activeLink={navigation.blog.link}>
      <div >
        <h1 className={styles.title}>{post.title}</h1>
        <h3>{date.substring(0, 10)}</h3>
        <div className="post">
          <img width="500px" alt={image.description} src={`https:${image.fields.file.url}`} />
          <div className="text">
            <div>
              {documentToReactComponents(post.content)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post

const getSlug = (title: string) => title.toLowerCase().replace(' ', '-')

export async function getStaticPaths() {
  const res = await fetchEntries({content_type: 'blogPost'}) as {fields: PostApiModel}[]
  const paths = res?.map(({fields: post}) => ({params: { slug: getSlug(post.title)}  }))
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context: any) {
  const contextSlug = context.params.slug
  let currentPost: PostModel | undefined = undefined
  const res = await fetchEntries({content_type: 'blogPost'}) as {fields: PostApiModel}[]
  if (!res) throw Error("Contentfull api not working while fetching posts.")

  const posts = res?.map(({fields: post}) => {
    const slug = getSlug(post.title)
    if (slug == contextSlug) currentPost = {...post, slug}
    return {...post, slug} as PostModel
  })

  return {
    props: {
      posts,
      post: currentPost
    },
  }
}