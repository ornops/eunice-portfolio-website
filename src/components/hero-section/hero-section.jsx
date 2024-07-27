import React from 'react'
import './hero-section.scss'




const HeroSection = () => {
  return (
    <div className='section-container hero-section-container'>
        <div className='hero-left-section'>
            <div className='hero-name'>Eunice</div>
            <div className='hero-name'>Napalit</div>
            <div className='hero-image-container' />

        </div>
        <div className='hero-right-section'>
            <div className='hero-role role-title'>QA Automations Engineer</div>
            <div className='hero-role role-description'>
                I have more than 3 years experience as a Software QA Engineer. 
                Accomplished Quality Engineer skilled in leading testing practices in fast-paced commercial environments.
            </div>
        </div>
    </div>
  )
}

export default HeroSection
