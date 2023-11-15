import React, { useState } from 'react';
import styles from './faq.module.css';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
<div>
  <div className={styles.textContainer}>
    <p className={styles.Text}>F.A.Q</p>
    <h1 className={styles.textInH1}>Perguntas Frequentes</h1>
  </div>
  <div className={styles.wrapper}>
    <div className={styles.accordion}>
      {data.map((item, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.title} onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div
            className={`${styles.content} ${selected === i ? styles.show : ''}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

const data = [
  {
    question: 'Question 1',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
  },
  {
    question: 'Question 2',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
  },
  {
    question: 'Question 3',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
  },
  {
    question: 'Question 4',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
  },
];

export default FAQ;
