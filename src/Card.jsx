import React from 'react'
import './card.css'
const Card = ({color,colorCode,colorName}) => {
  return (
   <>
   <div className="maindiv">
    <div style={{background:color}} className="colordiv"></div>
    <div className="colorNamediv">
        <h2>{colorCode}</h2>
        <p style={{color:color}}>{colorName}</p>
    </div>
   
   </div>
   </>
  )
}

export default Card