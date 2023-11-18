import React from 'react'
import Footer from '../components/Footer'


const HeaderLogin = ({image}) => {
  return (
    <header>
      <img className={styles.headerImage} src={image} alt=""/>
    </header>
    
  )
}

export default HeaderLogin