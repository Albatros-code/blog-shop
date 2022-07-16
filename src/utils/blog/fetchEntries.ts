import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = (space && accessToken) && createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries(query?: any) {
    if (!client) return undefined 
    const entries = await client.getEntries(query)
    if (entries.items) return entries.items
}

export default { fetchEntries }