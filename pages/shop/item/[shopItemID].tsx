import type { NextPage } from 'next'
import Layout from '../../../src/components/layout/Layout'
import styles from '../../../styles/Home.module.css'
import { navigation } from '../../../config'
import shopProducts from '../../../src/shop/utils/products'

const ShopItem: NextPage<{product: any}> = (props: any) => {
const { product } = props
const { name, description, images: [ image ] } = product

  return (
    <Layout activeLink={navigation.shop.link}>
      <div >
        <h1 className={styles.title}>{name}</h1>
        <div className="post">
          <img width="500px" alt={name} src={`${image}`} />
          <div className="text">
            <div>
              {description}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShopItem

export async function getStaticPaths() {
  const products = await shopProducts
  const paths = products?.map(({id}) => ({params: { shopItemID: id}  }))
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context: any) {
  const contextId = context.params.shopItemID
  const products = await shopProducts
  const currentProduct = products.find(product => product.id === contextId)

  return {
    props: {
      product: currentProduct
    },
  }
}