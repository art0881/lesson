import React, { useState } from 'react';


const Page2 = () => {

    const [count, setCount] = useState(0);
    const setClick = () => {
        setCount(count+1);
    }
  return (
    <div><button onClick={setClick}>Нажали {count}</button></div>
  )
}

export default Page2