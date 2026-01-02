import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Solutions() {
  const solutions = [
    {
      title: "Retail",
      slug: "retail",
      description:
        "Optimiza la experiencia del cliente con conteo de personas, análisis de comportamiento y prevención de pérdidas.",
      image: "/modern-retail-store-with-security-cameras.jpg",
    },
    {
      title: "Industria",
      slug: "industria",
      description:
        "Mejora la seguridad laboral con detección de EPP, monitoreo de zonas peligrosas y control de accesos.",
      image: "/industrial-factory-floor-with-safety-monitoring.jpg",
    },
    {
      title: "Consorcios",
      slug: "consorcios",
      description:
        "Protege edificios residenciales con control de accesos inteligente, detección de intrusos y vigilancia 24/7.",
      image: "/modern-apartment-building-lobby-with-security.jpg",
    },
    {
      title: "Rural",
      slug: "rural",
      description:
        "Vigila propiedades extensas con cámaras de largo alcance, detección perimetral y alertas en tiempo real.",
      image: "/farm-rural-property-with-surveillance.jpg",
    },
    {
      title: "Casas de Campo",
      slug: "casas-campo",
      description:
        "Seguridad completa para tu casa de campo con monitoreo remoto, detección de movimiento y control inteligente.",
      image: "/country-house-with-security-system.jpg",
    },
    {
      title: "Barrios Cerrados",
      slug: "barrios-cerrados",
      description:
        "Gestiona la seguridad del barrio con control de accesos vehicular, reconocimiento de patentes y patrullaje virtual.",
      image: "/gated-community-entrance-with-security.jpg",
    },
    {
      title: "Shopping Centers",
      slug: "shopping-centers",
      description: "Analiza el flujo de visitantes, previene incidentes y optimiza la operación con IA avanzada.",
      image: "/shopping-mall-interior-with-crowd-analytics.jpg",
    },
  ]

  return (
    <section id="soluciones" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Soluciones para Cada Industria
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
            HogarView se adapta a las necesidades específicas de tu sector con soluciones personalizadas y tecnología de
            punta.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`#industria-${solution.slug}`}>
                  <Button variant="ghost" size="sm" className="gap-2 px-0">
                    Conocer más
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
