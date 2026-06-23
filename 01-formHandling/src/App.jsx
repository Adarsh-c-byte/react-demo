import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
console.log("form submit");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter you name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
