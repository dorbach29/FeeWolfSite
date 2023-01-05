import TR from './TableRow'
import Head from 'next/head'
import styles from '../../styles/Gas.module.css'




export default function GasTable(props){

    /**
   * Data to be used to populate the table
   * In the future this would probably be pulled from an API using getServerSideProps()
   * This might have to be made into a state
   */

   let coins = props.coins
    
    return (
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>
              <th>Name</th>
              <th>Low Prior(gwei)</th>
              <th>Med Prior(gwei)</th>
              <th>High Prior(gwei)</th>
              <th>1h Fee(%)</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/**Loads different rows of coins */}
            {coins?.map((coin)=> {
              return (<TR key={coin.coinMetaInfo.key} coinGasInfo={coin.coinGasInfo} coinMetaInfo={coin.coinMetaInfo}></TR>);
            })}
 
          </tbody>
        </table>
    )
    
}