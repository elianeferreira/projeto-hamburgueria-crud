import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./components/Menu"
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import Gestão from "./pages/Gestão"
import Equipe from "./pages/Equipe"

const Router = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/cardápio" element={<Cardapio />} />
        <Route path="/relatórios" element={<Relatorios />}/> 
        <Route path="/gestão de pedidos" element={<GestorPedidos />} /> 
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router