import React from 'react'
import styles from '../Styles/components/CardCardapio.module.css'

const CardCardapio = ({image, title, hamburguer, ingredientes , Preço}) => {
  return (

    <div className={styles.CardCardapio} >
     
      <img className={styles.imghamburguer} src={image} alt={title} />
        <h1 className={styles.NomeHamburguer}>{hamburguer}</h1>
        <p className={styles.ingredientes}>{ingredientes}</p>
        <h2 className={styles.preco}>{Preço}</h2>
    </div>
    
    

   
  )
}

export default CardCardapio