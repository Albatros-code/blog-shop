import React from 'react'
import ConfirmationPopup from '../../../components/common/confirmationPopup/ConfirmationPopup'
import Popup from '../../../components/feedback/popup/Popup'
import Button from '../../../components/inputs/Button'
import { ShopProduct } from '../types/shopProduct'
import { numberToPrice } from '../utils'
import { useShopContextProvider } from '../utils/shopContext'
import styles from './ProductCard.module.css'
import Router from 'next/router'

interface ProductCardProps {
    product: ShopProduct
}

const ProductCard = ({
    product
}: ProductCardProps) => {

    const { name, price, description, image} = product
    const { cart: { products, add } } = useShopContextProvider()

    const isInCart = product.id in products
    const btnRef = React.useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = React.useState(false)
    const handleAddToCart = () => {
        setOpen(true)
        if (!isInCart) add(product.id)
    }

    return (
        <div className={styles.container}>
            <div style={{backgroundImage: `url(https:${image.url})`}} className={styles.image}/>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{numberToPrice(price)}</p>
            <Button ref={btnRef} onClick={handleAddToCart} icon="fa-solid fa-cart-plus">Add to cart</Button>
            <Popup onClose={() => {setOpen(false)}} anchorEl={btnRef?.current} open={open} render={() => 
                <ConfirmationPopup 
                    text={
                        <div className={styles.popupTextContainer}>
                            <h2 className={styles.textBold}>{product.name}</h2>
                            <p>is added to the cart.</p>
                        </div>
                    }
                    btnOkLabel='Go to cart'
                    btnCancelLabel='Continue'
                    onCancel={() => {setOpen(false)}}
                    onOk={() => {Router.push('/shop/cart')}}
                    className={styles.deletePopup}
                />
            }/>
        </div>
    )
}

export default ProductCard