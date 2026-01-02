import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Users, Eye, AlertTriangle, Camera } from "lucide-react"
import Image from "next/image"

export default function IndustryDetails() {
  const industries = [
    {
      id: "retail",
      title: "Retail",
      subtitle: "Optimiza tu tienda con inteligencia artificial",
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
      title: "Industria",
      subtitle: "Seguridad laboral con tecnología de punta",
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
      title: "Consorcios",
      subtitle: "Seguridad inteligente para edificios residenciales",
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
      title: "Rural",
      subtitle: "Protección para propiedades extensas",
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
      title: "Casas de Campo",
      subtitle: "Seguridad completa para tu segunda residencia",
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
      title: "Barrios Cerrados",
      subtitle: "Gestión de seguridad para comunidades privadas",
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
      title: "Shopping Centers",
      subtitle: "Optimización y seguridad para centros comerciales",
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

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto px-4 space-y-32">
        {industries.map((industry, index) => (
          <div key={industry.id} id={`industria-${industry.id}`} className="scroll-mt-20">
            <div
              className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                    {industry.title}
                  </h2>
                  <p className="text-xl text-muted-foreground text-pretty">{industry.subtitle}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Beneficios</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {industry.benefits.map((benefit) => {
                      const Icon = benefit.icon
                      return (
                        <Card key={benefit.title} className="border-border">
                          <CardHeader className="pb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{benefit.title}</CardTitle>
                            <CardDescription className="text-sm">{benefit.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Cómo Funciona</h3>
                  <div className="space-y-3">
                    {industry.howItWorks.map((step, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {idx + 1}
                        </div>
                        <p className="text-muted-foreground pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Image src={industry.image || "/placeholder.svg"} alt={industry.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
