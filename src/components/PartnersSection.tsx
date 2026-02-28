import { motion } from "framer-motion";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

// Partner names displayed as monochrome wordmarks
const partners = [
  { name: "CAIXA", label: "Caixa Econômica" },
  { name: "BB", label: "Banco do Brasil" },
  { name: "SANTANDER", label: "Santander" },
  { name: "BRADESCO", label: "Bradesco" },
  { name: "ITAÚ", label: "Itaú Unibanco" },
];

const PartnersSection = () => (
  <section
    style={{
      padding: "90px 0 100px",
      background: "linear-gradient(160deg, #0D1E2E 0%, #12263A 50%, #0A1A28 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Subtle navy depth orb */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: "600px",
        height: "600px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(197,160,89,0.05) 0%, transparent 70%)",
      }}
    />

    <div className="vb-container relative z-10">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="font-label text-[0.7rem] font-semibold uppercase tracking-[2.5px] mb-3"
          style={{ color: GOLD_DARK }}
        >
          Parceiros
        </p>
        <h2
          className="font-display font-bold"
          style={{ color: GOLD, fontSize: "clamp(24px, 3vw, 38px)" }}
        >
          Parceiros de Confiança
        </h2>
        <p
          className="font-body font-light mt-3 mx-auto"
          style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", maxWidth: "440px" }}
        >
          Instituições financeiras com histórico sólido para apoiar operações de compra e investimento.
        </p>
      </motion.div>

      {/* Top gold divider */}
      <div
        className="mx-auto mb-10 rounded-full"
        style={{
          width: "100%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${GOLD}55, transparent)`,
        }}
      />

      {/* Partner logos row */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-1.5 group cursor-default"
          >
            {/* Monochrome wordmark */}
            <span
              className="font-label font-bold tracking-[2.5px] transition-all duration-300"
              style={{
                fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "2.5px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                (e.currentTarget as HTMLElement).style.textShadow = `0 0 20px rgba(197,160,89,0.25)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLElement).style.textShadow = "none";
              }}
            >
              {partner.name}
            </span>
            <span
              className="font-body font-light uppercase tracking-[1px]"
              style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.20)" }}
            >
              {partner.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom gold divider */}
      <div
        className="mx-auto mt-10 rounded-full"
        style={{
          width: "100%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${GOLD}55, transparent)`,
        }}
      />
    </div>
  </section>
);

export default PartnersSection;
