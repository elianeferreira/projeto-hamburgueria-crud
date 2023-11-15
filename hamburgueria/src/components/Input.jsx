import styles from '../styles/components/Input.module.css';

const Input = ({placeholder, type, onChange, value}) => {
	return(
	<input className = {styles.input} 
	placeholder={placeholder} 
	type={type}
	onChange={onChange}
	value={value} />
)
}

export default Input;
