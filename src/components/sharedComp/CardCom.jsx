import React from 'react'
import './CardCom.css'

const CardCom = ({icon,title, subtitle}) => {
  return (
    <div className="card" >
        {icon}
        <div className="card__body">
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </div>
       
    </div>
  )
}

export default CardCom