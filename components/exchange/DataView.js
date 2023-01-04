import List from "./List"
import DefaultList from "./DefaultList" 
import styles from '../../styles/Exchange.module.css'

/**
 * List view of the reccomended exchanges, this componenet shows both the initial unsorted list
 * and the list after correct sorted data is recieved via props
 *
 * @param formSubmitted - Whether to show the sorted version or default
 * @param data - Sorted exchange data
 */

export default function DataView(props){

    const listData = props.listData
    
    return (
        <>
        <List listData={listData}></List>
        <p> 
        This is a disclaimer regarding this site.
        Hopefully this will rid us of all legal worries we may have.
        I am not a lawyer. If you sue us you suck
        </p>
        </>
    );

    /*
    //It may be useful to have this second list be a seperate component in the future, as it will likely be static meaning there is no need to dynamically render it
    else return (
        <>
         <DefaultList></DefaultList>
        </>

    )
    */

}