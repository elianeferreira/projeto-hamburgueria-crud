import { Link } from 'react-router-dom'
import styles from '../styles/components/Menu.module.css'

import Styles from '../Styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav>
        <ul className={styles.menuNav}>
        <li>
            <Link className={styles.link} to="/Home"></Link>  
            </li>
            
            <li>
            <Link className={styles.link} to="/login">Login</Link>  
            </li>
                      
            <li>
            <Link className={styles.link} to="/cardapio">Cardápio</Link>  
            </li>
            <li>
            <Link className={styles.link} to="/relatorios">Relatórios</Link>
            </li>
            <li>
            <Link className={styles.link} to="/gestorpedidos">Gestão de Pedidos</Link>  
            </li>
            <li>
            <Link className={styles.link} to="/equipe">Equipe</Link>
            </li>
        </ul>
    </nav>
    
  )
}

export default Menu