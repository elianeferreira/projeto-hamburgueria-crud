import * as Icon from '@phosphor-icons/react';
import styles from '../Styles/components/Footer.module.css';

const Footer = () => {
	return(
        <div className={styles.Footer}>
            <h3> Criado e idealizado por FoodGirls</h3>
            <div className = {styles.socialMedia}>
                <Icon.FacebookLogo size={32} style={{color: '#ffffff'}} alt='facebook-logo' />
                <Icon.InstagramLogo size={32} style={{color:'#ffffff'}} alt='intagram-logo' />
                <Icon.TwitterLogo size={32}  style={{color:'#ffffff'}} alt='twitter-logo' />
                <Icon.LinkedinLogo size={32} style={{color:'#ffffff'}} alt='linkedin-logo' />
            </div>
        </div>
)
    }

export default Footer;
