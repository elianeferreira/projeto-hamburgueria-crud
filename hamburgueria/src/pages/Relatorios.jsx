import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CardRelatorios from '../components/CardRelatorios.jsx';

const Relatorios = () => {
	return (
	<>
		<Header />
		<div className = {styles.relatoriosMain}>
      <LateralBarSemBotoes />
      <main>
        <CardRelatorios /> 
        <CardRelatorios />
      </main>
	  </div>
		<Footer />
  </>
)
}

export default Relatorios;
