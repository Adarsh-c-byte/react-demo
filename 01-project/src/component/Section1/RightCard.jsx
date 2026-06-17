import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full w-80 shrink-0 overflow-hidden relative bg-red-500 rounded-4xl '>
            <img className='object-cover h-full w-full ' src={props.img} alt="" />
            <RightCardContent idx = {props.idx} tag= {props.tag} />
        </div>
    )
}

export default RightCard
