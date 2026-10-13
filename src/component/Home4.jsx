import { useState } from "react"

const Home4 = () => {
    const [studentInfo,setStudentInfo]=useState( { regno:1001,name:"Arun",age:47   } )

    function updateStudentInfo()
    {
        setStudentInfo( (prev_value)=>{ return {...prev_value,regno:1002,name:"bala",age:20}    } )
                                              // { regno:1001,name:"Arun",age:47 ,regno:1002,name:"bala",age:20  
    }
  

    return (
    <>
    <h1>{studentInfo.regno}</h1>
    <h1>{studentInfo.name}</h1>
    <h1>{studentInfo.age}</h1>
    <button type="button" onClick={updateStudentInfo}>click</button>
    </>
  )
}

export default Home4