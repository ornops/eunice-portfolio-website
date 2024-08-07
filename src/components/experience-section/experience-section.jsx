import React from 'react'
import './experience-section.scss'
import Images from '../../assets/images' 

const ExperienceSection = () => {
  return (
    <div  className='section-container experience-section-container'>
        <div className="experience-left-section">
            <h1>Experience</h1>
            <div className="experience-image-container">
                <img src={Images.experienceSectionLeftImage} alt="" />
            </div>
            <div className="trax-label-container">
                <div className="trax-label-left-container">
                    <p>01</p>
                </div>
                <div className="trax-label-right-container">
                    <p>Trax Technologies Asia, Inc.</p>
                    <p>2015-2022, Tech Support | QA | Developer</p>
                </div>
            </div>
        </div>
        <div className="experience-right-section">
            <div className="experience-left-image-container">
                <img src={Images.experienceSectionRightImage} alt="" />
            </div>
            <div className="resonate-label-container">
                <div className="resonate-label-left-container">
                    <p>02</p>
                </div>
                <div className="resonate-label-right-container">
                    <p>Resonate</p>
                    <p>2022-2024, QA Automations Engineer</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ExperienceSection;
