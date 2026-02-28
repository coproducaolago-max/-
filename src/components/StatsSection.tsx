import { motion } from "framer-motion";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const stats = [
  { value: "R$ 50M+", label: "Em Vendas em 2024" },
  { value: "150+", label: "Imóveis Exclusivos" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "15+", label: "Anos de Mercado" },
];

const StatsSection = () => (
  <section style={{ padding: "80px 0", background: "#0B1E2D" }}>
    <div className="vb-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1A3347]">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="flex flex-col items-center text-center py-10 px-6"
          >
            <p
              className="font-display font-bold leading-none"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                background: `linear-gradient(160deg, #D4AE6A 0%, ${GOLD} 45%, ${GOLD_DARK} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {stat.value}
            </p>
            <p
              className="font-body font-light uppercase tracking-[1.8px] mt-3"
              style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.7rem" }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
