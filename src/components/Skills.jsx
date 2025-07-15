import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMongodb, 
  SiGit, 
  SiExpress,
  
  SiSpring,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiDocker,
  SiVuedotjs,
  SiAngular,
  SiDjango,
  SiLaravel,
  SiPhp,
  SiFirebase,
  SiVercel,
  SiNetlify
} from 'react-icons/si'
ChartJS.register(ArcElement, Tooltip, Legend)
import { FaCoffee } from 'react-icons/fa'


const Skills = () => {
  const skills = [
    { name: 'JavaScript', percentage: 90, color: '#F7DF1E', icon: SiJavascript },
    { name: 'React', percentage: 85, color: '#61DAFB', icon: SiReact },
    { name: 'Node.js', percentage: 80, color: '#339933', icon: SiNodedotjs },
    { name: 'Java', percentage: 95, color: '#ED8B00', icon: FaCoffee },
    { name: 'HTML5', percentage: 85, color: '#E34F26', icon: SiHtml5 },
    { name: 'CSS3', percentage: 80, color: '#1572B6', icon: SiCss3 },
    { name: 'MongoDB', percentage: 80, color: '#47A248', icon: SiMongodb },
    { name: 'MySQL', percentage: 90, color: '#4479A1', icon: SiMysql },
    { name: 'Git', percentage: 85, color: '#F05032', icon: SiGit },
    { name: 'Express.js', percentage: 80, color: '#000000', icon: SiExpress }
  ]

  const frameworks = [
    { name: 'React', level: 'Avanzado', experience: '+1 años', icon: SiReact, color: '#61DAFB' },
    { name: 'Spring Boot', level: 'Intermedio', experience: '1 año', icon: SiSpring, color: '#6DB33F' },
    { name: 'Express.js', level: 'Avanzado', experience: '1 año', icon: SiExpress, color: '#000000' },
    { name: 'Bootstrap' , level: 'Avanzado', experience: '1 año', icon: SiBootstrap, color: '#563D7C' },
  ]

  const databases = [
    { name: 'MongoDB', level: 'Avanzado', experience: '2+ años', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', level: 'Avanzado', experience: '3+ años', icon: SiMysql, color: '#4479A1' },
  ]

  const tools = [
    { name: 'Vercel', level: 'Avanzado', experience: '2+ años', icon: SiVercel, color: '#000000' },
    { name: 'Git', level: 'Avanzado', experience: '3+ años', icon: SiGit, color: '#F05032' }
  ]

  const createChartData = (skill) => ({
    datasets: [{
      data: [skill.percentage, 100 - skill.percentage],
      backgroundColor: [skill.color, '#E5E7EB'],
      borderWidth: 0,
      cutout: '70%'
    }]
  })

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  }

  return (
    <section className="skills page-content">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">
          Tecnologías y herramientas que domino para crear soluciones completas y escalables
        </p>
        
        <div className="mb-8">
          <h3 className="skills-category-title">
            <span className="category-icon">💻</span>
            Habilidades Técnicas
          </h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
                <div className="skill-chart">
                  <Doughnut data={createChartData(skill)} options={chartOptions} />
                  <div className="skill-percentage">
                    <span className="percentage-number">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="skills-category-title">
            <span className="category-icon">🚀</span>
            Frameworks y Librerías
          </h3>
          <div className="frameworks-grid">
            {frameworks.map((framework, index) => (
              <div key={index} className="framework-card">
                <div className="framework-header">
                  <div className="framework-icon" style={{ color: framework.color }}>
                    <framework.icon />
                  </div>
                  <div className="framework-details">
                    <h4 className="framework-name">{framework.name}</h4>
                    <div className="framework-info">
                      <span className={`framework-level ${framework.level.toLowerCase()}`}>
                        {framework.level}
                      </span>
                      <span className="framework-experience">{framework.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="skills-category-title">
            <span className="category-icon">🗄️</span>
            Bases de Datos
          </h3>
          <div className="frameworks-grid">
            {databases.map((db, index) => (
              <div key={index} className="framework-card">
                <div className="framework-header">
                  <div className="framework-icon" style={{ color: db.color }}>
                    <db.icon />
                  </div>
                  <div className="framework-details">
                    <h4 className="framework-name">{db.name}</h4>
                    <div className="framework-info">
                      <span className={`framework-level ${db.level.toLowerCase()}`}>
                        {db.level}
                      </span>
                      <span className="framework-experience">{db.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="skills-category-title">
            <span className="category-icon">🛠️</span>
            Herramientas y DevOps
          </h3>
          <div className="frameworks-grid">
            {tools.map((tool, index) => (
              <div key={index} className="framework-card">
                <div className="framework-header">
                  <div className="framework-icon" style={{ color: tool.color }}>
                    <tool.icon />
                  </div>
                  <div className="framework-details">
                    <h4 className="framework-name">{tool.name}</h4>
                    <div className="framework-info">
                      <span className={`framework-level ${tool.level.toLowerCase()}`}>
                        {tool.level}
                      </span>
                      <span className="framework-experience">{tool.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills