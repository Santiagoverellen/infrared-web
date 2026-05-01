"use client";

import { motion, type Variants } from "framer-motion";
import { Shield, Satellite, Wifi, Building2, ArrowRight } from "lucide-react";

const WA_LINK =
  "https://wa.me/5491161215290?text=Hola%20InfraRed%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20instalaci%C3%B3n...";

const services = [
  {
    icon: Shield,
    title: "Cámaras de Seguridad",
    description:
      "Sistemas de vigilancia IP y analógicos de última generación. Visión nocturna, acceso remoto desde el celular y alertas en tiempo real. Cubrimos perímetros completos sin puntos ciegos.",
    features: ["Visión nocturna 4K", "Acceso remoto 24/7", "Grabación en la nube", "Detección de movimiento inteligente"],
    tag: "Hogares & Empresas",
  },
  {
    icon: Satellite,
    title: "Starlink",
    description:
      "Instalación y configuración profesional de antenas Starlink. Posicionamiento óptimo para máxima señal, cableado invisible y configuración de red avanzada para aprovechar al 100% la velocidad.",
    features: ["Posicionamiento satelital óptimo", "Cableado oculto", "Router configurado", "Velocidades de hasta 300 Mbps"],
    tag: "Internet Satelital",
  },
  {
    icon: Wifi,
    title: "Redes Domésticas",
    description:
      "Diseño e instalación de redes Wi-Fi de alto rendimiento para el hogar. Sin puntos muertos, cobertura total, routers mesh y configuración de parental controls y redes de invitados.",
    features: ["Cobertura total sin puntos muertos", "Redes Mesh", "Configuración avanzada", "Soporte post-instalación"],
    tag: "Hogares",
  },
  {
    icon: Building2,
    title: "Infraestructura Empresarial",
    description:
      "Soluciones de red para PyMEs y oficinas. Cableado estructurado, switches gestionables, VLANs, VPNs y configuración de seguridad perimetral. Escalable según tu crecimiento.",
    features: ["Cableado estructurado", "VLANs y segmentación", "VPN corporativa", "Mantenimiento preventivo"],
    tag: "PyMEs & Oficinas",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Services() {
  return (
    <section id="servicios" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E8321F] text-sm font-semibold tracking-widest uppercase">Servicios</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Todo lo que necesitás, en un solo lugar.
          </h2>
          <p className="text-[#71717A] text-lg leading-relaxed">
            Desde la consulta inicial hasta la puesta en marcha. Instalamos, configuramos y
            te acompañamos con soporte post-instalación.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-[#111115] border border-[#27272E] rounded-2xl p-8 hover:border-[#E8321F]/40 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8321F]/0 to-[#E8321F]/0 group-hover:from-[#E8321F]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

                <div className="relative">
                  {/* Tag */}
                  <span className="inline-block text-xs text-[#71717A] border border-[#27272E] rounded-full px-3 py-1 mb-4">
                    {service.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#E8321F]/10 border border-[#E8321F]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E8321F]/20 transition-colors duration-300">
                    <Icon size={22} className="text-[#E8321F]" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-[#71717A] text-sm leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-7">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8321F] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#E8321F] hover:text-[#ff5540] font-medium transition-colors group/link"
                  >
                    Consultar este servicio
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
