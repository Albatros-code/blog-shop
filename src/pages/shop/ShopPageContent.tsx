import Link from 'next/link'
import React from 'react'
import { navigation } from '../../../config'
import Button from '../../components/inputs/Button'
import Layout from '../../components/layout/Layout'
import ProductCard from './components/ProductCard'
import ShopTopBar from './components/ShopTopBar'
import styles from './ShopPageContent.module.css'
import { ShopProduct } from './types/shopProduct'
import { useShopContextProvider } from './utils/shopContext'



interface ShopPageContent {
    products: ShopProduct[]
}

const ShopPageContent = ({
    products
}: ShopPageContent) => {

  const { cart: { products: cartProducts }} = useShopContextProvider()
  const cartProductCount = Object.values(cartProducts).reduce((sum, el) => sum + el, 0)
  return (
    <Layout activeLink={navigation.shop.link}>
      <ShopTopBar 
        title="Product's list"
        rightContent={() => 
          <Button href="/shop/cart" icon='fa-solid fa-cart-shopping'>
            See cart
            <div className={styles.cartButtonBadge}>{cartProductCount}</div>
          </Button>}/>
      <div className={styles.itemsContainer}>
        {products.map((product) => {
          return (
            <Link href={`/shop/${product.id}`} key={product.id}>
              <a>
                <ProductCard product={product}/>
              </a>
            </Link>
          )
          })}
      </div>
    </Layout>
  )
}

export default ShopPageContent