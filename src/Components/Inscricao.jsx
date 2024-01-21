import React, { useState } from 'react';
import styles from './Inscricao.module.css';
import emailjs from '@emailjs/browser'



const Inscricao = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignupForm = (event) => {
    event.preventDefault();
    console.log('Dados enviados:', { name, email, phone });

    emailjs.send('service_ilvx2mj', 'template_h55yuox', {
      name: name,
      email: email,
      phone: phone
    }, 'OMb7AKyeE-Y4m4c0_')
      .then((response) => {
        console.log('Email Enviado', response.status, response.text);

        // Limpar os campos do formulário
        setName('');
        setEmail('');
        setPhone('');
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
      });
  };

  return (
    <div className={styles.container}>
      <p className={styles.Text}>SUA JORNADA COMEÇA COM APENAS UM PASSO</p>
      <p className={styles.Text1}>COMEÇE SUA AVENTURA</p>
      <p className={styles.Text2}>Prencha seus dados que nossa equipe entrará em contato</p>
  
      <h1>Formulário de Cadastro</h1>
  
      <form className={styles.form} onSubmit={handleSignupForm}>
        <input 
          type='text' 
          placeholder='Nome Completo' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required />
  
        <input 
          type='email' 
          placeholder='Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required />
  
        <input
          type='tel'
          placeholder='Número Whatsapp'
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          maxLength='15'
          required
        />
  
        <button type='submit'>PRONTO PARA A AVENTURA</button>
      </form>
    </div>
  );
  }
export default Inscricao
