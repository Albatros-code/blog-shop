import type { NextPage } from 'next'
import { getProductsFetched } from '../../src/pages/shop/utils/getProducts'
import { ShopProduct } from '../../src/pages/shop/types/shopProduct'
import ShopCartPageContent from '../../src/pages/shop/pages/cart/ShopCartPageContent'

interface ShopCartProps {
  products: ShopProduct[]
}
const ShopCart: NextPage<ShopCartProps> = ({products}) => {

  return (
    <ShopCartPageContent products={products} />
  )
}

export default ShopCart

export async function getStaticProps() {
  const products = await getProductsFetched
  return {
    props: {
      products
    },
  }
}