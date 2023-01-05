import GasPage from "../components/gas/gas"
import WorkInProgress from "../components/gas/work"

/**
 * Page with the listed gas prices for all of the coins
 */
export default function Gas(props) {
  //Layout of the gasfee page


  return (

    <WorkInProgress> </WorkInProgress>
    
  )
}


/**
 * 
 * @param {*} context 
 * Get's coins metadata such as images for the Gas Fee Table
 * 
 */
export async function getServerSideProps(context){
  try {
    let data = await fetch("http://localhost:5000/gas/allData");
    data = await data.json()
    return {
      props : {"Error" : false, "coins" : data}
    }

  } catch (error){
    return {
      props : {
        "Error" : true,
        "Error" : error.toString(),

      }
    }
  }

}
