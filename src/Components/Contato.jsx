import React, { useState } from 'react';
import styles from './contato.module.css';
import emailjs from '@emailjs/browser'


const Contato= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
        alert("Preencha todos os campos");
        // Adicione um return aqui para interromper o envio do email se os campos não estiverem preenchidos
        return;
    }

    const templatePrams = {
        from_name: name,
        message: message,
        email: email
    }

    emailjs.send("service_inayctq", "template_h55yuox", templatePrams, "OMb7AKyeE-Y4m4c0_")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)

            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("ERRO", err)
        })
}


  return (
  
    <div className={styles.container}>
        <div className={styles.textContainer}>
    <p className={styles.Text}>F.A.Q</p>
    <h1 className={styles.textInH1}>Perguntas Frequentes</h1>
  </div>
    <h1 className={styles.title}></h1>

    <form className={styles.form} onSubmit={sendEmail}>
      <input 
        className={styles.input}
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      
      <input 
        className={styles.input}
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <textarea 
        className={styles.textarea}
        placeholder="Digite sua mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <input className={styles.button} type="submit" value="Enviar" />
    </form>
  </div>
);
}

export default Contato;
