import styles from '../styles/components/CardRelatorios.module.css';

const CardRelatorios = ({title, img, description}) => {
	return(
		<>
		<h2>{title}</h2>
		<img src={img} />
		<p> {description} </p>
		</>
)
}

export default CardRelatorios;
