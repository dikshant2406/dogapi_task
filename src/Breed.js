import { useState , useEffect} from "react"
import {apiKey} from "./api_key" 

const Breed = (props) => {
    const [breed , setBreed] = useState('pug') ;
    const [breedName , setBreedName] = useState([]) ; 
    let breedlist = [] ;
    let breedlistname = [] ;

    useEffect(  () => {
        const headers = {
            "x-api-key" : apiKey
        }
        fetch("https://api.thedogapi.com/v1/breeds" , {headers})
            .then(res => {
                return res.json() ;
            })
            .then(data => {
                console.log(breedlist) ;
                breedlist = data ;
                breedlist.map(res => (
                    breedlistname.push(res.name) 
                ))
                setBreedName(breedlistname) ;
                console.log(breedlistname) ;
            })
    }) ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        props.onBreed(e.target.value) ;

    }

    return ( 
        <div className="breed">
            <form>
                <label>
                    Breed
                </label>
                <select onChange = {
                        (e) => { 
                            setBreed(e.target.value)  ;
                            handleSubmit(e) ;
                        } 
                    }
                    value = {breed} >
                    { breedName.map((res) => (
                        <option value={res}>{res}</option>
                    ))}

                </select>
            </form>
        </div>
     );
}
 
export default Breed ;
