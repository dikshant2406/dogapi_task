import { useEffect, useState } from "react";

const Category = (props) => {
    const [category, setCategory] = useState('None') ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        props.onCategory(e.target.value) ;
    }

    useEffect(() => { 
        console.log(category)
    } , [category] ) ;

    return ( 
        <div className="category">
            <form>
                <label>
                    Category
                </label>
                <select 
                    onChange = {
                        (e) => { 
                            setCategory(e.target.value)  ;
                            handleSubmit(e) ;
                        } 
                    }
                    value = {category}
                >
                    <option value="None">None</option>
                   
                </select>
            </form>
        </div>
     );
}
 
export default Category;

