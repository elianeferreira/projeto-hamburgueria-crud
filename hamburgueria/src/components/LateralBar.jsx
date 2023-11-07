import styles from '../styles/components/LateralBar.module.css'
import * as Icon from '@phosphor-icons/react';

const LateralBar = () => {
    return(
        <div className={styles.lateralBar}> 
            <Icon.Plus className={styles.Icon} size={32} style={{color: '#ffffff', background: 'black'}} alt='sinal-de-adição' />
        </div>
    )
}

export default LateralBar;