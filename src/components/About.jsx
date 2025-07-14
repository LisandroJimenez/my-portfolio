import { FaUser, FaCalendar, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="section-title">Acerca de mí</h2>
                <p className="section-subtitle">
                    Conoce más sobre mi experiencia, pasión por el desarrollo y mis objetivos profesionales
                </p>

                <div className="grid grid-2">
                    <div className="card">
                        <h3 className="card-title">Mi historia</h3>
                        <p className="card-text">
                            Soy un desarrollador full stack con experiencia en múltiples tecnologías, desde aplicaciones de escritorio con JavaFX y desarrollo backend con Spring, hasta aplicaciones web modernas usando JavaScript, React y Node.js. Me apasiona crear soluciones tecnológicas innovadoras y eficientes que aporten valor real a los usuarios y a las empresas.
                        </p>
                        <p className="card-text">
                            A lo largo de mi carrera he trabajado en proyectos variados, lo que me ha permitido desarrollar una mentalidad orientada a resultados, una fuerte capacidad para resolver problemas complejos y un enfoque colaborativo para el trabajo en equipo. Mi objetivo es seguir aprendiendo y adaptándome a nuevas tecnologías para crecer profesionalmente y contribuir al éxito de los proyectos donde participo.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Información personal</h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <FaUser className="info-icon" />
                                <div>
                                    <span className="info-label">Nombre:</span>
                                    <span className="info-value">Lisandro Jiménez Vásquez</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaCalendar className="info-icon" />
                                <div>
                                    <span className="info-label">Edad:</span>
                                    <span className="info-value">18 años</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <span className="info-label">Ubicación:</span>
                                    <span className="info-value">Guatemala, Guatemala</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaGraduationCap className="info-icon" />
                                <div>
                                    <span className="info-label">Experiencia:</span>
                                    <span className="info-value">3+ años desarrollando proyectos personales y estudiando informática.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-3 mt-4">
                    <div className="card text-center">
                        <h4 className="card-title">Metas</h4>
                        <p className="card-text">
                            Convertirme en un desarrollador senior y liderar equipos de desarrollo
                            en proyectos innovadores que generen impacto positivo.
                        </p>
                    </div>

                    <div className="card text-center">
                        <h4 className="card-title">Aspiraciones</h4>
                        <p className="card-text">
                            Crear aplicaciones web escalables y contribuir al desarrollo de
                            tecnologías que mejoren la vida de las personas.
                        </p>
                    </div>

                    <div className="card text-center">
                        <h4 className="card-title">Formación</h4>
                        <p className="card-text">
                            Actualmente estudiando informática en Fundación Kinal y tomando cursos de especialización
                            en tecnologías modernas para fortalecer mis habilidades en desarrollo de software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About