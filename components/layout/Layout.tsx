import React, { ReactNode } from 'react'
import styles from '../../styles/Layout.module.css'
import Head from 'next/head'
import NavBar from './NavBar'
import NavLogo from './NavLogo'

interface LayoutProps {
    children: ReactNode
    activeLink?: string
}
const Layout = (props: LayoutProps) => {
    const { activeLink = '-' } = props

    return (
    <div className={styles.mainContainer}>
        <Head>
            <title>Blog with shop</title>
            <meta name="description" content="Blog and shop" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.95em%22 font-size=%2280%22>🐱</text></svg>" />
        </Head>
        <div className={styles.headerContainer}>
            <div className={styles.headerContainerInner}>
                <NavLogo />
                <NavBar activeLink={activeLink}/>
            </div>
        </div>
        <div className={styles.contentContainer}>
            {props.children}

        </div>
        <div className={styles.footerContainer}>
            Footer
        </div>
    </div>
    )
}

export default Layout