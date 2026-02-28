import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BedDouble, Car, Maximize2 } from "lucide-react";
import PropertyCard from "./PropertyCard";
import VisitedCard from "./VisitedCard";
import { Section, SectionTitle } from "@/components/premium/Section";
import {
  buildPropertyPath,
  featuredProperties,
  mostWantedProperties,
  newestProperties,
  properties as allProperties,
} from "@/data/properties";
import praiaBg from "@/assets/praia-ubatuba-bg.jpg";

// Mapeamento dos cards de Lançamentos para IDs reais do banco de dados
const lancamentoPropertyIds: Record<string, number> = {
  "residencial-lazaro-premium": 107230,
  "torre-camburi-azul": 107237,
  "eden-toninhas-praia": 107234,
};

const getLancamentoPath = (fakeId: string): string => {
  const realId = lancamentoPropertyIds[fakeId];
  if (!realId) return "/#imoveis";
  const found = allProperties.find((p) => p.id === realId);
  return found ? buildPropertyPath(found) : "/#imoveis";
};


const ScrollControls = ({
  containerRef,
  dark = true,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  dark?: boolean;
}) => {
  const scrollByAmount = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const amount = Math.round(containerRef.current.clientWidth * 0.82);
    containerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        className={`w-10 h-10 rounded-md border transition-colors flex items-center justify-center ${dark
          ? "border-[var(--border-subtle)] text-[var(--accent-gold)] hover:bg-[rgba(212,168,64,0.15)]"
          : "border-[#E5E7EB] text-[#5BBFD4] hover:bg-[rgba(91,191,212,0.1)]"
          }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount("right")}
        className={`w-10 h-10 rounded-md border transition-colors flex items-center justify-center ${dark
          ? "border-[var(--border-subtle)] text-[var(--accent-gold)] hover:bg-[rgba(212,168,64,0.15)]"
          : "border-[#E5E7EB] text-[#5BBFD4] hover:bg-[rgba(91,191,212,0.1)]"
          }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export const DestaqueSection = () => {
  const [first, ...rest] = featuredProperties;

  return (
    <Section id="imoveis" variant="sand" className="relative overflow-hidden section-wave-texture">
      <SectionTitle
        darkBg={false}
        eyebrow="Curadoria em destaque"
        title="Imoveis selecionados para um litoral premium"
        subtitle="Selecao exclusiva de propriedades que definem o luxo a beira-mar de Ubatuba"
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-[1]">
        {first && (
          <div className="lg:col-span-2 lg:row-span-2">
            <PropertyCard
              displayMode="grid"
              variant="solid"
              lightSection
              href={buildPropertyPath(first)}
              image={first.image}
              tipo={first.type}
              condo={first.condo}
              titulo={first.title}
              area={first.area}
              quartos={first.bedrooms}
              vagas={first.parking}
              precoLabel={first.priceLabel}
              preco={first.price}
              tags={first.tags}
            />
          </div>
        )}
        {rest.slice(0, 4).map((property) => (
          <PropertyCard
            key={property.id}
            displayMode="grid"
            variant="solid"
            lightSection
            href={buildPropertyPath(property)}
            image={property.image}
            tipo={property.type}
            condo={property.condo}
            titulo={property.title}
            area={property.area}
            quartos={property.bedrooms}
            vagas={property.parking}
            precoLabel={property.priceLabel}
            preco={property.price}
            tags={property.tags}
          />
        ))}
      </div>
    </Section>
  );
};

/* ── Mais Procurados — dark navy, solid cards ─────────────────────────── */
export const ProcuradosSection = () => {
  const GOLD = "#C5A059";
  const GOLD_DARK = "#A68547";
  const featured = mostWantedProperties.slice(0, 3);

  return (
    <section style={{ padding: "96px 0", background: "#0B1E2D" }}>
      <div className="vb-container">
        {/* Header — left aligned */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="font-display font-bold"
            style={{ color: "#FFFFFF", fontSize: "clamp(30px, 3.5vw, 46px)" }}
          >
            Mais Procurados
          </h2>
          <p
            className="font-body font-light mt-2"
            style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
          >
            Os imóveis mais desejados do litoral de Ubatuba
          </p>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((property, i) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-[10px]"
              style={{ background: "#0D2233", border: "1px solid #1A3347" }}
            >
              <Link to={buildPropertyPath(property)} className="block">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {property.tags?.[0] && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded font-label text-[0.6rem] font-bold uppercase tracking-[1px] text-white"
                      style={{ background: GOLD }}
                    >
                      {property.tags[0].label}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3
                    className="font-display font-semibold mb-1 leading-snug"
                    style={{ color: "#FFFFFF", fontSize: "1rem" }}
                  >
                    {property.title}
                  </h3>
                  {property.condo && (
                    <p className="text-[0.82rem] mb-3" style={{ color: "rgba(255,255,255,0.40)" }}>
                      {property.condo}
                    </p>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-[#1A3347]">
                    <span
                      className="font-display font-bold"
                      style={{ color: GOLD, fontSize: "1.1rem" }}
                    >
                      {property.price}
                    </span>
                    <span
                      className="font-label text-[0.62rem] tracking-[0.8px]"
                      style={{ color: "rgba(255,255,255,0.35)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Ver detalhes →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};


import lancEdificio from "@/assets/lanc-edificio-sunset.png";
import lancTorre from "@/assets/lanc-torre-mar.png";
import lancResidencial from "@/assets/lanc-residencial-praia.png";

const lancamentos = [
  {
    id: "residencial-lazaro-premium",
    image: lancEdificio,
    badge: "Lançamento",
    tipo: "Torre Residencial",
    titulo: "Residencial Lázaro Premium",
    localizacao: "Lázaro, Ubatuba",
    area: "180 m²",
    quartos: "3 suítes",
    vagas: "2 vagas",
    preco: "R$ 2.400.000",
    precoLabel: "A partir de",
  },
  {
    id: "torre-camburi-azul",
    image: lancTorre,
    badge: "Lançamento",
    tipo: "Cobertura Exclusiva",
    titulo: "Torre Camburi Azul",
    localizacao: "Camburi, Ubatuba",
    area: "240 m²",
    quartos: "4 suítes",
    vagas: "3 vagas",
    preco: "R$ 3.900.000",
    precoLabel: "A partir de",
  },
  {
    id: "eden-toninhas-praia",
    image: lancResidencial,
    badge: "Pré-Lançamento",
    tipo: "Apartamento Premium",
    titulo: "Éden Toninhas Praia",
    localizacao: "Toninhas, Ubatuba",
    area: "150 m²",
    quartos: "3 suítes",
    vagas: "2 vagas",
    preco: "R$ 1.950.000",
    precoLabel: "A partir de",
  },
];

/* ── Lançamentos — off-white, solid white cards ───────────────────────── */
export const NovosSection = () => {
  const GOLD = "#C5A059";
  const GOLD_DARK = "#A68547";

  return (
    <section style={{ padding: "96px 0", background: "#FAFAFA" }}>
      <div className="vb-container">
        {/* Header — left aligned */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p
            className="font-label text-[0.68rem] font-semibold uppercase tracking-[2px] mb-2"
            style={{ color: GOLD }}
          >
            Novas Oportunidades
          </p>
          <h2
            className="font-display font-bold"
            style={{ color: "#1B3A52", fontSize: "clamp(30px, 3.5vw, 46px)" }}
          >
            Lançamentos Exclusivos
          </h2>
          <p
            className="font-body font-light mt-2"
            style={{ color: "#6B7280", fontSize: "1rem" }}
          >
            Regiões nobres com alto potencial de valorização
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {lancamentos.map((prop, i) => (
            <motion.article
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-[10px]"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}
            >
              <Link to={getLancamentoPath(prop.id)} className="block h-full">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={prop.image}
                    alt={prop.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded font-label text-[0.6rem] font-bold uppercase tracking-[1px] text-white"
                    style={{ background: GOLD }}
                  >
                    {prop.badge}
                  </span>
                </div>
                <div className="p-5">
                  <span
                    className="block font-label text-[0.65rem] font-medium uppercase tracking-[1.5px] mb-1.5"
                    style={{ color: "#9CA3AF" }}
                  >
                    {prop.tipo}
                  </span>
                  <h3
                    className="font-display font-bold leading-snug mb-1"
                    style={{ color: "#1B3A52", fontSize: "1.05rem" }}
                  >
                    {prop.titulo}
                  </h3>
                  <p className="text-[0.82rem] mb-3" style={{ color: "#6B7280" }}>
                    {prop.localizacao}
                  </p>
                  <div className="flex flex-wrap gap-3 text-[0.8rem] mb-4" style={{ color: "#6B7280" }}>
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble size={13} style={{ color: GOLD }} /> {prop.quartos}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Maximize2 size={12} style={{ color: GOLD }} /> {prop.area}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Car size={13} style={{ color: GOLD }} /> {prop.vagas}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-[#E5E7EB]">
                    <span
                      className="block font-label text-[0.65rem] uppercase tracking-[1.2px] mb-0.5"
                      style={{ color: "#9CA3AF" }}
                    >
                      {prop.precoLabel}
                    </span>
                    <span
                      className="font-display font-bold"
                      style={{ color: "#1B3A52", fontSize: "1.1rem" }}
                    >
                      {prop.preco}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/imoveis"
            className="inline-flex items-center gap-2 px-8 h-11 rounded font-label text-[0.72rem] tracking-[1px] transition-all duration-300 hover:bg-[#1B3A52] hover:text-white"
            style={{ border: "1px solid #1B3A52", color: "#1B3A52" }}
          >
            Ver Todos os Lançamentos →
          </Link>
        </div>
      </div>
    </section>
  );
};
