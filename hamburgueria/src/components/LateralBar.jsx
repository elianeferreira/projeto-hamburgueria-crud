import styles from '../styles/components/LateralBar.module.css'
import * as Icon from '@phosphor-icons/react';

const LateralBar = () => {
    return(
        <div className={styles.lateralBar}> 
            <Icon.Plus className={styles.Icon} size={32} color='#ffffff' alt='sinal-de-adição' />
        </div>
    )
}

export default LateralBar;