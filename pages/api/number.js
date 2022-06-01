//FOR TESTING ONLY
let Number = 4;
/**
 * This function succesfully handles post and get requests. 
 * While the server is running it will update the above global variable and 
 * return it as nessecary
 * @param {} req 
 *  Either GET or POST with follwing params:  {number : int}
 * @param {*} res 
 */
export default function handler(req, res) {
    if(req.method == "POST"){
        let requestURL = new URL(req.url, 'http://localhost:300');
        let newNumber = requestURL.searchParams.get("number");
        Number = newNumber;
        res.status(200);
        res.end();
    }else {
        res.status(200).json({ number: Number })
    }
}
        