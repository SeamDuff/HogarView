import { TrendingUp, Shield, Users, Eye, AlertTriangle, Camera } from "lucide-react"

export const industries = [
  {
    id: "retail",
    slug: "retail",
    title: "Retail",
    subtitle: "Optimiza tu tienda con inteligencia artificial",
    description:
      "Optimiza la experiencia del cliente con conteo de personas, análisis de comportamiento y prevención de pérdidas.",
    image: "/modern-retail-store-with-security-cameras.jpg",
    benefits: [
      {
        icon: Users,
        title: "Conteo de Personas",
        description: "Analiza el flujo de clientes en tiempo real para optimizar horarios de personal y promociones.",
      },
      {
        icon: TrendingUp,
        title: "Mapas de Calor",
        description: "Identifica las zonas más visitadas para mejorar la disposición de productos y aumentar ventas.",
      },
      {
        icon: Shield,
        title: "Prevención de Pérdidas",
        description: "Detecta comportamientos sospechosos y previene robos con alertas automáticas.",
      },
      {
        icon: Eye,
        title: "Análisis de Comportamiento",
        description:
          "Comprende cómo interactúan los clientes con tus productos para mejorar la experiencia de compra.",
      },
    ],
    howItWorks: [
      "Las cámaras capturan video en tiempo real de toda la tienda",
      "La IA analiza el flujo de personas y genera mapas de calor",
      "El sistema detecta comportamientos anómalos y envía alertas",
      "Obtienes reportes detallados para tomar decisiones de negocio",
    ],
  },
  {
    id: "industria",
    slug: "industria",
    title: "Industria",
    subtitle: "Seguridad laboral con tecnología de punta",
    description:
      "Mejora la seguridad laboral con detección de EPP, monitoreo de zonas peligrosas y control de accesos.",
    image: "/industrial-factory-floor-with-safety-monitoring.jpg",
    benefits: [
      {
        icon: AlertTriangle,
        title: "Detección de EPP",
        description: "Verifica automáticamente el uso de cascos, guantes y otros equipos de protección personal.",
      },
      {
        icon: Shield,
        title: "Zonas Peligrosas",
        description: "Monitorea áreas restringidas y envía alertas cuando alguien ingresa sin autorización.",
      },
      {
        icon: Camera,
        title: "Control de Accesos",
        description: "Gestiona quién puede acceder a cada zona de la planta industrial.",
      },
      {
        icon: Eye,
        title: "Prevención de Accidentes",
        description: "Detecta situaciones de riesgo antes de que ocurran accidentes laborales.",
      },
    ],
    howItWorks: [
      "Las cámaras monitorean todas las áreas de trabajo 24/7",
      "La IA detecta si los trabajadores usan el EPP correcto",
      "El sistema alerta cuando alguien ingresa a zonas peligrosas",
      "Genera reportes de cumplimiento de seguridad laboral",
    ],
  },
  {
    id: "consorcios",
    slug: "consorcios",
    title: "Consorcios",
    subtitle: "Seguridad inteligente para edificios residenciales",
    description:
      "Protege edificios residenciales con control de accesos inteligente, detección de intrusos y vigilancia 24/7.",
    image: "/modern-apartment-building-lobby-with-security.jpg",
    benefits: [
      {
        icon: Shield,
        title: "Control de Accesos",
        description: "Reconocimiento facial para residentes y registro automático de visitas.",
      },
      {
        icon: Camera,
        title: "Vigilancia 24/7",
        description: "Monitoreo continuo de áreas comunes, entradas y estacionamientos.",
      },
      {
        icon: AlertTriangle,
        title: "Detección de Intrusos",
        description: "Alertas inmediatas cuando se detecta movimiento sospechoso en horarios no habituales.",
      },
      {
        icon: Eye,
        title: "Grabación en la Nube",
        description: "Almacenamiento seguro de video con acceso desde cualquier dispositivo.",
      },
    ],
    howItWorks: [
      "Cámaras instaladas en lobby, ascensores, pasillos y áreas comunes",
      "Sistema de reconocimiento facial para residentes autorizados",
      "Detección automática de personas no autorizadas",
      "Alertas en tiempo real al administrador y seguridad",
    ],
  },
  {
    id: "rural",
    slug: "rural",
    title: "Rural",
    subtitle: "Protección para propiedades extensas",
    description:
      "Vigila propiedades extensas con cámaras de largo alcance, detección perimetral y alertas en tiempo real.",
    image: "/farm-rural-property-with-surveillance.jpg",
    benefits: [
      {
        icon: Camera,
        title: "Cámaras de Largo Alcance",
        description: "Cobertura completa de grandes extensiones de terreno con cámaras PTZ.",
      },
      {
        icon: Shield,
        title: "Detección Perimetral",
        description: "Alertas cuando alguien cruza los límites de tu propiedad.",
      },
      {
        icon: Eye,
        title: "Visión Nocturna",
        description: "Monitoreo efectivo las 24 horas incluso en total oscuridad.",
      },
      {
        icon: AlertTriangle,
        title: "Alertas en Tiempo Real",
        description: "Notificaciones instantáneas a tu celular ante cualquier movimiento detectado.",
      },
    ],
    howItWorks: [
      "Instalación estratégica de cámaras en puntos clave del perímetro",
      "Sistema de detección inteligente que diferencia personas de animales",
      "Alertas automáticas enviadas a tu smartphone",
      "Acceso remoto para revisar las cámaras desde cualquier lugar",
    ],
  },
  {
    id: "casas-campo",
    slug: "casas-campo",
    title: "Casas de Campo",
    subtitle: "Seguridad completa para tu segunda residencia",
    description:
      "Seguridad completa para tu casa de campo con monitoreo remoto, detección de movimiento y control inteligente.",
    image: "/country-house-with-security-system.jpg",
    benefits: [
      {
        icon: Eye,
        title: "Monitoreo Remoto",
        description: "Revisa tu casa de campo desde cualquier lugar a través de tu smartphone.",
      },
      {
        icon: AlertTriangle,
        title: "Detección de Movimiento",
        description: "Recibe alertas cuando se detecte actividad en tu ausencia.",
      },
      {
        icon: Shield,
        title: "Control Inteligente",
        description: "Integración con sistemas de alarmas y cerraduras inteligentes.",
      },
      {
        icon: Camera,
        title: "Grabación Continua",
        description: "Almacenamiento seguro en la nube con acceso a grabaciones históricas.",
      },
    ],
    howItWorks: [
      "Cámaras instaladas en entradas, jardín y áreas comunes",
      "Sistema conectado a internet para acceso remoto",
      "Detección inteligente de movimiento con filtro de falsas alarmas",
      "Notificaciones instantáneas con captura de video del evento",
    ],
  },
  {
    id: "barrios-cerrados",
    slug: "barrios-cerrados",
    title: "Barrios Cerrados",
    subtitle: "Gestión de seguridad para comunidades privadas",
    description:
      "Gestiona la seguridad del barrio con control de accesos vehicular, reconocimiento de patentes y patrullaje virtual.",
    image: "/gated-community-entrance-with-security.jpg",
    benefits: [
      {
        icon: Camera,
        title: "Reconocimiento de Patentes",
        description: "Identificación automática de vehículos autorizados en las entradas.",
      },
      {
        icon: Users,
        title: "Control de Visitas",
        description: "Registro digital de todos los visitantes con foto y horario de ingreso/egreso.",
      },
      {
        icon: Shield,
        title: "Patrullaje Virtual",
        description: "Monitoreo inteligente de calles y espacios comunes del barrio.",
      },
      {
        icon: TrendingUp,
        title: "Reportes de Actividad",
        description: "Estadísticas detalladas del tráfico vehicular y peatonal.",
      },
    ],
    howItWorks: [
      "Cámaras con lectura de patentes en todas las entradas",
      "Sistema de gestión centralizado para seguridad",
      "Base de datos de residentes y vehículos autorizados",
      "Alertas automáticas ante vehículos no registrados",
    ],
  },
  {
    id: "shopping-centers",
    slug: "shopping-centers",
    title: "Shopping Centers",
    subtitle: "Optimización y seguridad para centros comerciales",
    description: "Analiza el flujo de visitantes, previene incidentes y optimiza la operación con IA avanzada.",
    image: "/shopping-mall-interior-with-crowd-analytics.jpg",
    benefits: [
      {
        icon: Users,
        title: "Análisis de Flujo",
        description: "Entiende cómo se mueven los visitantes para optimizar la distribución de locales.",
      },
      {
        icon: TrendingUp,
        title: "Métricas de Ocupación",
        description: "Monitorea la capacidad en tiempo real para gestionar mejor el espacio.",
      },
      {
        icon: Shield,
        title: "Prevención de Incidentes",
        description: "Detecta situaciones de riesgo y aglomeraciones peligrosas.",
      },
      {
        icon: Eye,
        title: "Gestión de Estacionamiento",
        description: "Optimiza el uso de espacios de estacionamiento con detección de disponibilidad.",
      },
    ],
    howItWorks: [
      "Red de cámaras distribuidas por todo el centro comercial",
      "Análisis de IA para conteo de personas y flujo de tráfico",
      "Dashboard centralizado para administración",
      "Reportes diarios, semanales y mensuales de actividad",
    ],
  },
]

export function getIndustryBySlug(slug) {
  return industries.find((industry) => industry.slug === slug)
}

export function getAllIndustrySlugs() {
  return industries.map((industry) => industry.slug)
}
