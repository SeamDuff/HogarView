import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium self-start">
              🚀 Videovigilancia Inteligente con IA
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Protección Inteligente para tu <span className="text-primary">Negocio</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-xl">
              Transforma tus cámaras de seguridad en un sistema inteligente con análisis de video en tiempo real,
              detección de eventos y automatización impulsada por IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Comenzar ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Play className="h-4 w-4" />
                Ver demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoreo</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">5min</div>
                <div className="text-sm text-muted-foreground">Setup</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
            <Image
              src="/modern-security-surveillance-dashboard-with-ai-ana.jpg"
              alt="Dashboard de Seguridad HogarView"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
