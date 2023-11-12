import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import GestorPedidos from "./pages/GestorPedidos"
import Equipe from "./pages/Equipe"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/relatorios" element={<Relatorios />}/> 
        <Route path="/gestorpedidos" element={<GestorPedidos />} /> 
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router