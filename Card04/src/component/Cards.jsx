import React from 'react'

const Cards = (props) => {
  return (
    <div className="Card">
        <div>
          <div className="top">
          <img src={props.img} alt="" />
          <button>save</button>
        </div>
        <div className="center">
          <h3>{props.name} <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='shedul'>
            <p>Part-time</p>
            <p>Senior-Level</p>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h2>{props.payment}</h2>
            <p>{props.place}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Cards
