import type { NextPage } from 'next'

import Layout from '../components/layout/Layout'
import navigation from '../config/navigation'
import styles from '../styles/Home.module.css'

const Shop: NextPage = () => {
  return (
    <Layout activeLink={navigation.shop.link}>
      <div >
        <h1 className={styles.title}>Shop</h1>

        <p>
          shop content
        </p>

      </div>
    </Layout>
  )
}

export default Shop
