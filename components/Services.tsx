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
      "Instalamos sistemas de videovigilancia IP y analógicos para interiores y exteriores, cubriendo el perímetro completo del hogar o local. Configuramos el acceso remoto para que puedas ver todo desde el celular en tiempo real, con grabación continua y alertas de movimiento.",
    features: [
      "Cámaras IP y CCTV para interior y exterior",
      "Grabación en DVR/NVR con disco local",
      "Visualización remota desde el celular",
      "Visión nocturna y detección de movimiento",
      "Cableado oculto en canaleta, sin improviso",
    ],
    tag: "Hogares & Locales",
  },
  {
    icon: Satellite,
    title: "Starlink",
    description:
      "Instalamos y configuramos tu antena Starlink de forma profesional: elegimos el punto con mejor ángulo de cielo, hacemos el cableado prolijo hasta donde lo necesitás y dejamos la red lista y funcionando. También podemos integrarla con tu red existente o extender la señal por toda la casa.",
    features: [
      "Montaje en techo, pared o mástil",
      "Cableado en canaleta hasta el interior",
      "Configuración completa del router",
      "Integración con red Wi-Fi existente",
      "Extensión de señal por toda la propiedad",
    ],
    tag: "Internet Satelital",
  },
  {
    icon: Wifi,
    title: "Redes Wi-Fi",
    description:
      "Diseñamos la red para que haya señal en todos los ambientes, sin zonas muertas. Trabajamos con routers, switches y puntos de acceso de marcas confiables, configurando todo correctamente desde el principio — nombre de red, contraseñas, red de invitados y segmentación si hace falta.",
    features: [
      "Análisis de cobertura previa al diseño",
      "Instalación de routers y puntos de acceso",
      "Redes separadas (principal, invitados, IoT)",
      "Cableado de red para APs con PoE",
      "Configuración de seguridad y contraseñas",
    ],
    tag: "Hogares & PyMEs",
  },
  {
    icon: Building2,
    title: "Infraestructura para PyMEs",
    description:
      "Armamos la infraestructura de red para oficinas y locales comerciales: desde el cableado estructurado hasta la configuración de switches, routers y puntos de acceso. Dejamos todo organizado, etiquetado y documentado para que el mantenimiento sea simple.",
    features: [
      "Cableado de red Cat5e/Cat6 estructurado",
      "Configuración de switches y routers",
      "Segmentación por VLANs (empleados, clientes, cámaras)",
      "Wi-Fi empresarial con múltiples APs",
      "Documentación y etiquetado del rack",
    ],
    tag: "PyMEs & Oficinas",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="servicios" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E8321F] text-sm font-semibold tracking-widest uppercase">Servicios</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Todo lo que necesitás,<br />en un solo lugar.
          </h2>
          <p className="text-[#71717A] text-lg leading-relaxed">
            Desde la consulta hasta la puesta en marcha. Instalamos, configuramos y dejamos
            todo funcionando sin que tengas que preocuparte por nada.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-[#111115] border border-[#27272E] rounded-2xl p-8 hover:border-[#E8321F]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: "radial-gradient(circle at top left, rgba(232,50,31,0.06), transparent 60%)" }}
                />

                <div className="relative">
                  <span className="inline-block text-xs text-[#71717A] border border-[#27272E] rounded-full px-3 py-1 mb-4">
                    {service.tag}
                  </span>

                  <div className="w-12 h-12 bg-[#E8321F]/10 border border-[#E8321F]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E8321F]/20 transition-colors duration-300">
                    <Icon size={22} className="text-[#E8321F]" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-[#71717A] text-sm leading-relaxed mb-6">{service.description}</p>

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
