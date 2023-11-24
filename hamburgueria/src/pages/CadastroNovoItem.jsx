import Header from "../components/Header"

const CadastroNovoItem = () => {
    
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
                    <Input placeholder='Foto sanduiche' />
                    <Input type='text' placeholder='Nome sanduiche'/>
                    <Input type='text' placeholder='Ingredientes' />
                    <Input type='text' placeholder='Preço' />
                    <button className={styles.buttonCadastrar} 
                    type='submit'
                    onClick={cliqueBotaoCadastrar}>Cadastrar</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default CadastroNovoItem