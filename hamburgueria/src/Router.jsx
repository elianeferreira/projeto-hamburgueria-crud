import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import GestorPedidos from "./pages/GestorPedidos"
import Equipe from "./pages/Equipe"
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from "./components/Footer"

const Router = () => {
  return (
   <>

<BrowserRouter>
      <Routes>

      <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/relatorios" element={<Relatorios />}/> 
        <Route path="/gestorpedidos" element={<GestorPedidos />} /> 
        <Route path="/equipe" element={<Equipe />} />
        
      </Routes>
      <Footer>
      </Footer>
      </BrowserRouter>
   </>
   
  )
}

export default Router