import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { authorize, order } from '../../../src/pages/shop/utils/payU'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    if (req.method === 'POST') {
        let accessToken = ''
        try {
            const { access_token } = await authorize()
            accessToken = access_token
            const { redirectUrl } = await order(accessToken)
            res.status(200).json({redirectUrl})
        } catch {
            res.status(400).json({ message: 'Failed' })
        }      

    }
  }