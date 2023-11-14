import React from 'react'
import styles from '../Styles/components/header.module.css'
import footer from '../components/Footer'

const Header = ({image}) => {
  return (
    <header className={styles.headerContainer}>
     
     <img className={headerLogo} alt={image}/>

    </header>


    
  )
}

export default Header