import Link from 'next/link'
import React from 'react'
import Button from '../../../components/inputs/Button'
import { ShopProduct } from '../types/shopProduct'
import { numberToPrice } from '../utils'
import { useShopContextProvider } from '../utils/shopContext'
import styles from './ShopTopBar.module.css'


interface ShopTopBarProps {
    title?: string
    backLink?: string
    leftContent?: () => React.ReactNode
    rightContent?: () => React.ReactNode
}

const ShopTopBar = ({
    title,
    backLink,
    leftContent,
    rightContent
}: ShopTopBarProps) => {

    return (
        <div className={styles.container}>
            {title && <p className={styles.title}>{title}</p>}
            <div className={styles.leftContainer}>
                {backLink && <Link href={backLink}>
                    <button className={styles.backButton}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </Link>}
                {leftContent && leftContent()}
            </div>
            <div className={styles.rightContainer}>
                {rightContent && rightContent()}
            </div>
        </div>
    )
}

export default ShopTopBar