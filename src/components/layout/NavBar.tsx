import React, { ReactNode } from 'react'
import styles from '../../../styles/NavBar.module.css'
import { navigation } from '../../../config'
import Link from 'next/link'
import Button from '../inputs/Button'
import clsx from 'clsx'

interface NavBarProps {
    activeLink: string
}
const NavBar = (props: NavBarProps) => {
    const { activeLink } = props

    const [ _open, _setOpen ] = React.useState(false)
    const [ open, setOpen ] = React.useState(false)
    const [ isAnimating, setIsAnimating ] = React.useState(false)

    const bodyOverflow = React.useRef<null | string>(null)
    React.useEffect(() => {
        if (bodyOverflow.current === null) bodyOverflow.current = document.body.style.overflow
        document.body.style.overflow = open ? "hidden" : bodyOverflow.current
        if (open) window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [open])

    const handleMenuOpen = (open: boolean) => () => {
        if (isAnimating) return null
        setIsAnimating(true) 
        const first = open ? setOpen : _setOpen
        const second = open ? _setOpen : setOpen
        const timeout = open ? 300 : 0

        first((prev: boolean) => !prev)
        setTimeout(() => {
            second((prev: boolean) => !prev)
            setIsAnimating(false)
        }, timeout);
    }
    
    return (
        <>
        <div className={styles.navBarContainer}>
            <div className={styles.screen}>
                {Object.values(navigation).filter(el => el.title !== 'Home').map(nav => {
                    const isActive = activeLink === nav.link
                    return (
                        <Link href={nav.link} key={nav.title} scroll={false}>
                            <a className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>{nav.title}</a>
                        </Link >
                )})}
            </div>
            <div className={styles.mobile}>
                <Button icon='fa-solid fa-bars' variant='plain' onClick={handleMenuOpen(open)}/>
                <div className={clsx(styles.mobileMenuContainer, !_open && styles.displayNone)}>
                    <div onClick={handleMenuOpen(open)} className={clsx(styles.mobileMenuContainerBackground, styles.transition, open ? styles.visible : styles.hidden)}/>
                    <div className={clsx(styles.mobileMenuItems, styles.transition, open ? styles.drawerDown : styles.drawerUp)}>
                        {Object.values(navigation).filter(el => el.title !== 'Home').map(nav => {
                            const isActive = activeLink === nav.link
                            return (
                                <Link href={nav.link} key={nav.title} scroll={false}>
                                    <a className={clsx(styles.navLink, isActive && styles.navLinkActive, styles.navLinkMobile)}>{nav.title}</a>
                                </Link >
                        )})} 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar