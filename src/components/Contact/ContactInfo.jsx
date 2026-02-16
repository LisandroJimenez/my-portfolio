import React from 'react';
import { contactInfo } from './contactData'

const ContactInfo = ( ) => {
  return (
    <div className="contact-info-section">
      <h3 className="contact-section-title">Información de contacto</h3>
      <div className="contact-cards">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="contact-card"
          >
            <div className="contact-card-icon">
              <item.icon />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">{item.label}</span>
              <span className="contact-card-value">{item.value}</span>
              <span className="contact-card-description">{item.description}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;