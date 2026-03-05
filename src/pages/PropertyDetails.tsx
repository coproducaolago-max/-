import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageCircle,
  Send,
  Share2,
  Square,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  buildPropertyPath,
  defaultBroker,
  getDetailedPropertyFromRouteSlug,
  getSimilarProperties,
  properties,
} from "@/data/properties";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const formatCurrency = (value: number): string => currencyFormatter.format(value);

const formatPhoneMask = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const PropertyDetails = () => {
  const { propertySlug } = useParams();
  const property = useMemo(
    () => getDetailedPropertyFromRouteSlug(propertySlug),
    [propertySlug],
  );
  const broker = defaultBroker;

  const similarProperties = useMemo(() => {
    if (!property) return [];
    return getSimilarProperties(property.id, 6);
  }, [property]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const similarCarouselRef = useRef<HTMLDivElement>(null);

  const defaultMessage = useMemo(() => {
    if (!property) return "";
    return `Ola, tenho interesse no imovel ${property.title} - Ref: ${property.id}.`;
  }, [property]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [property?.id]);

  useEffect(() => {
    if (!property) return;
    setFormState((current) => ({
      ...current,
      message: defaultMessage,
    }));
  }, [defaultMessage, property]);

  if (!property) {
    return (
      <>
        <Header />
        <main className="property-page min-h-screen pt-28 px-6 bg-[var(--bg-primary)]">
          <div className="vb-container content-section">
            <p className="text-sm text-[var(--text-secondary)] mb-2">
              Imovel nao encontrado
            </p>
            <h1 className="property-title">Este anuncio nao esta disponivel</h1>
            <Link to="/#imoveis" className="btn-submit inline-flex mt-5 w-auto px-7">
              Voltar para listagem
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const selectedImage = property.images[selectedImageIndex] ?? property.images[0];
  const totalImages = property.images.length;
  const counterText = `${selectedImageIndex + 1}/${totalImages}`;

  const goToPreviousImage = () => {
    setSelectedImageIndex((current) => (current - 1 + totalImages) % totalImages);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((current) => (current + 1) % totalImages);
  };

  const shareCurrentPage = async () => {
    const shareData = {
      title: property.title,
      text: `Confira este imovel: ${property.title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // Fallback silencioso.
    }
  };

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/coproducaolago@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🏠 Novo Interesse — ${property.title} (Ref: ${property.id})`,
          "Imóvel": property.title,
          "Referência": property.id,
          "Preço": property.price,
          "Localização": property.location?.address || "",
          "Nome do Cliente": formState.name,
          "E-mail": formState.email,
          "Telefone / WhatsApp": formState.phone,
          "Mensagem": formState.message || defaultMessage,
          _template: "table",
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const whatsappText = encodeURIComponent(formState.message || defaultMessage);
  const whatsappUrl = `https://wa.me/${broker.whatsapp}?text=${whatsappText}`;

  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    property.location.address,
  )}`;

  const scrollSimilar = (direction: "prev" | "next") => {
    if (!similarCarouselRef.current) return;
    const amount = Math.round(similarCarouselRef.current.clientWidth * 0.9);
    similarCarouselRef.current.scrollBy({
      left: direction === "prev" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const specs = [
    { label: "m2", value: property.specs.area, icon: Square },
    { label: "quartos", value: property.specs.bedrooms, icon: BedDouble },
    { label: "banheiros", value: property.specs.bathrooms, icon: Bath },
    { label: "vagas", value: property.specs.parking, icon: Car },
  ].filter((item) => item.value > 0);

  return (
    <>
      <Header />
      <main className="property-page-wrapper pt-24 pb-20 bg-[var(--bg-primary)]">
        <div className="vb-container">
          <div className="text-xs text-[var(--text-secondary)] mb-5">
            <Link to="/" className="hover:text-[var(--text-primary)] transition-colors">
              Inicio
            </Link>{" "}
            / <span className="text-[var(--text-primary)]">Imovel #{property.id}</span>
          </div>
        </div>

        <section className="property-page">
          <div className="property-content">
            <article className="property-main">
              <section className="gallery-section">
                <div className="gallery-main">
                  <img src={selectedImage} alt={property.title} />
                  <button
                    type="button"
                    className="gallery-nav prev"
                    onClick={goToPreviousImage}
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    type="button"
                    className="gallery-nav next"
                    onClick={goToNextImage}
                    aria-label="Proxima imagem"
                  >
                    <ChevronRight />
                  </button>
                  <div className="gallery-counter">{counterText}</div>

                  <div className="gallery-toolbar">
                    <Link to="/#imoveis" className="gallery-toolbar-btn">
                      <ArrowLeft />
                      Voltar aos imoveis
                    </Link>
                    <button type="button" className="gallery-toolbar-btn" onClick={shareCurrentPage}>
                      <Share2 />
                      Compartilhar
                    </button>
                  </div>
                </div>

                <div className="gallery-thumbs">
                  {property.images.map((image, index) => (
                    <button
                      key={`${property.id}-${index}`}
                      type="button"
                      className={`gallery-thumb ${selectedImageIndex === index ? "active" : ""}`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img src={image} alt={`${property.title} foto ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </section>

              <section className="property-info">
                {property.tag && <span className="property-tag">{property.tag}</span>}
                <h1 className="property-title">{property.title}</h1>
                <p className="property-location">
                  <MapPin />
                  {property.location.address}
                </p>

                <div className="property-price-section">
                  {property.priceLabel && (
                    <p className="property-price-label">{property.priceLabel}</p>
                  )}
                  <p className="property-price-main">{formatCurrency(property.price)}</p>
                </div>

                <div className="property-specs">
                  {specs.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="spec-item">
                      <Icon />
                      <span className="value">{value}</span>
                      <span className="label">{label}</span>
                    </div>
                  ))}
                </div>

                <section className="property-description">
                  <h2>Sobre o imovel</h2>
                  <p>{property.description}</p>
                </section>

                {property.features.length > 0 && (
                  <section className="property-features">
                    <h2>Caracteristicas</h2>
                    <div className="features-grid">
                      {property.features.map((feature) => (
                        <div key={feature} className="feature-item">
                          <Check className="icon" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {!!property.buildingFeatures?.length && (
                      <div className="building-features">
                        <h3>Empreendimento</h3>
                        <div className="features-grid">
                          {property.buildingFeatures.map((feature) => (
                            <div key={feature} className="feature-item">
                              <Building2 className="icon" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>
                )}
              </section>
            </article>

            <aside className="contact-sidebar">
              <div className="contact-card">
                <div className="contact-card-header">
                  <p className="price-label">{property.priceLabel ?? "Valor"}</p>
                  <p className="price">{formatCurrency(property.price)}</p>
                  <p className="ref-code">Ref: {property.id}</p>
                </div>

                <h3>Tenho interesse</h3>

                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="contact-name">Nome completo</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, name: event.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">E-mail</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="voce@email.com"
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, email: event.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Telefone / WhatsApp</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formState.phone}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          phone: formatPhoneMask(event.target.value),
                        }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Mensagem</label>
                    <textarea
                      id="contact-message"
                      className={formState.message === defaultMessage ? "prefilled" : ""}
                      value={formState.message}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, message: event.target.value }))
                      }
                    />
                  </div>

                  {formStatus === "success" ? (
                    <div style={{ textAlign: "center", padding: "16px 0" }}>
                      <p style={{ color: "#16a34a", fontWeight: 600, fontSize: "0.95rem", marginBottom: "4px" }}>
                        ✓ Mensagem enviada com sucesso!
                      </p>
                      <p style={{ color: "rgba(44,24,16,0.55)", fontSize: "0.8rem" }}>
                        Entraremos em contato em breve.
                      </p>
                      <button
                        type="button"
                        className="btn-submit"
                        style={{ marginTop: "12px", opacity: 0.85 }}
                        onClick={() => {
                          setFormStatus("idle");
                          setFormState((c) => ({ ...c, message: defaultMessage }));
                        }}
                      >
                        Enviar nova mensagem
                      </button>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={formStatus === "sending"}
                      style={{ opacity: formStatus === "sending" ? 0.7 : 1 }}
                    >
                      {formStatus === "sending" ? (
                        <>⏳ Enviando...</>
                      ) : formStatus === "error" ? (
                        <>⚠️ Erro — Tentar novamente</>
                      ) : (
                        <><Send /> Enviar mensagem</>
                      )}
                    </button>
                  )}
                </form>

                <div className="divider-or">ou</div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle />
                  Falar no WhatsApp
                </a>

                <div className="broker-section">
                  <div className="broker-info">
                    <img src={broker.photo} alt={broker.name} className="broker-photo" />
                    <div className="broker-details">
                      <p className="broker-name">{broker.name}</p>
                      <p className="broker-creci">{broker.creci}</p>
                      <p className="broker-phone">{broker.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {property.location.mapUrl && (
            <section className="map-section">
              <header className="map-section-header">
                <h2>Localizacao</h2>
                <p>{property.location.address}</p>
              </header>
              <div className="map-container">
                <iframe
                  title={`Mapa ${property.title}`}
                  src={property.location.mapUrl}
                  loading="lazy"
                />
              </div>
              <a
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <MapPin />
                Ver no Google Maps
              </a>
            </section>
          )}

          {property.virtualTourUrl && (
            <section className="map-section">
              <header className="map-section-header">
                <h2>🏙️ Tour Virtual 3D</h2>
                <p>Explore o empreendimento em 360° diretamente pelo seu navegador</p>
              </header>
              <div className="map-container" style={{ position: "relative" }}>
                <iframe
                  title={`Tour Virtual 3D – ${property.title}`}
                  src={property.virtualTourUrl}
                  loading="lazy"
                  allow="fullscreen; vr; xr-spatial-tracking"
                  style={{ border: "none", width: "100%", height: "100%" }}
                />
              </div>
              <a
                href={property.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                ↗ Abrir Tour em Tela Cheia
              </a>
            </section>
          )}

          {similarProperties.length > 0 && (
            <section className="similar-section">
              <header className="similar-section-header">
                <h2>Voce tambem pode gostar</h2>
                <div className="similar-nav">
                  <button type="button" onClick={() => scrollSimilar("prev")} aria-label="Anterior">
                    <ChevronLeft />
                  </button>
                  <button type="button" onClick={() => scrollSimilar("next")} aria-label="Proximo">
                    <ChevronRight />
                  </button>
                </div>
              </header>

              <div className="similar-carousel" ref={similarCarouselRef}>
                {similarProperties.map((similarProperty) => {
                  const fullProperty = properties.find(
                    (item) => String(item.id) === similarProperty.id,
                  );
                  const href = fullProperty ? buildPropertyPath(fullProperty) : "/#imoveis";

                  return (
                    <Link key={similarProperty.id} to={href} className="similar-card">
                      <div className="image-container">
                        <img src={similarProperty.image} alt={similarProperty.title} />
                        {similarProperty.tag && <span className="tag">{similarProperty.tag}</span>}
                      </div>
                      <div className="info">
                        <p className="location">
                          <MapPin />
                          {similarProperty.location}
                        </p>
                        <h3 className="title">{similarProperty.title}</h3>
                        <div className="specs">
                          {similarProperty.specs.area > 0 && (
                            <span>
                              <Square size={14} />
                              {similarProperty.specs.area}m2
                            </span>
                          )}
                          {similarProperty.specs.bedrooms > 0 && (
                            <span>
                              <BedDouble size={14} />
                              {similarProperty.specs.bedrooms}
                            </span>
                          )}
                          {similarProperty.specs.parking > 0 && (
                            <span>
                              <Car size={14} />
                              {similarProperty.specs.parking}
                            </span>
                          )}
                        </div>
                        <p className="price">{formatCurrency(similarProperty.price)}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </section>
      </main>

      <div className="mobile-cta">
        <p className="price">{formatCurrency(property.price)}</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-cta-whatsapp">
          <MessageCircle />
          Tenho interesse
        </a>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default PropertyDetails;
