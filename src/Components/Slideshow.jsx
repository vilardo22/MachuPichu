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
        {/* <p className={styles.Text2}>Quais lugares você vai visitar</p> */}
      </div>

      <div className={styles.cardeprimeiro}>
      </div>

      <div className={styles.cardesegundo}>
      </div>
      <div className={styles.cardeterceiro}>
      </div>

    </div>
  );
};

export default Slider;
