import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import ContactInfo from './ContactInfo';
import Availability from './Availability';
import SocialLinks from './SocialLinks';
import { contactInfo, socialLinks, quickActions } from './contactData';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="header-icon-wrapper">
            <FaEnvelope className="header-icon" />
          </div>
          <h2 className="section-title">Contáctame</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos y creemos algo increíble juntos!
          </p>
        </div>
        
        <div className="contact-main">
          <ContactInfo contactInfo={contactInfo} />
          <Availability quickActions={quickActions} />
        </div>
        
        <SocialLinks socialLinks={socialLinks} />
      </div>
    </section>
  );
};

export default Contact;