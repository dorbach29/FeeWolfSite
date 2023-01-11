import DataView from "./DataView"

import { useState } from 'react'
import styles from '../../styles/Exchange.module.css'



export default function Content(props){
    let {defaultListData} = props;
    //Props that are passed down to the List
    const [listData, setListData] = useState(defaultListData)
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
         *
         */
        try{
            //Include the specific amount in the query. 
            let data = await fetch(`http://localhost:5000/exchange/cheapest?amount=${inputVolume}`);
            data = await data.json();
            setListData(data);
        }
        catch(error){
          return{
              "Error": true,
          }
        }
        //Replace with actual list data
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