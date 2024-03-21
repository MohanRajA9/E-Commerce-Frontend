import React from 'react'
import {useRef} from 'react'


function Ref() {
    const inputRef = useRef()
    const count = useRef(0)
    const handlesubmit = () => {
        console.log(inputRef)
    }
    const handleInputChange = () => {
        console.log(inputRef.current.value)
    }
    const handleClick = () => {
        count.current += 1    
        console.log("count",count.current)
    }
    return (
        <div>
            <h1>Ref Example</h1>
            <input type='text' ref={inputRef} onChange={handleInputChange} />
            <button onClick={handlesubmit} >Get value</button>
            <div>
                <p>count : {count.current} </p>
                <button onClick={handleClick} >increment</button>
            </div>
        </div>
        
    )
}

export default Ref