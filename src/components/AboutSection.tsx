import { motion } from "framer-motion";
import corretorImg from "@/assets/corretor.jpg";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const socialLinks = [
  { icon: MessageCircle, href: "https://wa.me/5548999999999", label: "WhatsApp" },
  { icon: Instagram, href: "https://instagram.com/vivabeiramar", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/vivabeiramar", label: "LinkedIn" },
];

const AboutSection = () => (
  <section
    id="sobre"
    style={{ padding: "96px 0", background: "#FFFFFF" }}
  >
    <div className="vb-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[14px]"
        style={{
          border: "1px solid #E5E7EB",
          boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
        }}
      >
        {/* Photo column */}
        <div className="relative order-first lg:order-last overflow-hidden" style={{ minHeight: "420px" }}>
          <img
            src={corretorImg}
            alt="Corretor Viva Beiramar — Fernando Vieira"
            className="w-full h-full object-cover"
            style={{ minHeight: "420px" }}
          />
          <div
            className="absolute bottom-6 left-6 px-4 py-2 rounded font-label text-[0.62rem] font-bold uppercase tracking-[1.4px] text-white"
            style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)` }}
          >
            CRECI 123456-F
          </div>
        </div>

        {/* Content column */}
        <div className="flex flex-col justify-center p-10 md:p-14" style={{ background: "#FFFFFF" }}>
          <p
            className="font-label text-[0.68rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: GOLD }}
          >
            Sobre o Corretor
          </p>
          <h2
            className="font-display font-bold leading-tight mb-1"
            style={{ color: "#1B3A52", fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)" }}
          >
            Fernando Vieira
          </h2>
          <p
            className="font-label text-[0.7rem] uppercase tracking-[2px] mb-8"
            style={{ color: "#9CA3AF" }}
          >
            Especialista em Imóveis de Alto Padrão · CRECI 123456-F
          </p>

          <div
            className="space-y-4 font-body font-light leading-[1.85] mb-10"
            style={{ color: "#4B5563", fontSize: "1rem" }}
          >
            <p>
              Especialista em imóveis de alto padrão no litoral catarinense, com foco em
              negociações seguras e suporte completo do primeiro contato ao fechamento.
            </p>
            <p>
              Cada atendimento é estruturado para alinhar estilo de vida, potencial
              de valorização e patrimônio de longo prazo — oferecendo uma experiência
              verdadeiramente consultiva.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{ border: "1px solid #E5E7EB", color: "#6B7280" }}
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 h-11 rounded font-label text-[0.72rem] tracking-[0.9px] text-white transition-all duration-300 hover:opacity-90 ml-2"
              style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)` }}
            >
              <MessageCircle size={14} />
              Fale Comigo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
