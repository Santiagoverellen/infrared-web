"use client";

import { motion } from "framer-motion";
import { EyeOff, Ruler, Palette, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: EyeOff,
    title: "Cero cables a la vista",
    description:
      "Pasamos los cables por dentro de paredes, molduras y zócalos. Tu hogar queda exactamente como antes — solo con la tecnología funcionando.",
  },
  {
    icon: Ruler,
    title: "Precisión milimétrica",
    description:
      "Cada instalación es planificada antes de ejecutar. Medimos, diseñamos el trazado y trabajamos con herramientas profesionales para resultados impecables.",
  },
  {
    icon: Palette,
    title: "Respeto por la estética",
    description:
      "Usamos canaletas del mismo color que tus paredes, cámaras minimalistas y accesorios que se integran. La tecnología no debe verse — solo debe funcionar.",
  },
];

const checkpoints = [
  "Relevamiento previo del espacio",
  "Planificación del trazado sin daños",
  "Materiales de primera calidad",
  "Limpieza total al terminar",
  "Guías de uso para el cliente",
];

export default function Differential() {
  return (
    <section id="diferencial" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D10]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E8321F]/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#E8321F] text-sm font-semibold tracking-widest uppercase">
                Nuestro diferencial
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
                Tu hogar, intacto.
                <br />
                <span className="text-[#A1A1AA]">Tu tecnología, impecable.</span>
              </h2>
              <p className="text-[#71717A] text-lg leading-relaxed mb-10">
                Muchas empresas instalan tecnología que funciona pero que arruina la estética del espacio.
                En InfraRed, creemos que la infraestructura tecnológica debe ser <strong className="text-[#FAFAFA]">invisible</strong>.
                No debe verse — solo debe funcionar perfectamente.
              </p>
            </motion.div>

            {/* Pillars */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative bg-[#111115] border border-[#27272E] rounded-2xl p-8 overflow-hidden">
              {/* Top label */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs text-[#71717A] font-medium uppercase tracking-wider">
                  Nuestro proceso
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Estándar de calidad
                </span>
              </div>

              {/* Checklist */}
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

              {/* Before/After mockup */}
              <div className="border-t border-[#27272E] pt-7">
                <p className="text-xs text-[#71717A] mb-4 uppercase tracking-wider">Comparativa</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#18181F] rounded-xl p-4 border border-[#27272E]">
                    <div className="text-xs text-[#71717A] mb-3 font-medium">❌ Sin InfraRed</div>
                    <div className="space-y-2">
                      {["Cables visibles", "Anclas en paredes", "Aspecto improvisado"].map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-500/60" />
                          <span className="text-[#71717A] text-xs">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#E8321F]/5 rounded-xl p-4 border border-[#E8321F]/20">
                    <div className="text-xs text-[#E8321F] mb-3 font-medium">✓ Con InfraRed</div>
                    <div className="space-y-2">
                      {["Cableado oculto", "Acabado prolijo", "Estética intacta"].map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#E8321F]" />
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
