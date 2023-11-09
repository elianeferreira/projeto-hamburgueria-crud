import styles from '../styles/components/Button.module.css';

const Button = ({title}) => {
 return (
	<button className = {styles.button}>{title}</button>
)
}

export default Button;
