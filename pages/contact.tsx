import type { InferGetStaticPropsType } from 'next'
import ContactPageContent from '../src/pages/contact/ContactPageContent'
import { getAsset } from '../src/pages/blog/utils'
import download_image from '../src/utils/common/downloadImages'

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => <ContactPageContent staticContent={props}/>
export default Contact

export async function getStaticProps(context: any) {
  const imageUrl = (await getAsset('2xMwV93Rttokqf5QMcOOYr'))?.fields.file.url || ''
  const image = await download_image('https:' + imageUrl, './public/about.jpg')
    return {
      props: {
        imageUrl: '/about.jpg',
      },
    }
  }
