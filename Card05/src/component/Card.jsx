import React from 'react'

const Card = (props) => {
  return (
    <div className="Card">
       <div className="image">
         <img src={props.img} alt="" />
       </div>
        <div className="center">
          <h2>{props.name}</h2>
          <p>{props.jobDis}</p>
        </div>
        <div className="state">
          <div className='tag'>
            <h4>{props.profSta.rating}</h4>
            <h5>Rating</h5>
          </div>
          <div className='tag'>
            <h4>{props.profSta.earned}</h4>
            <h5>Earned</h5>
          </div>
          <div >
            <h4>{props.profSta.rate}</h4>
            <h5>Rate</h5>
          </div>
        </div>
        <div className="bottom">
          <button>Get In Touch</button>
        </div>
      </div>
  )
}

export default Card
