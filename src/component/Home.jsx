import { useState } from "react"

const Home = () => {
 
   const [count,setCount]=useState("computer")
    return (
        <>
    <div>{count}</div>
    <button type="button" onClick={ ()=>{setCount(20)}}>button-1</button>
    <button type="button" onClick={ ()=>{setCount(30)}}>button-2</button>
    <button type="button" onClick={ ()=>{setCount(40)}}>button-3</button>
    <button type="button" onClick={ ()=>{setCount(50)}}>button-4</button>
    </>
  )
}

export default Home



