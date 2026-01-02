import { CheckCircle } from "lucide-react"

export default function About() {
  const benefits = [
    "Instalación rápida y sencilla en menos de 5 minutos",
    "Compatible con cámaras existentes de cualquier marca",
    "Análisis de video con IA en tiempo real",
    "Alertas inteligentes y notificaciones instantáneas",
    "Dashboard web y app móvil para monitoreo remoto",
    "Soporte técnico 24/7 en español",
  ]

  return (
    <section id="sobre-nosotros" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Sobre HogarView</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              HogarView es una plataforma de videovigilancia inteligente que utiliza inteligencia artificial para
              transformar cámaras de seguridad comunes en sistemas avanzados de análisis y detección.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Fundada con la misión de hacer la tecnología de seguridad accesible para todos, HogarView combina años de
              experiencia en visión por computadora con las últimas innovaciones en IA para ofrecer soluciones que
              realmente marcan la diferencia.
            </p>
            <div className="grid gap-4 pt-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="relative h-full flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">10K+</div>
                <div className="text-xl font-semibold mb-2">Cámaras Conectadas</div>
                <div className="text-muted-foreground">En toda Latinoamérica</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
