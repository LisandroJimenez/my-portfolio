  import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaClock } from 'react-icons/fa'

  
  export const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ljimenezv2006@gmail.com',
      link: 'mailto:ljimenezv2006@gmail.com',
      description: 'Envía tu mensaje en cualquier momento'
    },
    {
      icon: FaPhone,
      label: 'Teléfono',
      value: '+502 5160-4553',
      link: 'tel:+50251604553',
      description: 'Disponible en horario laboral'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Guatemala, Guatemala',

      description: 'Disponible para trabajo remoto'
    }
  ]

  export const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/lisandro-jim%C3%A9nez-v%C3%A1squez-537382352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077B5',
      description: 'Conecta conmigo profesionalmente'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/LisandroJimenez',
      color: '#333',
      description: 'Revisa mi código y proyectos'
    }
  ]

  export const quickActions = [

    {
      title: 'Consulta rápida',
      description: 'Pregunta sobre desarrollo',
      icon: FaClock,
      action: 'mailto:ljimenezv2006@gmail.com?subject=Consulta Rápida',
      color: '#F59E0B'
    }
  ]