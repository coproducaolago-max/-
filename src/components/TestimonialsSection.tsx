import { motion } from "framer-motion";
import clientRicardo from "@/assets/client-ricardo.png";
import clientMariana from "@/assets/client-mariana.png";
import clientFernanda from "@/assets/client-fernanda.png";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const testimonials = [
  {
    quote:
      "Atendimento estratégico, discreto e com leitura de mercado precisa. Concluímos uma aquisição de alto valor com absoluta segurança.",
    author: "Ricardo P.",
    role: "Empresário · São Paulo",
    photo: clientRicardo,
    stars: 5,
  },
  {
    quote:
      "A curadoria foi decisiva para filtrar opções realmente aderentes ao nosso perfil. Processo fluido, transparente e muito profissional.",
    author: "Mariana A.",
    role: "Investidora · Ubatuba",
    photo: clientMariana,
    stars: 5,
  },
  {
    quote:
      "Excelente negociação e acompanhamento de ponta a ponta. A experiência entrega o nível de confiança esperado em ativos premium.",
    author: "Fernanda C.",
    role: "Executiva · Ubatuba",
    photo: clientFernanda,
    stars: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex items-center gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={GOLD}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section style={{ padding: "100px 0 110px", background: "#F9F7F4" }}>
    <div className="vb-container">
      {/* Header — left aligned */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2
          className="font-display font-bold"
          style={{ color: "#2C1810", fontSize: "clamp(28px, 3.5vw, 44px)" }}
        >
          Confiança Comprovada
        </h2>
        <p
          className="font-body font-light mt-2"
          style={{ color: "#6B7280", fontSize: "1rem", maxWidth: "420px" }}
        >
          A voz de quem já realizou o sonho de viver à beira-mar
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="p-7 rounded-[12px]"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Stars count={t.stars} />

            <p
              className="font-body leading-[1.85] mb-6"
              style={{ color: "#4B5563", fontSize: "0.95rem" }}
            >
              "{t.quote}"
            </p>

            <div className="flex items-center gap-3.5 pt-5 border-t border-[#F3F4F6]">
              <div
                className="flex-shrink-0 rounded-full p-[2px]"
                style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)` }}
              >
                <div className="rounded-full overflow-hidden w-11 h-11">
                  <img src={t.photo} alt={t.author} className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p
                  className="font-display font-semibold"
                  style={{ color: "#2C1810", fontSize: "0.95rem" }}
                >
                  {t.author}
                </p>
                <p
                  className="font-body font-light"
                  style={{ color: "#9CA3AF", fontSize: "0.75rem" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
