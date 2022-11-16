import type { InferGetStaticPropsType, NextPage } from 'next'
import { base } from '../config'
import { getAndSaveImage } from '../src/pages/blog/utils'
import HomePageContent from '../src/pages/home/HomePageContent'
import { duplicateImageAndRemoveSuffix } from '../src/utils/common'

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => <HomePageContent staticContent={props}/>
export default Home

export async function getStaticProps () {
    const { localPath = '' } = await getAndSaveImage(base.images.homeBg, './public/base', 'homeBg') || {}
    await getAndSaveImage(base.images.logo, './public/base', 'logo')
    duplicateImageAndRemoveSuffix('logo', 'base')
    return {
      props: {
        imageUrl: localPath
      }
    }
  }
