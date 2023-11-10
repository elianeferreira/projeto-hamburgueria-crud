import styles from '../styles/components/CardEquipe.module.css';

const CardEquipe = ({src, alt, nome, profissao, sobre}) => {
    
    return (
        <div className={styles.CardEquipe}>
            <img className={styles.CardImage} src={src} alt={alt} />
            <h3 className={styles.nome}>{nome}</h3>
            <h4 className={styles.profissao}>{profissao}</h4>
            <p className={styles.descricao}>{sobre}</p>
        </div>
    )
};

export default CardEquipe;
