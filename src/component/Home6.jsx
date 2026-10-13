import { useState } from "react"

const Home6 = () => {
    const [department,setDepartment]=useState(  [ "cse","ece","eee" ]  )

    function add_element()
    {
        setDepartment(  (pre_value)=>{ return  [ ...pre_value ,"AIDS"] } )
    }
    return (
    <div>
        <h1>{department}</h1>
        <button type="button" onClick={add_element}>click</button>
    </div>
  )
}

export default Home6