import type { InferGetStaticPropsType } from 'next'
import AboutPageContent from '../src/pages/about/AboutPageContent'
import { getAndSaveImage, getAsset } from '../src/pages/blog/utils'

const About = (props: InferGetStaticPropsType<typeof getStaticProps>) => <AboutPageContent staticContent={props}/>
export default About

export async function getStaticProps (context: any) {
  const { localPath = '' } = await getAndSaveImage('2xMwV93Rttokqf5QMcOOYr', './public/about', 'about') || {}
  return {
    props: {
      imageUrl: localPath
    }
  }
}
