export const numberToPrice = (price: number) => {
    return price === 0 ? 
        '0,00 zł': 
            price.toString().length === 1 ?
            '0,0' + price.toString() + ' zł' :
                (price.toString().slice(0, price.toString().length-2) || '0') + ',' + price.toString().slice(price.toString().length-2, price.toString().length) + ' zł'
}