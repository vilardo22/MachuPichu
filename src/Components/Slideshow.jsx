// src/components/Slider.js
import React from 'react';
import styles from './Slideshow.module.css'; // Supondo que o arquivo de estilos se chama 'Slider.module.css'
import f1 from '../Assets/images/ft1.jpg';
import Lozango from './Lozango';

const Slider = () => {
  return (

    <div className={styles.container}>


      <div className={styles.textContainer2}>
          <h1 className={styles.textInH12}>Loren Ipsum</h1>
          <p className={styles.Text2}>Quais lugares você vai visitar</p>
        </div>
      <div className={styles.bottomText2}>Texto1 na parte inferior</div>

      <div className={styles.card1}>
      </div>
      <div className={styles.bottomText1}>Texto1 na parte inferior</div>

      <div className={styles.card2}>
      </div>
      <div className={styles.card3}>
      </div>
      <div className={styles.bottomText3}>Texto1 na parte inferior</div>


    </div>
  );
};

export default Slider;
