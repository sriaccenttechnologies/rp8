import { useState } from "react"

const Home2 = () => {
   const [count,setCount]=useState(0)

   function Inc(){
    setCount(count+1) //0+1=1
    setCount(count+1) //0+1
    setCount(count+1) //0+1
    setCount(count+1) //0+1
    setCount(count+1) //0+1
   }

   function Dec(){
    setCount(count-1)
    setCount(count-1)
    setCount(count-1)
    setCount(count-1)
    setCount(count-1)
   }

    return (
    <div>
        <h1>{count}</h1>
    <button type="button" onClick={Inc}>Inc</button>
    <button type="button" onClick={Dec}>Dec</button>
    </div>

  )
}

export default Home2




