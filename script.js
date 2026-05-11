'use strict';

const translations = {
  pt: {
    nav: { home: 'Início', about: 'Sobre', skills: 'Habilidades', projects: 'Projetos', contact: 'Contato' },
    hero: {
      eyebrow: 'Início',
      kicker: 'Olá, eu sou',
      subtitle: 'Desenvolvedor Full-Stack & Estudante de Ciência da Computação',
      description: 'Estudante de Ciência da Computação na UNIFESP com 5 anos de experiência em desenvolvimento full stack. Apaixonado por criar soluções digitais inovadoras e funcionais.',
      work: 'Ver meu trabalho',
      contact: 'Entre em contato',
      metricYears: 'anos de experiência'
    },
    about: {
      marker: 'Sobre',
      title: 'anos de experiência',
      lead: 'em desenvolvimento full stack',
      text: 'Estudante de Ciência da Computação na UNIFESP, atualmente estagiando como desenvolvedor Full-Stack na Appstorm.',
      badge1: 'Estagiário Full-Stack @ Appstorm',
      badge2: 'Ciência da Computação @ UNIFESP',
      badge3: 'São José dos Campos, SP'
    },
    skills: {
      marker: 'Habilidades',
      titleA: 'Stack que uso para',
      titleB: 'criar produtos completos.',
      text: 'Tecnologias que fazem parte da minha rotina para criar interfaces, APIs, bancos de dados, dashboards, integrações, deploys e fluxos com IA.',
      filters: { all: 'Todos', frontend: 'Frontend', backend: 'Backend', data: 'Dados', mobile: 'Mobile', design: 'Design', ai: 'AI' }
    },
    projects: {
      marker: 'Projetos',
      title: 'Projetos em Destaque',
      text: 'Uma seleção de produtos que mostram minha evolução em front-end, back-end, banco de dados, autenticação, dashboards e deploy.',
      details: 'Clique para ver detalhes',
      live: 'Demo ao vivo',
      code: 'Ver código'
    },
    contact: {
      marker: 'Contato',
      titleA: 'Vamos Trabalhar',
      titleB: 'Juntos',
      text: 'Estou sempre interessado em novas oportunidades e projetos desafiadores. Vamos conversar sobre como posso contribuir com seus projetos!',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'seu@email.com',
        messagePlaceholder: 'Conte-me sobre seu projeto...',
        submit: 'Enviar Mensagem',
        success: 'Abrindo seu aplicativo de email...',
        subject: 'Contato pelo portfólio'
      }
    },
    modal: { features: 'Principais Funcionalidades', tech: 'Tecnologias Utilizadas', year: 'Ano', status: 'Status', type: 'Tipo' },
    footer: { rights: 'Todos os direitos reservados.' }
  },
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      eyebrow: 'Home',
      kicker: 'Hi, I am',
      subtitle: 'Full-Stack Developer & Computer Science Student',
      description: 'Computer Science student at UNIFESP with 5 years of experience in full-stack development. Passionate about building innovative and functional digital solutions.',
      work: 'View my work',
      contact: 'Get in touch',
      metricYears: 'years of experience'
    },
    about: {
      marker: 'About',
      title: 'years of experience',
      lead: 'in full-stack development',
      text: 'Computer Science student at UNIFESP, currently working as a Full-Stack Developer Intern at Appstorm.',
      badge1: 'Full-Stack Intern @ Appstorm',
      badge2: 'Computer Science @ UNIFESP',
      badge3: 'São José dos Campos, SP'
    },
    skills: {
      marker: 'Skills',
      titleA: 'Stack I use to',
      titleB: 'build complete products.',
      text: 'Technologies that are part of my routine for interfaces, APIs, databases, dashboards, integrations, deployments and AI-assisted workflows.',
      filters: { all: 'All', frontend: 'Frontend', backend: 'Backend', data: 'Data', mobile: 'Mobile', design: 'Design', ai: 'AI' }
    },
    projects: {
      marker: 'Projects',
      title: 'Featured Projects',
      text: 'A selection of products that show my growth in front-end, back-end, databases, authentication, dashboards and deployment.',
      details: 'Click to view details',
      live: 'Live demo',
      code: 'View code'
    },
    contact: {
      marker: 'Contact',
      titleA: 'Let’s Work',
      titleB: 'Together',
      text: 'I am always interested in new opportunities and challenging projects. Let’s talk about how I can contribute to your projects.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@email.com',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message',
        success: 'Opening your email app...',
        subject: 'Contact from portfolio'
      }
    },
    modal: { features: 'Main Features', tech: 'Technologies Used', year: 'Year', status: 'Status', type: 'Type' },
    footer: { rights: 'All rights reserved.' }
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      eyebrow: 'Inicio',
      kicker: 'Hola, soy',
      subtitle: 'Desarrollador Full-Stack & Estudiante de Ciencias de la Computación',
      description: 'Estudiante de Ciencias de la Computación en UNIFESP con 5 años de experiencia en desarrollo full stack. Apasionado por crear soluciones digitales innovadoras y funcionales.',
      work: 'Ver mi trabajo',
      contact: 'Contactar',
      metricYears: 'años de experiencia'
    },
    about: {
      marker: 'Sobre mí',
      title: 'años de experiencia',
      lead: 'en desarrollo full stack',
      text: 'Estudiante de Ciencias de la Computación en UNIFESP, actualmente pasante como desarrollador Full-Stack en Appstorm.',
      badge1: 'Pasante Full-Stack @ Appstorm',
      badge2: 'Ciencias de la Computación @ UNIFESP',
      badge3: 'São José dos Campos, SP'
    },
    skills: {
      marker: 'Habilidades',
      titleA: 'Stack que uso para',
      titleB: 'crear productos completos.',
      text: 'Tecnologías que forman parte de mi rutina para interfaces, APIs, bases de datos, dashboards, integraciones, deploys y flujos con IA.',
      filters: { all: 'Todos', frontend: 'Frontend', backend: 'Backend', data: 'Datos', mobile: 'Mobile', design: 'Diseño', ai: 'AI' }
    },
    projects: {
      marker: 'Proyectos',
      title: 'Proyectos Destacados',
      text: 'Una selección de productos que muestran mi evolución en front-end, back-end, bases de datos, autenticación, dashboards y deploy.',
      details: 'Haz clic para ver detalles',
      live: 'Demo en vivo',
      code: 'Ver código'
    },
    contact: {
      marker: 'Contacto',
      titleA: 'Trabajemos',
      titleB: 'Juntos',
      text: 'Siempre estoy interesado en nuevas oportunidades y proyectos desafiantes. Hablemos sobre cómo puedo contribuir a tus proyectos.',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submit: 'Enviar Mensaje',
        success: 'Abriendo tu app de email...',
        subject: 'Contacto desde el portafolio'
      }
    },
    modal: { features: 'Funcionalidades Principales', tech: 'Tecnologías Utilizadas', year: 'Año', status: 'Estado', type: 'Tipo' },
    footer: { rights: 'Todos los derechos reservados.' }
  }
};

const skills = [
  { name: 'JavaScript', category: 'frontend', label: 'Frontend', iconType: 'devicon', icon: 'devicon-javascript-plain colored' },
  { name: 'HTML5', category: 'frontend', label: 'Markup', iconType: 'devicon', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', category: 'frontend', label: 'Interface', iconType: 'devicon', icon: 'devicon-css3-plain colored' },
  { name: 'TypeScript', category: 'frontend', label: 'Typed JS', iconType: 'devicon', icon: 'devicon-typescript-plain colored' },
  { name: 'React', category: 'frontend', label: 'UI Library', iconType: 'devicon', icon: 'devicon-react-original colored' },
  { name: 'Next.js', category: 'frontend', label: 'Framework', iconType: 'asset', icon: 'assets/logos/nextjs-logo.svg' },
  { name: 'Tailwind CSS', category: 'frontend', label: 'CSS Utility', iconType: 'devicon', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Vue.js', category: 'frontend', label: 'UI Framework', iconType: 'devicon', icon: 'devicon-vuejs-plain colored' },
  { name: 'jQuery', category: 'frontend', label: 'DOM & UX', iconType: 'devicon', icon: 'devicon-jquery-plain colored' },
  { name: 'Node.js', category: 'backend', label: 'Runtime', iconType: 'devicon', icon: 'devicon-nodejs-plain colored' },
  { name: 'PHP', category: 'backend', label: 'Backend', iconType: 'devicon', icon: 'devicon-php-plain colored' },
  { name: 'APIs REST', category: 'backend', label: 'Integrações', iconType: 'fa', icon: 'fa-solid fa-code-branch' },
  { name: 'Express', category: 'backend', label: 'API Framework', iconType: 'devicon', icon: 'devicon-express-original' },
  { name: 'Sequelize', category: 'backend', label: 'ORM', iconType: 'asset', icon: 'assets/logos/sequelize-logo.png' },
  { name: 'Prisma', category: 'backend', label: 'ORM', iconType: 'devicon', icon: 'devicon-prisma-original' },
  { name: 'Git', category: 'backend', label: 'Versionamento', iconType: 'devicon', icon: 'devicon-git-plain colored' },
  { name: 'MySQL', category: 'data', label: 'Relational DB', iconType: 'devicon', icon: 'devicon-mysql-original colored' },
  { name: 'PostgreSQL', category: 'data', label: 'Relational DB', iconType: 'devicon', icon: 'devicon-postgresql-plain colored' },
  { name: 'MongoDB', category: 'data', label: 'NoSQL DB', iconType: 'devicon', icon: 'devicon-mongodb-plain colored' },
  { name: 'Firebase', category: 'data', label: 'BaaS', iconType: 'devicon', icon: 'devicon-firebase-plain colored' },
  { name: 'Framework7', category: 'mobile', label: 'Hybrid Apps', iconType: 'fa', icon: 'fa-solid fa-mobile-screen-button' },
  { name: 'PWA', category: 'mobile', label: 'Web + Mobile', iconType: 'fa', icon: 'fa-solid fa-window-restore' },
  { name: 'Figma', category: 'design', label: 'UI Design', iconType: 'asset', icon: 'assets/logos/Figma-logo.png' },
  { name: 'Claude', category: 'ai', label: 'Anthropic', iconType: 'asset', icon: 'assets/logos/claude.png' },
  { name: 'ChatGPT', category: 'ai', label: 'OpenAI', iconType: 'asset', icon: 'assets/logos/ChatGPT_logo.png' },
];

const techIconMap = {
  HTML: { iconType: 'devicon', icon: 'devicon-html5-plain colored' },
  HTML5: { iconType: 'devicon', icon: 'devicon-html5-plain colored' },
  CSS: { iconType: 'devicon', icon: 'devicon-css3-plain colored' },
  CSS3: { iconType: 'devicon', icon: 'devicon-css3-plain colored' },
  JavaScript: { iconType: 'devicon', icon: 'devicon-javascript-plain colored' },
  TypeScript: { iconType: 'devicon', icon: 'devicon-typescript-plain colored' },
  React: { iconType: 'devicon', icon: 'devicon-react-original colored' },
  'Next.js': { iconType: 'asset', icon: 'assets/logos/nextjs-logo.svg' },
  'Tailwind CSS': { iconType: 'devicon', icon: 'devicon-tailwindcss-original colored' },
  'Vue.js': { iconType: 'devicon', icon: 'devicon-vuejs-plain colored' },
  'Node.js': { iconType: 'devicon', icon: 'devicon-nodejs-plain colored' },
  Express: { iconType: 'devicon', icon: 'devicon-express-original' },
  MongoDB: { iconType: 'devicon', icon: 'devicon-mongodb-plain colored' },
  MySQL: { iconType: 'devicon', icon: 'devicon-mysql-original colored' },
  PostgreSQL: { iconType: 'devicon', icon: 'devicon-postgresql-plain colored' },
  'Neon PostgreSQL': { iconType: 'devicon', icon: 'devicon-postgresql-plain colored' },
  Firebase: { iconType: 'devicon', icon: 'devicon-firebase-plain colored' },
  Sequelize: { iconType: 'asset', icon: 'assets/logos/sequelize-logo.png' },
  Prisma: { iconType: 'devicon', icon: 'devicon-prisma-original' },
  'Chart.js': { iconType: 'asset', icon: 'assets/logos/Chart.js_logo.png' },
  Render: { iconType: 'asset', icon: 'assets/logos/render-logo.png' },
  'LocalStorage': { iconType: 'fa', icon: 'fa-solid fa-database' },
  Bootstrap: { iconType: 'devicon', icon: 'devicon-bootstrap-plain colored' },
  'APIs REST': { iconType: 'fa', icon: 'fa-solid fa-code-branch' }
};

const projects = [
  {
    id: 'faltometro',
    year: '2025',
    title: 'Faltômetro UNIFESP',
    type: { pt: 'Projeto Solo', en: 'Solo Project', es: 'Proyecto Solo' },
    status: { pt: 'Em Produção', en: 'In Production', es: 'En Producción' },
    image: 'assets/projects/faltometro-01.png',
    gallery: [
      'assets/projects/faltometro-01.png',
      'assets/projects/faltometro-02.png',
      'assets/projects/faltometro-03.png',
      'assets/projects/faltometro-04.png'
    ],
    live: 'https://app-faltometro-unifesp.netlify.app/',
    code: '#',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    short: {
      pt: 'Sistema de controle de faltas para estudantes da UNIFESP com 200+ usuários conectados.',
      en: 'Attendance control system for UNIFESP students with 200+ connected users.',
      es: 'Sistema de control de faltas para estudiantes de UNIFESP con más de 200 usuarios conectados.'
    },
    description: {
      pt: 'O Faltômetro UNIFESP é uma aplicação web desenvolvida com auxílio de IA para ajudar estudantes a controlar suas faltas de forma eficiente. O sistema permite cadastrar disciplinas, registrar faltas e acompanhar o limite permitido por matéria.',
      en: 'Faltômetro UNIFESP is a web application built with AI assistance to help students track attendance efficiently. It supports subjects, absences and clear monitoring of each course limit.',
      es: 'Faltômetro UNIFESP es una aplicación web creada con ayuda de IA para que estudiantes controlen sus faltas de forma eficiente. Permite registrar materias, faltas y monitorear el límite permitido.'
    },
    features: {
      pt: ['Controle inteligente de faltas por disciplina', 'Gerenciamento de disciplinas e horários', 'Sistema de alertas para limite de faltas', 'Dashboard intuitivo e responsivo', 'Otimizado para dispositivos móveis', '200+ usuários conectados'],
      en: ['Smart attendance control by subject', 'Subject and schedule management', 'Absence limit alerts', 'Responsive and intuitive dashboard', 'Optimized for mobile devices', '200+ connected users'],
      es: ['Control inteligente de faltas por materia', 'Gestión de materias y horarios', 'Alertas de límite de faltas', 'Dashboard intuitivo y responsivo', 'Optimizado para dispositivos móviles', 'Más de 200 usuarios conectados']
    }
  },
  {
    id: 'obsyd',
    year: '2026',
    title: 'Obsyd',
    type: { pt: 'Projeto Solo', en: 'Solo Project', es: 'Proyecto Solo' },
    status: { pt: 'Em Desenvolvimento', en: 'In Development', es: 'En Desarrollo' },
    image: 'assets/projects/obsyd-01.png',
    gallery: [
      'assets/projects/obsyd-01.png',
      'assets/projects/obsyd-02.png',
      'assets/projects/obsyd-03.png',
      'assets/projects/obsyd-04.png'
    ],
    live: 'https://obsyd.onrender.com/',
    code: '#',
    tech: ['Node.js', 'Neon PostgreSQL', 'Chart.js', 'Render'],
    short: {
      pt: 'Plataforma full-stack de organização financeira com autenticação real e persistência no Neon.',
      en: 'Full-stack personal finance platform with real authentication and Neon persistence.',
      es: 'Plataforma full-stack de organización financiera con autenticación real y persistencia en Neon.'
    },
    description: {
      pt: 'Obsyd é uma aplicação full-stack de finanças pessoais construída em Node.js, com frontend SPA servido pelo próprio backend, sessão por cookie HTTP-only e dados persistidos no Neon PostgreSQL por usuário.',
      en: 'Obsyd is a full-stack personal finance app built in Node.js, with a SPA served by its own backend, HTTP-only cookie sessions and per-user data persistence in Neon PostgreSQL.',
      es: 'Obsyd es una app full-stack de finanzas personales creada en Node.js, con SPA servida por el backend, sesión con cookie HTTP-only y persistencia por usuario en Neon PostgreSQL.'
    },
    features: {
      pt: ['Cadastro e login com senha hash', 'Sessão com cookie HTTP-only', 'Dashboard com métricas, fluxo e agenda semanal', 'Transações, metas, juros compostos e orçamentos', 'Categorias customizáveis', 'Deploy no Render'],
      en: ['Register and login with hashed passwords', 'HTTP-only cookie sessions', 'Dashboard with metrics, flow chart and weekly agenda', 'Transactions, goals, compound interest and budgets', 'Custom categories', 'Render deployment'],
      es: ['Registro e inicio de sesión con contraseña hash', 'Sesión con cookie HTTP-only', 'Dashboard con métricas, flujo y agenda semanal', 'Transacciones, metas, interés compuesto y presupuestos', 'Categorías personalizables', 'Deploy en Render']
    }
  },
  {
    id: 'gastafofo',
    year: '2025',
    title: 'GastaFofo',
    type: { pt: 'Projeto Solo', en: 'Solo Project', es: 'Proyecto Solo' },
    status: { pt: 'Concluído', en: 'Completed', es: 'Finalizado' },
    image: 'assets/projects/gastafofo-01.png',
    gallery: [
      'assets/projects/gastafofo-01.png',
      'assets/projects/gastafofo-02.png',
      'assets/projects/gastafofo-03.png',
      'assets/projects/gastafofo-04.png'
    ],
    live: '#',
    code: '#',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    short: {
      pt: 'Aplicação de controle financeiro pessoal com interface moderna e recursos avançados.',
      en: 'Personal finance control app with a modern interface and advanced features.',
      es: 'Aplicación de control financiero personal con interfaz moderna y recursos avanzados.'
    },
    description: {
      pt: 'GastaFofo é uma aplicação para controle de gastos pessoais. Permite categorizar despesas, acompanhar receitas, visualizar relatórios detalhados e manter o controle das finanças com uma interface limpa.',
      en: 'GastaFofo is a personal expense control application. It supports categories, income tracking, detailed reports and a clean interface for financial organization.',
      es: 'GastaFofo es una aplicación para controlar gastos personales. Permite categorizar gastos, seguir ingresos, ver informes detallados y organizar las finanzas con una interfaz limpia.'
    },
    features: {
      pt: ['Rastreamento detalhado de gastos', 'Sistema de categorização de despesas', 'Relatórios financeiros detalhados', 'Controle de orçamento mensal', 'Exportação de dados financeiros', 'Design responsivo e moderno'],
      en: ['Detailed expense tracking', 'Expense category system', 'Detailed financial reports', 'Monthly budget control', 'Financial data export', 'Modern responsive design'],
      es: ['Seguimiento detallado de gastos', 'Sistema de categorías', 'Informes financieros detallados', 'Control de presupuesto mensual', 'Exportación de datos financieros', 'Diseño moderno y responsivo']
    }
  },
  {
    id: 'elegantcart',
    year: '2023',
    title: 'ElegantCart',
    type: { pt: 'Projeto Solo', en: 'Solo Project', es: 'Proyecto Solo' },
    status: { pt: 'Concluído', en: 'Completed', es: 'Finalizado' },
    image: 'assets/projects/elegantcart-01.png',
    gallery: [
      'assets/projects/elegantcart-01.png',
      'assets/projects/elegantcart-02.png',
      'assets/projects/elegantcart-03.png',
      'assets/project-placeholder.svg'
    ],
    live: '#',
    code: '#',
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    short: {
      pt: 'Plataforma de e-commerce completa desenvolvida com stack MERN.',
      en: 'Complete e-commerce platform developed with the MERN stack.',
      es: 'Plataforma de e-commerce completa desarrollada con stack MERN.'
    },
    description: {
      pt: 'ElegantCart é uma plataforma de e-commerce desenvolvida com tecnologias modernas da stack MERN, incluindo catálogo de produtos, carrinho, autenticação e painel administrativo.',
      en: 'ElegantCart is an e-commerce platform built with modern MERN technologies, including product catalog, cart, authentication and an admin panel.',
      es: 'ElegantCart es una plataforma de e-commerce creada con tecnologías MERN modernas, incluyendo catálogo, carrito, autenticación y panel administrativo.'
    },
    features: {
      pt: ['Catálogo completo de produtos', 'Carrinho de compras funcional', 'Sistema de autenticação de usuários', 'Painel administrativo completo', 'Desenvolvido com stack MERN'],
      en: ['Complete product catalog', 'Functional shopping cart', 'User authentication system', 'Complete admin panel', 'Built with the MERN stack'],
      es: ['Catálogo completo de productos', 'Carrito funcional', 'Sistema de autenticación', 'Panel administrativo completo', 'Desarrollado con stack MERN']
    }
  },
  {
    id: 'cantina',
    year: '2024',
    title: 'Cantina Bem-Estar',
    type: { pt: 'Projeto em Equipe', en: 'Team Project', es: 'Proyecto en Equipo' },
    status: { pt: 'Concluído', en: 'Completed', es: 'Finalizado' },
    image: 'assets/projects/cantina-01.png',
    gallery: [
      'assets/projects/cantina-01.png',
      'assets/projects/cantina-02.png',
      'assets/projects/cantina-03.png',
      'assets/projects/cantina-04.png'
    ],
    live: '#',
    code: '#',
    tech: ['React', 'Node.js', 'Express', 'Sequelize', 'MySQL'],
    short: {
      pt: 'Sistema de gestão para cantina escolar, TCC premiado em 2º lugar no INIC Jr.',
      en: 'School cafeteria management system, technical course final project awarded 2nd place at INIC Jr.',
      es: 'Sistema de gestión para cantina escolar, TCC premiado con 2º lugar en INIC Jr.'
    },
    description: {
      pt: 'Sistema completo de gestão para cantina escolar desenvolvido como TCC do curso técnico. O projeto conquistou o 2º lugar no prêmio INIC Jr. e inclui controle de vendas, relatórios e interface para clientes e administradores.',
      en: 'Complete school cafeteria management system developed as a technical course final project. It won 2nd place at INIC Jr. and includes sales control, reports and interfaces for clients and admins.',
      es: 'Sistema completo de gestión para cantina escolar desarrollado como TCC del curso técnico. Ganó el 2º lugar en INIC Jr. e incluye control de ventas, informes e interfaces para clientes y administradores.'
    },
    features: {
      pt: ['Controle completo de estoque', 'Gerenciamento de vendas', 'Relatórios financeiros detalhados', 'Interface para clientes', 'Dashboard administrativo', 'Projeto premiado em 2º lugar'],
      en: ['Complete inventory control', 'Sales management', 'Detailed financial reports', 'Client interface', 'Admin dashboard', 'Awarded 2nd place'],
      es: ['Control completo de inventario', 'Gestión de ventas', 'Informes financieros detallados', 'Interfaz para clientes', 'Dashboard administrativo', 'Proyecto premiado con 2º lugar']
    }
  }
];

const state = {
  lang: localStorage.getItem('portfolio-lang') || 'pt',
  theme: localStorage.getItem('portfolio-theme') || 'dark',
  activeFilter: 'all'
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function getValueByPath(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source);
}

function iconMarkup(iconData, alt = '') {
  if (!iconData) return '<span class="icon-fallback" aria-hidden="true">•</span>';
  if (iconData.iconType === 'devicon' || iconData.iconType === 'fa') {
    return `<i class="${iconData.icon}" aria-hidden="true"></i>`;
  }
  if (iconData.iconType === 'asset') {
    return `<img src="${iconData.icon}" alt="${alt}" loading="lazy" />`;
  }
  return `<span class="icon-fallback" aria-hidden="true">${alt.slice(0, 2).toUpperCase()}</span>`;
}

function techTagMarkup(tech, className = 'tech-tag') {
  const icon = techIconMap[tech];
  return `<span class="${className}">${iconMarkup(icon, tech)}<span>${tech}</span></span>`;
}

function applyTranslations() {
  const t = translations[state.lang] || translations.pt;
  $$('[data-i18n]').forEach((element) => {
    const value = getValueByPath(t, element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
  });

  $$('[data-i18n-placeholder]').forEach((element) => {
    const value = getValueByPath(t, element.dataset.i18nPlaceholder);
    if (typeof value === 'string') element.setAttribute('placeholder', value);
  });

  document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : state.lang;
  $$('.lang-button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === state.lang);
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  state.lang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations();
  renderProjects();
  if (window.ScrollTrigger) {
    window.ScrollTrigger.refresh();
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem('portfolio-theme', state.theme);
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.content = state.theme === 'dark' ? '#08090b' : '#f5f3ee';
}

function renderSkills(filter = state.activeFilter) {
  const grid = $('#skillsGrid');
  if (!grid) return;

  const filtered = filter === 'all' ? skills : skills.filter((skill) => skill.category === filter);
  grid.innerHTML = filtered.map((skill) => `
    <article class="skill-card" data-category="${skill.category}">
      <div class="skill-icon">${iconMarkup(skill, skill.name)}</div>
      <div>
        <h3>${skill.name}</h3>
        <p>${skill.label}</p>
      </div>
    </article>
  `).join('');

  animateDynamicCards('.skill-card');
}

function renderProjects() {
  const track = $('#projectsTrack');
  if (!track) return;

  const t = translations[state.lang] || translations.pt;
  track.innerHTML = projects.map((project, index) => `
    <article class="project-card" data-project-id="${project.id}" data-animate="up" tabindex="0" role="button" aria-label="${t.projects.details}: ${project.title}">
      <div class="project-image">
        <img src="${project.image}" alt="Preview ${project.title}" loading="lazy" />
      </div>
      <div class="project-content">
        <span class="project-year">${String(index + 1).padStart(2, '0')} · ${project.year}</span>
        <h3>${project.title}</h3>
        <p>${project.short[state.lang]}</p>
        <div class="project-tags">
          ${project.tech.slice(0, 5).map((tech) => techTagMarkup(tech, 'project-tag')).join('')}
        </div>
        <span class="project-link">${t.projects.details} <span aria-hidden="true">→</span></span>
      </div>
    </article>
  `).join('');

  bindProjectCards();
  setupHorizontalScroll();
  animateDynamicCards('.project-card');
}

function bindProjectCards() {
  $$('.project-card').forEach((card) => {
    const open = () => openProjectModal(card.dataset.projectId);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  const modal = $('#projectModal');
  if (!project || !modal) return;

  const t = translations[state.lang] || translations.pt;
  const gallery = project.gallery?.length ? project.gallery : [project.image];
  const normalizedGallery = [...gallery, 'assets/project-placeholder.svg', 'assets/project-placeholder.svg', 'assets/project-placeholder.svg'].slice(0, 4);

  $('#modalGallery').innerHTML = normalizedGallery.map((image, index) => `
    <figure class="modal-shot" role="button" tabindex="0" data-image-src="${image}" aria-label="Imagem do projeto ${index + 1}, clique para expandir">
      <img src="${image}" alt="${project.title} screenshot ${index + 1}" loading="lazy" />
    </figure>
  `).join('');
  $('#modalTitle').textContent = project.title;
  $('#modalDescription').textContent = project.description[state.lang];
  $('#modalMeta').innerHTML = `
    <span><i class="fa-regular fa-calendar" aria-hidden="true"></i>${t.modal.year}: ${project.year}</span>
    <span><i class="fa-regular fa-circle-check" aria-hidden="true"></i>${t.modal.status}: ${project.status[state.lang]}</span>
    <span><i class="fa-regular fa-user" aria-hidden="true"></i>${t.modal.type}: ${project.type[state.lang]}</span>
  `;
  $('#modalFeatures').innerHTML = project.features[state.lang].map((feature) => `<li>${feature}</li>`).join('');
  $('#modalTech').innerHTML = project.tech.map((tech) => techTagMarkup(tech, 'tech-tag')).join('');
  $('#modalActions').innerHTML = `
    <a class="button button-primary" href="${project.live}" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>${t.projects.live}</a>
    <a class="button button-secondary" href="${project.code}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i>${t.projects.code}</a>
  `;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
    document.body.classList.add('no-scroll');
  }

  $$('.modal-shot').forEach((shot) => {
    const openImage = () => openImageModal(shot.dataset.imageSrc);
    shot.addEventListener('click', openImage);
    shot.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImage();
      }
    });
  });
}

function openImageModal(imageSrc) {
  const modal = $('#imageModal');
  const img = $('#imageModalContent');
  if (!modal || !img) return;

  img.src = imageSrc;
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  }
}

function closeImageModal() {
  const modal = $('#imageModal');
  if (modal && modal.open) modal.close();
}

function closeProjectModal() {
  const modal = $('#projectModal');
  if (modal && modal.open) modal.close();
  document.body.classList.remove('no-scroll');
}

function setupHeader() {
  const header = $('.site-header');
  const toggle = $('.nav-toggle');

  toggle?.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  $$('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('menu-open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupThemeToggle() {
  $('.theme-toggle')?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  });
}

function setupLanguageButtons() {
  $$('.lang-button').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
}

function setupFilters() {
  $$('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFilter = button.dataset.filter;
      $$('.filter-button').forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      renderSkills(state.activeFilter);
    });
  });
}

function setupContactForm() {
  const form = $('#contactForm');
  const note = $('#formNote');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const t = (translations[state.lang] || translations.pt).contact.form;
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
    const subject = encodeURIComponent(t.subject);

    if (note) note.textContent = t.success;
    window.location.href = `mailto:joao.araujoo2007@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
}

function setupBackToTop() {
  const button = $('.back-to-top');
  if (!button) return;

  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => {
    button.classList.toggle('is-visible', window.scrollY > 700);
  }, { passive: true });
}

function setupModal() {
  const modal = $('#projectModal');
  const imageModal = $('#imageModal');
  $('.modal-close')?.addEventListener('click', closeProjectModal);
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeProjectModal();
  });

  const imageClose = imageModal?.querySelector('.modal-close');
  imageClose?.addEventListener('click', closeImageModal);
  imageModal?.addEventListener('click', (event) => {
    if (event.target === imageModal) closeImageModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (imageModal?.open) closeImageModal();
      else closeProjectModal();
    }
  });
}

function setupCursorGlow() {
  const glow = $('.cursor-glow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = '1';
  }, { passive: true });
}

function setupActiveNav() {
  const sections = ['inicio', 'sobre', 'habilidades', 'projetos', 'contato']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$('.nav-link').forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function animateDynamicCards(selector) {
  if (!window.gsap || !window.ScrollTrigger) return;
  window.gsap.fromTo(selector,
    { y: 34, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.06,
      scrollTrigger: {
        trigger: selector,
        start: 'top 90%'
      }
    }
  );
}

function setupHorizontalScroll() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const wrapper = $('[data-horizontal-wrapper]');
  const track = $('[data-horizontal-track]');
  if (!wrapper || !track) return;

  const existing = window.ScrollTrigger.getById('horizontal-projects');
  if (existing) existing.kill(true);
  window.gsap.killTweensOf(track);
  window.gsap.set(track, { x: 0 });

  if (window.matchMedia('(max-width: 760px)').matches) {
    window.ScrollTrigger.refresh();
    return;
  }

  const distance = Math.max(0, track.scrollWidth - window.innerWidth);
  if (distance <= 8) return;

  window.gsap.to(track, {
    x: -distance,
    ease: 'power2.inOut',
    scrollTrigger: {
      id: 'horizontal-projects',
      trigger: wrapper,
      start: 'top 50%',
      end: () => `+=${distance + Math.round(window.innerHeight * 0.4)}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.8,
      invalidateOnRefresh: true,
      fastScrollEnd: true
    }
  });

  window.ScrollTrigger.refresh();
}

function setupGsapAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo('[data-animate="down"]', { y: -28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
  gsap.fromTo('[data-animate="up"]', {
    y: 54,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.08
  });

  $$('[data-animate="left"], [data-animate="right"], [data-animate="scale"], [data-animate="fade"]').forEach((element) => {
    const direction = element.dataset.animate;
    const from = {
      left: { x: -64, opacity: 0 },
      right: { x: 64, opacity: 0 },
      scale: { scale: 0.92, opacity: 0 },
      fade: { opacity: 0 }
    }[direction];

    gsap.fromTo(element, from, {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 0.95,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 84%'
      }
    });
  });

  gsap.to('.hero-title', {
    yPercent: -10,
    opacity: 0.62,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  $$('[data-parallax]').forEach((element) => {
    const speed = Number(element.dataset.parallax) || 0.1;
    gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element.closest('section') || document.body,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });

  setupHorizontalScroll();
  ScrollTrigger.refresh();
}

function init() {
  applyTheme();
  renderSkills();
  applyTranslations();
  renderProjects();
  setupHeader();
  setupThemeToggle();
  setupLanguageButtons();
  setupFilters();
  setupContactForm();
  setupBackToTop();
  setupModal();
  setupCursorGlow();
  setupActiveNav();

  window.addEventListener('load', setupGsapAnimations);
  window.addEventListener('resize', () => {
    if (window.ScrollTrigger) {
      setupHorizontalScroll();
      window.ScrollTrigger.refresh();
    }
  });
}

init();
