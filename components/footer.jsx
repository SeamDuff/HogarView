import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Producto: [
      { name: "Funcionalidades", href: "#funcionalidades" },
      { name: "Precios", href: "#" },
      { name: "Integraciones", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    Soluciones: [
      { name: "Retail", href: "#industria-retail" },
      { name: "Industria", href: "#industria-industria" },
      { name: "Consorcios", href: "#industria-consorcios" },
      { name: "Rural", href: "#industria-rural" },
    ],
    Recursos: [
      { name: "Documentación", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Casos de éxito", href: "#" },
      { name: "Soporte", href: "#" },
    ],
    Empresa: [
      { name: "Sobre nosotros", href: "#sobre-nosotros" },
      { name: "Contacto", href: "#contacto" },
      { name: "Carreras", href: "#" },
      { name: "Prensa", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">HV</span>
              </div>
              <span className="text-xl font-bold text-foreground">HogarView</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Videovigilancia inteligente con IA para proteger lo que más importa.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HogarView. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
