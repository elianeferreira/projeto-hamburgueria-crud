import React from 'react'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import styles from '../Styles/pages/Cardapio.module.css'
import CardCardapio from '../components/CardCardapio'
import hamburguer from '../assets/hamburguer1.jpg'
import CssBurguer from '../assets/css-burguer.jpg'
import JSBurguer from '../assets/js burguer.jpg'
import ReactBurguer from '../assets/react-burguer.jpg'
import JavaBurguer from '../assets/java-burguer.jpg'


const Cardapio = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <LateralBar page='/cadastronovoitem'/>
        <div className={styles.principal}>
          <h1 className={styles.mainTitle}>CARDÁPIO</h1>
          <div className={styles.cardapio}>
              <CardCardapio image={hamburguer}
              hamburguer="Html Burguer"
              ingredientes="Hamburguer kids com alface, tomate, queijo mussarela e hamburguer artesanal de carne"
              preço="R$ 10,00"
              />

              <CardCardapio image={CssBurguer}
              hamburguer="CSS Burguer"
              ingredientes="Hamburguer com pão colorido, alface, tomate, queijo prato e hamburguer artesanal de carne"
              preço="R$ 12,00"
              />

              <CardCardapio image={JSBurguer}
              hamburguer="Javascript Burguer"
              ingredientes="Hamburguer com alface, tomate, queijo cheddar e hamburguer artesanal de carne"
              preço="R$ 15,00"
              />

              <CardCardapio image={ReactBurguer}
              hamburguer="React Burguer"
              ingredientes="Hamburguer com alface, tomate, queijo mussarela e hamburguer artesanal de carne duplo"
              preço="R$ 18,00"
              />

              <CardCardapio image={JavaBurguer}
              hamburguer="Java Burguer"
              ingredientes="Hamburguer com alface, tomate, queijo mussarela, hamburguer artesanal de carne duplo e molho especial da casa"
              preço="R$ 20,00"
              />

          </div>
        </div>
      </div>  
    </>
  )
}

export default Cardapio