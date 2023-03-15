import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'


import React from 'react'

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato"/>
      <img src={foto} alt='Maquina de escrever'/>
      <div>
      <h1>Entre em Contato.</h1>
      <ul className={styles.dados}>
        <li>email@email.com</li>
        <li>99999-9999</li>
        <li>Rua Logo Ali, 999</li>
      </ul>
      </div>
    </section>
  )
}

export default Contato