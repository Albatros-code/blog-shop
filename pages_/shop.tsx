import type { NextPage } from 'next'
import ShopPageContent from '../src/pages/shop/ShopPageContent';
import { getProductsFetched } from '../src/pages/shop/utils/getProducts';
import { ShopProduct } from '../src/pages/shop/types/shopProduct';


const Shop: NextPage<{products: ShopProduct[]}> = ({
  products
}) => <ShopPageContent products={products}/>

export default Shop

export async function getStaticProps() {
  const products = await getProductsFetched
  return {
    props: {
      products
    },
  }
}