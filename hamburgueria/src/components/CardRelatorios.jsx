<<<<<<< HEAD
import styles from '../styles/components/CardRelatorios.module.css';
=======
import styles from '../styles/components/CardRelatorios.module.css'
>>>>>>> bffd1d12b85a24011c748b9f15ebea374f7bbf80


const CardRelatorios = ({title, description}) => {
	return(
		<div className={styles.cardRelatorios}>
			<h2 className={styles.titleCardRelatorio}>{title}</h2>
			<p className={styles.descriptionCardRelatorio}> {description} </p>
		</div>
)
}

export default CardRelatorios;
