import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import { getIndustryBySlug, getAllIndustrySlugs } from "@/lib/industries-data"

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return {
      title: "Solución no encontrada | HogarView",
    }
  }

  return {
    title: `${industry.title} | HogarView`,
    description: industry.description,
  }
}

export default async function SolutionPage({ params }) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Back button */}
          <Link href="/#soluciones">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Volver a Soluciones
            </Button>
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                  {industry.title}
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">{industry.subtitle}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Beneficios</h2>
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
                <h2 className="text-2xl font-bold">Cómo Funciona</h2>
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

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src={industry.image || "/placeholder.svg"}
                alt={industry.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
