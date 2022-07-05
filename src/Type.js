import { useEffect, useState } from "react";

const Type = (props) => {
    const [type, setType] = useState('All') ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        props.onType(e.target.value) ;
    }

    useEffect(() => { 
        console.log(type)
    } , [type] ) ;

    return ( 
        <div className="type">
            <form>
                <label>
                    Type
                </label>
                <select 
                    onChange = {
                        (e) => { 
                            setType(e.target.value)  ;
                            handleSubmit(e) ;
                        } 
                    }
                    value = {type}
                >
                    <option value="All">All</option>
                    <option value="Static">Static</option>
                    <option value="Animated">Animated</option>
                </select>
            </form>
        </div>
     );
}
 
export default Type;

