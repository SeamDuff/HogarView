import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import IndustryDetails from "@/components/industry-details"
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
      <IndustryDetails />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
