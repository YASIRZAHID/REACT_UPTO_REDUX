import { useRef, useState } from "react";
import "./counter.css"

const Counter = () => {
    let [number,setNumber] = useState(0);
    let num = useRef(0);
    function handleClick(e){
        e.stopPropagation();
        // setNumber(number=>number+1);
        setTimeout(() => {
          num.current++;
          setNumber(number=>number+2); // updater function a good approach for making multiple updates on a single event updater style function queues
        },2000);
    }

  return (
    <div className="container">
    <h1 style={{color:"white"}}>{number}{num.current}</h1>
    <button className="button" onClick={handleClick}>add</button>
    </div>
  )
}

export default Counter