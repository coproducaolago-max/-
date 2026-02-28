import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, Car, MapPin, Square } from "lucide-react";

interface PropertyCardProps {
  href: string;
  displayMode?: "grid" | "carousel";
  variant?: "solid" | "glass";
  lightSection?: boolean;
  image: string;
  tipo: string;
  titulo: string;
  condo?: string;
  area?: string;
  quartos?: string;
  vagas?: string;
  precoLabel: string;
  preco: string;
  tags?: { label: string; variant: "destaque" | "lancamento" | "aluguel" }[];
}

const tagClasses = {
  destaque: "tag-exclusive",
  lancamento: "tag-launch",
  aluguel: "tag-opportunity",
};

const getTagClassName = (
  tag: { label: string; variant: "destaque" | "lancamento" | "aluguel" },
) => {
  const normalizedLabel = tag.label.toLowerCase();
  if (normalizedLabel.includes("frente mar") || normalizedLabel.includes("beira mar")) {
    return "tag-seafront";
  }
  return tagClasses[tag.variant];
};

const PropertyCard = ({
  href,
  displayMode = "carousel",
  variant = "solid",
  lightSection = false,
  image,
  tipo,
  titulo,
  condo,
  area,
  quartos,
  vagas,
  precoLabel,
  preco,
  tags,
}: PropertyCardProps) => {
  const cardBg = lightSection
    ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#E5E7EB]"
    : variant === "glass"
      ? "bg-[rgba(11,30,45,0.72)] backdrop-blur-sm"
      : "bg-[#0D2035] border border-[rgba(201,168,76,0.08)]";

  const textColor = lightSection ? "text-[#1B3A52]" : "text-[var(--text-primary)]";
  const mutedColor = lightSection ? "text-[#6B7280]" : "text-[var(--text-muted)]";
  const secondaryColor = lightSection ? "text-[#374151]" : "text-[var(--text-secondary)]";
  const iconColor = lightSection ? "text-[#5BBFD4]" : "text-[var(--accent-gold)]";
  const borderColor = lightSection ? "border-[#E5E7EB]" : "border-[var(--border-subtle)]";

  return (
    <motion.article
      className={`property-card group ${cardBg} ${displayMode === "carousel" ? "flex-shrink-0 w-[320px] md:w-[340px] snap-start" : "w-full"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <Link to={href} className="block h-full">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={titulo}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,58,82,0.8)] via-transparent to-transparent" />
          {tags && (
            <div className="absolute top-3 left-3 flex gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-3 py-1.5 rounded-[4px] text-[0.75rem] font-semibold uppercase tracking-[0.8px] ${getTagClassName(tag)}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="p-5">
          <span className={`block font-sans text-[0.75rem] font-medium uppercase tracking-[1.5px] ${mutedColor} mb-1.5`}>
            {tipo}
          </span>
          <h3 className={`font-display text-[1.1rem] font-semibold leading-snug ${textColor}`}>
            {titulo}
          </h3>
          {condo && (
            <p className={`flex items-center gap-1.5 text-[0.875rem] ${secondaryColor} mt-2`}>
              <MapPin className={`w-3.5 h-3.5 ${iconColor}`} />
              {condo}
            </p>
          )}

          <div className={`flex flex-wrap gap-3 mt-4 text-[0.86rem] ${secondaryColor}`}>
            {area && (
              <span className="inline-flex items-center gap-1.5">
                <Square className={`w-4 h-4 ${iconColor}`} />
                {area}
              </span>
            )}
            {quartos && (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className={`w-4 h-4 ${iconColor}`} />
                {quartos}
              </span>
            )}
            {vagas && (
              <span className="inline-flex items-center gap-1.5">
                <Car className={`w-4 h-4 ${iconColor}`} />
                {vagas}
              </span>
            )}
          </div>

          <div className={`mt-5 pt-4 border-t ${borderColor}`}>
            <span className={`block font-sans text-[0.75rem] font-medium uppercase tracking-[1.5px] ${mutedColor}`}>
              {precoLabel}
            </span>
            <span className="font-display text-[1.25rem] font-semibold text-[var(--accent-gold)]">
              {preco}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default PropertyCard;

