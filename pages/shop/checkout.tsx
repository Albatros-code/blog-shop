import type { NextPage } from 'next'
import { getProductsFetched } from '../../src/pages/shop/utils/getProducts'
import { ShopProduct } from '../../src/pages/shop/types/shopProduct'
import ShopCheckoutPageContent from '../../src/pages/shop/pages/checkout/ShopCheckoutPageContent'

interface ShopCheckoutProps {
  products: ShopProduct[]
}
const ShopCheckout: NextPage<ShopCheckoutProps> = ({products}) => {

  return (
    <ShopCheckoutPageContent products={products} />
  )
}

export default ShopCheckout

export async function getStaticProps() {
  const products = await getProductsFetched
  return {
    props: {
      products
    },
  }
}