import React from 'react'
import './Home.css'
import profile from '../../assets/profile.png'
import Resume from '../../assets/Resume.pdf'

const Home = () => {
  return (
    <div id="home" className='home'>
        <img src={profile} alt='Namitha Kannoth Veedu' className='profile-img' />
        <h1><span>I'm Namitha Kannoth Veedu</span><br></br> a Frontend developer based in UK</h1>
        <p>With 2 years of industry experience, I specialize in building responsive, user-friendly, and modern web applications with a strong focus on performance and seamless user experience.</p>
        <div className='home-action'>
            <div className="home-resume"><a href={Resume} download='Namitha_Kannoth_Veedu_CV.pdf'>My resume</a></div>
        </div>

    </div>
  )
}

export default Home