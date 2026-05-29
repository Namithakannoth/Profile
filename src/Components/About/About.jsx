import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-content">
                <div className="about-para">
                    <p>Frontend Developer with experience developing responsive and scalable business applications using React.js, TypeScript, JavaScript, HTML5, CSS3, and Tailwind CSS. Skilled in reusable component development, REST API integration, responsive UI implementation, debugging, and Agile collaboration. Passionate about building modern, user-centric digital experiences.
                    </p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>TypeScript</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Tailwind CSS</p><hr style={{width:"80%"}} /> 
                    </div>
                    <div className="about-skill">
                        <p>Git</p><hr style={{width:"70%"}} /> 
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About