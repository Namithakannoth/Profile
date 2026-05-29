import React from 'react'
import './Experience.css'
import experience_data from '../../assets/experience_data'

const Experience = () => {
  return (
    <div id="experience" className='experience'>
      <div className="experience-title">
        <h1>Experience</h1>
      </div>

      <div className="experience-container">
        {experience_data.map((experience, index) => (
          <div key={index} className="experience-item">
            <img
              src={experience.e_img}
              alt={experience.e_company}
            />
            <h2>{experience.e_role}</h2>
            <h3>{experience.e_company}</h3>
            <p className="e-duration">{experience.e_duration}</p>
            <p className="e-tech">{experience.e_tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience