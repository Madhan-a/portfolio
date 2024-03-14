import React from 'react'
import'./Skillscard.css'
import fron from './../fron.png'

const Skillscard = ({title,isActive,onClick}) => {
  return (
    <div className={`skills-card ${isActive ? 'active':""}`}
    onClick={()=>onClick()} 
    >
        <div className='skill-icon'>
            <img src={fron}alt={title}/>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default Skillscard
