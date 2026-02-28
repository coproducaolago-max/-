import { useState } from "react";
import { motion } from "framer-motion";
import {
    BedDouble,
    Bath,
    Maximize2,
    Car,
    MapPin,
    ArrowRight,
    Instagram,
    Linkedin,
    MessageCircle,
    Phone,
    Mail,
    ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Assets ────────────────────────────────────────────────────────── */
import heroImg from "@/assets/landing-hero.png";
import livingImg from "@/assets/landing-living.png";
import kitchenImg from "@/assets/landing-kitchen.png";
import bedroomImg from "@/assets/landing-bedroom.png";
import poolImg from "@/assets/landing-pool.png";
import propVilla from "@/assets/prop-villa-horizonte.png";
import propMansao from "@/assets/prop-mansao-mare.png";
import logo from "@/assets/logo-viva-beiramar.png";

/* ── Design Tokens ─────────────────────────────────────────────────── */
const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";
const GOLD_LIGHT = "#D4B96C";
const DARK_BG = "#0D1E2E";
const DARK_TEXT = "#3D2B00";
const SAND_BODY = "#7A5C2E";

const glass = {
    background: "rgba(255,252,245,0.12)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow:
        "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.10)",
};

const glassLight = {
    background: "rgba(255,252,245,0.55)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.72)",
    boxShadow: "0 8px 40px rgba(160,120,60,0.12), 0 1px 4px rgba(0,0,0,0.06)",
};

/* ── Fade-in animation wrapper ─────────────────────────────────────── */
const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

/* ════════════════════════════════════════════════════════════════════
   1. HERO SECTION
   ════════════════════════════════════════════════════════════════════ */
const HeroSection = () => (
    <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
        />
        {/* Gradient overlay */}
        <div
            className="absolute inset-0"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.55) 80%, rgba(13,30,46,0.90) 100%)",
            }}
        />

        {/* Top nav bar */}
        <div
            className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12"
            style={{ height: "80px" }}
        >
            <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Viva Beiramar" className="w-9 h-9 object-contain" />
                <span
                    className="font-display font-semibold text-lg hidden sm:block"
                    style={{ color: GOLD }}
                >
                    Viva Beiramar
                </span>
            </Link>
            <a
                href="#contato"
                className="px-5 h-9 rounded-full font-label text-[0.68rem] tracking-[1px] inline-flex items-center transition-all duration-300 hover:scale-105"
                style={{
                    border: `1px solid ${GOLD}`,
                    color: GOLD,
                    background: "rgba(197,160,89,0.08)",
                }}
            >
                Agendar Visita
            </a>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-20 md:pb-28">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[760px]"
            >
                <p
                    className="font-label text-[0.72rem] font-semibold uppercase tracking-[3px] mb-4"
                    style={{ color: GOLD }}
                >
                    Lázaro · Ubatuba — SP
                </p>
                <h1
                    className="font-display font-bold leading-[1.05] mb-5"
                    style={{
                        fontSize: "clamp(38px, 6vw, 72px)",
                        color: "#fff",
                        textShadow: "2px 3px 8px rgba(0,0,0,0.4)",
                    }}
                >
                    Villa Lázaro
                    <br />
                    <span style={{ color: GOLD }}>Residência à Beira-Mar</span>
                </h1>
                <p
                    className="font-body font-light text-[1.05rem] leading-[1.85] max-w-[560px] mb-8"
                    style={{
                        color: "rgba(255,255,255,0.82)",
                        textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
                    }}
                >
                    Uma propriedade singular frente ao mar, onde o luxo encontra a natureza
                    intocada do litoral norte de São Paulo.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="#contato"
                        className="inline-flex items-center gap-2 px-8 h-13 rounded-md font-label text-[0.78rem] tracking-[0.8px] transition-all duration-300 hover:scale-105"
                        style={{
                            background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                            color: "#fff",
                            boxShadow: "0 4px 20px rgba(197,160,89,0.40)",
                            height: "52px",
                        }}
                    >
                        Agendar Visita Exclusiva
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="#galeria"
                        className="inline-flex items-center gap-2 px-6 rounded-md font-label text-[0.78rem] tracking-[0.8px] transition-all duration-300 hover:scale-105"
                        style={{
                            border: `1px solid rgba(255,255,255,0.30)`,
                            color: "rgba(255,255,255,0.90)",
                            height: "52px",
                        }}
                    >
                        Ver Galeria
                    </a>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                style={{ color: "rgba(255,255,255,0.45)" }}
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </div>
    </section>
);

/* ════════════════════════════════════════════════════════════════════
   2. SPECS PANEL
   ════════════════════════════════════════════════════════════════════ */
const specs = [
    { icon: BedDouble, label: "Suítes", value: "4" },
    { icon: Bath, label: "Banheiros", value: "5" },
    { icon: Maximize2, label: "Área Total", value: "350 m²" },
    { icon: Car, label: "Vagas", value: "3" },
    { icon: MapPin, label: "Localização", value: "Lázaro" },
];

const SpecsPanel = () => (
    <section
        className="relative z-20"
        style={{ marginTop: "-60px", padding: "0 0 80px" }}
    >
        <div className="max-w-[900px] mx-auto px-6">
            <FadeIn>
                <div
                    className="rounded-[18px] px-8 py-8 md:px-12 md:py-10"
                    style={glass}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
                        {specs.map((spec, i) => {
                            const Icon = spec.icon;
                            return (
                                <motion.div
                                    key={spec.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                                        style={{
                                            background: "rgba(197,160,89,0.12)",
                                            border: "1px solid rgba(197,160,89,0.30)",
                                        }}
                                    >
                                        <Icon size={20} style={{ color: GOLD }} />
                                    </div>
                                    <span
                                        className="font-display font-bold text-lg"
                                        style={{ color: "#fff" }}
                                    >
                                        {spec.value}
                                    </span>
                                    <span
                                        className="font-label text-[0.62rem] uppercase tracking-[1.5px] mt-1"
                                        style={{ color: "rgba(255,255,255,0.50)" }}
                                    >
                                        {spec.label}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

/* ════════════════════════════════════════════════════════════════════
   3. TEXT / DESCRIPTION SECTION
   ════════════════════════════════════════════════════════════════════ */
const DescriptionSection = () => (
    <section
        style={{
            padding: "100px 0 110px",
            background: "linear-gradient(165deg, #F5EDD8 0%, #EDE0C4 45%, #E8D8B5 100%)",
        }}
    >
        <div className="max-w-[820px] mx-auto px-6">
            <FadeIn>
                <p
                    className="font-label text-[0.72rem] font-semibold uppercase tracking-[3px] text-center mb-4"
                    style={{ color: GOLD }}
                >
                    Sobre a Propriedade
                </p>
            </FadeIn>
            <FadeIn delay={0.1}>
                <h2
                    className="font-display font-bold text-center mb-8"
                    style={{ color: DARK_TEXT, fontSize: "clamp(28px, 3.5vw, 42px)" }}
                >
                    Um Refúgio de Exclusividade
                </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
                <div
                    className="mx-auto mb-10 rounded-full"
                    style={{
                        width: "52px",
                        height: "2px",
                        background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                    }}
                />
            </FadeIn>
            <FadeIn delay={0.2}>
                <div className="space-y-6">
                    <p
                        className="font-display font-normal italic text-center leading-[2]"
                        style={{ color: SAND_BODY, fontSize: "clamp(1rem, 1.3vw, 1.12rem)" }}
                    >
                        Situada na exclusiva Praia do Lázaro, esta residência é uma obra-prima
                        arquitetônica que harmoniza o luxo contemporâneo com a beleza natural
                        de Ubatuba. Com 350m² de área construída, cada detalhe foi pensado
                        para proporcionar uma experiência de vida incomparável.
                    </p>
                    <p
                        className="font-body font-light text-center leading-[1.95]"
                        style={{ color: SAND_BODY, fontSize: "0.95rem" }}
                    >
                        Amplos espaços integrados com pé-direito duplo se abrem para uma vista
                        panorâmica do oceano. A piscina com borda infinita se funde com o
                        horizonte, criando um cenário cinematográfico. Acabamentos em mármore
                        italiano, madeira nobre e metais dourados conferem sofisticação a
                        cada ambiente.
                    </p>
                </div>
            </FadeIn>

            {/* Feature pills */}
            <FadeIn delay={0.3}>
                <div className="flex flex-wrap justify-center gap-3 mt-12">
                    {[
                        "Piscina Infinita",
                        "Vista Mar Permanente",
                        "Gourmet Completa",
                        "Jardim Tropical",
                        "Automação Residencial",
                        "Home Cinema",
                    ].map((feature) => (
                        <span
                            key={feature}
                            className="px-4 py-2 rounded-full font-label text-[0.68rem] tracking-[0.8px]"
                            style={{
                                ...glassLight,
                                color: GOLD_DARK,
                            }}
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </FadeIn>

            {/* Price callout */}
            <FadeIn delay={0.35}>
                <div
                    className="mt-14 rounded-[16px] p-8 text-center"
                    style={glassLight}
                >
                    <p
                        className="font-label text-[0.65rem] uppercase tracking-[2px] mb-2"
                        style={{ color: GOLD }}
                    >
                        Valor do Investimento
                    </p>
                    <p
                        className="font-display font-bold"
                        style={{ color: DARK_TEXT, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                    >
                        R$ 4.500.000
                    </p>
                    <p
                        className="font-body font-light text-[0.82rem] mt-2"
                        style={{ color: SAND_BODY }}
                    >
                        Financiamento e condições especiais disponíveis
                    </p>
                </div>
            </FadeIn>
        </div>
    </section>
);

/* ════════════════════════════════════════════════════════════════════
   4. GALLERY SECTION
   ════════════════════════════════════════════════════════════════════ */
const galleryImages = [
    { src: livingImg, alt: "Living Room", span: "col-span-2 row-span-2" },
    { src: kitchenImg, alt: "Gourmet Kitchen", span: "col-span-1 row-span-1" },
    { src: bedroomImg, alt: "Master Suite", span: "col-span-1 row-span-1" },
    { src: poolImg, alt: "Pool & Terrace", span: "col-span-1 row-span-1" },
    { src: propVilla, alt: "Fachada", span: "col-span-1 row-span-1" },
    { src: propMansao, alt: "Vista Aérea", span: "col-span-2 row-span-1" },
];

const GallerySection = () => (
    <section
        id="galeria"
        style={{
            padding: "100px 0 110px",
            background: DARK_BG,
        }}
    >
        <div className="max-w-[1100px] mx-auto px-6">
            <FadeIn>
                <p
                    className="font-label text-[0.72rem] font-semibold uppercase tracking-[3px] text-center mb-4"
                    style={{ color: GOLD_DARK }}
                >
                    Tour Virtual
                </p>
            </FadeIn>
            <FadeIn delay={0.1}>
                <h2
                    className="font-display font-bold text-center mb-4"
                    style={{ color: GOLD, fontSize: "clamp(28px, 3.5vw, 44px)" }}
                >
                    Galeria Exclusiva
                </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
                <p
                    className="font-body font-light text-center mx-auto mb-12"
                    style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "0.95rem",
                        maxWidth: "420px",
                    }}
                >
                    Cada ambiente projetado para proporcionar conforto, sofisticação e uma
                    conexão única com o mar
                </p>
            </FadeIn>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {galleryImages.map((img, i) => (
                    <FadeIn
                        key={img.alt}
                        delay={i * 0.08}
                        className={img.span}
                    >
                        <div
                            className="group relative overflow-hidden rounded-[12px] h-full"
                            style={{
                                border: "1px solid rgba(255,255,255,0.12)",
                                minHeight: img.span.includes("row-span-2") ? "380px" : "180px",
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 50%)",
                                }}
                            >
                                <p
                                    className="font-label text-[0.70rem] uppercase tracking-[1.5px]"
                                    style={{ color: GOLD }}
                                >
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);

/* ════════════════════════════════════════════════════════════════════
   5. CONTACT SECTION
   ════════════════════════════════════════════════════════════════════ */
const ContactSection = () => {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = encodeURIComponent(
            `Olá! Me chamo ${form.nome} e tenho interesse na Villa Lázaro.\n\nEmail: ${form.email}\nTelefone: ${form.telefone}\n\n${form.mensagem}`,
        );
        window.open(`https://wa.me/5548996931776?text=${msg}`, "_blank");
    };

    const inputStyle: React.CSSProperties = {
        background: "rgba(255,252,245,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "10px",
        color: "#fff",
        fontSize: "0.88rem",
        padding: "14px 18px",
        width: "100%",
        outline: "none",
        transition: "border-color 0.3s, background 0.3s",
    };

    return (
        <section
            id="contato"
            className="relative overflow-hidden"
            style={{
                padding: "110px 0 120px",
                background: `linear-gradient(170deg, ${DARK_BG} 0%, #101F30 60%, #0A1820 100%)`,
            }}
        >
            {/* Decorative gradient blob */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "10%",
                    right: "-10%",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)`,
                    filter: "blur(80px)",
                }}
            />

            <div className="max-w-[900px] mx-auto px-6 relative z-10">
                <FadeIn>
                    <p
                        className="font-label text-[0.72rem] font-semibold uppercase tracking-[3px] text-center mb-4"
                        style={{ color: GOLD_DARK }}
                    >
                        Interesse Exclusivo
                    </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2
                        className="font-display font-bold text-center mb-4"
                        style={{ color: GOLD, fontSize: "clamp(28px, 3.5vw, 44px)" }}
                    >
                        Agende Sua Visita Privada
                    </h2>
                </FadeIn>
                <FadeIn delay={0.15}>
                    <p
                        className="font-body font-light text-center mx-auto mb-14"
                        style={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: "0.95rem",
                            maxWidth: "440px",
                        }}
                    >
                        Preencha seus dados e nossa equipe entrará em contato para uma
                        consultoria personalizada
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-[18px] p-8 md:p-12"
                        style={glass}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label
                                    className="block font-label text-[0.65rem] uppercase tracking-[1.5px] mb-2"
                                    style={{ color: "rgba(255,255,255,0.50)" }}
                                >
                                    Nome Completo
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Seu nome"
                                    style={inputStyle}
                                    value={form.nome}
                                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = GOLD;
                                        e.currentTarget.style.background = "rgba(197,160,89,0.06)";
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                                        e.currentTarget.style.background = "rgba(255,252,245,0.08)";
                                    }}
                                />
                            </div>
                            <div>
                                <label
                                    className="block font-label text-[0.65rem] uppercase tracking-[1.5px] mb-2"
                                    style={{ color: "rgba(255,255,255,0.50)" }}
                                >
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="seu@email.com"
                                    style={inputStyle}
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = GOLD;
                                        e.currentTarget.style.background = "rgba(197,160,89,0.06)";
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                                        e.currentTarget.style.background = "rgba(255,252,245,0.08)";
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                className="block font-label text-[0.65rem] uppercase tracking-[1.5px] mb-2"
                                style={{ color: "rgba(255,255,255,0.50)" }}
                            >
                                Telefone / WhatsApp
                            </label>
                            <input
                                type="tel"
                                required
                                placeholder="(00) 00000-0000"
                                style={inputStyle}
                                value={form.telefone}
                                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = GOLD;
                                    e.currentTarget.style.background = "rgba(197,160,89,0.06)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                                    e.currentTarget.style.background = "rgba(255,252,245,0.08)";
                                }}
                            />
                        </div>
                        <div className="mb-8">
                            <label
                                className="block font-label text-[0.65rem] uppercase tracking-[1.5px] mb-2"
                                style={{ color: "rgba(255,255,255,0.50)" }}
                            >
                                Mensagem (opcional)
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Descreva seu interesse ou dúvida..."
                                style={{ ...inputStyle, resize: "none" as const }}
                                value={form.mensagem}
                                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = GOLD;
                                    e.currentTarget.style.background = "rgba(197,160,89,0.06)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                                    e.currentTarget.style.background = "rgba(255,252,245,0.08)";
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full h-14 rounded-[10px] font-label text-[0.78rem] tracking-[1px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                            style={{
                                background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                                color: "#fff",
                                boxShadow: "0 4px 24px rgba(197,160,89,0.35)",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Enviar via WhatsApp →
                        </button>
                    </form>
                </FadeIn>

                {/* Direct contact info */}
                <FadeIn delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                        <a
                            href="https://wa.me/5548996931776"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-body text-[0.85rem] transition-colors"
                            style={{ color: "rgba(255,255,255,0.50)" }}
                        >
                            <Phone size={14} style={{ color: GOLD }} />
                            (48) 99693-1776
                        </a>
                        <a
                            href="mailto:contato@vivabeiramar.com"
                            className="flex items-center gap-2 font-body text-[0.85rem]"
                            style={{ color: "rgba(255,255,255,0.50)" }}
                        >
                            <Mail size={14} style={{ color: GOLD }} />
                            contato@vivabeiramar.com
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

/* ════════════════════════════════════════════════════════════════════
   6. LANDING FOOTER
   ════════════════════════════════════════════════════════════════════ */
const socials = [
    { icon: Instagram, href: "https://instagram.com/vivabeiramar", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/5548996931776", label: "WhatsApp" },
];

const LandingFooter = () => (
    <footer
        style={{
            padding: "48px 0 36px",
            background: "#080F18",
            borderTop: `1px solid rgba(197,160,89,0.12)`,
        }}
    >
        <div className="max-w-[900px] mx-auto px-6">
            {/* Logo + socials */}
            <div className="flex flex-col items-center gap-6">
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="Viva Beiramar" className="w-10 h-10 object-contain" />
                    <span
                        className="font-display font-semibold text-xl"
                        style={{ color: GOLD }}
                    >
                        Viva Beiramar
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                            style={{
                                border: `1px solid rgba(197,160,89,0.30)`,
                                color: GOLD,
                                background: "rgba(197,160,89,0.06)",
                            }}
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div
                    className="w-full rounded-full"
                    style={{
                        height: "1px",
                        background: `linear-gradient(90deg, transparent, rgba(197,160,89,0.18), transparent)`,
                    }}
                />

                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
                    <p
                        className="font-body text-[0.72rem]"
                        style={{ color: "rgba(255,252,245,0.35)" }}
                    >
                        © 2026 Viva Beiramar. Todos os direitos reservados.
                    </p>
                    <p
                        className="font-label text-[0.65rem] font-semibold uppercase tracking-[1.5px]"
                        style={{ color: GOLD_DARK }}
                    >
                        CRECI 123456-F
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

/* ════════════════════════════════════════════════════════════════════
   PAGE EXPORT
   ════════════════════════════════════════════════════════════════════ */
const PropertyLanding = () => (
    <div
        style={{
            background: DARK_BG,
            minHeight: "100vh",
            overflowX: "hidden",
        }}
    >
        <HeroSection />
        <SpecsPanel />
        <DescriptionSection />
        <GallerySection />
        <ContactSection />
        <LandingFooter />
    </div>
);

export default PropertyLanding;
