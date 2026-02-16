import React from 'react';

const StatsSection = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '2rem',
      flexWrap: 'wrap'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--primary-color)'
        }}>
          10+
        </div>
        <div style={{ color: 'var(--text-secondary)' }}>Tecnologías</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--primary-color)'
        }}>
          3+
        </div>
        <div style={{ color: 'var(--text-secondary)' }}>Años Experiencia</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--primary-color)'
        }}>
          10+
        </div>
        <div style={{ color: 'var(--text-secondary)' }}>Proyectos</div>
      </div>
    </div>
  );
};

export default StatsSection;
