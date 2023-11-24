import React from 'react'
import styles from '../Styles/components/CardCardapio.module.css'

const CardCardapio = ({image, title, hamburguer, ingredientes , preço}) => {
  return (

    <div className={styles.CardCardapio} >
        <img className={styles.imghamburguer} src={image} alt={title} />
        <h1 className={styles.nomeHamburguer}>{hamburguer}</h1>
        <p className={styles.ingredientes}>{ingredientes}</p>
        <h2 className={styles.preco}>{preço}</h2>
    </div>
  )
}

export default CardCardapio