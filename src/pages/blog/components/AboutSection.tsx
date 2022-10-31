import React from 'react'
import styles from './AboutSection.module.css'

interface AboutSectionProps {
  imageUrl: string
}

const AboutSection = ({
  imageUrl
}: AboutSectionProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.image} style={{backgroundImage: `url(https:${imageUrl})`}}/>
        <h2>Janina Paskuła</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a cupiditate expedita ab iste obcaecati praesentium consectetur maiores reprehenderit qui, quidem fugit dicta doloribus velit optio, aliquam cum sint facere.</p>
    </div>
  )
}

export default AboutSection