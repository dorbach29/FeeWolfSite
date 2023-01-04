import styles from '../../styles/Exchange.module.css' 
import Image from "next/Image"


export default function ListElement(props){

    const exchange = props.exchange;

    return (
        <li className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <Image
                    src={exchange.logoLink}
                    alt={exchange.logoAlt}
                    width={20}
                    height={23}>
                    </Image>
                </div>        
                <div className={styles.cardName}>{exchange.exchange}</div>
                <div className={styles.cardWithdrawl}>{exchange.recivedCrypto}</div>
                <div className={styles.cardFee}>{exchange.recivedUSD}</div>
            </div>
        </li>
    )
}