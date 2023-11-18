import styles from '../styles/components/CardRelatorios.module.css'



const CardRelatorios = ({title, description}) => {
	return(
		<div className={styles.cardRelatorios}>
			<h2 className={styles.titleCardRelatorio}>{title}</h2>
			<p className={styles.descriptionCardRelatorio}> {description} </p>
		</div>
)
}

export default CardRelatorios;
