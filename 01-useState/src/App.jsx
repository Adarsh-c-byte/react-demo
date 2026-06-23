
import React from 'react'
import { useState } from 'react'



const App = () => {

const [num, setNum] = useState({user:'Mahesh babu',age:'54'})

const btnClicked = ()=>{
  const newNum = {...num};
  newNum.user = 'Aman'
  newNum.age = '23'
  setNum(newNum)
}

  return (
    <div className='base'>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>
        click me
      </button>
    </div>
  )
}

export default App
