"use client";

import { motion } from "framer-motion";
import { AlignLeft, Ruler, Package, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: AlignLeft,
    title: "Canaletas, no cables tirados",
    description:
      "Los cables van dentro de canaletas plásticas blancas o negras, fijadas a la pared o al techo de forma prolija. Nada queda tirado en el piso ni cruzando la habitación.",
  },
  {
    icon: Ruler,
    title: "Trazado planificado",
    description:
      "Antes de hacer cualquier agujero, planificamos el recorrido del cableado. El objetivo es el camino más limpio posible, siguiendo zócalos y marcos existentes.",
  },
  {
    icon: Package,
    title: "Terminaciones limpias",
    description:
      "Cada conexión queda bien ajustada, las canaletas cortadas a medida y los terminales bien colocados. El resultado tiene que verse como si siempre hubiese estado así.",
  },
];

const checkpoints = [
  "Relevamiento del espacio antes de empezar",
  "Trazado del cableado sin romper paredes",
  "Canaletas fijadas y cortadas a medida",
  "Sin cables a la vista ni en el piso",
  "Limpieza completa al terminar",
];

export default function Differential() {
  return (
    <section id="diferencial" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D10]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E8321F]/5 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#E8321F] text-sm font-semibold tracking-widest uppercase">
                Nuestro diferencial
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
                Todo prolijo,<br />
                <span className="text-[#A1A1AA]">desde el primer día.</span>
              </h2>
              <p className="text-[#71717A] text-lg leading-relaxed mb-10">
                La diferencia no está en si el cable se ve o no — está en cómo queda.
                Muchas instalaciones terminan con metros de cable suelto cruzando el cuarto o pegado
                con cinta. En InfraRed, los cables van en <strong className="text-[#FAFAFA]">canaletas organizadas</strong>,
                bien fijadas, sin enredos y sin improvisar.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    variants={{
                      hidden: { opacity: 0, x: -28 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.55 } },
                    }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-[#E8321F]/10 border border-[#E8321F]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#E8321F]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                      <p className="text-[#71717A] text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-[#111115] border border-[#27272E] rounded-2xl p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs text-[#71717A] font-medium uppercase tracking-wider">
                  Cómo trabajamos
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Siempre así
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {checkpoints.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle2 size={18} className="text-[#E8321F] flex-shrink-0" />
                    <span className="text-[#A1A1AA] text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-[#27272E] pt-7">
                <p className="text-xs text-[#71717A] mb-4 uppercase tracking-wider">La diferencia</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#18181F] rounded-xl p-4 border border-[#27272E]">
                    <div className="text-xs text-[#71717A] mb-3 font-medium">Sin organización</div>
                    <div className="space-y-2">
                      {["Cables sueltos en el piso", "Cinta como solución", "Aspecto de obra"].map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-500/60 flex-shrink-0" />
                          <span className="text-[#71717A] text-xs">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#E8321F]/5 rounded-xl p-4 border border-[#E8321F]/20">
                    <div className="text-xs text-[#E8321F] mb-3 font-medium">Con InfraRed</div>
                    <div className="space-y-2">
                      {["Canaletas fijadas", "Recorrido planificado", "Resultado prolijo"].map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#E8321F] flex-shrink-0" />
                          <span className="text-[#A1A1AA] text-xs">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
