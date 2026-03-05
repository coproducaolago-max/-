import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/coproducaolago@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "📬 Novo Cadastro Newsletter — Viva Beiramar",
          "E-mail do Interessado": email,
          "Origem": "Newsletter — Oportunidades Exclusivas",
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section style={{ padding: "100px 0 110px", background: "#E8D5B5" }}>
      <div className="vb-container max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-10">
            <p
              className="font-label text-[0.72rem] font-semibold uppercase tracking-[2.5px] mb-3"
              style={{ color: GOLD_DARK }}
            >
              Newsletter Privada
            </p>
            <h2
              className="font-display font-bold mb-4"
              style={{ color: "#2C1810", fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Receba Oportunidades Exclusivas
            </h2>
            <p
              className="font-body font-light"
              style={{ color: "rgba(44,24,16,0.55)", fontSize: "1rem", lineHeight: "1.75" }}
            >
              Seleção de imóveis premium enviada para clientes cadastrados antes da divulgação ampla.
            </p>
          </div>

          {/* Form — inline on dark bg */}
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-5 rounded font-body text-[0.95rem] focus:outline-none transition-colors duration-200"
              style={{
                height: "52px",
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(197,160,89,0.30)",
                color: "#2C1810",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = GOLD; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(197,160,89,0.30)"; }}
            />
            {status === "success" ? (
              <span className="inline-flex items-center justify-center gap-2 px-8 rounded font-label font-semibold text-[0.78rem] tracking-[0.8px] text-white flex-shrink-0"
                style={{ height: "52px", background: `linear-gradient(135deg, #16a34a 0%, #15803d 100%)` }}
              >
                ✓ Cadastrado!
              </span>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 px-8 rounded font-label font-semibold text-[0.78rem] tracking-[0.8px] text-white transition-all duration-300 hover:opacity-90 flex-shrink-0"
                style={{
                  height: "52px",
                  background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "sending" ? "Enviando..." : <><Send size={14} /> Receber</>}
              </button>
            )}
          </form>

          <p
            className="font-body font-light mt-5 text-[0.78rem]"
            style={{ color: "rgba(44,24,16,0.65)" }}
          >
            {status === "success"
              ? "✓ Pronto! Você receberá nossas oportunidades exclusivas."
              : status === "error"
                ? "⚠️ Erro ao cadastrar. Tente novamente."
                : "Sem spam. Apenas oportunidades reais. Cancele quando quiser."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
