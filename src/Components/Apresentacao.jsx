import React from 'react';
import Oquee from './Oquee';
import styles from './apresentacao.module.css';

const Apresentacao = () => {
  return (
    <div className={styles.pageCenter}>
      <div className={styles.textContainer}>
        <p className={styles.overlayText}>Cinco motivos 
        para participar desta jornada</p>
        <h1 className={styles.textInH1}>Motivos</h1>
      </div>
      <br></br>
      <br></br>
      <div className={styles.container}>
        <div className={styles.card}>
          <Oquee />
        </div>
        <div className={styles.card}>
          <Oquee />
        </div>
        <div className={styles.card}>
          <Oquee />
        </div>
        <div className={styles.card}>
          <Oquee />
        </div>
        <div className={styles.card}>
          <Oquee />
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;
