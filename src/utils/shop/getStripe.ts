// ./utils/get-stripejs.ts
import { Stripe, loadStripe } from '@stripe/stripe-js';
// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//     // https://github.com/stripe/stripe-node#configuration
//     apiVersion: '2020-08-27',
//   })

export const stripe: Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY!)

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe
