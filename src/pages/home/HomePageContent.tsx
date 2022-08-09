import Link from 'next/link'
import React from 'react'
import { navigation } from '../../../config'
import Layout from '../../components/layout/Layout'
import styles from './HomePageContent.module.css'


const HomePageContent = () => {

  return (
    <Layout activeLink={navigation.home.link} bgImage="bghome.jpg">
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hello on my page!</h1>
          <h2 className={styles.subtitle}>..and smacznej kawusi! ☕</h2>
        </div>
      </div>
  </Layout>
  )
}

export default HomePageContent