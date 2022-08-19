import React, { useState } from "react";

function Yoda(){
    const [rangle,setrangle]=useState(0);
    

  const rotate =()=>{
      setrangle(rangle+12);

  }
return(
    
        <>
        <button onClick={rotate}>Test your Force!</button>
        <img src={require('./yodaimg.png')} style={{width:"150px", transform:`rotate(${rangle}deg)`}} className="yodaimg" alt="Yoda img to rotate"/>      
        </>
    
)
}
export default Yoda;