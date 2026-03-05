import corretorImage from "@/assets/corretor.jpg";
import sienaFachada from "@/assets/siena-fachada.png";
import sienaFachadaLateral from "@/assets/siena-fachada-lateral.png";
import sienaGourmet from "@/assets/siena-gourmet.png";
import sienaLiving from "@/assets/siena-living.png";
import sienaPiscina from "@/assets/siena-piscina.png";
import vertFachadaSuite from "@/assets/vert-fachada-suite.png";
import vertFachadaEsquina from "@/assets/vert-fachada-esquina.png";
import vertFachadaStudio from "@/assets/vert-fachada-studio.png";
import vertPlantaSuite from "@/assets/vert-planta-suite.png";
import vertPlantaStudio from "@/assets/vert-planta-studio.png";
import vertLazer from "@/assets/vert-lazer.png";
import vertFachadaStudioRj from "@/assets/vert-fachada-studio-rj.png";
import vertStudioInterior from "@/assets/vert-studio-interior.png";
import vertFachadaSuiteNc from "@/assets/vert-fachada-suite-nc.png";
import vertSuiteSala from "@/assets/vert-suite-sala.png";
import vertRooftopPiscina from "@/assets/vert-rooftop-piscina.png";
import vertVarandaGourmet from "@/assets/vert-varanda-gourmet.png";
import vertRooftopQuiosque from "@/assets/vert-rooftop-quiosque.png";
import amalfiFachada from "@/assets/amalfi-fachada.png";
import amalfiQuarto from "@/assets/amalfi-quarto.png";
import amalfiVaranda from "@/assets/amalfi-varanda.png";
import amalfiAcademia from "@/assets/amalfi-academia.png";
import bellagioFachada from "@/assets/bellagio-fachada.png";
import bellagioFachadaFrente from "@/assets/bellagio-fachada-frente.png";
import bellagioFachadaLateral from "@/assets/bellagio-fachada-lateral.png";
import bellagioPiscina from "@/assets/bellagio-piscina.png";
import bellagioLiving from "@/assets/bellagio-living.png";
import bellagioQuarto from "@/assets/bellagio-quarto.png";
import bellagioVaranda from "@/assets/bellagio-varanda.png";
import bellagioAcademia from "@/assets/bellagio-academia.png";
import bellagioGourmet from "@/assets/bellagio-gourmet.png";

export type PropertyTagVariant = "destaque" | "lancamento" | "aluguel";

export interface PropertyTag {
  label: string;
  variant: PropertyTagVariant;
}

export interface PropertyRecord {
  id: number;
  image: string;
  type: string;
  title: string;
  condo?: string;
  neighborhood: string;
  city: string;
  stateCode: string;
  area?: string;
  bedrooms?: string;
  bathrooms?: string;
  parking?: string;
  priceLabel: string;
  price: string;
  description: string;
  features: string[];
  observations?: string;
  tags?: PropertyTag[];
  virtualTourUrl?: string;
}

const stateNameByCode: Record<string, string> = {
  SP: "sao-paulo",
};

const normalizeSlug = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const properties: PropertyRecord[] = [
  {
    id: 107243,
    image: vertFachadaSuite,
    type: "Apartamento",
    title: "Vert by Voga – Studio | Perequê-Açu, Ubatuba - SP",
    condo: "Vert by Voga",
    neighborhood: "Perequê-Açu",
    city: "Ubatuba",
    stateCode: "SP",
    area: "36 m2",
    bedrooms: "Studio",
    bathrooms: "1 Banheiro",
    parking: "1 vaga",
    priceLabel: "A partir de",
    price: "R$ 271.500",
    tags: [{ label: "Lançamento", variant: "lancamento" }],
    description:
      "Studio moderno no empreendimento Vert by Voga, localizado a apenas 380m da Praia do Perequê-Açú em Ubatuba. Unidade do 3° andar com frente para a Rua Rio de Janeiro. Entrada facilitada em até 6x sem juros. Lazer completo com rooftop, piscina, SPA e muito mais.",
    features: [
      "380m da Praia do Perequê-Açú",
      "800m do Mercado de Peixe",
      "1,8km da Roda Gigante – Ubatuba Mall",
      "4km da Praia Grande",
      "Piscina com Deck no Rooftop",
      "Solarium e Quiosque no Rooftop",
      "SPA com 2 hidros",
      "Espaço Fitness",
      "Mini Market e Coworking",
      "Lavanderia compartilhada",
      "Entrada em até 6x sem juros",
    ],
    observations:
      "3° Andar, frente Rua Rio de Janeiro. Unidades de studio com 36,2 m². Projeto aprovado pela Voga Incorporadora.",
  },
  {
    id: 107244,
    image: vertFachadaEsquina,
    type: "Apartamento",
    title: "Vert by Voga – 1 Suíte | Perequê-Açu, Ubatuba - SP",
    condo: "Vert by Voga",
    neighborhood: "Perequê-Açu",
    city: "Ubatuba",
    stateCode: "SP",
    area: "38 m2",
    bedrooms: "1 Suíte",
    bathrooms: "1 Banheiro",
    parking: "1 vaga",
    priceLabel: "A partir de",
    price: "R$ 291.750",
    tags: [{ label: "Lançamento", variant: "lancamento" }],
    description:
      "Apartamento de 1 suíte no empreendimento Vert by Voga, a 380m da Praia do Perequê-Açú. Unidade do 3° andar com frente para a Rua Nicolau Copérnico. Condomínio com rooftop completo, piscina, SPA e entrada facilitada em até 6x sem juros.",
    features: [
      "380m da Praia do Perequê-Açú",
      "800m do Mercado de Peixe",
      "1,8km da Roda Gigante – Ubatuba Mall",
      "4km da Praia Grande",
      "Piscina com Deck no Rooftop",
      "Solarium e Quiosque no Rooftop",
      "SPA com 2 hidros",
      "Espaço Fitness",
      "Mini Market e Coworking",
      "Lavanderia compartilhada",
      "Entrada em até 6x sem juros",
    ],
    observations:
      "3° Andar, frente Rua Nicolau Copérnico. Unidades de 1 suíte com 38,9 m². Projeto aprovado pela Voga Incorporadora.",
  },
  {
    id: 107245,
    image: amalfiFachada,
    type: "Apartamento",
    title: "Amalfi Studios | Ubatuba - SP",
    condo: "Amalfi Studios – Siete Construtora",
    neighborhood: "Ubatuba",
    city: "Ubatuba",
    stateCode: "SP",
    area: "Studio",
    bedrooms: "Studio",
    bathrooms: "1 Banheiro",
    parking: "1 vaga",
    priceLabel: "Consulte-nos",
    price: "Sob Consulta",
    tags: [{ label: "Lançamento", variant: "lancamento" }],
    description:
      "Amalfi Studios é um empreendimento moderno da Siete Construtora em Ubatuba, com acabamento sofisticado e lazer completo. Studios projetados para morar com conforto ou investir com alta rentabilidade de temporada.",
    features: [
      "Academia completa",
      "Varanda integrada ao living",
      "Localização privilegiada em Ubatuba",
      "Projeto Siete Construtora",
      "Unidades compactas e funcionais",
      "Ideal para investimento em temporada",
    ],
    observations:
      "Valores e metragens sob consulta. Entre em contato para conhecer as opções disponíveis.",
  },
  {
    id: 107246,
    image: bellagioFachada,
    type: "Apartamento",
    title: "Bellagio Residenziale | Centro, Caraguatatuba - SP",
    condo: "Bellagio Residenziale – A3 Construtora",
    neighborhood: "Centro",
    city: "Caraguatatuba",
    stateCode: "SP",
    area: "48 a 139 m²",
    bedrooms: "1 a 3 Quartos",
    bathrooms: "1 a 3 Banheiros",
    parking: "1 vaga",
    priceLabel: "A partir de",
    price: "R$ 331.690",
    tags: [{ label: "Lançamento", variant: "lancamento" }],
    description:
      "O Bellagio Residenziale é um empreendimento de alto padrão da A3 Construtora, localizado de frente para o mar no coração de Caraguatatuba. Com 4 torres residenciais e 12 lojas, oferece apartamentos de 1, 2 e 3 dormitórios — todos com suíte, ventilação natural e varanda gourmet com churrasqueira a carvão. Localizado na Av. Dr. Arthur da Costa Filho, 1555.",
    features: [
      "4 Torres Residenciais + 12 Lojas",
      "1, 2 ou 3 dormitórios com suíte",
      "Varanda gourmet com churrasqueira a carvão",
      "Piscina com borda infinita",
      "Sauna e academia interna e externa",
      "Salão de festas e brinquedoteca",
      "Armário náutico exclusivo por cota",
      "Infraestrutura para ar condicionado",
      "Aquecimento a gás",
      "De frente para o mar",
    ],
    observations:
      "Empreendimento em fase de lançamento. Modelo de investimento via SCP (Sociedade em Conta de Participação). Preço de custo competitivo entre R$ 4.400 e R$ 5.000/m². Unidades de 48 a 139 m² com opções de planta duplex.",
    virtualTourUrl: "https://portal.iteleport.com.br/tour/a3-bellagio/fullscreen",
  },
  {
    id: 107247,
    image: sienaFachada,
    type: "Apartamento",
    title: "Siena Residencial | Itaguá, Ubatuba - SP",
    condo: "Siena Residencial – A3 Construtora",
    neighborhood: "Itaguá",
    city: "Ubatuba",
    stateCode: "SP",
    area: "64 a 77 m²",
    bedrooms: "2 Quartos",
    bathrooms: "2 Banheiros",
    parking: "1 vaga",
    priceLabel: "A partir de",
    price: "R$ 541.783",
    tags: [{ label: "Lançamento", variant: "lancamento" }],
    description:
      "O Siena Residencial é um lançamento exclusivo da A3 Construtora no bairro Itaguá, em Ubatuba. Com apartamentos de 64 a 77 m², opções de 2 suítes ou 2 quartos sendo 1 suíte, e lazer completo no rooftop com piscina, academia e sauna. Portaria blindada e infraestrutura para veículos elétricos.",
    features: [
      "Rooftop com piscina",
      "Academia e Crossfit",
      "Sauna e área de descanso",
      "Espaço gourmet",
      "Portaria blindada",
      "Bicicletário",
      "Infraestrutura para veículos elétricos",
      "Opção com 2 suítes ou 1 suíte + 1 quarto",
      "Localização privilegiada em Ubatuba",
    ],
    observations:
      "Unidades de 64,16 m² a 76,99 m². Preço de entrada a partir de R$ 541.783 (Unidade 311, 64 m², 2 dorms/1 suíte, 1 vaga). Empreendimento A3 Construtora.",
  },
];

export const featuredPropertyIds = [107243, 107244, 107245, 107246, 107247];
export const mostWantedPropertyIds = [107243, 107244, 107245, 107246, 107247];
export const newestPropertyIds = [107247, 107246, 107243, 107244, 107245];

const byId = new Map(properties.map((property) => [property.id, property]));

const mapFromIds = (ids: number[]): PropertyRecord[] =>
  ids.map((id) => byId.get(id)).filter((property): property is PropertyRecord => Boolean(property));

export const featuredProperties = mapFromIds(featuredPropertyIds);
export const mostWantedProperties = mapFromIds(mostWantedPropertyIds);
export const newestProperties = mapFromIds(newestPropertyIds);

export const buildPropertySlug = (property: PropertyRecord): string => {
  const stateName = stateNameByCode[property.stateCode] ?? property.stateCode;
  const base = `${property.type}-${property.neighborhood}-${property.city}-${stateName}`;
  return `${normalizeSlug(base)}-id-${property.id}`;
};

export const buildPropertyPath = (property: PropertyRecord): string =>
  `/imovel/${buildPropertySlug(property)}`;

export const getPropertyFromRouteSlug = (routeSlug?: string): PropertyRecord | undefined => {
  if (!routeSlug) return undefined;
  const idMatch = routeSlug.match(/-id-(\d+)$/);
  if (idMatch) {
    return byId.get(Number(idMatch[1]));
  }

  return properties.find((property) => buildPropertySlug(property) === routeSlug);
};



const vertGalleryStudio = [
  vertFachadaStudioRj,
  vertStudioInterior,
  vertRooftopPiscina,
  vertPlantaStudio,
  vertLazer,
];

const vertGallerySuite = [
  vertFachadaSuiteNc,
  vertSuiteSala,
  vertVarandaGourmet,
  vertRooftopQuiosque,
  vertPlantaSuite,
];

export const getPropertyGallery = (property: PropertyRecord): string[] => {
  if (property.id === 107243) return vertGalleryStudio;
  if (property.id === 107244) return vertGallerySuite;
  if (property.id === 107245) return [amalfiFachada, amalfiQuarto, amalfiVaranda, amalfiAcademia];
  if (property.id === 107246) return [bellagioFachadaFrente, bellagioFachadaLateral, bellagioPiscina, bellagioLiving, bellagioQuarto, bellagioVaranda, bellagioAcademia, bellagioGourmet];
  if (property.id === 107247) return [sienaFachada, sienaFachadaLateral, sienaPiscina, sienaLiving, sienaGourmet];

  return [property.image];
};

export interface Property {
  id: string;
  title: string;
  type: string;
  tag: string;
  price: number;
  priceLabel?: string;
  location: {
    address: string;
    city: string;
    state: string;
    neighborhood: string;
    mapUrl?: string;
    coordinates?: { lat: number; lng: number };
  };
  images: string[];
  specs: {
    area: number;
    bedrooms: number;
    suites?: number;
    bathrooms: number;
    parking: number;
    floors?: number;
  };
  description: string;
  features: string[];
  buildingFeatures?: string[];
  status?: string;
  developer?: string;
  deliveryDate?: string;
  virtualTourUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Broker {
  name: string;
  photo: string;
  creci: string;
  phone: string;
  whatsapp: string;
  email: string;
}

export interface SimilarProperty {
  id: string;
  title: string;
  image: string;
  price: number;
  location: string;
  specs: { bedrooms: number; bathrooms: number; parking: number; area: number };
  tag?: string;
}

const parseNumberFromText = (value?: string): number => {
  if (!value) return 0;
  const match = value.match(/\d+/);
  if (!match) return 0;
  return Number(match[0]);
};

const parsePrice = (value: string): number => {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
};

const mapVariantToTag = (variant?: PropertyTagVariant): string => {
  if (variant === "lancamento") return "LANCAMENTO";
  if (variant === "destaque") return "EXCLUSIVO";
  if (variant === "aluguel") return "OPORTUNIDADE";
  return "EXCLUSIVO";
};

const mapVariantToStatus = (variant?: PropertyTagVariant): string => {
  if (variant === "lancamento") return "Lancamento";
  if (variant === "destaque") return "Pronto";
  if (variant === "aluguel") return "Disponivel";
  return "Disponivel";
};

const buildMapEmbedUrl = (property: PropertyRecord): string => {
  const query = encodeURIComponent(
    `${property.neighborhood}, ${property.city}, ${property.stateCode}, Brasil`,
  );
  return `https://www.google.com/maps?q=${query}&output=embed`;
};

export const defaultBroker: Broker = {
  name: "Ícaro Negri",
  photo: corretorImage,
  creci: "CRECI 221107",
  phone: "(11) 92219-0212",
  whatsapp: "5511922190212",
  email: "vivabeiramar.com@gmail.com",
};

export const toPropertyDetailsModel = (property: PropertyRecord): Property => {
  const tag = property.tags?.[0];
  const buildingFeatures: string[] = [];
  if (property.condo) {
    buildingFeatures.push(`Condominio: ${property.condo}`);
  }
  if (property.observations) {
    buildingFeatures.push("Documentacao regularizada");
  }

  return {
    id: String(property.id),
    title: property.title,
    type: property.type,
    tag: tag?.label.toUpperCase() ?? mapVariantToTag(tag?.variant),
    price: parsePrice(property.price),
    priceLabel: property.priceLabel || "Valor",
    location: {
      address: `${property.neighborhood}, ${property.city} - ${property.stateCode}`,
      city: property.city,
      state: property.stateCode,
      neighborhood: property.neighborhood,
      mapUrl: buildMapEmbedUrl(property),
    },
    images: getPropertyGallery(property),
    specs: {
      area: parseNumberFromText(property.area),
      bedrooms: parseNumberFromText(property.bedrooms),
      bathrooms: parseNumberFromText(property.bathrooms),
      parking: parseNumberFromText(property.parking),
      suites: parseNumberFromText(property.bedrooms) > 2 ? 1 : 0,
    },
    description: property.description,
    features: property.features,
    buildingFeatures: buildingFeatures.length ? buildingFeatures : undefined,
    status: mapVariantToStatus(tag?.variant),
    developer: property.condo,
    deliveryDate: tag?.variant === "lancamento" ? "Dez/2026" : undefined,
    virtualTourUrl: property.virtualTourUrl,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-02-11"),
  };
};

export const getDetailedPropertyFromRouteSlug = (routeSlug?: string): Property | undefined => {
  const property = getPropertyFromRouteSlug(routeSlug);
  if (!property) return undefined;
  return toPropertyDetailsModel(property);
};

export const getSimilarProperties = (propertyId: string, limit = 4): SimilarProperty[] => {
  const current = properties.find((item) => String(item.id) === propertyId);
  if (!current) return [];

  const sameCity = properties.filter(
    (item) => item.id !== current.id && item.city === current.city,
  );
  const sameState = properties.filter(
    (item) =>
      item.id !== current.id &&
      item.stateCode === current.stateCode &&
      item.city !== current.city,
  );

  return [...sameCity, ...sameState].slice(0, limit).map((item) => ({
    id: String(item.id),
    title: item.title,
    image: item.image,
    price: parsePrice(item.price),
    location: `${item.neighborhood}, ${item.city} - ${item.stateCode}`,
    specs: {
      bedrooms: parseNumberFromText(item.bedrooms),
      bathrooms: parseNumberFromText(item.bathrooms),
      parking: parseNumberFromText(item.parking),
      area: parseNumberFromText(item.area),
    },
    tag: item.tags?.[0]?.label,
  }));
};
