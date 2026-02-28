import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, Bath, Maximize2 } from "lucide-react";

import imgVilla from "../assets/prop-villa-horizonte.png";
import imgResidencia from "../assets/prop-residencia-oceano.png";
import imgMansao from "../assets/prop-mansao-mare.png";
import imgPalacio from "../assets/prop-palacio-ondas.png";
import { buildPropertyPath, properties as propertyData } from "@/data/properties";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

// Mapeamento dos cards visuais para os IDs reais do banco de dados
const realPropertyIds: Record<string, number> = {
  "lazaro-ubatuba": 107230,
  "itamambuca-ubatuba": 107231,
  "saco-da-ribeira-ubatuba": 107237,
  "praia-grande-ubatuba": 107233,
};

const getPropertyPath = (fakeId: string): string => {
  const realId = realPropertyIds[fakeId];
  if (!realId) return "/#imoveis";
  const found = propertyData.find((p) => p.id === realId);
  return found ? buildPropertyPath(found) : "/#imoveis";
};

const properties = [
  {
    id: "lazaro-ubatuba",
    image: imgVilla,
    badge: "Vista Mar",
    titulo: "Villa Lázaro",
    suites: "4 Suítes",
    banheiros: "5 Banheiros",
    area: "350m²",
    preco: "R$ 4.500.000",
  },
  {
    id: "itamambuca-ubatuba",
    image: imgResidencia,
    badge: "Lançamento",
    titulo: "Residência Itamambuca",
    suites: "3 Suítes",
    banheiros: "4 Banheiros",
    area: "280m²",
    preco: "R$ 3.200.000",
  },
  {
    id: "saco-da-ribeira-ubatuba",
    image: imgMansao,
    badge: "Vista Mar",
    titulo: "Mansão Saco da Ribeira",
    suites: "5 Suítes",
    banheiros: "6 Banheiros",
    area: "520m²",
    preco: "R$ 6.800.000",
  },
  {
    id: "praia-grande-ubatuba",
    image: imgPalacio,
    badge: "Exclusivo",
    titulo: "Palácio Praia Grande",
    suites: "4 Suítes",
    banheiros: "5 Banheiros",
    area: "450m²",
    preco: "R$ 5.200.000",
  },
];

const PropertyCard = ({
  prop,
  index,
}: {
  prop: (typeof properties)[0];
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
        alt={prop.titulo}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ minHeight: "180px" }}
      />
      <span
        className="absolute top-3 left-3 px-2.5 py-1 rounded font-label text-[0.6rem] font-bold uppercase tracking-[1px] text-white"
        style={{ background: GOLD }}
      >
        {prop.badge}
      </span>
    </div>

    {/* Content — right column */}
    <div className="flex flex-col justify-between p-5 flex-1">
      <div>
        <h3
          className="font-display font-bold leading-snug mb-3"
          style={{ color: "#1B3A52", fontSize: "clamp(1rem, 1.5vw, 1.18rem)" }}
        >
          {prop.titulo}
        </h3>
        <div className="flex flex-wrap gap-3 text-[0.8rem]" style={{ color: "#6B7280" }}>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble size={14} style={{ color: GOLD }} />
            {prop.suites}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath size={14} style={{ color: GOLD }} />
            {prop.banheiros}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize2 size={13} style={{ color: GOLD }} />
            {prop.area}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E5E7EB]">
        <span
          className="font-display font-bold"
          style={{ color: "#1B3A52", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
        >
          {prop.preco}
        </span>
        <Link
          to={getPropertyPath(prop.id)}
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
  <section style={{ padding: "96px 0", background: "#F5F0E8" }}>
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
          style={{ color: "#1B3A52", fontSize: "clamp(30px, 3.5vw, 46px)" }}
        >
          Seleção Exclusiva
        </h2>
        <p
          className="font-body font-light mt-2"
          style={{ color: "#6B7280", fontSize: "1rem" }}
        >
          Casas e apartamentos de luxo com vistas deslumbrantes
        </p>
      </motion.div>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {properties.map((prop, i) => (
          <PropertyCard key={prop.id} prop={prop} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          to="/#imoveis"
          className="inline-flex items-center gap-2 px-8 h-11 rounded font-label text-[0.72rem] tracking-[1px] transition-all duration-300 hover:bg-[#1B3A52] hover:text-white"
          style={{ border: "1px solid #1B3A52", color: "#1B3A52" }}
        >
          Ver Todas as Opções
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
