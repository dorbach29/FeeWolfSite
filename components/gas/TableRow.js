import React from 'react'
import { useEffect, useState } from 'react';
import Image from "next/Image"
import socket from "../Socket"
import styles from "../../styles/Gas.module.css"

/** A singular row in the Gas Fee Table
 * @param  {  
 *  logoLink : string - http reference to the logo
 *  logoDesc : string - description of the logo (For SEO)
 *  name : string - the name of the coin
 *  fees : obj - containes lowFee medFee and highFee
  *   fees.lowFee : Number - the current low priority price of the coin
  *   fees.medFee : Number - the current med priority of the coin
  *   fees.highFee Number - the current high priority of the coin
 *  price: Number - the current price of the coin
 *  hrFee: Number - the price one hour ago of the med prior fee
 *  socketEvent: String - the name of the socket.io event to listen to
 * } props
 * 
 */
export default function TableRow(props){
    let data = props.data;
    let feeProps = data.fees;


    //State that represents current gasFee for this coin
    const [fees, setFees] = useState(feeProps);
    const [getHrFeeAvg, setHrFeeAvg] = useState(data.hrFeeAvg);

    //Updates the current fees object on the proper socket events
    useEffect(()=> {
      socket.on(data.socketEvent, (args)=>{
        if(args.fees.medFee != -1) setFees(args.fees);
        if(args.hrFeeAvg != -1 && args.hrFeeAvg != getHrFeeAvg) setHrFeeAvg(args.hrFeeAvg);
      })
    })
        
    return (    
    <tr className={styles.dataRow}>
      <td className={styles.coinName}>
        <div className={styles.coinNameContainer}>
          <div className={styles.Logo}>
            <Image
            src={data.logoLink}
            alt={data.logoDesc}
            width={20}
            height={23}>
            </Image>
          </div>
          <p>{data.name}</p>
        </div>
      </td>
      <td>{fees.lowFee}</td> 
      <td>{fees.medFee}</td>
      <td>{fees.highFee}</td>
      <td>{getHrFeeAvg}</td>
      <td>{data.price}</td>
    </tr>
    );
}

    

