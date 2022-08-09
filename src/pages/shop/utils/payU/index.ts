import axios from "axios"

const baseUrl = 'https://secure.snd.payu.com'
const authorizeEndpoint = '/pl/standard/user/oauth/authorize'
const orderEndpoint = '/api/v2_1/orders'
const posID = '439260'
const clientID = process.env.PAYU_CLIENT_ID!
const clientSecret = process.env.PAYU_CLIENT_SECRET!

interface AuthorizeResObj {
    access_token: string,
    token_type: string,
    expires_in: number,
    grant_type: string
}

export const authorize = async () => {
    const url = baseUrl + authorizeEndpoint
    const params = {
        grant_type:'client_credentials',
        client_id: clientID,
        client_secret: clientSecret,
    }
    try {
        const res = await axios.post<AuthorizeResObj>(url, null, {params})
        return res.data
    } catch(e: any) {
        throw e.response.data.error_description
    }
}
const generateOrderId = () => Math.floor(1000000000000000 + Math.random() * 9000000000000000)
export const order = async (accessToken: string) => {
    const url = baseUrl + orderEndpoint
    const body = {
        "notifyUrl": "https://eo62a25xjqdnm42.m.pipedream.net",
        continueUrl:"http://localhost:3000/shop/order?orderID=" + generateOrderId(),
        "customerIp": "127.0.0.1",
        "merchantPosId": posID,
        "description": "RTV market",
        "currencyCode": "PLN",
        "totalAmount": "25000",
        "buyer": {
            "email": "john.doe@example.com",
            "phone": "654111654",
            "firstName": "John",
            "lastName": "Doe",
            "language": "pl"
        },
        "products": [
            {
                "name": "Wireless Mouse for Laptop",
                "unitPrice": "15000",
                "quantity": "1"
            },
            {
                "name": "HDMI cable",
                "unitPrice": "6000",
                "quantity": "1"
            }
        ]
    }
    try {
        const res = await axios.post(url, body, {headers: {Authorization: 'Bearer ' + accessToken, maxRedirects: 0}})
        return {redirectUrl: res.request.res.responseUrl as string}
    } catch(e: any) {
        throw e
    }
}