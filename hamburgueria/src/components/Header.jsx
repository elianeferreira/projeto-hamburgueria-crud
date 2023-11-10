import styles from '../styles/components/Header.module.css'
import Menu from './Menu'
import hamburgueriaLogo from '../assets/logo-hamburgueria.jpg'

const Header = () => {
    return(
         <div className={styles.headerContainer}>
            <div className={styles.headerRight}>
                <img className={styles.logo} src={hamburgueriaLogo} alt='logo-hamburgueria'/>
                <Menu />
            </div>
            <h2>Olá, Usuária!</h2>
        </div>
    )
}

export default Header;
