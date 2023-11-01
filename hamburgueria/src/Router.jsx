import {BrowserRouter, Routes, Route} from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>    
      <Routes>
      <Route path="/" element={<h1>HOME</h1>}/>
        <Route path="/cardapio" element={<h1>CARDÁPIO</h1>}/>
        <Route path="/relatorios" element={<h1>RELATÓRIOS</h1>}/> 
        <Route path="/gestao" element={<h1>GESTÃO</h1>}/> 
        <Route path="/equipe" element={<h1>EQUIPE</h1>}/>
      </Routes>
    </BrowserRouter>
    
   
  )
}

export default Router