import React, { ReactNode } from 'react'
import styles from './Layout.module.css'
import Head from 'next/head'
import NavBar from './NavBar'
import NavLogo from './NavLogo'
import Link from 'next/link'
import { navigation } from '../../../config'
import SocialMediaBar from './SocialMediaBar'
import clsx from 'clsx'

interface LayoutProps {
    children: ReactNode
    activeLink?: string
    bgImage?: string
}
const Layout = ({
    children,
    activeLink = '-',
    bgImage
}: LayoutProps) => {

    return (
        <>
            <div className={clsx(styles.backgroundContainer)} style={{backgroundImage: `url(${bgImage})`}}/>
            <div className={styles.mainContainer}>
                <div className={clsx(styles.headerContainer)}>
                    <div className={clsx(styles.headerContainerBg, bgImage && styles.headerContainerImgBg)}/>
                    <div className={styles.headerContainerInner}>
                        <Link href={navigation.home.link}><a><NavLogo /></a></Link>
                        <NavBar activeLink={activeLink}/>
                        <SocialMediaBar />
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    {children}
                </div>
                <div className={clsx(styles.footerContainer, bgImage && styles.footerContainerImgBg)}>
                    © albatros.code@gmail.com 🚀
                </div>
            </div>
        </>
    )
}

export default Layout