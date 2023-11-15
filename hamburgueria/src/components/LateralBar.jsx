import styles from '../styles/components/LateralBar.module.css'
import { Link } from 'react-router-dom';
import * as Icon from '@phosphor-icons/react';

const LateralBar = ({page}) => {
    return(
        <div className={styles.lateralBar}> 
            <button className={styles.button}>
                <Link to={page}>
                   <Icon.Plus className={styles.Icon} size={32} color='#ffffff' alt='sinal-de-adição' />
                </Link>
            </button>
        </div>
    )
}

export default LateralBar;