import CardEquipe from "../components/CardEquipe";
import Header from "../components/Header"
import LateralBar from "../components/LateralBar";
import styles from '../styles/pages/Equipe.module.css';


const Equipe = () => {
    return(
        <>
            <Header />
            <div className={styles.main}>
                <LateralBar />
                <main className={styles.conteudoPrincipal}>
                   <CardEquipe src='' nome='Flaviana FXT' profissao='Developer FrontEnd' sobre='lorem ipsum taftaffatfatftaftfa' />
                </main>    
            </div>
        </>
    )
}

export default Equipe;