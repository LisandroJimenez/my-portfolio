import {
  FaUser,
  FaCalendar,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaBookOpen,
  FaRocket,
  FaUsers,
  FaTrophy,
  FaGlobe,
  FaLightbulb,
  FaBullseye,
  FaSchool
} from 'react-icons/fa';

export const personalInfo = [
  {
    icon: FaUser,
    label: 'Nombre completo',
    value: 'Lisandro Jiménez Vásquez',
    color: '#3B82F6'
  },
  {
    icon: FaCalendar,
    label: 'Edad',
    value: '19 años',
    color: '#10B981'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Ubicación',
    value: 'Guatemala, Guatemala',
    color: '#F59E0B'
  },
  {
    icon: FaGraduationCap,
    label: 'Formación Finalizada',
    value: 'Informática - Fundación Kinal',
    color: '#8B5CF6'
  },
  {
    icon: FaCode,
    label: 'Experiencia',
    value: '3+ años desarrollando',
    color: '#EF4444'
  },
  {
    icon: FaHeart,
    label: 'Pasión',
    value: 'Desarrollo Full Stack',
    color: '#EC4899'
  },
  {
    icon: FaSchool,
    label: 'Educación Actual',
    value: 'Ingenieria En Sistemas - UMG',
    color: '#db4848'
  }
];

export const shortTermGoals = [
  {
    icon: FaBookOpen,
    title: 'Dominar TypeScript',
    description: 'Profundizar en TypeScript para desarrollo más robusto',
    timeline: '3-6 meses',
    progress: 60
  },
  {
    icon: FaRocket,
    title: 'Certificaciones',
    description: 'Obtener certificaciones en AWS y React',
    timeline: '6-12 meses',
    progress: 30
  },
  {
    icon: FaUsers,
    title: 'Primer trabajo',
    description: 'Conseguir mi primera posición como desarrollador junior',
    timeline: '6-12 meses',
    progress: 45
  }
];

export const longTermGoals = [
  {
    icon: FaTrophy,
    title: 'Desarrollador Senior',
    description: 'Convertirme en un desarrollador senior con liderazgo técnico',
    timeline: '3-5 años',
    impact: 'Alto'
  },
  {
    icon: FaGlobe,
    title: 'Proyectos Globales',
    description: 'Trabajar en proyectos que impacten a usuarios a nivel mundial',
    timeline: '2-4 años',
    impact: 'Muy Alto'
  },
  {
    icon: FaLightbulb,
    title: 'Innovación Tecnológica',
    description: 'Contribuir al desarrollo de nuevas tecnologías y frameworks',
    timeline: '5+ años',
    impact: 'Revolucionario'
  }
];

export const tabs = [
  { id: 'personal', label: 'Información Personal', icon: FaUser },
  { id: 'goals', label: 'Metas y Objetivos', icon: FaBullseye },
];
