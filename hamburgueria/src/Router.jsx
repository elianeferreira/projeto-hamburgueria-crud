import {BrowserRouter, Routes, Route} from "react-router-dom"
<<<<<<< HEAD
import Menu from "./components/Menu"
import Home from "./pages/Home"
=======
>>>>>>> bffd1d12b85a24011c748b9f15ebea374f7bbf80
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import GestorPedidos from "./pages/GestorPedidos"
import Equipe from "./pages/Equipe"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
      
        <Route path="/home" element={<Home/>} />
        <Route path="/cardápio" element={<Cardapio/>} />
        <Route path="/relatórios" element={<Relatorios/>}/> 
        <Route path="/gestão de pedidos" element={<Gestão/>} /> 
        <Route path="/equipe" element={<Equipe/>} />
=======
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/relatorios" element={<Relatorios />}/> 
        <Route path="/gestorpedidos" element={<GestorPedidos />} /> 
        <Route path="/equipe" element={<Equipe />} />
>>>>>>> bffd1d12b85a24011c748b9f15ebea374f7bbf80
      </Routes>
    </BrowserRouter>
  )
}

export default Router