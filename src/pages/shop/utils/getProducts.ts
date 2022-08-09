import { ShopProduct } from '../types/shopProduct'
import { fetchEntries } from '../../blog/utils/contentful'

export async function getProducts(): Promise<ShopProduct[] | null>{
    const res = await fetchEntries<any>({content_type: 'shopItem'})

    if (!res) return null
    const products = res?.map((p) => {
      const { name, price, image, descriptionText } = p.fields
      const { id } = p.sys
      const slug = name.toLowerCase().replace(' ', '-')
      return ({
        slug,
        id,
        name,
        price,
        image: {
            title: image.fields.title,
            description: image.fields.description,
            url: image.fields.file.url
        },
        description: descriptionText
      })
    })
    return products
}

export const getProductsFetched = getProducts()