import { useState } from "react"

export const Counter= () =>{
    const [count, setCount] = useState(0)
    
    const handleAdd = () => {
      const newCount = count+1;
      setCount(newCount)  
    }

    const handleReduce = () => {
        const newCount = count - 1 ;
        setCount(newCount);
    }
    console.log()
    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter : {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}