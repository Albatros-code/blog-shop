import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { navigation } from '../../../../../config'
import TextInput from '../../../../components/inputs/TextInput'
import Layout from '../../../../components/layout/Layout'
import ShopTopBar from '../../components/ShopTopBar'
import { ShopProduct } from '../../types/shopProduct'
import { numberToPrice } from '../../utils'
import { useShopContextProvider } from '../../utils/shopContext'
import ProductListItem, { ProductListNoItems } from '../cart/components/ProductListItem'
import styles from './ShopCheckoutPageContent.module.css'



const initFormData = {firstName: '', lastName: '', email: '', phone: ''}

interface ShopCheckoutPageContent {
    products: ShopProduct[]
}

const ShopCheckoutPageContent = ({
    products
}: ShopCheckoutPageContent) => {

  const { cart: { products: cartProducts }} = useShopContextProvider()

    const sum = Object.entries(cartProducts).reduce((total, [id, qty]) => {
        const price = products.find(el => el.id === id)?.price
        if (!price) return total
        return total + (price * qty)
    }, 0)

    const handleCheckout = async () => {
        const res = await axios.post('/api/shop/checkout', {products: cartProducts})
        window.location.assign(res.data.redirectUrl)

    }

    const [ formData, setFormData ] = React.useState(initFormData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

  return (
    <Layout activeLink={navigation.shop.link}>
        <ShopTopBar title='Order summary' backLink='/shop/cart'/>
        <div className={styles.itemsContainer}>
            {Object.entries(cartProducts).map(([id, qty]) => {
                const product = products.find(el => el.id === id)
                if (!product) return undefined
                return (
                    <ProductListItem product={product} quantity={qty}/>
                )
            })}
            {Object.entries(cartProducts).length === 0 && <ProductListNoItems />}
        </div>
        <div className={styles.summaryWrapper}>
            <div className={styles.summary}>
                <p className={styles.sumContainer}>
                    <span>SUM:</span>
                    <span className={styles.sum}>{numberToPrice(sum)}</span>
                </p>
                <hr />
                <TextInput label='First Name' name='firstName' value={formData['firstName']} onChange={handleChange} type="onlyLetters"/>
                <TextInput label='Last Name' name='lastName' value={formData['lastName']} onChange={handleChange} type="onlyLetters"/>
                <TextInput label='Email' name='email' value={formData['email']} onChange={handleChange}/>
                <TextInput label='Phone' name='phone' value={formData['phone']} onChange={handleChange} type="number"/>
                <button className={styles.payButton} onClick={handleCheckout}><i className="fa-solid fa-cash-register" /> Pay</button>
            </div>
        </div>
    </Layout>
  )
}

export default ShopCheckoutPageContent