import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.stripe.com/v1/',
    headers: {Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY!}`}
  });

export default instance