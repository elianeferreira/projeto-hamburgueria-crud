import CardEquipe from "../components/CardEquipe";
import Header from "../components/Header"
//import Footer from '../components/Footer'
import LateralBar from "../components/LateralBar";
import styles from '../styles/pages/Equipe.module.css';
import flaviana from '../assets/foto 3x4.jpg'
import bk from '../assets/bk.jpeg'
import eli from '../assets/eli.jpeg'
import mari from '../assets/mari.jpeg'


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
                        profissao='BackEnd Developer' 
                        sobre='Entusiasta da tecnologia, parda, nascida em Recife-PE, mas provinda de Jaboatão dos Guararapes. Acredita que todo conhecimento é valioso e essencial. Possui formação diversificada em Enfermagem e Edificações, além de ter uma base de conhecimentos em mec^nica, engenharia, designer, marketing, desenvolvimento, entre outras. Tutora de um gato branco e preto chamado Batman Mister Barbinha, voluntária em alguns projetos e estudante em busca de cada dia mais conhecimento e desenvolvimento social e profissional.'
                        href='https://github.com/soubeatrizkaroline' />

                        <CardEquipe src={eli} nome='Eliane Ferreira' 
                        profissao='FrontEnd Developer' 
                        sobre='lorem ipsum taftaffatfatftaftfa' 
                        href='https://github.com/elianeferreira' />

                        <CardEquipe src={flaviana} nome='Flaviana FXT'
                         profissao='FrontEnd Developer' 
                         sobre='Gestora Ambiental que se apaixonou pela tecnologia'
                         href='https://github.com/FlavianaFXT' />

                        <CardEquipe src={mari} nome='Mariana dos Santos' 
                        profissao='BackEnd Developer' 
                        sobre='lorem ipsum taftaffatfatftaftfa' 
                        href='https://github.com/mariana-cristina-santos' />
                   </div>
                </div>    
            </div>
            
        </>
    )
}

export default Equipe;
