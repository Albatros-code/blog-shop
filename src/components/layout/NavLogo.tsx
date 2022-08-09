import React, { ReactNode } from 'react'
import styles from './Layout.module.css'

interface NavLogoProps {
}
const NavLogo = (props: NavLogoProps) => {


    return (
    <div className={styles.navLogoContainer}>
        🐱
    </div>
    )
}

export default NavLogo