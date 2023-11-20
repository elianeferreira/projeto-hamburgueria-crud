import Header from "../components/Header";
import React from 'react'
import Logo from '../assets/Logo.png'
import styles from '../Styles/components/Home.module.css'
import Footer from "../components/Footer";


const Home = ({title, image}) => {
  return (
    <>
    <nav className={styles.menuLogin}>
      <div className={styles.buttonLogin}>
        <button className={styles.buttonText} type="submit">Login</button>
      </div>
    </nav> 
    
    <header >
      <img className={styles.headerImage} src={Logo} alt="logo Hamburgueria" title="logo Hamburgueria"/>
    </header>

      
      
    
    </>   
  )
}

export default Home