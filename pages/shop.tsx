import type { NextPage } from 'next'

import Layout from '../src/components/layout/Layout'
import navigation from '../config/navigation'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import getStripe from '../src/utils/shop/getStripe';
import shopProducts from '../src/shop/utils/products'
import Link from 'next/link';


const Shop: NextPage<{products: any[]}> = (props) => {

  const handleCheckout = async () => {
    const stripe = await getStripe()
    const checkoutSession = await axios.post('/api/checkout_sessions', {})
    await stripe?.redirectToCheckout({sessionId: checkoutSession.data.id})
  }

  return (
    <Layout activeLink={navigation.shop.link}>
      <div >
        <h1 className={styles.title}>Shop</h1>

        <p>
          shop content
        </p>
        {props.products.map(el => 
          <Link href={`/shop/item/${el.id}`} key={el.name}>
            <a>

            <div>
              <h2>{el.name} - {el.price.amount}</h2>
              {el.images[0] && <img width="100" src={el.images[0]}/>}
            </div>
            </a>
          </Link>

        )}
        <button onClick={handleCheckout}>Checkout</button>

      </div>
    </Layout>
  )
}

export default Shop

export async function getStaticProps() {
  const products = await shopProducts
  return {
    props: {
      products
    },
  }
}