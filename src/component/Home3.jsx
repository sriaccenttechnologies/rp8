import { useState } from "react"

const Home3 = () => {
  const [count,setCount]=useState(0)

  function Inc(){
    setCount( (prev_value)=>prev_value+1 )
    setCount( (prev_value)=>prev_value+1 )
    setCount( (prev_value)=>prev_value+1 )
    setCount( (prev_value)=>prev_value+1 )
    setCount( (prev_value)=>prev_value+1 )

    
  }
    return (
    <div>
        <h1>{count}</h1>
        <button type="button" onClick={Inc}>Click</button>
    </div>
  )
}

export default Home3



