import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, Car, MapPin, Square, Search, SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { properties, buildPropertyPath } from "@/data/properties";
import type { PropertyRecord } from "@/data/properties";

const GOLD = "#C5A059";

const tiposUnicos = [...new Set(properties.map((p) => p.type))].sort();
const bairrosUnicos = [...new Set(properties.map((p) => p.neighborhood))].sort();

const parsePrice = (price: string): number => {
    const digits = price.replace(/\D/g, "");
    return digits ? Number(digits) : 0;
};

const PropertyGridCard = ({ property, index }: { property: PropertyRecord; index: number }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group overflow-hidden rounded-[10px]"
        style={{
            background: "rgba(255, 255, 255, 0.55)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
        }}
    >
        <Link to={buildPropertyPath(property)} className="block h-full">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                    src={property.image}
                    alt={property.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {property.tags?.[0] && (
                    <span
                        className="absolute top-3 left-3 px-2.5 py-1 rounded font-label text-[0.6rem] font-bold uppercase tracking-[1px] text-white"
                        style={{ background: GOLD }}
                    >
                        {property.tags[0].label}
                    </span>
                )}
            </div>
            <div className="p-5">
                <span
                    className="block font-label text-[0.65rem] font-medium uppercase tracking-[1.5px] mb-1.5"
                    style={{ color: "rgba(44,24,16,0.40)" }}
                >
                    {property.type}
                </span>
                <h3
                    className="font-display font-semibold mb-1 leading-snug"
                    style={{ color: "#2C1810", fontSize: "1rem" }}
                >
                    {property.title}
                </h3>
                {property.condo && (
                    <p className="flex items-center gap-1.5 text-[0.82rem] mb-2" style={{ color: "rgba(44,24,16,0.45)" }}>
                        <MapPin size={13} style={{ color: GOLD }} />
                        {property.condo}
                    </p>
                )}
                <div className="flex flex-wrap gap-3 text-[0.8rem] mb-3" style={{ color: "rgba(44,24,16,0.55)" }}>
                    {property.area && (
                        <span className="inline-flex items-center gap-1.5">
                            <Square size={13} style={{ color: GOLD }} /> {property.area}
                        </span>
                    )}
                    {property.bedrooms && (
                        <span className="inline-flex items-center gap-1.5">
                            <BedDouble size={13} style={{ color: GOLD }} /> {property.bedrooms}
                        </span>
                    )}
                    {property.parking && (
                        <span className="inline-flex items-center gap-1.5">
                            <Car size={13} style={{ color: GOLD }} /> {property.parking}
                        </span>
                    )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[rgba(197,160,89,0.2)]">
                    <div>
                        <span
                            className="block font-label text-[0.6rem] uppercase tracking-[1px] mb-0.5"
                            style={{ color: "rgba(44,24,16,0.40)" }}
                        >
                            {property.priceLabel}
                        </span>
                        <span
                            className="font-display font-bold"
                            style={{ color: GOLD, fontSize: "1.1rem" }}
                        >
                            {property.price}
                        </span>
                    </div>
                    <span
                        className="font-label text-[0.62rem] tracking-[0.8px]"
                        style={{ color: "rgba(44,24,16,0.45)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                        Ver detalhes →
                    </span>
                </div>
            </div>
        </Link>
    </motion.article>
);

const Imoveis = () => {
    const [tipo, setTipo] = useState("");
    const [bairro, setBairro] = useState("");
    const [ordem, setOrdem] = useState("");
    const [filtersOpen, setFiltersOpen] = useState(false);

    const filtered = useMemo(() => {
        let result = [...properties];

        if (tipo) {
            result = result.filter((p) => p.type === tipo);
        }
        if (bairro) {
            result = result.filter((p) => p.neighborhood === bairro);
        }
        if (ordem === "menor") {
            result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        } else if (ordem === "maior") {
            result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        }

        return result;
    }, [tipo, bairro, ordem]);

    const hasActiveFilters = tipo || bairro || ordem;

    const clearFilters = () => {
        setTipo("");
        setBairro("");
        setOrdem("");
    };

    const selectClass =
        "w-full h-11 px-4 rounded-lg text-[0.85rem] font-light bg-white/50 border border-[rgba(197,160,89,0.25)] text-[#2C1810] focus:outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer";

    return (
        <>
            <Header />
            <main className="pt-24 pb-20" style={{ background: "#F5ECD7", minHeight: "100vh" }}>
                <div className="vb-container">
                    {/* Breadcrumb */}
                    <div className="text-xs text-[rgba(44,24,16,0.45)] mb-8">
                        <Link to="/" className="hover:text-[#2C1810] transition-colors">
                            Início
                        </Link>{" "}
                        / <span className="text-[#2C1810]">Imóveis</span>
                    </div>

                    {/* Header */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1
                            className="font-display font-bold"
                            style={{ color: "#2C1810", fontSize: "clamp(30px, 4vw, 48px)" }}
                        >
                            Nossos Imóveis
                        </h1>
                        <p
                            className="font-body font-light mt-2"
                            style={{ color: "rgba(44,24,16,0.55)", fontSize: "1rem" }}
                        >
                            Explore nossa seleção completa de propriedades no litoral de Ubatuba
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        {/* Mobile toggle */}
                        <button
                            onClick={() => setFiltersOpen(!filtersOpen)}
                            className="lg:hidden flex items-center gap-2 mb-4 px-5 h-10 rounded-lg font-label text-[0.75rem] tracking-[0.8px] border border-[rgba(197,160,89,0.25)] text-[#2C1810] hover:border-[#C5A059] transition-colors"
                        >
                            <SlidersHorizontal size={14} />
                            Filtros
                        </button>

                        <div className={`${filtersOpen ? "block" : "hidden"} lg:flex items-end gap-4 p-5 rounded-xl`} style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.5)" }}>
                            <div className="flex-1 min-w-0">
                                <label className="block font-label text-[0.68rem] uppercase tracking-[1px] text-[rgba(44,24,16,0.55)] mb-2">
                                    Tipo
                                </label>
                                <select className={selectClass} value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                    <option value="">Todos os tipos</option>
                                    {tiposUnicos.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex-1 min-w-0 mt-3 lg:mt-0">
                                <label className="block font-label text-[0.68rem] uppercase tracking-[1px] text-[rgba(44,24,16,0.55)] mb-2">
                                    Bairro
                                </label>
                                <select className={selectClass} value={bairro} onChange={(e) => setBairro(e.target.value)}>
                                    <option value="">Todos os bairros</option>
                                    {bairrosUnicos.map((b) => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex-1 min-w-0 mt-3 lg:mt-0">
                                <label className="block font-label text-[0.68rem] uppercase tracking-[1px] text-[rgba(44,24,16,0.55)] mb-2">
                                    Ordenar por
                                </label>
                                <select className={selectClass} value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                                    <option value="">Relevância</option>
                                    <option value="menor">Menor preço</option>
                                    <option value="maior">Maior preço</option>
                                </select>
                            </div>

                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="mt-3 lg:mt-0 flex items-center gap-1.5 h-11 px-5 rounded-lg font-label text-[0.72rem] tracking-[0.8px] text-[rgba(44,24,16,0.6)] hover:text-[#2C1810] border border-[rgba(197,160,89,0.25)] hover:border-red-400/50 transition-colors"
                                >
                                    <X size={14} />
                                    Limpar
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Results count */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="font-body text-[0.85rem]" style={{ color: "rgba(44,24,16,0.55)" }}>
                            <span className="text-[#2C1810] font-semibold">{filtered.length}</span>{" "}
                            {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
                        </p>
                    </div>

                    {/* Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filtered.map((property, i) => (
                                <PropertyGridCard key={property.id} property={property} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <Search size={48} style={{ color: "rgba(44,24,16,0.20)" }} className="mx-auto mb-4" />
                            <h3 className="font-display text-xl font-semibold text-[#2C1810] mb-2">
                                Nenhum imóvel encontrado
                            </h3>
                            <p style={{ color: "rgba(44,24,16,0.50)" }} className="mb-6">
                                Tente alterar os filtros para encontrar mais opções
                            </p>
                            <button
                                onClick={clearFilters}
                                className="inline-flex items-center gap-2 px-6 h-10 rounded font-label text-[0.72rem] tracking-[0.8px] transition-all duration-300 hover:bg-[#C5A059] hover:text-white"
                                style={{ border: `1px solid ${GOLD}`, color: GOLD }}
                            >
                                Limpar filtros
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
};

export default Imoveis;
