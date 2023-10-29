import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/caminho-para-o-seu-logo.png" alt="Logo" className={styles.logo} />
      </header>
    </div>
  );
}

export default Header;