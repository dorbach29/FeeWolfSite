import styles from '../../styles/Exchange.module.css' 
import Image from "next/Image"


export default function List(props){

    const listData = props.listData;

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

                {/** Generates a list of crypto exchanges from the listData */}

                {listData.map(exchange => {
                    console.log("Bam")
                    return (
                    <li className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.logo}>
                                <Image
                                src={exchange.logoLink}
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
                })}
                
                <li></li>
                <li></li>
                <li></li>
            </ul>


        </>


    )
}