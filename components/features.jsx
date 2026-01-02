import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, AlertTriangle, Shield, TrendingUp, Video, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Conteo de Personas",
      description:
        "Analiza el flujo de personas en tiempo real para optimizar espacios y mejorar la experiencia del cliente.",
    },
    {
      icon: Shield,
      title: "Control de Accesos",
      description: "Gestiona y monitorea accesos con reconocimiento facial y detección de intrusos automática.",
    },
    {
      icon: AlertTriangle,
      title: "Detección de EPP",
      description: "Verifica el uso correcto de equipos de protección personal en áreas industriales y de trabajo.",
    },
    {
      icon: TrendingUp,
      title: "Mapas de Calor",
      description: "Visualiza patrones de movimiento y áreas de mayor actividad para tomar decisiones informadas.",
    },
    {
      icon: Video,
      title: "Análisis en Tiempo Real",
      description: "Procesa video en vivo con IA para detectar eventos, comportamientos y anomalías al instante.",
    },
    {
      icon: Zap,
      title: "Alertas Inteligentes",
      description: "Recibe notificaciones automáticas cuando se detecten eventos importantes o situaciones de riesgo.",
    },
  ]

  return (
    <section id="funcionalidades" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Funcionalidades Potenciadas por IA
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
            Aprovecha el poder de la inteligencia artificial para transformar tu videovigilancia en un sistema
            inteligente y proactivo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
