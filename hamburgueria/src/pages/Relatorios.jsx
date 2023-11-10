import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LateralBar from '../components/LateralBar.jsx';
import styles from '../styles/pages/Relatorios.module.css';
import * as Icon from '@phosphor-icons/react'

const Relatorios = () => {
	return (
	<>
		<Header />
		<div className = {styles.relatoriosMain}>
      <LateralBar />
      <div className={styles.cardsRelatorios}>
        <h1>RELATORIOS</h1>
        <Icon.Coins className={styles.icon} size={100}/>
      </div>
    </div>
		<Footer />
  </>
)
}

export default Relatorios;
