export const projects = [
  {
    id: 1,
    title: 'SuperKinal',
    description: 'Aplicación de escritorio desarrollada en JavaFX para la gestión de supermercados. Permite administrar productos, categorías, distribuidores y generar facturas en PDF con JasperSoft.',
    image: '/assets/SuperKinal.png',
    technologies: ['JavaFX', 'MySQL', 'JasperSoft', 'Maven'],
    github: 'https://github.com/LisandroJimenez/Proyecto-SuperKinal2024.git',
    category: 'Desktop Application',
    status: 'Completado',
    features: [
      'Gestión de productos, categorías y distribuidores',
      'Sistema de facturación con generación de PDF',
      'Integración con JasperSoft Reports',
      'Interfaz amigable y responsiva para escritorio',
      'Base de datos relacional con MySQL'
    ]
  },
  {
    id: 2,
    title: 'SGDB Restaurante',
    description: 'Aplicación web desarrollada con JSP y Servlets para la gestión de restaurantes. Permite administrar clientes, platos, proveedores y generar reportes de ventas. Desplegada en Apache Tomcat con base de datos MySQL.',
    image: '/assets/SGDBRestaurante.png',
    technologies: ['Java', 'JSP', 'Servlets', 'Apache Tomcat', 'MySQL'],
    github: 'https://github.com/Kinal2/SGBDRestaurante.git',
    category: 'Web Application',
    status: 'Completado',
    features: [
      'Gestión de clientes, platos y proveedores',
      'Sistema de reportes de ventas',
      'Interfaz web dinámica con JSP',
      'Controladores y servicios organizados por capas',
      'Despliegue en servidor Apache Tomcat'
    ]
  },
  {
    id: 3,
    title: 'Almacenadora',
    description: 'Plataforma web avanzada para la gestión de bodegas y almacenamiento. Permite controlar inventarios, proveedores, ingresos y egresos de mercancías, con un dashboard interactivo y notificaciones en tiempo real.',
    image: '/assets/Almacenadora.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'ChakraUI'],
    github: 'https://github.com/usuario/almacenadora',
    category: 'Full Stack',
    status: 'En línea',
    features: [
      'Dashboard interactivo con ChakraUI',
      'Gestión de inventarios y proveedores',
      'Ingreso y salida de productos',
      'Autenticación de usuarios',
      'Notificaciones en tiempo real'
    ]
  },
  {
    id: 4,
    title: 'Blog Speakly',
    description: 'Plataforma de blogging donde los usuarios pueden interactuar comentando y dando likes a publicaciones gestionadas desde el backend. Incluye mensajería y notificaciones en tiempo real para mantener a la comunidad activa.',
    image: '/assets/Blog.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'ChakraUI'],
    github: 'https://github.com/LisandroJimenez/ReviewManager-FrontEnd.git',
    category: 'Social Platform',
    status: 'En línea',
    features: [
      'Visualización de publicaciones',
      'Sistema de comentarios',
      'Likes en publicaciones',
      'Mensajería entre usuarios',
      'Notificaciones push'
    ]
  },
  {
    id: 5,
    title: 'HotelGest',
    description: 'Sistema integral para la gestión hotelera que permite administrar reservas, habitaciones y facturación de manera eficiente. Facilita el control de disponibilidad, asignación de habitaciones y seguimiento de clientes, optimizando la operación diaria del hotel.',
    image: '/assets/Hotel.png',
    technologies: ['React', 'ChakraUI', 'MongoDB', 'Node.js'],
    github: 'https://github.com/LisandroJimenez/Hotel-Management-FRONTEND/tree/Lisandro-Jimenez',
    category: 'Management System',
    status: 'En línea',
    features: [
      'Gestión de reservas',
      'Administración de habitaciones',
      'Control de disponibilidad',
      'Gestión de facturación',
      'Seguimiento de clientes'
    ]
  },
  {
    id: 6,
    title: 'Videntia',
    description: 'Plataforma de análisis de imágenes para criminología. Permite a los usuarios subir imágenes que son procesadas por IA para obtener evaluaciones de perfiles, detección de patrones y probabilidad de conductas delictivas.',
    image: '/assets/videntia.png',
    technologies: ['React', 'Node.js', 'MySQL', 'Socket.io', 'Google Cloud Vision'],
    github: 'https://github.com/LuisDeLeon24/MetadataExperimentos/tree/expoKinal',
    category: 'AI Platform',
    status: 'En línea',
    features: [
      'Carga de imágenes por el usuario',
      'Análisis automático con IA',
      'Evaluación de perfiles de riesgo',
      'Detección de patrones criminológicos',
      'Reportes detallados'
    ]
  }
]