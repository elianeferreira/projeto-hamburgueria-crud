import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import Footer from '../components/Footer'
import styles from '../styles/pages/CadastroNovoMembro.module.css'
import Input from '../components/Input'

const CadastroNovoMembro = () => {

    function cliqueBotaoCadastrar(e){
        e.preventDefault(alert('Usuário Cadastrado com Sucesso!'))
    }
  return (
    <>
        <Header />
        <div className={styles.main}>
            <LateralBar />
            <div className={styles.formContainer}>
                <h2 className={styles.tituloPagina}>Cadastrar Novo Membro de Equipe</h2>
                <form className={styles.form}>
                    <Input placeholder='Foto' />
                    <Input type='text' placeholder='Nome'/>
                    <Input type='text' placeholder='Função' />
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Senha' />
                    <Input type='text' placeholder='Github'  />
                    <Input type='text' placeholder='Sobre' />
                    <button className={styles.buttonCadastrar} 
                    type='submit'
                    onClick={cliqueBotaoCadastrar}>Cadastrar</button>
                </form>
            </div>
        </div>
        <Footer />
    </>
   
  )
}

export default CadastroNovoMembro