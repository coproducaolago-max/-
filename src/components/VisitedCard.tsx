import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface VisitedCardProps {
  href: string;
  image: string;
  tipo: string;
  titulo: string;
  condo?: string;
}

const VisitedCard = ({ href, image, tipo, titulo, condo }: VisitedCardProps) => (
  <motion.article
    className="property-card group flex-shrink-0 w-[340px] h-[360px] relative snap-start"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4 }}
  >
    <Link to={href} className="block h-full">
      <img
        src={image}
        alt={titulo}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,58,82,0.92)] via-[rgba(27,58,82,0.25)] to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-[var(--text-primary)]">
        <span className="inline-flex items-center px-2.5 py-1 rounded font-sans text-[0.72rem] font-semibold uppercase tracking-[1.5px] bg-[var(--accent-gold)] text-[var(--bg-primary)] mb-2">
          {tipo}
        </span>
        {condo && (
          <p className="text-[0.875rem] text-[var(--text-secondary)] mb-1">
            {condo}
          </p>
        )}
        <h3 className="font-sans text-[1.08rem] font-semibold leading-snug">
          {titulo}
        </h3>
      </div>
    </Link>
  </motion.article>
);

export default VisitedCard;
