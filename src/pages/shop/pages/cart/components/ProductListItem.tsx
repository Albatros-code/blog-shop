import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Button from '../../../../../components/inputs/Button'
import TextInput from '../../../../../components/inputs/TextInput'
import { ShopProduct } from '../../../types/shopProduct'
import { numberToPrice } from '../../../utils'
import { useShopContextProvider } from '../../../utils/shopContext'
import Popup from '../../../../../components/feedback/popup/Popup'


import styles from './ProductListItem.module.css'
import ConfirmationPopup from '../../../../../components/common/confirmationPopup/ConfirmationPopup'


interface ProductListItemProps {
    product: ShopProduct
    quantity: number | null
    edit?: boolean
}

const ProductListItem = ({
    product,
    quantity,
    edit = false
}: ProductListItemProps) => {

    const { name, price, description, image} = product
    const { cart: { products, add, remove, setQty } } = useShopContextProvider()

    const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const qty = parseInt(e.target.value)
        const resolvedQty = !isNaN(qty) ? qty : null
        setQty(product.id, resolvedQty as any)
    }

    const deleteRef = React.useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = React.useState(false)
    const handleDelete = () => {
        setOpen(false)
        remove(product.id)
    }
    
    return (
        <div className={[styles.container, edit && styles.edit, styles.containerHover].join(' ')}>
            <div style={{backgroundImage: `url(https:${image.url})`}} className={styles.image}/>
            <p className={styles.title}>{name}</p>
            {edit ? <div className={styles.qtyBar}>
                <Button icon="fa-solid fa-minus" className={styles.qtyButton} onClick={() => add(product.id, -1)}  disabled={quantity ? quantity <= 1 : false}/>
                <TextInput name="qty" value={quantity ? quantity.toString() : ''} className={styles.qtyInput} alignEnd={true} onChange={handleQtyChange} type="number" min={1} max={99}/>
                <Button icon="fa-solid fa-plus" className={styles.qtyButton} onClick={() => add(product.id)} disabled={quantity ? quantity >= 99 : false}/>
            </div> : <p className={styles.quantity}>{quantity}</p>}
            <div className={styles.mathMark}><i className="fa-solid fa-xmark"></i></div>
            <p className={styles.price}>{numberToPrice(price)}</p>
            <div className={styles.mathMark}><i className="fa-solid fa-equals"></i></div>
            <p className={clsx(styles.price, styles.priceBold)}>{numberToPrice(price * (quantity || 0))}</p>
            {edit && 
                <>
                    <Button key={`deleteButton_` + product.id} ref={deleteRef} variant='secondary' icon="fa-regular fa-trash-can" className={styles.deleteButton} onClick={() => {setOpen(true)}}/>
                    <Popup onClose={() => {setOpen(false)}} anchorEl={deleteRef?.current} open={open} render={() => 
                        <ConfirmationPopup 
                            text="Do you want to remove this item?"
                            btnOkLabel='Yes'
                            btnCancelLabel='No'
                            onCancel={() => {setOpen(false)}}
                            onOk={handleDelete}
                            className={styles.deletePopup}
                        />
                    }/>
                </>
            }
        </div>
    )
}

export default ProductListItem

export const ProductListNoItems = () => {

    return (
        <div className={clsx(styles.container, styles.noItem)}>
            <p className={styles.title}>No items in cart. Select items on <Link href="/shop"><a className={styles.link}>shop</a></Link> page.</p>
        </div>
    )
}

