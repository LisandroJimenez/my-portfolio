import React from 'react';
import { FaEye, FaDownload, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import avatar from '/assets/avatarotrave.png';

import StatCard from './StatCard';
import FeatureCard from './FeatureCard';
import { features, stats, navCards } from './welcomeData';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome-content">
                    <div className="welcome-text">
                        <div className="welcome-badge"><span>👋 ¡Hola! Soy</span></div>
                        <h1 className="welcome-title">
                            Lisandro Jiménez <br />
                            <span className="highlight">Desarrollador Full Stack</span>
                        </h1>
                        <p className="welcome-subtitle">
                            Especializado en crear experiencias web excepcionales con tecnologías modernas.
                        </p>
                        <p className="welcome-subtitle">
                            "Feeling deeply isn’t weakness.<br />
                            It’s being human — and that’s brave."
                        </p>
                        <div className="welcome-buttons">
                            <button className="btn btn-primary" onClick={() => navigate('/projects')}>
                                <FaEye /> Ver mis proyectos
                            </button>
                            <a href="/Lisandro-Jiménez-Vásquez-CV-2026.pdf" download className="btn btn-secondary">
                                <FaDownload /> Descargar CV
                            </a>
                        </div>
                    </div>

                    <div className="welcome-image">
                        <div className="profile-card">
                            <div className="profile-avatar"><img src={avatar} alt="Profile" /></div>
                            <div className="profile-info">
                                <h3>Lisandro Jiménez Vásquez</h3>
                                <p>Desarrollador Full Stack</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
                    </div>
                </div>

                <div className="features-section">
                    <h2 className="quick-nav-title">Mis Especialidades</h2>
                    <div className="features-grid">
                        {features.map((f, i) => <FeatureCard key={i} {...f} />)}
                    </div>
                </div>

                <div className="quick-nav-section">
                    <h2 className="quick-nav-title">Explora mi portafolio</h2>
                    <div className="quick-nav-grid">
                        {navCards.map((card, i) => (
                            <button key={i} className="nav-card" onClick={() => navigate(card.route)}>
                                <div className="nav-card-icon">{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="cta-section">
                    <div className="cta-content">
                        <h2 className="cta-title">¿Listo para trabajar juntos?</h2>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>
                                Iniciar conversación
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;