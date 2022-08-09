import axios from './shopApi'

const getProducts = async () => {
    const res = await axios.get("products")

    const products = await await Promise.all(res.data.data.map(async (el: any) => {
        const price = await axios.get(`prices/${el.default_price}`)
        return ({
            id: el.id,
            name: el.name,
            images: el.images,
            description: el.description,
            price: {
                id: price.data.id,
                currency: price.data.currency,
                amount: price.data.unit_amount,
                amountDecimal: price.data.unit_amount_decimal,
            }
        })
    }))
    return products
}

let instance: any
let semaphore = false;
const getInstance = async () => {
    if (!instance && !semaphore) {
        semaphore = true; // mark awaited constructor
        instance = await getProducts()
    }
    return instance
}

const products = getInstance()

export default products