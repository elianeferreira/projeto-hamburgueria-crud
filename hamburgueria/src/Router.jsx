import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import GestorPedidos from "./pages/GestorPedidos"
import Equipe from "./pages/Equipe"
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from "./components/Footer"
import CadastroNovoMembro from "./pages/CadastroNovoMembro"
import CadastroNovoItem from "./pages/CadastroNovoItem"

const Router = () => {
  return (
   <>

<BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/relatorios" element={<Relatorios />}/> 
          <Route path="/gestorpedidos" element={<GestorPedidos />} /> 
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/cadastronovoitem" element={<CadastroNovoItem />} />
          <Route path="/cadastronovomembro" element={<CadastroNovoMembro/>} />
        
      </Routes>
      <Footer />
     
      </BrowserRouter>
   </>
   
  )
}

export default Router