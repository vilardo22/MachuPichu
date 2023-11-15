// Welcome.js

import React from 'react';
import styles from './welcome.module.css';
import logo from "../Assets/images/LOgo.png";

function Welcome() {
  return (
    <div className={styles.welcome}>
      {/* <h1>Machu Pichu</h1> */}
      {/* <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Enim sed faucibus turpis in eu mi bibendum neque egestas. Morbi tristique senectus et netus. 
        Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.</h3> */}
      
      <header className={styles.header}>
        <img src={logo} className={styles.logo} />
      </header>
    </div>

  );
}

export default Welcome;
