import styles from '../styles/pages/GestorPedidos.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const GestorPedidos = () => {
 return(
  <>
    <Header />
    <div className={styles.main}>
      <LateralBarSemBotoes /> (CRIAR ESSE COMPONENTE)
      <main> 
        <img src='' alt='em construcao'/> 
      </main>
    </div>
    <Footer />
  </>
)
}

export default GestorPedidos;
