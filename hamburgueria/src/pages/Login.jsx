import React from 'react'
import Home from '../assets/Logo.png'
//import HeaderLogin from'../components/HeaderLogin'
//import Header from '../components/Header'
import Logo from '../assets/Logo.png'
import Footer from '../components/Footer'
import styles from '../Styles/components/Login.module.css'
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
       <div className={styles.Menu}>
      
       </div>
     
     <div className={styles.Container}>
          <h1 className={styles.h1}>AQUI</h1>
     </div>
    
     <div className={styles.containerFormulario}>
     <header className={styles.headerFormulario} >
      <img className={styles.imageLogo} src={Logo} alt="logo Hamburgueria" title="logo Hamburgueria"/>
    </header>
     <form className={styles.formulario}onSubmit={()=>{}}>
      <h2 >Faça seu Login</h2>
      <input className={styles.formularioInput} 
      type='text'
      placeholder="Email"
      onChange={handleInputEmail}
      value={Email}  
      />

      <input className={styles.formularioInput} 
      type='text'
      placeholder="Senha"
      onChange={handleInpuSenha}
      value={Senha}
      /> 
     <button className={styles.buttonFormulario} type="submit">Entrar</button>
    </form>

     </div>
     
    </>
      
  )  
  
}

export default Login