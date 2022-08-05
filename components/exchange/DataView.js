import List from "./List"
import styles from '../../styles/Exchange.module.css'

/**
 * List view of the reccomended exchanges, this componenet shows both the initial unsorted list
 * and the list after correct sorted data is recieved via props
 *
 * @param formSubmitted - Whether to show the sorted version or default
 * @param data - Sorted exchange data
 */

export default function DataView(props){

    const formSubmitted = props.formSubmitted
    //const listData = props.listData

    const listData = [{}, {}, {}]
     
    if(formSubmitted) return (
        <>
        <List listData={listData}></List>
        <p> 
        This is a disclaimer regarding this site.
        Hopefully this will rid us of all legal worries we may have.
        I am not a lawyer. If you sue us you are a b****
        </p>
        </>
    );
    else return (
        <>
         <List></List>
        </>

    )

}