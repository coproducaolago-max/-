import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "../assets/logo-viva-beiramar.png";

const menuItems = [
  { label: "Início", href: "#" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating navbar wrapper — detached from edges */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? "pt-3 px-4 md:px-8" : "pt-5 px-4 md:px-10"}`}>
        <header
          className="w-full max-w-[1120px] flex items-center justify-between px-5 md:px-8 rounded-2xl transition-all duration-500"
          style={{
            height: "80px",
            background: "rgba(12, 16, 24, 0.60)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
          }}
        >
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <img
              src={logoImg}
              alt="Viva Beiramar"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-[1.05rem] tracking-[1px] text-[var(--accent-gold)]">
                VIVA
              </span>
              <span className="font-label text-[0.48rem] tracking-[3px] text-white/50 uppercase">
                Beiramar
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link px-4 py-2 font-label text-[0.68rem] tracking-[1.2px] text-white/75 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA button — soft gradient float */}
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center h-9 px-6 rounded-full font-label text-[0.68rem] tracking-[0.8px] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(197,160,89,0.45)]"
            style={{
              background: "linear-gradient(135deg, #C5A059 0%, #A68547 100%)",
              boxShadow: "0 2px 12px rgba(197,160,89,0.3)",
            }}
          >
            Agendar Visita
          </a>

          {/* Hamburger */}
          <button
            aria-label="Abrir menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((c) => !c)}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[var(--accent-gold)]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-white/80"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white/80"
            />
          </button>
        </header>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] md:hidden flex flex-col items-center justify-center gap-6"
            style={{ background: "rgba(7, 10, 18, 0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="mb-6 flex items-center gap-2.5">
              <img src={logoImg} alt="Viva Beiramar" className="h-12 w-auto object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-[1.3rem] tracking-[1px] text-[var(--accent-gold)]">VIVA</span>
                <span className="font-label text-[0.52rem] tracking-[3px] text-white/50 uppercase">Beiramar</span>
              </div>
            </div>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-display font-medium text-white hover:text-[var(--accent-gold)] transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center h-12 px-10 rounded-full font-label text-sm tracking-[0.8px] text-white"
              style={{ background: "linear-gradient(135deg, #C5A059 0%, #A68547 100%)" }}
            >
              Agendar Visita
            </a>
            <button
              className="absolute top-5 right-6 text-white/50 hover:text-white text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
