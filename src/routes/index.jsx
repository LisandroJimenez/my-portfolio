import { elements } from 'chart.js';
import { lazy } from 'react';

import LandingPage from '../Pages/LandingPage';
const AboutPage = lazy(() => import('../Pages/AboutPage'))
const SkillsPage = lazy(() => import('../Pages/SkillsPage'))
const EducaciónPage = lazy(() => import('../Pages/EducationPage'))
const ProjectsPage = lazy(() => import('../Pages/ProjectsPage'))
const ContactPage = lazy(() => import('../Pages/ContactPage'))

const routes = [
    {path: '/', element:<LandingPage />},
    {path: '/about', element:<AboutPage />},
    {path: '/skills', element:<SkillsPage />},
    {path: '/education', element:<EducaciónPage />},
    {path: '/projects', element:<ProjectsPage />},
    {path: '/contact', element:<ContactPage />}

]

export default routes