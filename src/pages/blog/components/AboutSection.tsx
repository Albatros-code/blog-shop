import React from 'react'
import styles from './AboutSection.module.css'


const AboutSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.image} style={{backgroundImage: 'url(https://s3-eu-central-1.amazonaws.com/ciekawostki/subjects/635/coverPhoto.jpg)'}}/>
        <h2>Janina Paskuła</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a cupiditate expedita ab iste obcaecati praesentium consectetur maiores reprehenderit qui, quidem fugit dicta doloribus velit optio, aliquam cum sint facere.</p>
    </div>
  )
}

export default AboutSection