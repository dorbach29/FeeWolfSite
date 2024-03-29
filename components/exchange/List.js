import styles from '../../styles/Exchange.module.css' 
import Image from "next/image"
import ListElement from './ListElement'


export default function List(props){

    const listData = props.listData;

    return(
        <>
            <ul>
            {/** List Heading
             * TODO: Change so that is uses the proper list heading
             */}
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
                    return (
                        <ListElement key={exchange.exchangeId} exchange={exchange}></ListElement>
                    )
                })}
                
                <li></li>
                <li></li>
                <li></li>
            </ul>


        </>


    )
}