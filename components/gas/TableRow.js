import React from 'react'
import { useEffect, useState } from 'react';
import Image from "next/Image"
import socket from "../Socket"
import styles from "../../styles/Gas.module.css"

/** A singular row in the Gas Fee Table
 * @param props - props should contain a data property 
 *  {
 *  logoLink : string - http reference to the logo
 *  logoDesc : string - description of the logo (For SEO)
 *  name : string - the name of the coin
 *  currPrice : Number - the current price of the coin
 *  oneHourPrice : Number - the price of the coin one hour ago
 *  tfHourPrice: Number - the price of the coin twenty four hours ago
 * }
 */
export default function TableRow(props){
    let data = props.data

    //State that represents current gasFee for this coin
    const [price, setPrice] = useState(data.currPrice);

    //Updates the current gasFees on the proper socket events
    useEffect(()=> {
      socket.on(data.socketEvent, (args)=>{
        setPrice(args.GasFee);
      })
    })
        
    return (    
    <tr>
      <td className={styles.coinName}>
        <div className={styles.Logo}>
          <Image
          src={data.logoLink}
          alt={data.logoDesc}
          width={16}
          height={18}>
          </Image>
        </div>
        {data.name}
      </td>
      <td>{price}</td>
      <td>{data.oneHourPrice}</td>
      <td>{data.tfHourPrice}</td>
    </tr>
    );
}

    

