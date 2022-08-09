import React from 'react'

interface ShopContextProps {
    cart: {
        products: Record<string, number>
        add:  (id: string, qty?: number) => void
        setQty: (id: string, qty: number) => void
        remove:  (id: string) => void
        clear:  () => void
    }
}
const ShopContext = React.createContext<ShopContextProps | null>(null)

const addProduct = (product: string, qty: number | undefined, setProducts: React.Dispatch<React.SetStateAction<Record<string, number>>>) => {
    setProducts(products => {
        const newProducts = {...products}
        if (product in products) {
            newProducts[product] = products[product] + (qty ? qty : 1)
        } else {
            newProducts[product] = qty ? qty : 1
        }
        return newProducts
    })
}

const setQty = (product: string, qty: number, setProducts: React.Dispatch<React.SetStateAction<Record<string, number>>>) => {
    setProducts(products => {
        const newProducts = {...products}
        if (product in products) {
            newProducts[product] = qty
        } else {
            newProducts[product] = qty
        }
        return newProducts
    })
}

const removeProduct = (product: string, setProducts: React.Dispatch<React.SetStateAction<Record<string, number>>>) => {
    setProducts(products => {
        const { [product]: toRemove , ...newProducts} = products
        return newProducts
    })
}

interface ShopContextProviderProps {
    children: React.ReactNode
}

const defaultProductList = {}

export const ShopContextProvider = (props: ShopContextProviderProps) => {

    const [ productsList, setProductsList ] = React.useState<Record<string, number>>(defaultProductList)
    
    React.useEffect(() => {
        if (Object.keys(productsList).length !== 0)
        window.localStorage.setItem('shopCartList', JSON.stringify(productsList))
    }, [productsList])
    
    React.useEffect(() => {
        const storedList = window.localStorage.getItem('shopCartList')
        if (storedList) setProductsList(JSON.parse(storedList) as Record<string, number>)
    }, [])
    



    const contextValue = {
        cart: {
            products: productsList,
            add: React.useCallback((id: string, qty?: number) => addProduct(id, qty, setProductsList), []),
            remove: React.useCallback((id: string,) => removeProduct(id, setProductsList), []),
            setQty: React.useCallback((id: string, qty: number) => setQty(id, qty, setProductsList), []),
            clear: () => {setProductsList({})}
        }
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ ShopContext.Provider>

    )
}

export const useShopContextProvider = () => {
    const context = React.useContext(ShopContext)
    if (!context) throw 'Shop Context is missing'
    return context
}