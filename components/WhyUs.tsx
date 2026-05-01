"use client";

import { motion } from "framer-motion";
import { Award, Clock, HeadphonesIcon, Wrench, ShieldCheck, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "3+ años en el rubro",
    description:
      "Llevamos varios años instalando infraestructura tecnológica en hogares y empresas de Buenos Aires. Con cada proyecto aprendimos a hacer las cosas mejor.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de instalación",
    description:
      "Cada trabajo tiene garantía. Si algo no quedó como acordamos, volvemos sin costo adicional hasta que quede perfecto.",
  },
  {
    icon: Clock,
    title: "Cumplimos los horarios",
    description:
      "Llegamos en el horario acordado, trabajamos de forma ordenada y terminamos en el tiempo estimado. Respetamos tu tiempo y tu espacio.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte post-instalación",
    description:
      "No te dejamos solo después de terminar. Si surge alguna duda o ajuste durante el período de garantía, estamos disponibles.",
  },
  {
    icon: Wrench,
    title: "Materiales de calidad",
    description:
      "Usamos canaletas, conectores y herramientas adecuadas para cada trabajo. No improvisamos con lo que tengamos a mano.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación clara",
    description:
      "Antes de empezar te explicamos qué vamos a hacer y cómo va a quedar. Sin letra chica, sin sorpresas en el presupuesto.",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E8321F] text-sm font-semibold tracking-widest uppercase">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Experiencia real,<br />sin vueltas.
          </h2>
          <p className="text-[#71717A] text-lg leading-relaxed">
            No prometemos lo que no podemos cumplir. Hacemos instalaciones prolijas,
            llegamos a horario y dejamos todo configurado y funcionando.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
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

        {/* CTA bar */}
        <motion.div
          className="mt-16 bg-[#111115] border border-[#27272E] rounded-2xl p-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold text-lg">¿Primera vez con nosotros?</p>
              <p className="text-[#71717A] text-sm mt-1 max-w-md">
                Consultá sin compromiso. Te asesoramos, te pasamos un presupuesto claro y arrancamos cuando vos quieras.
              </p>
            </div>
            <a
              href="https://wa.me/5491161215290?text=Hola%20InfraRed%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20instalaci%C3%B3n..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#E8321F] hover:bg-[#C42910] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              Pedir presupuesto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
