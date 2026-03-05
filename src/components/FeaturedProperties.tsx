import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, Bath, Maximize2 } from "lucide-react";
import { buildPropertyPath, featuredProperties } from "@/data/properties";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const PropertyCard = ({
  prop,
  index,
}: {
  prop: (typeof featuredProperties)[0];
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group flex flex-row overflow-hidden rounded-[10px]"
    style={{
      background: "#FFFFFF",
      border: "1px solid #E5E7EB",
      boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    }}
  >
    {/* Image — left column */}
    <div className="relative w-[38%] flex-shrink-0 overflow-hidden">
      <img
        src={prop.image}
        alt={prop.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ minHeight: "180px" }}
      />
      {prop.tags?.[0] && (
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded font-label text-[0.6rem] font-bold uppercase tracking-[1px] text-white"
          style={{ background: GOLD }}
        >
          {prop.tags[0].label}
        </span>
      )}
    </div>

    {/* Content — right column */}
    <div className="flex flex-col justify-between p-5 flex-1">
      <div>
        <h3
          className="font-display font-bold leading-snug mb-3"
          style={{ color: "#1B3A52", fontSize: "clamp(1rem, 1.5vw, 1.18rem)" }}
        >
          {prop.title}
        </h3>
        {prop.condo && (
          <p className="text-[0.82rem] mb-2" style={{ color: "rgba(44,24,16,0.5)" }}>
            {prop.condo}
          </p>
        )}
        <div className="flex flex-wrap gap-3 text-[0.8rem]" style={{ color: "#6B7280" }}>
          {prop.bedrooms && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble size={14} style={{ color: GOLD }} />
              {prop.bedrooms}
            </span>
          )}
          {prop.bathrooms && (
            <span className="inline-flex items-center gap-1.5">
              <Bath size={14} style={{ color: GOLD }} />
              {prop.bathrooms}
            </span>
          )}
          {prop.area && (
            <span className="inline-flex items-center gap-1.5">
              <Maximize2 size={13} style={{ color: GOLD }} />
              {prop.area}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E5E7EB]">
        <div>
          <span
            className="block font-label text-[0.62rem] uppercase tracking-[1px] mb-0.5"
            style={{ color: "#9CA3AF" }}
          >
            {prop.priceLabel}
          </span>
          <span
            className="font-display font-bold"
            style={{ color: "#1B3A52", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
          >
            {prop.price}
          </span>
        </div>
        <Link
          to={buildPropertyPath(prop)}
          className="inline-flex items-center px-4 h-8 rounded font-label text-[0.62rem] tracking-[0.8px] transition-all duration-300 hover:bg-[#C5A059] hover:text-white"
          style={{ border: `1px solid ${GOLD}`, color: GOLD_DARK }}
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  </motion.article>
);

const FeaturedProperties = () => (
  <section id="imoveis" style={{ padding: "96px 0", background: "#F5F0E8" }}>
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
          style={{ color: "#3B1A1A", fontSize: "clamp(30px, 3.5vw, 46px)" }}
        >
          Seleção Exclusiva
        </h2>
        <p
          className="font-body font-light mt-2"
          style={{ color: "#6B7280", fontSize: "1rem" }}
        >
          Lançamentos e empreendimentos premium no litoral
        </p>
      </motion.div>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {featuredProperties.map((prop, i) => (
          <PropertyCard key={prop.id} prop={prop} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          to="/imoveis"
          className="inline-flex items-center gap-2 px-8 h-11 rounded font-label text-[0.72rem] tracking-[1px] transition-all duration-300 hover:bg-[#C5A059] hover:text-white"
          style={{ border: "1px solid #C5A059", color: "#C5A059" }}
        >
          Ver Todas as Opções →
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
