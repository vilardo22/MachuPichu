import React from 'react'
import styles from "./time.module.css"
// import f1 from '../Assets/images/ft1.jpg';
import Oquee from './Oquee';




const Time = () => {
  return (
    <>
       
       
      
      <div className={styles.container2}>
      <div className={styles.textContainer}>
          <p className={styles.Text}>Nosso Time de profissionais</p>
        </div>

        <div className={styles.card1}>
        <Oquee />
          <div className={styles.bottomText}>Texto na parte inferior</div>
        </div>
        <div className={styles.card2}>
        <Oquee />
          <div className={styles.bottomText}>Texto na parte inferior</div>
        </div>
        <div className={styles.card3}>
        <Oquee />
          <div className={`${styles.bottomText} ${styles.cardTop}`}>Texto na parte superior3</div>
        </div>
      </div>
    </>
    
  )
}

export default Time
