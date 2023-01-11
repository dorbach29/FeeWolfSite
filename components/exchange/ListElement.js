import styles from '../../styles/Exchange.module.css' 
import Image from "next/image"


export default function ListElement(props){

    const exchange = props.exchange;
    /**
     * TODO: Change ListElement to use the correct metaData properties
     * Whever you see exchange.something 
     */
    return (
        <li className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <Image
                    src={exchange.metadata.logoLink}
                    alt={exchange.metadata.logoDesc}
                    width={20}
                    height={23}>
                    </Image>
                </div>        
                <div className={styles.cardName}>{exchange.metadata.name}</div>
                <div className={styles.cardFee}>{exchange.amount}</div>
            </div>
        </li>
    )
}