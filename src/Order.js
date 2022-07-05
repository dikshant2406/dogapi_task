import { useEffect, useState } from "react";

const Order = (props) => {
    const [order, setOrder] = useState('Random') ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        props.onOrder(e.target.value) ;
    }

    useEffect(() => { 
        console.log(order)
    } , [order] ) ;

    return ( 
        <div className="order">
            <form>
                <label>
                    Order
                </label>
                <select 
                    onChange = {
                        (e) => { 
                            setOrder(e.target.value)  ;
                            handleSubmit(e) ;
                        } 
                    }
                    value = {order}
                >
                    <option value="RANDOM">Random</option>
                    <option value="ASC">Asc</option>
                    <option value="DESC">Desc</option>
                </select>
            </form>
        </div>
     );
}
 
export default Order;

