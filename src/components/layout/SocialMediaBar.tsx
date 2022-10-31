import React from 'react'
import styles from './SocialMediaBar.module.css'

const SocialMediaBar = () => {
  return (
    <div className={styles.container}>
        <p>Check me on:</p>
          {["fa-brands fa-facebook", "fa-brands fa-instagram", "fa-brands fa-tiktok", "fa-brands fa-twitter"].map(el => 
              <button key={el} className={styles.button}><i className={el} /></button>
          )}
    </div>
  )
}

export default SocialMediaBar