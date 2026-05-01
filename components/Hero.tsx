"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Wifi, Satellite } from "lucide-react";

const WA_LINK =
  "https://wa.me/5491161215290?text=Hola%20InfraRed%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20instalaci%C3%B3n...";

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "100%", label: "Trabajos con garantía" },
  { value: "CABA & GBA", label: "Zona de cobertura" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid — fades out toward the bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 85%)",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 85%)",
        }}
      />

      {/* Subtle red glow — top left only, well away from grid */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#E8321F]/8 blur-[140px] pointer-events-none" />

      {/* Fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #09090B)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-32 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#18181F] border border-[#27272E] rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#E8321F] animate-pulse" />
            <span className="text-[#A1A1AA] text-xs font-medium tracking-wide uppercase">
              Infraestructura Tecnológica — CABA y GBA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            Tecnología que{" "}
            <span className="text-[#E8321F]">funciona</span>,{" "}
            <br className="hidden sm:block" />
            <span className="text-[#A1A1AA]">instalada como corresponde.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg text-[#71717A] max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Cámaras de seguridad, Starlink y redes Wi-Fi para hogares y empresas.
            Sin improvisaciones, sin cables tirados — todo prolijo desde el primer día.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E8321F] hover:bg-[#C42910] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(232,50,31,0.25)]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Consultar por WhatsApp
            </a>
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 text-[#A1A1AA] hover:text-white font-medium px-2 py-3.5 transition-colors"
            >
              Ver servicios
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-10 pt-8 border-t border-[#27272E]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-[#71717A] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating service pills — desktop only */}
        <motion.div
          className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          {[
            { icon: Shield, label: "Cámaras de Seguridad", sub: "CCTV & IP" },
            { icon: Satellite, label: "Starlink", sub: "Internet satelital" },
            { icon: Wifi, label: "Redes Wi-Fi", sub: "Hogares & PyMEs" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-[#111115] border border-[#27272E] rounded-xl px-5 py-3.5 hover:border-[#E8321F]/40 transition-colors duration-300 cursor-default"
            >
              <div className="w-9 h-9 bg-[#E8321F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#E8321F]" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-[#71717A] text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
