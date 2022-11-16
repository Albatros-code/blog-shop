import type { InferGetStaticPropsType } from 'next'
import ContactPageContent from '../src/pages/contact/ContactPageContent'

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => <ContactPageContent />
export default Contact

export async function getStaticProps(context: any) {
    return {
      props: {
      },
    }
  }
