"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí puedes agregar la lógica para enviar el formulario
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Solicita una Demo Gratuita
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
              Descubre cómo HogarView puede transformar tu sistema de seguridad. Nuestro equipo te contactará en menos
              de 24 horas.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                name="company"
                placeholder="Mi Empresa S.A."
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Cuéntanos sobre tu proyecto y necesidades..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Solicitar Demo Gratuita
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
