import React, { useState } from 'react'

export default function HooksFunctionalcom() {

const [count,setcount] = useState(0)
const handleIncrement = () => {
    setcount((count) => count + 1) ; //0+1=1 
    setcount((count) => count + 1) ; //1+1=2
    setcount((count) => count + 1) ; //2+1=3
}
  return (
    <div>
        <h1>Count {count}</h1>
      <button onClick={handleIncrement}> Increment </button>
    </div>
  )
}