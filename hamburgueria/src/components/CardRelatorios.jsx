import styles from '../styles/components/CardRelatorios.module.css'


const CardRelatorios = () => {
	return(
		<div className={styles.cardRelatorios}>
			<h2>{title}</h2>
			<img src={icon}/>
			<p> {description} </p>
		</div>
)
}

export default CardRelatorios;
