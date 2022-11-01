import Link from 'next/link'
import React, { ReactNode } from 'react'
import { navigation } from '../../../config'
import styles from './Layout.module.css'

interface NavLogoProps {
}
const NavLogo = (props: NavLogoProps) => {


    return (
    <div className={styles.navLogoContainer}>
        {/* 🐱 */}
        <div className={styles.navLogoCircle}/>
        <Link href={navigation.home.link}>
            <a>
                <img src="/logo.svg"/>
            </a>
        </Link>
    </div>
    )
}

export default NavLogo