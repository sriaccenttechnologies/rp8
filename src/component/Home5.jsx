import { useState } from "react"

const Home5 = () => {

    const [regno,setRegno]=useState(1001);
    const [name,setName]=useState("Arun");
    const [age,setAge]=useState("20");

    function update()
    {
        setRegno(1002)
        setName("Bala")
        setAge(40)
    }
  return (
    <>
    <h1>{regno}</h1>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <button type="button" onClick={update}>Click</button>
    </>
  )
}

export default Home5