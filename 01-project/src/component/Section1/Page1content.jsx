import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6 flex justify-between bg-white-950 gap-10 h-[90vh] px-19'>
      <Leftcontent />
      <Rightcontent users = {props.users} />
    </div>
  )
}

export default Page1content
