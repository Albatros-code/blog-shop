import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import getStripe, { stripe as stripe_ } from '../../../src/utils/shop/getStripe'

const CURRENCY = 'PLN'
const stripe = stripe_

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    if (req.method === 'POST') {
        
    //   const item = req.body.item as any
    //   try {
        // Create Checkout Sessions from body params.
        const params: Stripe.Checkout.SessionCreateParams = {
        //   submit_type: 'donate',
        //   payment_method_types: ['card'],
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1L1cTPAucx3fljOd9RRp638K',
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/cancel`,
        }
        
        const checkoutSession: Stripe.Checkout.Session = await (stripe as any).checkout.sessions.create(params)
        // if (checkoutSession && checkoutSession.url){
        //     res.redirect(303, checkoutSession.url);
        // }
        res.status(200).json(checkoutSession)
    //   } catch (err) {
    //     const errorMessage =
    //       err instanceof Error ? err.message : 'Internal server error'
    //     res.status(500).json({ statusCode: 500, message: errorMessage })
    //   }
    } else {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
    }
  }