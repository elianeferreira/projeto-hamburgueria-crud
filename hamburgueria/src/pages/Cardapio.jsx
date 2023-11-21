import React from 'react'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import styles from '../styles/pages/Cardapio.module.css'
import CardCardapio from '../components/CardCardapio'
import Logo from '../assets/Logo.png'


const Cardapio = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
            <LateralBar />
      <div>
      <h1 className={styles.mainTitle}>CARDÁPIO</h1>
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
      <CardCardapio image={Logo}
      hamburguer="HtmlBurguer"
      descrição="Lorem"
      Preço="12,00"
      />

     </div>
    </div>
      
    </>
  )
}

export default Cardapio