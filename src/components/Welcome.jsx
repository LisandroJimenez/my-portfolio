import { FaChevronDown, FaCode, FaLaptopCode, FaRocket, FaDownload, FaEye } from 'react-icons/fa'
import avatar from '/assets/Avatar.jpg';
import { useNavigate } from 'react-router-dom';

const Welcome = ({ setActiveSection }) => {
    const handleNavigate = (section) => {
        setActiveSection(section)
    }

    const navigate = useNavigate();
    const features = [
        {
            icon: FaCode,
            title: "Desarrollo Full Stack",
            description: "Experiencia completa en frontend y backend con tecnologías modernas"
        },
        {
            icon: FaLaptopCode,
            title: "Aplicaciones Web",
            description: "Creación de aplicaciones web responsivas y optimizadas"
        },
        {
            icon: FaRocket,
            title: "Soluciones Innovadoras",
            description: "Implementación de soluciones creativas para problemas complejos"
        }
    ]

    const stats = [
        { number: "3+", label: "Años de experiencia" },
        { number: "25+", label: "Proyectos completados" },
        { number: "8+", label: "Tecnologías dominadas" },
        { number: "100%", label: "Dedicación" }
    ]

    return (
        <section className="welcome">
            <div className="container">
                {/* Hero Section */}
                <div className="welcome-content">
                    <div className="welcome-text">
                        <div className="welcome-badge">
                            <span>👋 ¡Hola! Soy</span>
                        </div>
                        <h1 className="welcome-title">
                            Lisandro Jiménez
                            <br />
                            <span className="highlight">Desarrollador Full Stack</span>
                        </h1>

                        <p className="welcome-subtitle">
                            Especializado en crear experiencias web excepcionales con tecnologías modernas como React, Node.js y más.
                        </p>
                        <p className="welcome-subtitle">
                            "Feeling deeply isn’t weakness.<br />
                            It’s being human — and that’s brave."
                        </p>
                        <div className="welcome-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleNavigate('projects')}
                            >
                                <FaEye /> Ver mis proyectos
                            </button>
                            <button className="btn btn-secondary">
                                <FaDownload /> Descargar CV
                            </button>
                        </div>
                    </div>
                    <div className="welcome-image">
                        <div className="profile-card">
                            <div className="profile-avatar">
                                <img src={avatar} alt="Profile" />
                            </div>

                            <div className="profile-info">
                                <h3>Lisandro Jiménez Vásquez</h3>
                                <p>Desarrollador Full Stack</p>


                            </div>
                        </div>
                        <div className="profile-status">
                            <span className="status-dot"></span>
                            Disponible para proyectos
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="features-section">
                    <h2 className="quick-nav-title">Mis Especialidades</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <feature.icon />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Navigation */}
                <div className="quick-nav-section">
                    <h2 className="quick-nav-title">Explora mi portafolio</h2>
                    <div className="quick-nav-grid">
                        <button
                            className="nav-card"
                            onClick={() => navigate('/about')}
                        >
                            <div className="nav-card-icon">👨‍💻</div>
                            <h3>Acerca de mí</h3>
                            <p>Conoce mi historia y experiencia</p>
                        </button>

                        <button
                            className="nav-card"
                            onClick={() => navigate('/skills')}
                        >
                            <div className="nav-card-icon">🚀</div>
                            <h3>Habilidades</h3>
                            <p>Tecnologías que domino</p>
                        </button>

                        <button
                            className="nav-card"
                            onClick={() => navigate('/education')}
                        >
                            <div className="nav-card-icon">🎓</div>
                            <h3>Educación</h3>
                            <p>Mi formación y experiencia</p>
                        </button>

                        <button
                            className="nav-card"
                            onClick={() => navigate('/projects')}
                        >
                            <div className="nav-card-icon">💼</div>
                            <h3>Proyectos</h3>
                            <p>Mis trabajos más destacados</p>
                        </button>

                        <button
                            className="nav-card"
                            onClick={() => navigate('/contact')}
                        >
                            <div className="nav-card-icon">📧</div>
                            <h3>Contacto</h3>
                            <p>Hablemos de tu proyecto</p>
                        </button>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="cta-section">
                    <div className="cta-content">
                        <h2 className="cta-title">¿Listo para trabajar juntos?</h2>
                        <p className="cta-description">
                            Estoy disponible para nuevos proyectos y oportunidades. ¡Contactemos y creemos algo increíble!
                        </p>
                        <div className="cta-buttons">
                            <button
                                className="btn btn-primary btn-large"
                                onClick={() => navigate('/contact')}
                            >
                                Iniciar conversación
                            </button>
                            <button
                                className="btn btn-secondary btn-large"
                                onClick={() => navigate('projects')}
                            >
                                Ver mi trabajo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome