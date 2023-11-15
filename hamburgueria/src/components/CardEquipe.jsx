import styles from '../styles/components/CardEquipe.module.css';
import * as Icon from '@phosphor-icons/react'

const CardEquipe = ({src, alt, nome, profissao, sobre, href}) => {
    
    return (
        <div className={styles.CardEquipe}>
            <img className={styles.CardImage} src={src} alt={alt} />
            <div className={styles.Texto}>
                <h2 className={styles.nome}>{nome}</h2>
                <h4 className={styles.profissao}>{profissao}</h4>
                <p className={styles.descricao}>{sobre}</p>
                <a href={href} target='_blank'>
                     <Icon.GithubLogo className={styles.iconeGithub} size={32} />
                </a>
            </div>
        </div>
    )
};

export default CardEquipe;
