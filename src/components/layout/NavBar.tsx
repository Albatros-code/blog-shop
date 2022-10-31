import React, { ReactNode } from 'react'
import styles from '../../../styles/NavBar.module.css'
import { navigation } from '../../../config'
import Link from 'next/link'

interface NavBarProps {
    activeLink: string
}
const NavBar = (props: NavBarProps) => {
    const { activeLink } = props
    
    return (
        <div className={styles.navBarContainer}>
        {Object.values(navigation).filter(el => el.title !== 'Home').map(nav => {
            const isActive = activeLink === nav.link
            return (
                <Link href={nav.link} key={nav.title} scroll={false}>
                    <a className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>{nav.title}</a>
                </Link >
        )})}
    </div>
    )
}

export default NavBar