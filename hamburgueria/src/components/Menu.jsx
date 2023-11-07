import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <ul>
            <li>
            <Link to="/cardápio">CARDÁPIO</Link>  
            </li>
            <li>
            <Link to="/relatórios">RELATÓRIOS</Link>
            </li>
            <li>
            <Link to="/gestão de pedidos">GESTÃO DE PEDIDOS</Link>  
            </li>
            <li>
            <Link to="/equipe">EQUIPE</Link>
            </li>
        </ul>
    </nav>
    
  )
}

export default Menu