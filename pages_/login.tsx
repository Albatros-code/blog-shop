import type { NextPage } from 'next'

import Layout from '../src/components/layout/Layout'
import navigation from '../config/navigation'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <Layout activeLink={navigation.login.link}>
      <div >
        <h1 className={styles.title}>Login</h1>

        <p>
          login page content
        </p>

      </div>
    </Layout>
  )
}

export default Login
