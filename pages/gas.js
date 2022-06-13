import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Head from 'next/head'
import Image from 'next/Image'
import TR from '../components/gas/TableRow'
import styles from '../styles/Gas.module.css'


/**
 * Page with the listed gas prices for all of the coins
 */
export default function Gas() {

  /**
   * Data to be used to populate the table
   * In the future this would probably be pulled from an API using getServerSideProps()
   * This might have to be made into a state
   */
  const coins = [ {
    logoLink : "/EthLogo.png",
    logoDesc : "Ethereum Logo",
    name : "Ethereum",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "EthUpdate",
    key : 1,
  },
  {
    logoLink: "/BnbLogo.png",
    logoDesc : "Binance Coin Logo",
    name : "Binance Coin",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "BnbUpdate",
    key: 2,

  },
  {
    logoLink: "/FtmLogo.png",
    logoDesc : "Phantom Logo",
    name : "Phantom",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "FtmUpdate",
    key: 3,

  },
  {
    logoLink: "/MaticLogo.png",
    logoDesc : "Matic Logo",
    name : "Matic",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "MaticUpdate",
    key: 4,

  },
  {
    logoLink: "/SolLogo.png",
    logoDesc : "Solano Logo",
    name : "Solano",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "SolUpdate",
    key: 2,

  },
  {
    logoLink: "/CarLogo.png",
    logoDesc : "Cardano Logo",
    name : "Cardano",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "CarUpdate",
    key: 3,

  },
  {
    logoLink: "/IcpLogo.png",
    logoDesc : "Internet Computer Logo",
    name : "Internet Computer",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "IcpUpdate",
    key: 4,

  },
  {
    logoLink: "/DotLogo.png",
    logoDesc : "Polkadot Logo",
    name : "Polkadot",
    fees :  { 
      lowFee : 'loading',
      medFee: 'loading',
      highFee: 'loading',
    },
    price : 'loading',
    hrFeeAvg: 'loading',
    socketEvent: "DotUpdate",
    key: 5,
  },
 ] 

  //Layout of the gasfee page
  return (
    <>
      <Head>
        <title>Gas Fee Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Gas Prices Today
        </h3>
        <p>
          The table shows the price per unit of gas for the respective coins. To calculate the price for a particular transaction consult the coins documentation
        </p>
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
            {coins.map((coin)=> {
              return (<TR key={coin.key} data={coin}></TR>);
            })}
 
          </tbody>
        </table>
        
        {/*
        <table>
          <tr>
            <th>Name</th>
            <th>Gas Fee</th>
            <th>1hr</th>
            <th>24hr</th>
            <th>7d</th>
          </tr>
       
        </table>
           */}
      </main>

    </>
  )
}
