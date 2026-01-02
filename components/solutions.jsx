import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { industries } from "@/lib/industries-data"

export default function Solutions() {
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
          {industries.map((solution) => (
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
                <Link href={`/soluciones/${solution.slug}`}>
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
