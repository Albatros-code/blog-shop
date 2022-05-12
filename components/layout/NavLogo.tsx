import React, { ReactNode } from 'react'
import styles from '../../styles/Layout.module.css'
import { navigation } from '../../config'

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