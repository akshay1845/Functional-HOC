import React, { useState } from 'react'
import Counter from './Counter'


const HoverCounter = (props) => {

    const {count, increment} = props

    // const [count, setCount] = useState(0)

    // const increment = ()=>{
    //     setCount(count + 1) 
    // }
  return (
    <div>
        <h1 onMouseOver={increment}>hovered {count} times</h1>
    </div>
  )
}

export default Counter(HoverCounter)