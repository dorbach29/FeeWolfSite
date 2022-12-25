import styles from '../../styles/Exchange.module.css' 
import Image from "next/Image"

export default function List(props){
    return(
        <>
            <ul>
            <li className={styles.cardContainer} >
                    <div className={styles.card}>
                        <div className={styles.cardName}>Exchange</div>
                        <div className={styles.cardWithdrawl}>Withdrawl Fee Range Under $100</div>
                        <div className={styles.cardFee}>Reviews</div>

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