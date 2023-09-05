import React, { useState } from 'react';

const Page = (props) => {
    const [click, setClick]= useState(0);
    const [click2, setClick2]= useState(0);
   
  return (
    <div>Page<br/>
              <button onClick={()=> {setClick((actual)=> actual +1)}}>Рашид {click}</button>
              <button onClick={()=> {setClick2((actual)=>actual+1)}}>Мага {click2}</button>
              <button onClick={()=>{setClick((actual)=> actual -1);setClick2((actual)=>actual-1)}}>Уменьшить </button>

    </div>
  )
}

export default Page