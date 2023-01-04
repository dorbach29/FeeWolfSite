import styles from '../../styles/Exchange.module.css' 
import Image from "next/image"


//! NOT CURRENTLY BEING USED
export default function List(props){
    return(
        <>
            <ul>
            {/** List Heading */}
            <li className={styles.cardContainer} >
                    <div className={styles.cardTitle}>
                        <div className={styles.logo}></div>
                        <div className={styles.cardName}>Exchange</div>
                        <div className={styles.cardWithdrawl}>Crypto Recieved</div>
                        <div className={styles.cardFee}>USD Equivalent</div>
                    </div>
            </li>

                <li className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardName}>Binance</div>
                        <div className={styles.cardWithdrawl}>$5</div>
                        <div className={styles.cardFee}>4.5</div>
                    </div>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


        </>


    )
}