import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import About from "@/components/about"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
