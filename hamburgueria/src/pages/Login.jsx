import React from 'react'
import Home from '../assets/Logo.png'
import HeaderLogin from'../components/HeaderLogin'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Styles from '../Styles/components/Login.module.css'
import { useState } from 'react'


const Login = () => {
  const [Email, SetEmail] = useState ('')
  const [Senha, SetSenha] = useState ('')
  
  function handleInputEmail(e){
    SetEmail(e.target.value)
  }
  function handleInpuSenha(e){
    SetSenha(e.target.value)
  }
  
  return (
    <>
       <div className={Styles.Menu}>
      
       </div>
     
     <div className={Styles.Container}>
          <h1 className={Styles.h1}>AQUI</h1>
     </div>
    
     <div className={Styles.containerFormulario}>
     
     <form className={Styles.formulario}onSubmit={()=>{}}>
      <h2 >Faça seu Login</h2>
      <input className={Styles.formularioInput} 
      type='text'
      placeholder="Email"
      onChange={handleInputEmail}
      value={Email}  
      />

      <input className={Styles.formularioInput} 
      type='text'
      placeholder="Senha"
      onChange={handleInpuSenha}
      value={Senha}
      /> 
     <button className={Styles.buttonFormulario} type="submit">Entrar</button>
    </form>

     </div>
     
    </>
      
  )  
  
}

export default Login