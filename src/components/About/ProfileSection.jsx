import React from 'react';
import ProfileStats from './ProfileStats';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-image-container">
        <div className="profile-image">
          <img
            src="/assets/avatarotrave.png"
            alt="Lisandro Jiménez"
          />
          <div className="profile-status">
            <div className="status-dot"></div>
            <span>Disponible </span>
          </div>
        </div>
      </div>
      <div className="profile-intro">
        <h2 className="section-title">Acerca de mí</h2>
        <p className="section-subtitle">
          Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras
          que generen impacto real en la vida de las personas
        </p>
        <ProfileStats />
      </div>
    </div>
  );
};

export default ProfileSection;
