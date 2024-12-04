import React from "react";
import './Counter.css'
import { useState } from "react";
import Button from "../Button/Button";

const Counter = () => {
    const [count, setCount] = useState(0);
    function incrementCount(){
       setCount (count+1);
    }
        function decrementCount(){
           setCount (count-1);
        }
    return(
        <div className='counter-container'>
           <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : ""}
                style={count > 0 ? {color: "green"} : count == 0 ?  {color: "black"} : {color: "red"}}
           >{count}</h1>
           
            <div className="button_wrapper">
                {/* <button onClick={decrementCount}>-</button>
                <button onClick={incrementCount}>+</button> */}
                <Button func = {incrementCount}/>
                <Button func = {incrementCount}/>
            </div>
            
        </div>
    )
}

export default Counter;