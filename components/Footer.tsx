"use client";

import { Zap } from "lucide-react";

const WA_LINK =
  "https://wa.me/5491161215290?text=Hola%20InfraRed%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20instalaci%C3%B3n...";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#27272E] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8321F] rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Infra<span className="text-[#E8321F]">Red</span>
              </span>
            </div>
            <p className="text-[#71717A] text-sm leading-relaxed max-w-xs">
              Infraestructura tecnológica premium para hogares y PyMEs. Sin cables a la vista, sin comprometer la estética.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-[#71717A] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contacto directo</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1DAF56] transition-colors mb-3"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              +54 9 11 6121-5290
            </a>
            <p className="text-[#71717A] text-sm">Buenos Aires y GBA</p>
            <p className="text-[#71717A] text-sm">Lun–Sáb, 8:00 a 20:00</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#27272E] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#71717A] text-xs">
            © {new Date().getFullYear()} InfraRed. Todos los derechos reservados.
          </p>
          <p className="text-[#71717A] text-xs">
            Infraestructura tecnológica premium · Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
