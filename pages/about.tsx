import type { InferGetStaticPropsType } from 'next'
import AboutPageContent from '../src/pages/about/AboutPageContent'
import { getAsset } from '../src/pages/blog/utils'
import download_image from '../src/utils/common/downloadImages'

const About = (props: InferGetStaticPropsType<typeof getStaticProps>) => <AboutPageContent staticContent={props}/>
export default About

export async function getStaticProps(context: any) {
  const imageUrl = (await getAsset('2xMwV93Rttokqf5QMcOOYr'))?.fields.file.url || ''
  const image = await download_image('https:' + imageUrl, './public/about.jpg')
  console.log(image)
    return {
      props: {
        imageUrl: '/about.jpg',
      },
    }
  }
