import DataView from "./DataView"

import { useState } from 'react'
import styles from '../../styles/Exchange.module.css'



export default function Content(){
    
    //Props that are passed down to the List
    const [listData, setListData] = useState([
      {
        exchangeId: 1,
        exchange : "Coinbase",
        recivedUSD: 997,
        recivedCrypto: 0.01,
        logoLink: "/Exchanges/CoinbaseLogo.png",
        logoAlt: "Coinbase Logo",
      }, 
      {
        exchangeId: 2,
        exchange : "Kucoin",
        recivedUSD: 997,
        recivedCrypto: 0.01,
        logoLink: "/Exchanges/KucoinLogo.png",
        logoAlt: "Kucoin Logo",

      },

      {
        exchangeId: 3,
        exchange : "Binance",
        recivedUSD: 997,
        recivedCrypto: 0.01,
        logoLink: "/Exchanges/BinanceLogo.png",
        logoAlt: "Binance Logo",
      }, 
    ])
    //Form Data
    const [inputVolume, setInputVolume] = useState(100); //

    
    async function handleSubmit(event){
        /**
         * This function handles the submit event for the form
         * In the future this function will make a call to the server with data
         * on completion of GET Request the function will update the List Component
         * with the correct Data
         */

        

        event.preventDefault();

        /**
         * TODO: using fetch, call the api with the correct amount
         * TODO: parse the data
         * TODO: setListData
         */

        //Replace with actual list data
        setListData([{

          exchange : "Binance",
          recivedUSD: 997,
          recivedCrypto: 0.01,
          logoLink: "/Exchanges/BinanceLogo.png",
      }, 
      {
          exchange : "Coinbase",
          recivedUSD: 997,
          recivedCrypto: 0.01,
          logoLink: "/Exchanges/CoinbaseLogo.png"
      }, 
      {
          exchange : "Kucoin",
          recivedUSD: 997,
          recivedCrypto: 0.01,
          logoLink: "/Exchanges/KucoinLogo.png"
      }
  ])
    }

    function onChange(event){
      let num = event.target.value.replace(/[^\d.-]/g , '');//Removes letters from input
      setInputVolume(num)
    }
    


    return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Enter the amount of USD you want to spend</p>
        <input type="text" value={"$" + inputVolume} onChange={onChange}></input>
        <div className={styles.submit}>
          <input type="submit" value="Find Exchanges"></input>
        </div>
      </form>
      <DataView listData={listData}></DataView>
    </div>
    
    )
}