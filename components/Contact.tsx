"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const WA_LINK =
  "https://wa.me/5491161215290?text=Hola%20InfraRed%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20instalaci%C3%B3n...";

const info = [
  { icon: Phone, label: "WhatsApp", value: "+54 9 11 6121-5290" },
  { icon: MapPin, label: "Zona de cobertura", value: "Buenos Aires y GBA" },
  { icon: Clock, label: "Horario de atención", value: "Lun–Sáb, 8:00 a 20:00" },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D10]" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E8321F]/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#E8321F] text-sm font-semibold tracking-widest uppercase">Contacto</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Hablemos de tu proyecto.
            </h2>
            <p className="text-[#71717A] text-lg leading-relaxed mb-10">
              Contanos qué necesitás — ya sea una cámara, una red completa o un setup de Starlink.
              Te respondemos rápido con un presupuesto sin compromiso.
            </p>

            <div className="space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#E8321F]/10 border border-[#E8321F]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#E8321F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#71717A] font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-[#111115] border border-[#27272E] rounded-2xl p-10 text-center">
              {/* WA Icon */}
              <div className="w-20 h-20 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>

              <h3 className="text-white text-2xl font-bold mb-3">Escribinos por WhatsApp</h3>
              <p className="text-[#71717A] text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Es la forma más rápida de contactarnos. Te respondemos en el día con un presupuesto
                personalizado para tu proyecto.
              </p>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DAF56] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,211,102,0.25)] mb-4"
              >
                <MessageCircle size={20} />
                Iniciar conversación
              </a>

              <p className="text-xs text-[#71717A]">
                Mensaje predeterminado incluido ·{" "}
                <span className="text-[#A1A1AA]">Sin costo, sin compromiso</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
