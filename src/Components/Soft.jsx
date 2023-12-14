import React from 'react'
import styles from "./soft.module.css";
import icon from "../Assets/images/icon.png"
const Soft = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.Text}>Quais soft skills você vai desenvolver</p>
        <h1 className={styles.textInH1}>Soft Skills</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.soft}>
          <img src={icon} className={styles.icon} />
          <h1 className={styles.t1}>Lorem ipsum dolor</h1>
          <p className={styles.t2}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do.</p>
        </div>
        <div className={styles.soft}>
          <img src={icon} className={styles.icon} />
          <h1 className={styles.t1}>Lorem ipsum dolor</h1>
          <p className={styles.t2}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do.</p>
        </div>
        </div>
        <div className={styles.card}>
        <div className={styles.soft}>
          <img src={icon} className={styles.icon} />
          <h1 className={styles.t1}>Lorem ipsum dolor</h1>
          <p className={styles.t2}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do.</p>
        </div>
        <div className={styles.soft}>
          <img src={icon} className={styles.icon} />
          <h1 className={styles.t1}>Lorem ipsum dolor</h1>
          <p className={styles.t2}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do.</p>
        </div>


      </div>
    </div>
  )
}

export default Soft
