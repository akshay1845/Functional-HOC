import React, { useState } from 'react'
import Counter from './Counter'

const ClickCounter = (props) => {

    const {count, increment} = props

    // const [count, setCount] = useState(0)

    // const increment = ()=>{
    //     setCount(count + 1) 
    // }
  return (
    <div>
        <button onClick={increment}> Clicked {count} times</button>
    </div>
  )
}

export default Counter(ClickCounter)