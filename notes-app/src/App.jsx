
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
// import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submited");

    const copyTask = [...task]
    copyTask.push({ title, detail })

    setTask(copyTask)
    console.log(copyTask);


    setTitle('')
    setDetail('')
  }

const deletNote = (idx)=>{
const copyTask = [...task]
copyTask.splice(idx,1)
setTask(copyTask)
}

  return (
    <div className='bg-black lg:flex text-white h-screen overflow-auto '>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex lg:w-1/2 p-10 items-start flex-col gap-5'>

        <h2 className='text-3xl font-bold'>Add Notes</h2>

        <input
          type="text"
          placeholder='Enter Task Heading'
          className='px-5 py-2 w-full border-2 outline-none rounded font-medium'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          className='px-5 py-2 w-full h-30 border-2 outline-0 rounded flex items-start flex-row font-medium'
          placeholder='Write Details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />
        <button className='bg-white active:scale-98 text-black px-5 py-2 w-full rounded font-medium'>Add Notes</button>

      </form>

      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h2 className='text-3xl font-bold'>Your Notes</h2>
        <div className='flex flex-wrap mt-5 gap-5 overflow-auto h-full'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='h-52 w-43 p-3 text-black rounded-xl overflow-auto  bg-[url("https://www.nicepng.com/png/full/93-938738_note-paper-png-download-handwriting.png")] bg-cover relative' >
              <h2 onClick={()=>{
                deletNote(idx)
              }} className='absolute top-5 right-4 text-white rounded-full font-bold cursor-pointer active:scale-96 bg-red-500  px-2 '>X</h2>
              <h3 className='leading-tight text-xl font-bold mb-3'>{elem.title}</h3>
              <p className='leading-tight font-medium text-gray-600'>{elem.detail}</p>
            </div>

          })}
        </div>
      </div>
    </div>
  )
}

export default App
