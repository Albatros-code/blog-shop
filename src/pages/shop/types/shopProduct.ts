

export interface ShopProduct {
    id: string
    name: string
    price: number
    image: {
        title: string
        description: string
        url: string
    }
    description: string
}