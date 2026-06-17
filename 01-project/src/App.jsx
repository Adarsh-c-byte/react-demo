import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {

const users = [
  {
    img : 'https://plus.unsplash.com/premium_photo-1661632609561-2031f91408f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt numquam culpa libero repellendus ducimus nostrum deleniti tempore. Minima obcaec',
    tag : 'Satisfied'
  },
  {
    img : 'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt numquam culpa libero repellendus ducimus nostrum deleniti tempore. Minima obcaec',
    tag : 'Satisfied'
  },
  {
    img : 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt numquam culpa libero repellendus ducimus nostrum deleniti tempore. Minima obcaec',
    tag : 'Underserved'
  },
  {
    img : 'https://plus.unsplash.com/premium_photo-1661589932346-20fb0a8c13e4?q=80&w=667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt numquam culpa libero repellendus ducimus nostrum deleniti tempore. Minima obcaec',
    tag : 'Underserved'
  }
]

  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}

export default App
