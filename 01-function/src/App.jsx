import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)
  function btnincre() {
    console.log("increase");
    setNum(Num + 1)

  }
  function btndicre() {
    console.log("dicrease");
    setNum(Num - 1)
  }
  function jumpBy5() {
    console.log("jupby 5");
    setNum(Num + 5)
  }

  return (
    <div>
      <h1 className='screen'>{Num}</h1>
      <button className='btn' onClick={btnincre}>increase</button>
      <button className='btn' onClick={btndicre}>dicrease</button>
      <button className='btn' onClick={jumpBy5}>increase by 5</button>
    </div>
  )
}

export default App
