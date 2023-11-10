import CardEquipe from "../components/CardEquipe";
import Header from "../components/Header"
import Footer from '../components/Footer'
import LateralBar from "../components/LateralBar";
import styles from '../styles/pages/Equipe.module.css';
import Flaviana from '../assets/foto 3x4.jpg'

const Equipe = () => {
    return(
        <>
            <Header />
            <div className={styles.main}>
                <LateralBar />
                <div className={styles.conteudoPrincipal}>
                   <h1 className={styles.nomeSessao}>EQUIPE</h1>
                   <div className={styles.equipe}>
                        <CardEquipe src={Flaviana} nome='BK' profissao='Developer BackEnd' sobre='lorem ipsum taftaffatfatftaftfa' />
                        <CardEquipe src={Flaviana} nome='Eliane Ferreira' profissao='Developer FrontEnd' sobre='lorem ipsum taftaffatfatftaftfa' />
                        <CardEquipe src={Flaviana} nome='Flaviana FXT' profissao='Developer FrontEnd' sobre='lorem ipsum taftaffatfatftaftfa' />
                        <CardEquipe src={Flaviana} nome='Mari' profissao='Developer BackEnd' sobre='lorem ipsum taftaffatfatftaftfa' />
                   </div>
                </div>    
            </div>
            <Footer />
        </>
    )
}

export default Equipe;
