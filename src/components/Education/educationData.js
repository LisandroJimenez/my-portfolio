import { GraduationCap, MapPin, Calendar, Code2, Database, Globe, Award, RocketIcon, UniversityIcon  } from 'lucide-react';


export const education = [
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad Mariano Galvez',
      period: '2026 - 2032',
      location: 'Guatemala, Guatemala',
      description: 'Actualmente estoy en el primer semestre, donde estamos viendo la introdccion hacia la ingeniería.',
      technologies: ['MySQL'],
      status: 'in progress',
      icon: UniversityIcon
    },
    {
      degree: 'Prácticas Profesionales',
      institution: 'Tribal Worldwide',
      period: '2025',
      location: 'Guatemala, Guatemala',
      description: 'Prácticas profesionales como desarrollador Full Stack, participando en proyectos reales de diseño y desarrollo web, colaborando en equipo y aplicando tecnologías como React, Node.js y Tailwind CSS.',
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
      status: 'completed',
      icon: RocketIcon
    },
    {
      degree: 'Sexto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2025',
      location: 'Guatemala, Guatemala',
      description: 'Desarrollo de aplicaciones web con Node.js, Express, MongoDB, HTML, CSS, JavaScript y React, utilizando frameworks como Chakra UI y Tailwind CSS.',
      technologies: ['Node.js', 'React', 'MongoDB', 'Tailwind CSS', 'Express'],
      icon: Globe
    },
    {
      degree: 'Quinto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2024',
      location: 'Guatemala, Guatemala',
      description: 'Desarrollo de aplicaciones con Java (consola, JavaFX y Spring Boot), uso de MySQL, HTML, CSS (Bootstrap), JavaScript e introducción a React.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap', 'JavaScript'],
      status: 'completed',
      icon: Code2
    },
    {
      degree: 'Cuarto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2023',
      location: 'Guatemala, Guatemala',
      description: 'Redes Cisco (CCNA), introducción a la programación y fundamentos de Java.',
      technologies: ['Cisco CCNA', 'Java', 'Networking', 'Fundamentos'],
      status: 'completed',
      icon: Database
    }
  ];