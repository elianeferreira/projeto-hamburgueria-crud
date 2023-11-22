import React from 'react'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import styles from '../Styles/pages/Cardapio.module.css'
import CardCardapio from '../components/CardCardapio'
import Logo from '../assets/Logo.png'
import hamburguer from '../assets/hamburguer1.jpg'



const Cardapio = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
            <LateralBar />
    <div className={styles.principal}>

      <h1 className={styles.mainTitle}>CARDÁPIO</h1>
      <div className={styles.cardapio}>
      <CardCardapio image={hamburguer}
      hamburguer="HtmlBurguer"
      descrição="Lorem"
      Preço="12,00"
     />
      <CardCardapio image={Logo}
      hamburguer="HtmlBurguer"
      descrição="Lorem"
      Preço="12,00"
      />

    <CardCardapio image={Logo}
      hamburguer="HtmlBurguer"
      descrição="Lorem"
      Preço="12,00"
      />

     <CardCardapio image={Logo}
      hamburguer="HtmlBurguer"
      descrição="Lorem"
      Preço="12,00"
      />
      <CardCardapio image={Logo}
      hamburguer="HtmlBurguer"
      descrição="Lorem"
      Preço="12,00"
      />
      </div>
      </div>
      </div>
    
      
    </>
  )
}

export default Cardapio