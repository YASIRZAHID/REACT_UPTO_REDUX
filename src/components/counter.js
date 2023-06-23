import { useState } from "react";
import "./counter.css"

const Counter = () => {
    let [number,setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
        // setNumber(number=>number+1);
        setTimeout(() => {
          setNumber(number=>number+1); // updater function a good approach for making multiple updates on a single event updater style function queues
        },2000);
    }

  return (
    <div className="container">
    <h1 style={{color:"white"}}>{number}</h1>
    <button className="button" onClick={handleClick}>add</button>
    </div>
  )
}

export default Counter