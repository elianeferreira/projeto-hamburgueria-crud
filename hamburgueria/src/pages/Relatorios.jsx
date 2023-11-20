import Header from '../components/Header.jsx';
import LateralBar from '../components/LateralBar.jsx';
import styles from '../styles/pages/Relatorios.module.css';
import * as Icon from '@phosphor-icons/react'
import CardRelatorios from '../components/CardRelatorios.jsx';

const Relatorios = () => {
	return (
	<>
		<Header />
		<div className = {styles.relatoriosMain}>
      <LateralBar />
     
      <div className={styles.main}>
        <h1 className={styles.mainTitle}>RELATORIOS</h1>
        <div className={styles.cardsRelatorios}>
          <div className={styles.relatorio}>
              <Icon.CurrencyDollar className={styles.icon} size={100} />
              <CardRelatorios title='Relatórios Financeiros' description='Resumos financeiros diários, semanais, mensais ou por períodos personalizados'/>
          </div>
          
          <div className={styles.relatorio}>
              <Icon.HandCoins className={styles.icon} size={100}/>
              <CardRelatorios title='Relatórios de Vendas' description='Relatórios detalhados de vendas que mostram os produtos e valores, podendo ser diários, semanais, mensais ou personalizados.'/>
          </div>
        </div>
      </div>
    </div>
		
  </>
)
}

export default Relatorios;
