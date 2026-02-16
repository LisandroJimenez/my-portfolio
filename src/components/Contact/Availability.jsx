import React from 'react';
import { quickActions } from './contactData';

const Availability = () => {
  return (
    <div className="availability-section">
      <div className="availability-card">
        <div className="availability-header"></div>
        <h4 className="availability-title">Estado actual</h4>
        <p className="availability-description">
          Actualmente disponible para proyectos freelance y oportunidades 
          de empleo a tiempo completo. Especializado en desarrollo web moderno.
        </p>
        
        <div className="quick-actions">
          <h5 className="quick-actions-title">Acciones rápidas</h5>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.action}
                className="quick-action-card"
                style={{ '--action-color': action.color }}
              >
                <div className="quick-action-icon">
                  <action.icon />
                </div>
                <div className="quick-action-content">
                  <span className="quick-action-title">{action.title}</span>
                  <span className="quick-action-description">{action.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;