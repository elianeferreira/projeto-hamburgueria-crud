import Input from '../components/Input.jsx';
import Button from '../components/button.jsx';
import styles from '../styles/pages/CadastrarNovoMembro.module.css';

const CadastrarNovoMembro = () => {
return(
<>
	<Header />
	<div className = {styles.main}>
		<LateralBarDois /> (CRIAR ESSE COMPONENTE - é a lateralBar acrescida de um botão com a seta  para a esquerda)
		<form>
			<Input placeholder='Anexar Foto' /> 
            <Input placeholder="Nome" />
			<Input placeholder='Função' />
			<Input placeholder='Github' />
			<Input placeholder='Sobre' />
            <Input placeholder='Email' />
            <Input placeholder='Senha' />
            <Button title= 'Cadastrar' /> 
        </form>
	</div>
	<Footer />
</>
)
}

export default CadastrarNovoMembro;
