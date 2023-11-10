import styles from '../styles/pages/GestorPedidos.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


const GestorPedidos = () => {
 return(
  <>
    <Header />
    <div className={styles.main}>
      <LateralBar />
      <div className={styles.gestorMain}>
        <h1>GESTOR PEDIDOS</h1>
        <h2>Em construção</h2>
      </div>
    </div>
    <Footer />
  </>
)
}

export default GestorPedidos;
