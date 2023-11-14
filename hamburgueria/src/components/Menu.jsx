import { Link } from 'react-router-dom'
import styles from '../styles/components/Menu.module.css'

import Styles from '../Styles/components/menu.module.css'

const Menu = () => {
  return (
<<<<<<< HEAD
    <nav className={Styles.menuContainer}>
        
            <li>
            <Link ClassName={Styles.menuLogin} to="/Login">LOGIN</Link>  
            </li>
            
        
=======
    <nav>
        <ul className={styles.menuNav}>
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
>>>>>>> bffd1d12b85a24011c748b9f15ebea374f7bbf80
    </nav>
    
  )
}

export default Menu