import styles from '../styles/pages/GestorPedidos.module.css'
import Header from '../components/Header.jsx'
import LateralBar from '../components/LateralBar.jsx'
import * as Icon from '@phosphor-icons/react'

const GestorPedidos = () => {
 return(
  <>
    <Header />
    <div className={styles.main}>
      <LateralBar />
      <div className={styles.gestorMain}>
        <h1 className={styles.nomeSessao}>GESTOR DE PEDIDOS</h1>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>EM CONSTRUÇÃO</h2>
          <Icon.Hammer className={styles.icon} size={200} />
        </div>
      </div>
    </div>
    
  </>
)
}

export default GestorPedidos;
