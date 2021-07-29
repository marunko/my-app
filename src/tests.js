import {useState, useEffect} from "react";

function Button(props){

   // const [counter, setCounter] = useState(0);
    const [num, setNum] = useState(1000);
 
    useEffect(()=>{
        if(num > 0){
            setTimeout(()=>{ setNum(num-1)}, 1000);
            
        }
        else  window.location.reload(); 
    });
    return (
    <div>
    
    <p id="refresh">Remains till refresh {num}</p></div>
    );
}
 



export default Button;