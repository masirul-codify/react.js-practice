import React, { useState } from 'react'

export default function HooksFunctionalcom() {

const [count,setcount] = useState(0)
const handleIncrement = () => {
    setcount(count + 1) ;  
}
  return (
    <div>
        <h1>Count {count}</h1>
      <button onClick={handleIncrement}> Increment </button>
    </div>
  )
}