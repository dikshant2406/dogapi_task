import { apiKey } from "./api_key";
import { useEffect } from "react";

const Display = () => {
    let imagesUrl = [] ;
    useEffect(  () => {
        const headers = {
            "x-api-key" : apiKey
        }
        fetch( `https://api.thedogapi.com/v1/images/0LJiOVlxp` , {headers})
            .then(res => {
                return res.json() ;
            })
            .then((data) => {
                console.log(data) ;
                for(let i = 0; i < 9 ; i++){
                    imagesUrl.push(data[i].url) ;
                }
            })
    } , []) ;

    return ( 
        <div className="displayImage">
            { imagesUrl.map((res) => (
                <img src={res} alt="Italian Trulli"></img>
            ))} 
        </div>
     );
}
 
export default Display;