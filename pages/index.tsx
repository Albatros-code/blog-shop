import type { NextPage } from 'next'

import Layout from '../src/components/layout/Layout'
import { navigation } from '../config'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout activeLink={navigation.home.link}>
      <div >
        <h1 className={styles.title}>Home</h1>

        <p>
          home content
        </p>

      </div>
    </Layout>
  )
}

export default Home
