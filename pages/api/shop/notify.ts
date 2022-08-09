import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { authorize, order } from '../../../src/pages/shop/utils/payU'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    console.log('---NOTIFIED!')
  }