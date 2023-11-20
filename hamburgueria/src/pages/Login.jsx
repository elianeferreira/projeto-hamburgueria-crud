import React from 'react'
import Home from '../assets/Logo.png'
import HeaderLogin from'../components/HeaderLogin'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Styles from '../Styles/components/Login.module.css'



const Login = () => {
  return (
    <>
       <div className={Styles.LoginContainer}>
      <h1>logo</h1>
       </div>

      <Header
      image={logo}
      />
     <form onSubmit={()=>{}}>
      <input 
      type='text'
      placeholder="Email"
      onChange={()=>{}}
      value=""  
      />

      <input 
      type='text'
      placeholder="Senha"
      onChange={()=>{}}
      value=""
      /> 
     <button type="submit">Entrar</button>
    </form>
    </>
      
  )  
  
}

export default Login