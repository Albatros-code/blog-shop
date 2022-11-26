import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
if (!space || ! accessToken) throw new Error ('Contentfull credentials not available!')

const client = (space && accessToken) && createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries<T = any>(query?: any) {
    if (!client) return undefined 
    const entries = await client.getEntries<T>(query)
    if (entries.items) return entries.items
}

export async function getContentType(id: string) {
  if (!client) return undefined 
  const contentType = await client.getContentType(id)
  return contentType
}

export async function getContentfulAsset(id: string) {
  if (!client) return undefined 
  const asset = await client.getAsset(id)
  return asset
}