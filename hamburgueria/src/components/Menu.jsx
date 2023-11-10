import { Link } from 'react-router-dom'

import Styles from '../Styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav className={Styles.menuContainer}>
        
            <li>
            <Link ClassName={Styles.menuLogin} to="/Login">LOGIN</Link>  
            </li>
            
        
    </nav>
    
  )
}

export default Menu