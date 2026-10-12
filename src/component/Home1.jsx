import { useState } from "react"

const Home1 = () => {
  
    const [regno,setRegno]=useState(1001);
    const [name,setName]=useState("Arun");
    const [age,setAge]=useState(17);
    return (
    <div>
        <h1>Regno={regno}</h1>
        <h1>Name={name}</h1>
        <h1>Age={age}</h1>
        <button type="button" onClick={()=>setRegno(1002)}>Change Regno</button>
        <button type="button" onClick={()=>setName("Bala")}>Change Name</button>
        <button type="button" onClick={()=>setAge(20)}>Change Age</button>
    </div>
  )
}

export default Home1