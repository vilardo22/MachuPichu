// src/components/Slider.js
import React from 'react';
import styles from './Slideshow.module.css'; // Supondo que o arquivo de estilos se chama 'Slider.module.css'
import f1 from '../Assets/images/ft1.jpg';
import Lozango from './Lozango';

const Slider = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.Text}>Quais lugares você vai visitar</p>
          <h1 className={styles.textInH1}>Loren Ipsum</h1>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.backgroundImage} style={{ backgroundImage: `url(${f1})` }}></div>
        <div className={styles.textContainer2}>
          <h1 className={styles.textInH12}>Loren Ipsum</h1>
          <p className={styles.Text2}>Quais lugares você vai visitar</p>
        </div>
        <div className={styles.card1}>
          <Lozango />
          <div className={styles.bottomText}>Texto na parte inferior</div>
        </div>
        <div className={styles.card2}>
          <Lozango />
          <div className={styles.bottomText}>Texto na parte inferior</div>
        </div>
        <div className={styles.card3}>
          <Lozango />
          <div className={`${styles.bottomText} ${styles.cardTop}`}>Texto na parte superior</div>
        </div>
      </div>
    </>
  );
};

export default Slider;
