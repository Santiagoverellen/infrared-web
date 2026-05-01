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
      "Instalamos cámaras IP y analógicas para el interior y exterior del hogar o local. El sistema queda configurado para que puedas ver las cámaras desde el celular en tiempo real, en cualquier momento.",
    features: [
      "Cámaras IP y CCTV analógicas",
      "Visualización remota desde el celular",
      "Grabación local en DVR/NVR",
      "Visión nocturna",
      "Alertas de movimiento básicas",
    ],
    tag: "Hogares & Locales",
  },
  {
    icon: Satellite,
    title: "Starlink",
    description:
      "Montaje e instalación de la antena en el lugar con mejor ángulo de cielo disponible, cableado prolijo hasta el router y configuración completa de la red. Listo para usar desde el primer día.",
    features: [
      "Montaje en techo o pared",
      "Cableado ordenado en canaleta",
      "Configuración del router incluida",
      "Asesoramiento sobre el plan ideal",
    ],
    tag: "Internet Satelital",
  },
  {
    icon: Wifi,
    title: "Redes Wi-Fi",
    description:
      "Diseñamos y configuramos redes domésticas para que no queden zonas sin señal. Desde un router bien ubicado hasta un sistema de varios puntos de acceso para casas grandes.",
    features: [
      "Análisis de cobertura previa",
      "Configuración de router y puntos de acceso",
      "Red de invitados separada",
      "Contraseñas y seguridad básica",
    ],
    tag: "Hogares",
  },
  {
    icon: Building2,
    title: "Infraestructura para PyMEs",
    description:
      "Instalación de redes cableadas e inalámbricas para oficinas y locales comerciales. Cableado estructurado organizado, equipos bien configurados y todo etiquetado para fácil mantenimiento.",
    features: [
      "Cableado de red estructurado",
      "Configuración de switches y routers",
      "Separación de redes (empleados / clientes)",
      "Trabajo prolijo y etiquetado",
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
