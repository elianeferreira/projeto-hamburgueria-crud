import styles from '../styles/components/CardEquipe.module.css';

const CardEquipe = () => {
    
    return (
        <div className={styles.CardEquipe}>
            <img className={styles.CardImage} src={src} alt={alt} />
            <h3>{nome}</h3>
            <h4>{profissao}</h4>
            <p>{sobre}</p>
        </div>
    )
};

export default CardEquipe;
