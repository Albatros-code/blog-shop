import styles from './ContactPageContent.module.css'
import React from 'react'
import { navigation } from '../../../config'
import Layout from '../../components/layout/Layout'

interface ContactPageContentProps {
  staticContent: {
    imageUrl: string
  }
}

const socialContactDetails = [
  {
    icon: "fa-regular fa-envelope",
    title: 'e-mail',
    link: 'email@email.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis urna. Quisque convallis elementum eros porta elementum.' 
  },
  {
    icon: "fa-brands fa-facebook",
    title: 'Facebook',
    link: '@facebook_ID',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis urna. Quisque convallis elementum eros porta elementum.' 
  },
  {
    icon: "fa-brands fa-instagram",
    title: 'Instagram',
    link: '@instagram_ID',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis urna. Quisque convallis elementum eros porta elementum.' 
  },
  {
    icon: "fa-brands fa-tiktok",
    title: 'Tik Tok',
    link: '@tiktok_ID',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis urna. Quisque convallis elementum eros porta elementum.' 
  },
  {
    icon: "fa-brands fa-twitter",
    title: 'Twitter',
    link: '@twitter_ID',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis urna. Quisque convallis elementum eros porta elementum.' 
  },
]

const ContactPageContent = ({
  staticContent: {
    imageUrl
  }
}: ContactPageContentProps) => {
  
  return (
    <Layout activeLink={navigation.contact.link}>
      <div className={styles.container}>
          <h1>Contact</h1>
          {socialContactDetails.map(item =>
            <div className={styles.itemContainer} key={item.title}>
              <header>
                <button key={item.title} className={styles.button}><i className={item.icon} /></button>
                <span>{item.title}</span>
                <span>-</span>
                <span>{item.link}</span>
              </header>
              <p>{item.description}</p>
            </div>
          )}
      </div>
    </Layout>

  )
}

export default ContactPageContent