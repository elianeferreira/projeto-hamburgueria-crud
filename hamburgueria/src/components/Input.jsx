import styles from '../styles/components/Input.module.css';

const Input = ({placeholder}) => {
	return(
	<input className = {styles.input} placeholder={placeholder} />
)
}

export default Input;
