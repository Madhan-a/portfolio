import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../data'
import Skillscard from '../Skillscard/Skillscard'
import Skillsinfocard from './Skillsinfocard'

const Skills = () => {
  const[selectedSkill,setSelectedSkill]=useState(SKILLS[0])
  const handleSelectSkill=(data)=>{
    setSelectedSkill(data)
  }
  return (
    <section className='skills-container'>
        <h3>Technical proficiency</h3>
        <br/>
        <div className='skills-content'>
            <div className='skills'>
                {SKILLS.map((item) =>(
                    <Skillscard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={()=>{
                      handleSelectSkill(item)
                    }}/>
                ))}
            </div>
            <div className='skills-info'>
              <Skillsinfocard 
              heading={selectedSkill.title}
              skills={selectedSkill.skills}/>
            </div>
        </div>
      
    </section>
  )
}

export default Skills
