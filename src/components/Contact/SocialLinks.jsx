import React from 'react';
import { socialLinks } from './contactData';

const SocialLinks = () => {
  return (
    <div className="social-section">
      <h3 className="social-title">Sígueme en redes profesionales</h3>
      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{ '--social-color': social.color }}
          >
            <div className="social-icon">
              <social.icon />
            </div>
            <div className="social-info">
              <span className="social-name">{social.name}</span>
              <span className="social-description">{social.description}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;