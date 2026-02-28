import { Instagram, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-viva-beiramar.png";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";
const TEXT_MUTED = "rgba(255,252,245,0.45)";
const TEXT_BODY = "rgba(255,252,245,0.65)";

const navLinks = [
  { label: "Imóveis", href: "#imoveis" },
  { label: "Seleção Exclusiva", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#" },
];

const regions = ["Lázaro — Ubatuba", "Praia Grande — Ubatuba", "Itamambuca — Ubatuba", "Saco da Ribeira — Ubatuba"];

const socials = [
  { icon: Instagram, href: "https://instagram.com/vivabeiramar", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/5548996931776", label: "WhatsApp" },
];

const Footer = () => (
  <footer
    style={{
      background: "linear-gradient(170deg, #0D1E2E 0%, #101F30 60%, #0A1820 100%)",
      paddingTop: "72px",
      paddingBottom: "40px",
    }}
  >
    {/* Top gold divider */}
    <div
      className="vb-container mb-12"
      style={{
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${GOLD}44, transparent)`,
      }}
    />

    <div className="vb-container">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Viva Beiramar" className="w-10 h-10 object-contain" />
            <span
              className="font-display font-semibold text-xl"
              style={{ color: GOLD }}
            >
              Viva Beiramar
            </span>
          </div>
          <p
            className="font-body font-light text-[0.875rem] leading-[1.75] max-w-[300px] mb-6"
            style={{ color: TEXT_BODY }}
          >
            Curadoria imobiliária de alto padrão para clientes que exigem
            segurança, discrição e atendimento consultivo no litoral.
          </p>

          {/* Social icon pills */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  border: `1px solid rgba(197,160,89,0.35)`,
                  color: GOLD,
                  background: "rgba(197,160,89,0.08)",
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p
            className="font-label text-[0.68rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: GOLD_DARK }}
          >
            Navegação
          </p>
          <div className="space-y-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block font-body text-[0.875rem] transition-colors duration-200 hover:opacity-100"
                style={{ color: TEXT_MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,252,245,0.90)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MUTED)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div>
          <p
            className="font-label text-[0.68rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: GOLD_DARK }}
          >
            Regiões
          </p>
          <div className="space-y-2">
            {regions.map((r) => (
              <p key={r} className="font-body text-[0.875rem]" style={{ color: TEXT_MUTED }}>
                {r}
              </p>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p
            className="font-label text-[0.68rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: GOLD_DARK }}
          >
            Contato
          </p>
          <div className="space-y-3">
            <a
              href="https://wa.me/5548996931776"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-body text-[0.875rem] transition-colors group"
              style={{ color: TEXT_MUTED }}
            >
              <Phone size={14} style={{ color: GOLD, flexShrink: 0 }} />
              (48) 99693-1776
            </a>
            <a
              href="mailto:contato@vivabeiramar.com"
              className="flex items-center gap-2.5 font-body text-[0.875rem] transition-colors"
              style={{ color: TEXT_MUTED }}
            >
              <Mail size={14} style={{ color: GOLD, flexShrink: 0 }} />
              contato@vivabeiramar.com
            </a>
            <p
              className="font-label font-semibold text-[0.72rem] uppercase tracking-[1.5px] mt-4"
              style={{ color: GOLD }}
            >
              CRECI 123456-F
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[0.72rem]"
        style={{
          borderTop: "1px solid rgba(197,160,89,0.15)",
          color: TEXT_MUTED,
        }}
      >
        <p>© 2026 Viva Beiramar. Todos os direitos reservados.</p>
        <p style={{ color: GOLD_DARK }}>CRECI 123456-F</p>
      </div>
    </div>
  </footer>
);

export default Footer;
