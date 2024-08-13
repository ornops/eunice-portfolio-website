import React from 'react'
import './contacts-section.scss'
import Images from '../../assets/images'

const ContactsSection = () => {
  return (
    <div className='section-container contacts-section-container'>
      <div className="contacts-left-section-container">
        <div className="h1-container">
            <h1>Get in touch</h1>
        </div>
        
        <div className="contact-details-container">
            <div className="email-container">
                <p>Email</p>
                <p>eunicegarcianapalit@gmail.com</p>
            </div>
            <div className="linked-in-container">
                <p>LinkedIn</p>
                <p>https://www.linkedin.com/in/eunicenapalit/</p>
            </div>
            
        </div>
      </div>
      <div className="contacts-right-section-container">
        <div className="contacts-image-container">
            <img src={Images.heroSectionImage} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default ContactsSection;
