"use client";

import { motion } from "framer-motion";
import { Award, Clock, HeadphonesIcon, Wrench, Users, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "8+ años de experiencia",
    description:
      "Más de ocho años instalando infraestructura tecnológica en hogares y empresas de Buenos Aires. Cada proyecto nos hizo más precisos y eficientes.",
  },
  {
    icon: Users,
    title: "+200 instalaciones realizadas",
    description:
      "Nuestra trayectoria habla por sí sola. Cientos de familias y empresas confían en nosotros para mantener su tecnología funcionando.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de instalación",
    description:
      "Cada trabajo que hacemos tiene garantía. Si algo no funciona como se pactó, volvemos sin costo adicional hasta que quede perfecto.",
  },
  {
    icon: Clock,
    title: "Puntualidad y respeto",
    description:
      "Llegamos en el horario acordado, trabajamos de forma ordenada y terminamos en el tiempo estimado. Respetamos tu tiempo y tu espacio.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte post-instalación",
    description:
      "No te dejamos solo después de la instalación. Tenés acceso a soporte técnico para dudas y ajustes durante el período de garantía.",
  },
  {
    icon: Wrench,
    title: "Herramientas profesionales",
    description:
      "Trabajamos con equipamiento profesional de primera línea. El resultado final refleja la calidad de los materiales y la precisión del proceso.",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E8321F] text-sm font-semibold tracking-widest uppercase">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Experiencia que se traduce en confianza.
          </h2>
          <p className="text-[#71717A] text-lg leading-relaxed">
            No somos improvisados. Somos técnicos especializados con años de trabajo real,
            proyectos complejos y cientos de clientes que avalan nuestro trabajo.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group bg-[#111115] border border-[#27272E] rounded-2xl p-6 hover:border-[#E8321F]/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 bg-[#E8321F]/10 border border-[#E8321F]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8321F]/20 transition-colors duration-300">
                  <Icon size={20} className="text-[#E8321F]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
                <p className="text-[#71717A] text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="mt-16 bg-[#111115] border border-[#27272E] rounded-2xl p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold text-lg">
                ¿Primera vez con nosotros?
              </p>
              <p className="text-[#71717A] text-sm mt-1">
                Consultá sin compromiso. Te asesoramos, te damos un presupuesto claro y empezamos cuando vos quieras.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex -space-x-2">
                {["SG", "ML", "RP", "CB"].map((initials) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full bg-[#18181F] border-2 border-[#27272E] flex items-center justify-center text-xs font-medium text-[#A1A1AA]"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#71717A]">+200 clientes satisfechos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
