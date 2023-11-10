import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import GestorPedidos from "./pages/GestorPedidos"
import Equipe from "./pages/Equipe"

const Router = () => {
  return (
    <BrowserRouter>
        <Menu/>
        
      <Routes>
      
        <Route path="/home" element={<Home/>} />
        <Route path="/cardápio" element={<Cardapio/>} />
        <Route path="/relatórios" element={<Relatorios/>}/> 
        <Route path="/gestão de pedidos" element={<Gestão/>} /> 
        <Route path="/equipe" element={<Equipe/>} />
      </Routes>
    </BrowserRouter>
    
   
  )
}

export default Router