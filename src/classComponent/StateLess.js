import React, { useState } from 'react'

function StateLess() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
  return (
    <div>StateLess - Function Component
        <p>count : {count}</p>
        <button onClick={incrementCount} >increment count</button>
    </div>
  )
}

export default StateLess