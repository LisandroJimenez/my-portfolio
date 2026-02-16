import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGit,
  SiExpress,
  SiSpring,
  SiMysql,
  SiBootstrap,
  SiVercel
} from 'react-icons/si';
import {
  FaCoffee
} from 'react-icons/fa';

export const skills = [
  { name: 'JavaScript', percentage: 80, color: '#F7DF1E', icon: SiJavascript, category: 'Frontend' },
  { name: 'React', percentage: 80, color: '#61DAFB', icon: SiReact, category: 'Frontend' },
  { name: 'Node.js', percentage: 80, color: '#339933', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Java', percentage: 80, color: '#ED8B00', icon: FaCoffee, category: 'Backend' },
  { name: 'HTML5', percentage: 80, color: '#E34F26', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS3', percentage: 80, color: '#1572B6', icon: SiCss3, category: 'Frontend' },
  { name: 'MongoDB', percentage: 80, color: '#47A248', icon: SiMongodb, category: 'Database' },
  { name: 'MySQL', percentage: 75, color: '#4479A1', icon: SiMysql, category: 'Database' },
  { name: 'Git', percentage: 85, color: '#F05032', icon: SiGit, category: 'Tools' },
  { name: 'Express.js', percentage: 80, color: '#000000', icon: SiExpress, category: 'Backend' }
];

export const frameworks = [
  {
    name: 'React',
    level: 'Intermedio',
    experience: '+2 años',
    icon: SiReact,
    color: '#61DAFB',
    description: 'Desarrollo de SPAs modernas con hooks y context'
  },
  {
    name: 'Spring Boot',
    level: 'Intermedio',
    experience: '1 año',
    icon: SiSpring,
    color: '#6DB33F',
    description: 'APIs REST y microservicios con Java'
  },
  {
    name: 'Express.js',
    level: 'Intermedio',
    experience: '1 año',
    icon: SiExpress,
    color: '#000000',
    description: 'Servidores web rápidos y escalables'
  },
  {
    name: 'Bootstrap',
    level: 'Intermedio',
    experience: '1 año',
    icon: SiBootstrap,
    color: '#563D7C',
    description: 'Diseño responsive y componentes UI'
  }
];

export const databases = [
  {
    name: 'MongoDB',
    level: 'Intermedio',
    experience: '2+ años',
    icon: SiMongodb,
    color: '#47A248',
    description: 'Base de datos NoSQL para aplicaciones modernas'
  },
  {
    name: 'MySQL',
    level: 'Intermedio',
    experience: '2+ años',
    icon: SiMysql,
    color: '#4479A1',
    description: 'Sistemas relacionales robustos y consultas complejas'
  }
];

export const tools = [
  {
    name: 'Vercel',
    level: 'Intermedio',
    experience: '1+ años',
    icon: SiVercel,
    color: '#000000',
    description: 'Despliegue automático y hosting de aplicaciones'
  },
  {
    name: 'Git',
    level: 'Intermedio',
    experience: '2+ años',
    icon: SiGit,
    color: '#F05032',
    description: 'Control de versiones y colaboración en equipo'
  }
];
