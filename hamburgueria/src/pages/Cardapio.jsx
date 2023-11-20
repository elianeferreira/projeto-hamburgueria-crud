import React from 'react'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import styles from '../styles/pages/Cardapio.module.css'

const Cardapio = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
            <LateralBar />
            <h1 className={styles.mainTitle}>CARDÁPIO</h1>
      </div>
      
    </>
  )
}

export default Cardapio