import CardEquipe from "../components/CardEquipe";
import Header from "../components/Header"
//import Footer from '../components/Footer'
import LateralBar from "../components/LateralBar";
import styles from '../styles/pages/Equipe.module.css';
import flaviana from '../assets/foto 3x4.jpg'
import bk from '../assets/bk.jpeg'
import eli from '../assets/eli.jpeg'
import mari from '../assets/mari.jpeg'
import CadastroNovoMembro from "./CadastroNovoMembro";

const Equipe = () => {
    return(
        <>
            <Header />
            <div className={styles.main}>
                <LateralBar page='/cadastronovomembro'/>
                <div className={styles.conteudoPrincipal}>
                   <h1 className={styles.nomeSessao}>EQUIPE</h1>
                   <div className={styles.equipe}>
                        <CardEquipe src={bk} nome='Beatriz Karoline' 
                        profissao='Developer BackEnd' 
                        sobre='lorem ipsum taftaffatfatftaftfa'
                        href='' />
                        <CardEquipe src={eli} nome='Eliane Ferreira' 
                        profissao='Developer FrontEnd' 
                        sobre='lorem ipsum taftaffatfatftaftfa' 
                        href='https://github.com/elianeferreira' />
                        <CardEquipe src={flaviana} nome='Flaviana FXT'
                         profissao='Developer FrontEnd' 
                         sobre='Gestora Ambiental que se apaixonou pela tecnologia'
                         href='https://github.com/FlavianaFXT' />
                        <CardEquipe src={mari} nome='Mariana dos Santos' 
                        profissao='Developer BackEnd' 
                        sobre='lorem ipsum taftaffatfatftaftfa' 
                        href='https://github.com/mariana-cristina-santos' />
                   </div>
                </div>    
            </div>
            
        </>
    )
}

export default Equipe;
