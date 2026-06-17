import React from 'react'
import HeroText from './HeroText'
import ArrowText from './ArrowText'

const Leftcontent = () => {
    return (
        <div className='h-full w-1/3 bg-white-200 flex flex-col justify-between '>
            <HeroText />
            <ArrowText />
          
        </div>
    )
}

export default Leftcontent
