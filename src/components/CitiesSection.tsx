import { motion } from "framer-motion";
import { MapPin, Building2, Home, TreePalm, Map } from "lucide-react";
import aerialImg from "@/assets/ubatuba-aerial.jpg";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const cityCards = [
  { city: "Lázaro", state: "Ubatuba - SP", count: 8, icon: TreePalm, desc: "Praia paradisíaca com águas cristalinas" },
  { city: "Praia Grande", state: "Ubatuba - SP", count: 12, icon: Home, desc: "A maior e mais valorizada praia de Ubatuba" },
  { city: "Itamambuca", state: "Ubatuba - SP", count: 6, icon: Map, desc: "Refúgio de surf e natureza preservada" },
  { city: "Saco da Ribeira", state: "Ubatuba - SP", count: 5, icon: Building2, desc: "Marina e alto padrão à beira-mar" },
];

const CitiesSection = () => (
  <section
    className="relative overflow-hidden"
    style={{ padding: "110px 0 120px" }}
  >
    {/* Full background aerial photo */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${aerialImg})` }}
    />

    {/* Refined overlay — dark enough to read, light enough to see the photo */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,20,32,0.60) 0%, rgba(10,20,32,0.50) 50%, rgba(10,20,32,0.65) 100%)",
      }}
    />

    {/* Content */}
    <div className="vb-container relative z-10">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="font-label text-[0.72rem] font-semibold uppercase tracking-[2.5px] mb-3"
          style={{ color: GOLD_DARK }}
        >
          Bairros &amp; Praias
        </p>
        <h2
          className="font-display font-bold"
          style={{ color: GOLD, fontSize: "clamp(28px, 3.5vw, 46px)" }}
        >
          Ubatuba — Litoral Norte de SP
        </h2>
        <p
          className="font-body font-light mt-3 mx-auto"
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "460px" }}
        >
          Atuação exclusiva nos bairros e praias mais valorizados de Ubatuba, com imóveis de alto padrão frente ao mar.
        </p>
        {/* Gold divider */}
        <div
          className="mx-auto mt-5 rounded-full"
          style={{
            width: "52px",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />
      </motion.div>

      {/* Region cards — 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cityCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={`${card.city}-${card.state}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center px-6 py-8 rounded-[14px] transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(10,20,32,0.42)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-5"
                style={{
                  background: "rgba(197,160,89,0.12)",
                  border: `1px solid rgba(197,160,89,0.35)`,
                }}
              >
                <Icon size={20} style={{ color: GOLD }} />
              </div>

              {/* City name */}
              <h3
                className="font-display font-bold mb-0.5"
                style={{ color: GOLD, fontSize: "1.1rem" }}
              >
                {card.city}
              </h3>

              {/* State */}
              <span
                className="font-label font-semibold uppercase tracking-[1.5px] mb-3"
                style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.65rem" }}
              >
                {card.state}
              </span>

              {/* Description */}
              <p
                className="font-body font-light text-center mb-4"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: "1.6" }}
              >
                {card.desc}
              </p>

              {/* Count badge */}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label text-[0.62rem] font-semibold tracking-[0.8px]"
                style={{
                  background: "rgba(197,160,89,0.15)",
                  border: `1px solid rgba(197,160,89,0.35)`,
                  color: GOLD,
                }}
              >
                <MapPin size={10} />
                {card.count}+ imóveis
              </span>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section >
);

export default CitiesSection;
