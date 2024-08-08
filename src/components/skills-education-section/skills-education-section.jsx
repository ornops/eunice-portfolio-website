import React from 'react'
import Images from '../../assets/images'
import './skills-education-section.scss'

const SkillsEducationSection = () => {
  return (
    <div className='section-container skills-education-section-container'>
        <div className="skills-section-left-container">
            <div className="education-image-container">
                <img src={Images.educationSectionImage} alt="" />
            </div>
            <div className="education-text-container">
                <h1>Education</h1>
                <p className='education-course'>BS in Information Technology</p>
                <p>2016, University of Cebu Banilad Campus</p>
            </div>
            

        </div>

        <div className="skills-section-right-container">
            <div className="skills-text-container">
                <h1>Skills</h1>
                <ul>
                    <li>Tech Support</li>
                    <li>Manual QA</li>
                    <li>QA Automations Testing</li>
                    <li>Java Development</li>
                </ul>
            </div>
            <div className="skills-image-container">
                <img src={Images.skillsSectionImage} alt="" />
            </div>

        </div>
    
    </div>
  )
}

export default SkillsEducationSection;
