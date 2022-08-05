import styles from '../../styles/Exchange.module.css'

export default function List(props){


    return(
        <>
            <ul>
            <li className={styles.cardContainer} >
                    <div className={styles.card}>
                        <div className={styles.cardName}>Exchange</div>
                        <div className={styles.cardWithdrawl}>Withdrawl Fee</div>
                        <div className={styles.cardFee}>Purchase Fee</div>

                    </div>
                </li>
                <li className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardName}>Binance</div>
                        <div className={styles.cardWithdrawl}>$5</div>
                        <div className={styles.cardFee}>$12.67</div>
                    </div>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


        </>


    )

}