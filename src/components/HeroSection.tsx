import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-luxury.png";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, 50]);
  const [formData, setFormData] = useState({
    negocio: "",
    tipo: "",
    bairro: "",
  });

  const handleSearch = () => {
    const listSection = document.getElementById("imoveis");
    if (listSection) {
      listSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const inputClass =
    "search-input w-full h-11 px-0 bg-transparent border-0 border-b border-white/30 rounded-none text-[0.86rem] font-light text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--accent-gold)] transition-all duration-300 appearance-none";

  return (
    <section className="relative min-h-[90vh] flex items-start overflow-hidden">
      {/* Hero background — sharp, crisp, no parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          imageRendering: "crisp-edges",
        }}
      />
      {/* Overlay: dark on top → clear on bottom, 30% */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.05) 100%)"
        }}
      />

      <div className="relative z-10 w-full vb-container pt-[100px] md:pt-[110px] lg:pt-[120px] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[880px] mb-10"
        >

          <h1
            className="font-display font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-0.5px] mb-5"
            style={{
              fontSize: "clamp(44px, 5.5vw, 68px)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Seu Refúgio Exclusivo<br />
            <span className="text-[var(--accent-gold)]">a Beira-Mar</span>
          </h1>
          <p
            className="font-body font-light max-w-[640px] text-[17px] leading-[1.9]"
            style={{
              color: "rgba(255,255,255,0.90)",
              textShadow: "1px 1px 6px rgba(0,0,0,0.55)",
            }}
          >
            Curadoria de imóveis singulares no litoral, com consultoria
            personalizada para quem busca patrimônio, estilo de vida e
            segurança na decisão.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/5511922190212?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20personalizada!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-8 h-12 rounded-full font-label text-[0.78rem] tracking-[0.8px]"
              style={{ borderRadius: "9999px" }}
            >
              Agendar Visita Personalizada
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="search-container"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
            {[
              {
                id: "negocio",
                label: "Negócio",
                options: [
                  ["", "Selecione"],
                  ["venda", "Venda"],
                  ["aluguel", "Aluguel"],
                  ["temporada", "Temporada"],
                ],
              },
              {
                id: "tipo",
                label: "Tipo",
                options: [
                  ["", "Selecione"],
                  ["apartamento", "Apartamento"],
                  ["casa", "Casa"],
                  ["terreno", "Terreno"],
                  ["cobertura", "Cobertura"],
                ],
              },
              {
                id: "bairro",
                label: "Bairro",
                options: [
                  ["", "Selecione"],
                  ["lazaro", "Lázaro"],
                  ["itamambuca", "Itamambuca"],
                  ["praia-grande", "Praia Grande"],
                  ["enseada", "Enseada"],
                  ["maranduba", "Maranduba"],
                  ["toninhas", "Toninhas"],
                  ["saco-da-ribeira", "Saco da Ribeira"],
                  ["centro", "Centro"],
                  ["lagoinha", "Lagoinha"],
                  ["fortaleza", "Fortaleza"],
                  ["tenorio", "Tenório"],
                  ["perequê-açu", "Perequê-Açu"],
                ],
              },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label
                  className="font-label text-[0.68rem] uppercase tracking-[1px]"
                  style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                >
                  {field.label}
                </label>
                <select
                  className={inputClass}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      [field.id]: event.target.value,
                    }))
                  }
                >
                  {field.options.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex flex-col justify-end">
              <label className="font-label text-[0.68rem] uppercase tracking-[1px] mb-1.5 opacity-0 select-none">
                &nbsp;
              </label>
              <button
                onClick={handleSearch}
                className="h-11 px-6 rounded-full btn-gold font-btn text-[0.72rem]"
                style={{ borderRadius: "9999px" }}
              >
                Buscar
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)]"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
