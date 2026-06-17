import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 rounded-4xl gap-5 flex flex-nowrap overflow-x-auto'>
      {props.users.map(function (elem,idx) {

        return <RightCard key = {idx} idx={idx} img = {elem.img} tag = {elem.tag}/>

      })}
    </div>
  )
}

export default Rightcontent
