import React, { useEffect, useState } from 'react'

export default function Home() {
  const [number, setNumber ] = useState(100)

  const changeNum = ()=>{
    console.log("Number changed")
  }

  //useEffect(()=>{},[dependency array])

  useEffect(()=>{
    console.log('now number changed')
  },[number])

  return (
    <div>
      This is Number:  {number}
      <button onClick={()=>setNumber(number+1)}>+</button>
    </div>
  )
}
