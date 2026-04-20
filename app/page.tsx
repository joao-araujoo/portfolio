"use client"

import type React from "react"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef, createContext, useContext } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Menu,
  X,
  MapPin,
  ArrowRight,
  Sun,
  Moon,
  Globe,
  Check,
  ExternalLink,
  ArrowUp,
  Calendar,
  Users,
  Star,
  Briefcase,
  University,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  tech: string[]
  features: string[]
  github: string
  live: string
  year: string
  team: string
  status: string
}

type Theme = "light" | "dark"
type Language = "pt" | "en" | "es"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    home: "início",
    about: "sobre",
    skills: "habilidades",
    projects: "projetos",
    contact: "contato",

    // Hero Section
    hello: "Olá, eu sou",
    jobTitle: "Desenvolvedor Full-Stack & Estudante de Ciência da Computação",
    heroDescription:
      "Estudante de Ciência da Computação na UNIFESP com 4 anos de experiência em desenvolvimento full stack. Apaixonado por criar soluções digitais inovadoras e funcionais.",
    viewWork: "Ver Meu Trabalho",
    getInTouch: "Entre em Contato",

    // About Section
    aboutTitle: "Sobre Mim",
    aboutSubtitle: "Desenvolvedor apaixonado por tecnologia e inovação",
    aboutText1:
      "Estudante de Ciência da Computação na UNIFESP, atualmente estagiando como desenvolvedor Full-Stack na Appstorm.",
    aboutHighlight: "4 anos de experiência",
    aboutHighlight2: "em desenvolvimento full stack",
    currentRole: "Estagiário Full-Stack @ Appstorm",
    currentUniversity: "Ciência da Computação  @ UNIFESP",
    location: "São José dos Campos, SP",

    // Skills Section
    skillsTitle: "Habilidades & Tecnologias",
    frontendTitle: "Desenvolvimento Frontend",
    frontendDescription: "Criação de interfaces modernas e responsivas com foco na experiência do usuário",
    backendTitle: "Desenvolvimento Backend",
    backendDescription: "Desenvolvimento de APIs robustas e sistemas escaláveis",

    // Projects Section
    projectsTitle: "Projetos em Destaque",
    clickDetails: "Clique para ver detalhes",
    viewCode: "Ver Código",
    liveDemo: "Demo Ao Vivo",
    aboutProject: "Sobre Este Projeto",
    keyFeatures: "Principais Funcionalidades",
    techUsed: "Tecnologias Utilizadas",
    year: "Ano",
    status: "Status",

    // Contact Section
    contactTitle: "Vamos Trabalhar Juntos",
    contactDescription:
      "Estou sempre interessado em novas oportunidades e projetos desafiadores. Vamos conversar sobre como posso contribuir com seus projetos!",
    contactSubtitle: "Entre em Contato",
    contactText:
      "Sinta-se à vontade para entrar em contato se você tem uma oportunidade, projeto interessante, ou apenas quer trocar uma ideia sobre tecnologia.",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    sendMessage: "Enviar Mensagem",
    sending: "Enviando...",
    messageSent: "Mensagem enviada com sucesso!",
    messageError: "Erro ao enviar mensagem. Tente novamente.",
    yourName: "Seu nome",
    yourEmail: "seu@email.com",
    projectMessage: "Conte-me sobre seu projeto...",

    // Footer
    rights: "Todos os direitos reservados.",

    // Project Data
    faltometroTitle: "Faltômetro UNIFESP",
    faltometroDesc: "Sistema de controle de faltas para estudantes da UNIFESP com 150+ usuários conectados.",
    faltometroLongDesc:
      "O Faltômetro UNIFESP é uma aplicação web desenvolvida com auxílio de IA para ajudar estudantes a controlar suas faltas de forma eficiente. Atualmente em uso por mais de 150 usuários conectados, o sistema permite cadastrar disciplinas, registrar faltas e acompanhar o limite permitido por matéria, sendo uma ferramenta essencial na vida acadêmica dos estudantes.",

    gastafofooTitle: "GastaFofo",
    gastafofooDesc: "Aplicação de controle financeiro pessoal com interface moderna e recursos avançados.",
    gastafofooLongDesc:
      "GastaFofo é uma aplicação completa para controle de gastos pessoais, desenvolvida com auxílio de IA. Permite categorizar despesas, acompanhar receitas, visualizar relatórios detalhados e manter o controle total das finanças pessoais com uma interface limpa e intuitiva.",

    elegantcartTitle: "ElegantCart",
    elegantcartDesc: "Plataforma de e-commerce completa desenvolvida com stack MERN.",
    elegantcartLongDesc:
      "ElegantCart é uma plataforma de e-commerce desenvolvida com tecnologias modernas da stack MERN. Inclui catálogo de produtos, carrinho de compras, sistema de autenticação e painel administrativo completo.",

    cantinaTitle: "Cantina Bem-Estar",
    cantinaDesc: "Sistema de gestão para cantina escolar - TCC premiado em 2º lugar no INIC Jr.",
    cantinaLongDesc:
      "Sistema completo de gestão para cantina escolar desenvolvido como TCC do curso técnico. O projeto conquistou o 2º lugar no prêmio INIC Jr. Inclui controle de vendas, relatórios financeiros e interface para clientes e administradores, com um ranking de melhores clientes.",

    // Project Features
    faltaControl: "Controle inteligente de faltas por disciplina",
    disciplineManagement: "Gerenciamento de disciplinas e horários",
    alertSystem: "Sistema de alertas para limite de faltas",
    intuitiveDashboard: "Dashboard intuitivo e responsivo",
    dataVisualization: "Visualização clara dos dados de frequência",
    mobileOptimized: "Otimizado para dispositivos móveis",
    activeUsers: "150+ usuários conectados",
    aiAssisted: "Desenvolvido com auxílio de IA",

    expenseTracking: "Rastreamento detalhado de gastos",
    categorySystem: "Sistema de categorização de despesas",
    financialReports: "Relatórios financeiros detalhados",
    budgetControl: "Controle de orçamento mensal",
    dataExport: "Exportação de dados financeiros",
    responsiveDesign: "Design responsivo e moderno",

    productCatalog: "Catálogo completo de produtos",
    shoppingCart: "Carrinho de compras funcional",
    userAuth: "Sistema de autenticação de usuários",
    adminPanel: "Painel administrativo completo",
    mernStack: "Desenvolvido com stack MERN",

    stockControl: "Controle completo de estoque",
    salesManagement: "Gerenciamento de vendas",
    financialReporting: "Relatórios financeiros detalhados",
    customerInterface: "Interface amigável para clientes",
    adminDashboard: "Dashboard administrativo",
    awardWinning: "Projeto premiado em 2º lugar",

    // Status
    completed: "Concluído",
    inDevelopment: "Em Desenvolvimento",
    inUse: "Em Uso",
    soloProject: "Projeto Solo",
    teamProject: "Projeto em Equipe",
    tccProject: "Projeto de TCC",

    // Theme & Language
    theme: "Tema",
    language: "Idioma",
    portuguese: "Português",
    english: "Inglês",
    spanish: "Espanhol",
  },
  en: {
    // Navigation
    home: "home",
    about: "about",
    skills: "skills",
    projects: "projects",
    contact: "contact",

    // Hero Section
    hello: "Hello, I'm",
    jobTitle: "Full-Stack Developer & Computer Science Student",
    heroDescription:
      "Computer Science student at UNIFESP with 4 years of full stack development experience. Passionate about creating innovative and functional digital solutions.",
    viewWork: "View My Work",
    getInTouch: "Get In Touch",

    // About Section
    aboutTitle: "About Me",
    aboutSubtitle: "Developer passionate about technology and innovation",
    aboutText1:
      "Computer Science student at UNIFESP, currently interning as a Full-Stack developer at Appstorm.",
    aboutHighlight: "4 years of experience",
    aboutHighlight2: "in full stack development",
    currentRole: "Full-Stack Intern @ Appstorm",
    currentUniversity: "Computer Science @ UNIFESP",
    location: "São José dos Campos, SP",

    // Skills Section
    skillsTitle: "Skills & Technologies",
    frontendTitle: "Frontend Development",
    frontendDescription: "Creating modern and responsive interfaces focused on user experience",
    backendTitle: "Backend Development",
    backendDescription: "Developing robust APIs and scalable systems",

    // Projects Section
    projectsTitle: "Featured Projects",
    clickDetails: "Click to view details",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    aboutProject: "About This Project",
    keyFeatures: "Key Features",
    techUsed: "Technologies Used",
    year: "Year",
    status: "Status",

    // Contact Section
    contactTitle: "Let's Work Together",
    contactDescription:
      "I'm always interested in new opportunities and challenging projects. Let's talk about how I can contribute to your projects!",
    contactSubtitle: "Get In Touch",
    contactText:
      "Feel free to reach out if you have an opportunity, interesting project, or just want to chat about technology.",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",
    yourName: "Your name",
    yourEmail: "your@email.com",
    projectMessage: "Tell me about your project...",

    // Footer
    rights: "All rights reserved.",

    // Project Data
    faltometroTitle: "Faltômetro UNIFESP",
    faltometroDesc: "Absence control system for UNIFESP students with 150+ connected users.",
    faltometroLongDesc:
      "Faltômetro UNIFESP is a web application developed with AI assistance to help students efficiently control their absences. Currently in use by over 150 connected users, the system allows registering subjects, recording absences, and tracking permitted limits per subject, being an essential tool in students' academic life.",

    gastafofooTitle: "GastaFofo",
    gastafofooDesc: "Personal financial control application with modern interface and advanced features.",
    gastafofooLongDesc:
      "GastaFofo is a complete application for personal expense control, developed with AI assistance. It allows categorizing expenses, tracking income, viewing detailed reports, and maintaining total control of personal finances with a clean and intuitive interface.",

    elegantcartTitle: "ElegantCart",
    elegantcartDesc: "Complete e-commerce platform developed with MERN stack.",
    elegantcartLongDesc:
      "ElegantCart is an e-commerce platform developed with modern MERN stack technologies. It includes product catalog, shopping cart, authentication system, and complete administrative panel.",

    cantinaTitle: "Cantina Bem-Estar",
    cantinaDesc: "School cafeteria management system - Award-winning final project (2nd place at INIC Jr).",
    cantinaLongDesc:
      "Complete management system for school cafeteria developed as a technical course final project. The project won 2nd place at the INIC Jr award. It includes sales control, financial reports, and interfaces for customers and administrators, with a ranking of best customers.",

    // Project Features
    faltaControl: "Intelligent absence control per subject",
    disciplineManagement: "Subject and schedule management",
    alertSystem: "Alert system for absence limits",
    intuitiveDashboard: "Intuitive and responsive dashboard",
    dataVisualization: "Clear visualization of attendance data",
    mobileOptimized: "Optimized for mobile devices",
    activeUsers: "150+ connected users",
    aiAssisted: "Developed with AI assistance",

    expenseTracking: "Detailed expense tracking",
    categorySystem: "Expense categorization system",
    financialReports: "Detailed financial reports",
    budgetControl: "Monthly budget control",
    dataExport: "Financial data export",
    responsiveDesign: "Responsive and modern design",

    productCatalog: "Complete product catalog",
    shoppingCart: "Functional shopping cart",
    userAuth: "User authentication system",
    adminPanel: "Complete administrative panel",
    mernStack: "Developed with MERN stack",

    stockControl: "Complete inventory control",
    salesManagement: "Sales management",
    financialReporting: "Detailed financial reporting",
    customerInterface: "User-friendly customer interface",
    adminDashboard: "Administrative dashboard",
    awardWinning: "2nd place award-winning project",

    // Status
    completed: "Completed",
    inDevelopment: "In Development",
    inUse: "In Use",
    soloProject: "Solo Project",
    teamProject: "Team Project",
    tccProject: "Final Project",

    // Theme & Language
    theme: "Theme",
    language: "Language",
    portuguese: "Portuguese",
    english: "English",
    spanish: "Spanish",
  },
  es: {
    // Navigation
    home: "inicio",
    about: "acerca",
    skills: "habilidades",
    projects: "proyectos",
    contact: "contacto",

    // Hero Section
    hello: "Hola, soy",
    jobTitle: "Desarrollador Full-Stack y Estudiante de Ciencias de la Computación",
    heroDescription:
      "Estudiante de Ciencias de la Computación en UNIFESP con 4 años de experiencia en desarrollo full stack. Apasionado por crear soluciones digitales innovadoras y funcionales.",
    viewWork: "Ver Mi Trabajo",
    getInTouch: "Ponte en Contacto",

    // About Section
    aboutTitle: "Acerca de Mí",
    aboutSubtitle: "Desarrollador apasionado por la tecnología e innovación",
    aboutText1:
      "Estudiante de Ciencias de la Computación en UNIFESP, actualmente haciendo pasantía como desarrollador Full-Stack en Appstorm.",
    aboutHighlight: "4 años de experiencia",
    aboutHighlight2: "en desarrollo full stack",
    currentRole: "Pasante Full-Stack @ Appstorm",
    currentUniversity: "Ciencias de la Computación @ UNIFESP",
    location: "São José dos Campos, SP",

    // Skills Section
    skillsTitle: "Habilidades y Tecnologías",
    frontendTitle: "Desarrollo Frontend",
    frontendDescription: "Creación de interfaces modernas y responsivas enfocadas en la experiencia del usuario",
    backendTitle: "Desarrollo Backend",
    backendDescription: "Desarrollo de APIs robustas y sistemas escalables",

    // Projects Section
    projectsTitle: "Proyectos Destacados",
    clickDetails: "Haz clic para ver detalles",
    viewCode: "Ver Código",
    liveDemo: "Demo en Vivo",
    aboutProject: "Acerca de Este Proyecto",
    keyFeatures: "Características Clave",
    techUsed: "Tecnologías Utilizadas",
    year: "Año",
    status: "Estado",

    // Contact Section
    contactTitle: "Trabajemos Juntos",
    contactDescription:
      "Siempre estoy interesado en nuevas oportunidades y proyectos desafiantes. ¡Hablemos sobre cómo puedo contribuir a tus proyectos!",
    contactSubtitle: "Ponte en Contacto",
    contactText:
      "No dudes en contactarme si tienes una oportunidad, proyecto interesante, o simplemente quieres charlar sobre tecnología.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
    messageSent: "¡Mensaje enviado con éxito!",
    messageError: "Error al enviar mensaje. Inténtalo de nuevo.",
    yourName: "Tu nombre",
    yourEmail: "tu@email.com",
    projectMessage: "Cuéntame sobre tu proyecto...",

    // Footer
    rights: "Todos los derechos reservados.",

    // Project Data
    faltometroTitle: "Faltômetro UNIFESP",
    faltometroDesc: "Sistema de control de faltas para estudiantes de UNIFESP con 150+ usuarios conectados.",
    faltometroLongDesc:
      "Faltômetro UNIFESP es una aplicación web desarrollada con asistencia de IA para ayudar a los estudiantes a controlar sus faltas de manera eficiente. Actualmente en uso por más de 150 usuarios conectados, el sistema permite registrar materias, registrar faltas y seguir límites permitidos por materia, siendo una herramienta esencial en la vida académica de los estudiantes.",

    gastafofooTitle: "GastaFofo",
    gastafofooDesc: "Aplicación de control financiero personal con interfaz moderna y características avanzadas.",
    gastafofooLongDesc:
      "GastaFofo es una aplicación completa para el control de gastos personales, desarrollada con asistencia de IA. Permite categorizar gastos, seguir ingresos, ver informes detallados y mantener control total de las finanzas personales con una interfaz limpia e intuitiva.",

    elegantcartTitle: "ElegantCart",
    elegantcartDesc: "Plataforma de e-commerce completa desarrollada con stack MERN.",
    elegantcartLongDesc:
      "ElegantCart es una plataforma de e-commerce desarrollada con tecnologías modernas del stack MERN. Incluye catálogo de productos, carrito de compras, sistema de autenticación y panel administrativo completo.",

    cantinaTitle: "Cantina Bem-Estar",
    cantinaDesc: "Sistema de gestión para cantina escolar - Proyecto final premiado (2º lugar en INIC Jr).",
    cantinaLongDesc:
      "Sistema completo de gestión para cantina escolar desarrollado como proyecto final del curso técnico. El proyecto ganó el 2º lugar en el premio INIC Jr. Incluye control de ventas, informes financieros e interfaces para clientes y administradores, con un ranking de mejores clientes.",

    // Project Features
    faltaControl: "Control inteligente de faltas por materia",
    disciplineManagement: "Gestión de materias y horarios",
    alertSystem: "Sistema de alertas para límites de faltas",
    intuitiveDashboard: "Dashboard intuitivo y responsivo",
    dataVisualization: "Visualización clara de datos de asistencia",
    mobileOptimized: "Optimizado para dispositivos móviles",
    activeUsers: "150+ usuarios conectados",
    aiAssisted: "Desarrollado con asistencia de IA",

    expenseTracking: "Seguimiento detallado de gastos",
    categorySystem: "Sistema de categorización de gastos",
    financialReports: "Informes financieros detallados",
    budgetControl: "Control de presupuesto mensual",
    dataExport: "Exportación de datos financieros",
    responsiveDesign: "Diseño responsivo y moderno",

    productCatalog: "Catálogo completo de productos",
    shoppingCart: "Carrito de compras funcional",
    userAuth: "Sistema de autenticación de usuarios",
    adminPanel: "Panel administrativo completo",
    mernStack: "Desarrollado con stack MERN",

    stockControl: "Control completo de inventario",
    salesManagement: "Gestión de ventas",
    financialReporting: "Informes financieros detallados",
    customerInterface: "Interfaz amigable para clientes",
    adminDashboard: "Dashboard administrativo",
    awardWinning: "Proyecto premiado en 2º lugar",

    // Status
    completed: "Completado",
    inDevelopment: "En Desarrollo",
    inUse: "En Uso",
    soloProject: "Proyecto Solo",
    teamProject: "Proyecto en Equipo",
    tccProject: "Proyecto Final",

    // Theme & Language
    theme: "Tema",
    language: "Idioma",
    portuguese: "Portugués",
    english: "Inglés",
    spanish: "Español",
  },
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}

const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[Language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Magnetic Button Component
function MagneticButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.15
    const y = (clientY - top - height / 2) * 0.15
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Floating Particles Background
function FloatingParticles({ theme }: { theme: Theme }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-300"}`}
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Tech Logo Component with real SVG logos
function TechLogo({ name, color }: { name: string; color: string }) {
  const logos: Record<string, React.ReactNode> = {
    React: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3178C6">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06B6D4">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#339933">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#47A248">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" aria-label="MySQL logo">
        <ellipse cx="12" cy="5.5" rx="6.5" ry="2.5" fill="#4479A1" opacity="0.2" />
        <path
          d="M5.5 5.5v5.5C5.5 12.38 8.41 13.5 12 13.5s6.5-1.12 6.5-2.5V5.5"
          stroke="#4479A1"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 11v5.5C5.5 17.88 8.41 19 12 19s6.5-1.12 6.5-2.5V11"
          stroke="#4479A1"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <ellipse cx="12" cy="5.5" rx="6.5" ry="2.5" stroke="#4479A1" strokeWidth="1.5" />
        <path d="M9 9.25h6" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 14.75h6" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
    "REST APIs": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF6C37">
        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.374-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" />
      </svg>
    ),
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {logos[name] || (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
          style={{ backgroundColor: color }}
        >
          {name.charAt(0)}
        </div>
      )}
      <span className="text-xs font-medium">{name}</span>
    </div>
  )
}

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const { scrollYProgress } = useScroll()
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      const sections = ["home", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setSubmitStatus("success")
          ; (e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const getProjectFeatures = (projectId: number) => {
    const featureKeys = {
      1: [
        "faltaControl",
        "disciplineManagement",
        "alertSystem",
        "intuitiveDashboard",
        "dataVisualization",
        "mobileOptimized",
        "activeUsers",
        "aiAssisted",
      ],
      2: [
        "expenseTracking",
        "categorySystem",
        "financialReports",
        "budgetControl",
        "dataExport",
        "responsiveDesign",
        "aiAssisted",
      ],
      3: ["productCatalog", "shoppingCart", "userAuth", "adminPanel", "mernStack"],
      4: [
        "stockControl",
        "salesManagement",
        "financialReporting",
        "customerInterface",
        "adminDashboard",
        "awardWinning",
      ],
    }
    return featureKeys[projectId as keyof typeof featureKeys]?.map((key) => t(key)) || []
  }

  const projects: Project[] = [
    {
      id: 1,
      title: t("faltometroTitle"),
      description: t("faltometroDesc"),
      longDescription: t("faltometroLongDesc"),
      image: "/images/faltometro - home.png",
      images: [
        "/images/faltometro - home.png",
        "/images/faltometro - calendário.png",
        "/images/faltometro - insights.png",
        "/images/faltometro - diario de aulas.png",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      features: getProjectFeatures(1),
      github: "https://github.com/joao-araujoo",
      live: "https://faltometro-unifesp.netlify.app/",
      year: "2025",
      team: t("soloProject"),
      status: t("inUse"),
    },
    {
      id: 2,
      title: t("gastafofooTitle"),
      description: t("gastafofooDesc"),
      longDescription: t("gastafofooLongDesc"),
      image: "/images/gastafofo-dashboard.png",
      images: [
        "/images/gastafofo-dashboard.png",
        "/images/gastafofo-categorias.png",
        "/images/gastafofo-transacoes.png",
        "/images/gastafofo-orcamentos.png",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage"],
      features: getProjectFeatures(2),
      github: "https://github.com/joao-araujoo",
      live: "https://gastafofo.netlify.app/",
      year: "2025",
      team: t("soloProject"),
      status: t("completed"),
    },
    {
      id: 3,
      title: t("elegantcartTitle"),
      description: t("elegantcartDesc"),
      longDescription: t("elegantcartLongDesc"),
      image: "/images/elegantcart-catalog.png",
      images: [
        "/images/elegantcart-catalog.png",
        "/images/elegantcart-produto.png",
        "/images/elegantcart-carrinho.png",
        "/placeholder.svg?height=400&width=600&text=ElegantCart+Checkout",
      ],
      tech: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
      features: getProjectFeatures(3),
      github: "https://github.com/joao-araujoo/Projects/tree/main/%C3%89l%C3%A9gantCart",
      live: "https://elegantcart.vercel.app/",
      year: "2023",
      team: t("soloProject"),
      status: t("completed"),
    },
    {
      id: 4,
      title: t("cantinaTitle"),
      description: t("cantinaDesc"),
      longDescription: t("cantinaLongDesc"),
      image: "/images/cantina-home.png",
      images: [
        "/images/cantina-home.png",
        "/images/cantina-pedidos.png",
        "/images/cantina-kanban.png",
        "/images/cantina-dashboard.png",
      ],
      tech: ["React", "Node.js", "Express", "Sequelize", "MySQL", "Bootstrap"],
      features: getProjectFeatures(4),
      github: "https://github.com/joao-araujoo/cantina-bem-estar",
      live: "https://cantina-bem-estar.vercel.app/",
      year: "2024",
      team: t("teamProject"),
      status: t("completed"),
    },
  ]

  const languageOptions = [
    { code: "pt" as Language, name: t("portuguese"), flag: "BR" },
    { code: "en" as Language, name: t("english"), flag: "US" },
    { code: "es" as Language, name: t("spanish"), flag: "ES" },
  ]

  const skills = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "MySQL", color: "#4479A1" },
    { name: "REST APIs", color: "#FF6C37" },
    { name: "Git", color: "#F05032" },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className={`min-h-screen transition-colors duration-500 ${theme === "dark" ? "bg-neutral-950 text-neutral-50" : "bg-neutral-50 text-neutral-950"
        }`}
    >
      {/* Grain Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-colors duration-500 ${theme === "dark" ? "bg-neutral-950/80 border-neutral-800" : "bg-neutral-50/80 border-neutral-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.jpg"
                alt="JA Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative text-sm tracking-wide uppercase transition-colors duration-300 ${activeSection === item
                    ? theme === "dark"
                      ? "text-neutral-50"
                      : "text-neutral-950"
                    : theme === "dark"
                      ? "text-neutral-500 hover:text-neutral-50"
                      : "text-neutral-500 hover:text-neutral-950"
                    }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {t(item)}
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-0 right-0 h-px ${theme === "dark" ? "bg-neutral-50" : "bg-neutral-950"
                        }`}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  )}
                </motion.button>
              ))}

              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-neutral-800">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors duration-300 ${theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-200"
                    }`}
                  aria-label={t("theme")}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`p-2 rounded-full transition-colors duration-300 ${theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-200"
                        }`}
                      aria-label={t("language")}
                    >
                      <Globe size={16} />
                    </motion.button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className={`${theme === "dark" ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-200"}`}
                  >
                    {languageOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.code}
                        onClick={() => setLanguage(option.code)}
                        className={`flex items-center justify-between cursor-pointer text-sm ${theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-100"
                          }`}
                      >
                        <span className="font-mono text-xs mr-3">{option.flag}</span>
                        <span>{option.name}</span>
                        {language === option.code && <Check size={14} className="ml-2 opacity-50" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-200"}`}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-200"}`}
                  >
                    <Globe size={16} />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className={`${theme === "dark" ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-200"}`}
                >
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.code}
                      onClick={() => setLanguage(option.code)}
                      className={`flex items-center cursor-pointer text-sm ${theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-100"
                        }`}
                    >
                      <span className="font-mono text-xs mr-2">{option.flag}</span>
                      <span>{option.name}</span>
                      {language === option.code && <Check size={14} className="ml-auto opacity-50" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`md:hidden border-t ${theme === "dark" ? "bg-neutral-950 border-neutral-800" : "bg-neutral-50 border-neutral-200"
                }`}
            >
              <div className="px-6 py-6 space-y-4">
                {["home", "about", "skills", "projects", "contact"].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left text-lg font-light tracking-wide uppercase ${theme === "dark" ? "text-neutral-400 hover:text-neutral-50" : "text-neutral-600 hover:text-neutral-950"
                      }`}
                  >
                    {t(item)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - With Floating Particles Background */}
      <section
        id="home"
        ref={heroRef}
        className={`relative min-h-screen flex items-center overflow-hidden ${theme === "dark" ? "bg-neutral-950" : "bg-neutral-50"
          }`}
      >
        {/* Floating Particles Background */}
        <FloatingParticles theme={theme} />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute inset-0 ${theme === "dark" ? "opacity-[0.03]" : "opacity-[0.05]"}`}
            style={{
              backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px), linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Radial Gradient Orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/5"
            }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${theme === "dark" ? "bg-purple-500/10" : "bg-purple-500/5"
            }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
            {/* Left side - Small intro text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-3 order-2 lg:order-1"
            >
              <p className={`text-sm tracking-widest uppercase mb-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                {t("hello")}
              </p>
              <p className={`text-sm leading-relaxed max-w-xs ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                {t("heroDescription")}
              </p>

              <div className="flex gap-4 mt-8">
                {[
                  { icon: Github, href: "https://github.com/joao-araujoo", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/joao-araujoo/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:joao.araujoo2007@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`p-2 rounded-full border transition-colors duration-300 ${theme === "dark"
                      ? "border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-neutral-50"
                      : "border-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-neutral-950"
                      }`}
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right side - Large typography */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-9 order-1 lg:order-2"
            >
              <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.85] tracking-tighter">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  JOÃO
                </motion.span>
                <motion.span
                  className={`block ${theme === "dark" ? "text-neutral-600" : "text-neutral-400"}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  ARAUJO
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className={`mt-8 text-sm tracking-widest uppercase ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}
              >
                {t("jobTitle")}
              </motion.p>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap gap-4 mt-16"
          >
            <MagneticButton
              onClick={() => scrollToSection("projects")}
              className={`group px-8 py-4 text-sm tracking-wide uppercase font-medium transition-all duration-500 ${theme === "dark"
                ? "bg-neutral-50 text-neutral-950 hover:bg-neutral-200"
                : "bg-neutral-950 text-neutral-50 hover:bg-neutral-800"
                }`}
            >
              {t("viewWork")}
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-4 text-sm tracking-wide uppercase font-medium border transition-all duration-500 ${theme === "dark"
                ? "border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-neutral-50"
                : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-950"
                }`}
            >
              {t("getInTouch")}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className={`w-5 h-5 ${theme === "dark" ? "text-neutral-600" : "text-neutral-400"}`} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Compact Creative Layout */}
      <section id="about" className="py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left column - Section label */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <p className={`text-xs tracking-widest uppercase ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                01 / {t("about")}
              </p>
            </motion.div>

            {/* Middle column - Small Image + Creative Text */}
            <motion.div variants={itemVariants} className="lg:col-span-10">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                {/* Small Image */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="relative w-32 h-32 md:w-40 md:h-40"
                  >
                    <div className={`absolute -inset-2 border ${theme === "dark" ? "border-neutral-800" : "border-neutral-300"} rounded-sm`} />
                    <img
                      src="/images/joao-photo.png"
                      alt="João Araujo"
                      className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </div>

                {/* Creative Text Layout */}
                <div className="flex-1 space-y-6">
                  {/* Large highlight text */}
                  <div>
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-none">
                      {t("aboutHighlight")}
                    </h2>
                    <p className={`text-xl lg:text-2xl mt-2 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                      {t("aboutHighlight2")}
                    </p>
                  </div>

                  {/* Short bio */}
                  <p className={`text-base leading-relaxed max-w-lg ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                    {t("aboutText1")}
                  </p>

                  {/* Info cards */}
                  <div className="flex flex-wrap gap-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme === "dark" ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-neutral-100"
                      }`}>
                      <Briefcase size={14} className={theme === "dark" ? "text-blue-400" : "text-blue-600"} />
                      <span className="text-sm font-medium">{t("currentRole")}</span>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme === "dark" ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-neutral-100"
                      }`}>
                      <University size={14} className={theme === "dark" ? "text-green-600" : "text-green-800"} />
                      <span className="text-sm font-medium">{t("currentUniversity")}</span>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme === "dark" ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-neutral-100"
                      }`}>
                      <MapPin size={14} className={theme === "dark" ? "text-neutral-500" : "text-neutral-500"} />
                      <span className="text-sm">{t("location")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Colorful with Real Logos */}
      <section
        id="skills"
        className={`py-32 lg:py-48 px-6 lg:px-12 ${theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="flex items-start justify-between mb-16">
              <div>
                <p className={`text-xs tracking-widest uppercase mb-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                  02 / {t("skills")}
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">{t("skillsTitle")}</h2>
              </div>
            </motion.div>

            {/* Skills Grid with Real Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-xl border text-center transition-all duration-500 ${theme === "dark"
                    ? "bg-neutral-950 border-neutral-800 hover:border-neutral-600 hover:shadow-lg hover:shadow-neutral-900/50"
                    : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50"
                    }`}
                >
                  <TechLogo name={skill.name} color={skill.color} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Editorial Cards */}
      <section id="projects" className="py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <p className={`text-xs tracking-widest uppercase mb-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                03 / {t("projects")}
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">{t("projectsTitle")}</h2>
            </motion.div>

            {/* Projects Grid */}
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer group ${index % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative overflow-hidden rounded-sm">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-[16/10] object-cover"
                        />
                      </motion.div>
                      <div className={`absolute inset-0 ${theme === "dark" ? "bg-neutral-950/0 group-hover:bg-neutral-950/10" : "bg-neutral-50/0 group-hover:bg-neutral-50/10"} transition-colors duration-500`} />

                      {/* Quick action buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          className={`p-2 rounded-full backdrop-blur-sm ${theme === "dark" ? "bg-neutral-900/80 text-neutral-300" : "bg-white/80 text-neutral-700"
                            }`}
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          className={`p-2 rounded-full backdrop-blur-sm ${theme === "dark" ? "bg-neutral-900/80 text-neutral-300" : "bg-white/80 text-neutral-700"
                            }`}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                    <p className={`text-xs tracking-widest uppercase mb-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                      {project.year}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:underline underline-offset-4 decoration-1">
                      {project.title}
                    </h3>
                    <p className={`text-base leading-relaxed mb-6 ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                      {project.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs font-normal ${theme === "dark" ? "border-neutral-700 text-neutral-400" : "border-neutral-300 text-neutral-600"
                            }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className={`mt-6 text-sm flex items-center gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""} ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                      {t("clickDetails")}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent
            className={`max-w-4xl max-h-[90vh] overflow-y-auto mx-4 rounded-sm ${theme === "dark" ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-200"
              }`}
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Project Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-sm"
                  />
                ))}
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className={`w-4 h-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`} />
                  <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-600"}>
                    {t("year")}: {selectedProject.year}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className={`w-4 h-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`} />
                  <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-600"}>{selectedProject.team}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className={`w-4 h-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`} />
                  <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-600"}>
                    {t("status")}: {selectedProject.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">{t("aboutProject")}</h3>
                <p className={`leading-relaxed ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">{t("keyFeatures")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className={`w-1 h-1 rounded-full mt-2 ${theme === "dark" ? "bg-neutral-500" : "bg-neutral-400"}`} />
                      <span className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">{t("techUsed")}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${theme === "dark" ? "border-neutral-700 text-neutral-400" : "border-neutral-300 text-neutral-600"}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className={`flex space-x-4 pt-4 border-t ${theme === "dark" ? "border-neutral-800" : "border-neutral-200"}`}>
                <Button
                  asChild
                  className={`${theme === "dark"
                    ? "bg-neutral-50 text-neutral-950 hover:bg-neutral-200"
                    : "bg-neutral-950 text-neutral-50 hover:bg-neutral-800"
                    }`}
                >
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {t("viewCode")}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className={`${theme === "dark"
                    ? "border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                    : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                    }`}
                >
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("liveDemo")}
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-32 lg:py-48 px-6 lg:px-12 ${theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
          >
            {/* Left column - Section label */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <p className={`text-xs tracking-widest uppercase ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                04 / {t("contact")}
              </p>
            </motion.div>

            {/* Middle column - Text */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {t("contactTitle")}
              </h2>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                {t("contactDescription")}
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "joao.araujoo2007@gmail.com", href: "mailto:joao.araujoo2007@gmail.com" },
                  { icon: Github, label: "GitHub", value: "github.com/joao-araujoo", href: "https://github.com/joao-araujoo" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/joao-araujoo", href: "https://www.linkedin.com/in/joao-araujoo/" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`flex items-center gap-4 p-4 rounded-sm border transition-all duration-300 ${theme === "dark"
                      ? "bg-neutral-950 border-neutral-800 hover:border-neutral-700"
                      : "bg-white border-neutral-200 hover:border-neutral-300"
                      }`}
                  >
                    <Icon size={18} className={theme === "dark" ? "text-neutral-500" : "text-neutral-500"} />
                    <div>
                      <p className={`text-xs uppercase tracking-wider ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                        {label}
                      </p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right column - Form */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-xs uppercase tracking-wider mb-2 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t("yourName")}
                    className={`w-full px-4 py-3 text-sm rounded-sm border focus:outline-none focus:ring-1 transition-all duration-300 ${theme === "dark"
                      ? "bg-neutral-950 border-neutral-800 text-neutral-50 placeholder-neutral-600 focus:ring-neutral-700 focus:border-neutral-700"
                      : "bg-white border-neutral-200 text-neutral-950 placeholder-neutral-400 focus:ring-neutral-300 focus:border-neutral-300"
                      }`}
                  />
                </div>
                <div>
                  <label className={`block text-xs uppercase tracking-wider mb-2 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t("yourEmail")}
                    className={`w-full px-4 py-3 text-sm rounded-sm border focus:outline-none focus:ring-1 transition-all duration-300 ${theme === "dark"
                      ? "bg-neutral-950 border-neutral-800 text-neutral-50 placeholder-neutral-600 focus:ring-neutral-700 focus:border-neutral-700"
                      : "bg-white border-neutral-200 text-neutral-950 placeholder-neutral-400 focus:ring-neutral-300 focus:border-neutral-300"
                      }`}
                  />
                </div>
                <div>
                  <label className={`block text-xs uppercase tracking-wider mb-2 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
                    {t("message")}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={t("projectMessage")}
                    className={`w-full px-4 py-3 text-sm rounded-sm border focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${theme === "dark"
                      ? "bg-neutral-950 border-neutral-800 text-neutral-50 placeholder-neutral-600 focus:ring-neutral-700 focus:border-neutral-700"
                      : "bg-white border-neutral-200 text-neutral-950 placeholder-neutral-400 focus:ring-neutral-300 focus:border-neutral-300"
                      }`}
                  />
                </div>
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-sm uppercase tracking-wider font-medium transition-all duration-500 disabled:opacity-50 ${theme === "dark"
                    ? "bg-neutral-50 text-neutral-950 hover:bg-neutral-200"
                    : "bg-neutral-950 text-neutral-50 hover:bg-neutral-800"
                    }`}
                >
                  {isSubmitting ? t("sending") : t("sendMessage")}
                </MagneticButton>
                {submitStatus === "success" && (
                  <p className="text-sm text-center text-green-500">{t("messageSent")}</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-center text-red-500">{t("messageError")}</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 lg:px-12 border-t ${theme === "dark" ? "border-neutral-800" : "border-neutral-200"}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="JA Logo"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <p className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
              © 2026 João Araujo. {t("rights")}
            </p>
          </div>
          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com/joao-araujoo" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/joao-araujoo/" },
              { icon: Mail, href: "mailto:joao.araujoo2007@gmail.com" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className={theme === "dark" ? "text-neutral-500 hover:text-neutral-50" : "text-neutral-500 hover:text-neutral-950"}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -2 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full border transition-all duration-300 z-40 ${theme === "dark"
              ? "bg-neutral-900 border-neutral-800 hover:border-neutral-700 text-neutral-300"
              : "bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700"
              }`}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-px z-50 ${theme === "dark" ? "bg-neutral-50" : "bg-neutral-950"}`}
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    </ThemeProvider>
  )
}
