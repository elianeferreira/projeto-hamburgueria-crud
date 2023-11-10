import React from 'react'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import Footer from '../components/Footer'
import styles from '../styles/pages/Cardapio.module.css'

const Cardapio = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
            <LateralBar />
            <h1>CARDÁPIO</h1>
      </div>
      <Footer />
    </>
  )
}

export default Cardapio