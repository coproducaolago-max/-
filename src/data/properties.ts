import imovel1 from "@/assets/imovel1.jpg";
import imovel2 from "@/assets/imovel2.jpg";
import imovel3 from "@/assets/imovel3.jpg";
import imovel4 from "@/assets/imovel4.jpg";
import imovel5 from "@/assets/imovel5.jpg";
import imovel6 from "@/assets/imovel6.jpg";
import imovel7 from "@/assets/imovel7.jpg";
import imovel8 from "@/assets/imovel8.jpg";
import corretorImage from "@/assets/corretor.jpg";

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
    id: 107230,
    image: imovel3,
    type: "Casa",
    title: "Lazaro, Ubatuba - SP",
    condo: "Condominio Praia do Lazaro",
    neighborhood: "Lazaro",
    city: "Ubatuba",
    stateCode: "SP",
    area: "280 m2",
    bedrooms: "4 Quartos",
    bathrooms: "3 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 1.850.000",
    tags: [{ label: "Lancamento", variant: "lancamento" }],
    description:
      "Casa em condominio fechado a poucos passos da Praia do Lazaro, com ampla area verde e acabamento premium.",
    features: [
      "Condominio fechado",
      "A 200m da Praia do Lazaro",
      "Piscina privativa",
      "Area gourmet",
      "Varanda com vista para o mar",
    ],
    observations:
      "Imovel em fase final de acabamento. Visitas com agendamento previo.",
  },
  {
    id: 107231,
    image: imovel5,
    type: "Lote/Terreno",
    title: "Itamambuca, Ubatuba - SP",
    condo: "Condominio Itamambuca",
    neighborhood: "Itamambuca",
    city: "Ubatuba",
    stateCode: "SP",
    area: "450 m2",
    priceLabel: "Venda",
    price: "R$ 680.000",
    tags: [{ label: "Destaque", variant: "destaque" }],
    description:
      "Terreno em area nobre de Itamambuca, ideal para construcao de residencia de alto padrao com vista para a mata atlantica.",
    features: [
      "Terreno plano",
      "Condominio com seguranca 24h",
      "Rua pavimentada",
      "Infraestrutura pronta",
      "Proximo a Praia de Itamambuca",
    ],
    observations:
      "Condominio com regras de construcao e taxa de manutencao mensal.",
  },
  {
    id: 107232,
    image: imovel8,
    type: "Apartamento",
    title: "Itagua, Ubatuba - SP",
    neighborhood: "Itagua",
    city: "Ubatuba",
    stateCode: "SP",
    area: "85 m2",
    bedrooms: "2 Quartos",
    bathrooms: "2 Banheiros",
    parking: "1 vaga",
    priceLabel: "Venda",
    price: "R$ 520.000",
    description:
      "Apartamento moderno no coracao de Ubatuba, proximo a praia de Itagua, comercio e servicos.",
    features: [
      "2 dormitorios com suite",
      "Cozinha americana",
      "Proximo a Praia do Itagua",
      "Condominio com piscina",
      "Planta otimizada",
    ],
    observations:
      "Excelente opcao para moradia ou investimento com documentacao regularizada.",
  },
  {
    id: 107233,
    image: imovel7,
    type: "Casa",
    title: "Praia Grande, Ubatuba - SP",
    neighborhood: "Praia Grande",
    city: "Ubatuba",
    stateCode: "SP",
    area: "350 m2",
    bedrooms: "5 Quartos",
    bathrooms: "4 Banheiros",
    parking: "3 vagas",
    priceLabel: "Venda",
    price: "R$ 2.800.000",
    tags: [{ label: "Destaque", variant: "destaque" }],
    description:
      "Residencia de alto padrao na Praia Grande com vista panoramica para o mar e acabamentos nobres.",
    features: [
      "5 suites",
      "Piscina com deck",
      "Churrasqueira gourmet",
      "Vista panoramica para o mar",
      "Garagem coberta para 3 carros",
    ],
    observations:
      "Imovel exclusivo em uma das praias mais valorizadas de Ubatuba.",
  },
  {
    id: 107234,
    image: imovel1,
    type: "Casa",
    title: "Toninhas, Ubatuba - SP",
    neighborhood: "Toninhas",
    city: "Ubatuba",
    stateCode: "SP",
    area: "220 m2",
    bedrooms: "3 Quartos",
    bathrooms: "3 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 1.500.000",
    description:
      "Casa moderna em bairro nobre de Ubatuba, a poucos minutos da Praia das Toninhas, com projeto contemporaneo e ambientes integrados.",
    features: [
      "Suite principal com closet",
      "Area gourmet completa",
      "Garagem para 2 carros",
      "Quintal privativo com jardim",
      "Projeto arquitetonico assinado",
    ],
    observations:
      "Aceita financiamento, analisa proposta e permuta parcial.",
  },
  {
    id: 107235,
    image: imovel4,
    type: "Apartamento",
    title: "Enseada, Ubatuba - SP",
    neighborhood: "Enseada",
    city: "Ubatuba",
    stateCode: "SP",
    area: "130 m2",
    bedrooms: "3 Quartos",
    bathrooms: "2 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 950.000",
    description:
      "Apartamento amplo com vista para o mar na Enseada, alto padrao de acabamento e localizacao privilegiada.",
    features: [
      "Planta ampla com sacada",
      "Acabamentos de alto padrao",
      "Vista parcial para o mar",
      "Condominio com piscina e academia",
      "Regiao valorizada",
    ],
    observations:
      "Condominio com lazer completo e controle de acesso 24 horas.",
  },
  {
    id: 107236,
    image: imovel6,
    type: "Casa",
    title: "Maranduba, Ubatuba - SP",
    condo: "Condominio Costa Verde",
    neighborhood: "Maranduba",
    city: "Ubatuba",
    stateCode: "SP",
    area: "180 m2",
    bedrooms: "3 Quartos",
    bathrooms: "2 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 1.200.000",
    description:
      "Casa em condominio fechado a 300m da Praia de Maranduba, com excelente terreno e acabamento refinado.",
    features: [
      "3 dormitorios com suite",
      "2 vagas cobertas",
      "Terreno amplo com jardim",
      "Rua tranquila e segura",
      "Churrasqueira e piscina",
    ],
    observations:
      "Imovel com manutencao em dia e escritura disponivel para consulta.",
  },
  {
    id: 107237,
    image: imovel2,
    type: "Casa",
    title: "Saco da Ribeira, Ubatuba - SP",
    neighborhood: "Saco da Ribeira",
    city: "Ubatuba",
    stateCode: "SP",
    area: "400 m2",
    bedrooms: "4 Quartos",
    bathrooms: "4 Banheiros",
    parking: "3 vagas",
    priceLabel: "Venda",
    price: "R$ 3.200.000",
    description:
      "Casa de luxo no Saco da Ribeira com acesso exclusivo a marina e vista deslumbrante para a baia de Ubatuba.",
    features: [
      "Espacos integrados com vista para o mar",
      "Deck privativo com acesso a marina",
      "Piscina com borda infinita",
      "Arquitetura moderna e sustentavel",
      "Excelente liquidez",
    ],
    observations:
      "Projeto assinado com integracao de ambientes sociais e area externa com vista permanente.",
  },
  {
    id: 107238,
    image: imovel8,
    type: "Apartamento",
    title: "Perequê-Açu, Ubatuba - SP",
    neighborhood: "Perequê-Açu",
    city: "Ubatuba",
    stateCode: "SP",
    area: "75 m2",
    bedrooms: "2 Quartos",
    bathrooms: "2 Banheiros",
    parking: "1 vaga",
    priceLabel: "Venda",
    price: "R$ 450.000",
    description:
      "Apartamento no Perequê-Açu, bairro residencial proximo a praia e com excelente infraestrutura.",
    features: [
      "Bairro residencial tranquilo",
      "Planta funcional",
      "Proximo a praia e comercio",
      "Boa ventilacao e iluminacao",
      "Excelente para moradia fixa",
    ],
    observations:
      "Regiao com oferta de servicos e acesso facilitado ao centro de Ubatuba.",
  },
  {
    id: 107239,
    image: imovel2,
    type: "Casa",
    title: "Lagoinha, Ubatuba - SP",
    neighborhood: "Lagoinha",
    city: "Ubatuba",
    stateCode: "SP",
    area: "320 m2",
    bedrooms: "4 Quartos",
    bathrooms: "3 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 2.500.000",
    description:
      "Casa com vista privilegiada para a Praia da Lagoinha, acabamento refinado em uma das praias mais exclusivas de Ubatuba.",
    features: [
      "Vista panoramica para o mar",
      "2 vagas de garagem",
      "Acabamento premium",
      "Piscina com cascata",
      "Localizacao exclusiva",
    ],
    observations:
      "Unidade com acabamento de alto padrao e vista aberta permanente para o mar.",
  },
  {
    id: 107240,
    image: imovel6,
    type: "Apartamento",
    title: "Centro, Ubatuba - SP",
    neighborhood: "Centro",
    city: "Ubatuba",
    stateCode: "SP",
    area: "60 m2",
    bedrooms: "1 Quarto",
    bathrooms: "1 Banheiro",
    parking: "1 vaga",
    priceLabel: "Venda",
    price: "R$ 380.000",
    description:
      "Studio moderno no centro de Ubatuba, ideal para quem busca praticidade e alta liquidez para investimento.",
    features: [
      "Studio compacto e moderno",
      "Condominio com lazer",
      "Alta demanda para temporada",
      "Localizacao central privilegiada",
      "A 5 minutos da praia",
    ],
    observations:
      "Ideal para investimento, com alta procura em locacao de temporada.",
  },
  {
    id: 107241,
    image: imovel7,
    type: "Casa",
    title: "Fortaleza, Ubatuba - SP",
    neighborhood: "Fortaleza",
    city: "Ubatuba",
    stateCode: "SP",
    area: "250 m2",
    bedrooms: "3 Quartos",
    bathrooms: "3 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 1.800.000",
    description:
      "Casa na Praia da Fortaleza com vista para as ilhas, projeto moderno e espaco generoso.",
    features: [
      "3 suites com varanda",
      "2 vagas de garagem",
      "Vista para as ilhas",
      "Proximo a trilhas e praias desertas",
      "Otima para moradia ou temporada",
    ],
    observations:
      "Praia da Fortaleza e uma das mais valorizadas de Ubatuba com aguas calmas.",
  },
  {
    id: 107242,
    image: imovel8,
    type: "Apartamento",
    title: "Tenorio, Ubatuba - SP",
    neighborhood: "Tenorio",
    city: "Ubatuba",
    stateCode: "SP",
    area: "95 m2",
    bedrooms: "2 Quartos",
    bathrooms: "2 Banheiros",
    parking: "1 vaga",
    priceLabel: "Venda",
    price: "R$ 620.000",
    description:
      "Apartamento com vista para a Praia do Tenorio, em condominio com infraestrutura completa.",
    features: [
      "2 dormitorios com suite",
      "1 vaga de garagem",
      "Condominio com piscina",
      "Vista parcial para o mar",
      "Proximo a restaurantes e comercio",
    ],
    observations:
      "Planta funcional, boa insolacao e proximidade com a praia.",
  },
];

export const featuredPropertyIds = [107231, 107232, 107230, 107233, 107234, 107235];
export const mostWantedPropertyIds = [107230, 107231, 107236, 107237, 107234, 107238];
export const newestPropertyIds = [107234, 107239, 107240, 107241, 107242, 107236];

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

const galleryPool = [imovel1, imovel2, imovel3, imovel4, imovel5, imovel6, imovel7, imovel8];

export const getPropertyGallery = (property: PropertyRecord): string[] => {
  const startIndex = property.id % galleryPool.length;
  const rotated = galleryPool
    .slice(startIndex)
    .concat(galleryPool.slice(0, startIndex));

  return [property.image, ...rotated.filter((image) => image !== property.image)].slice(0, 5);
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
  const match = value.replace(/[^\d]/g, "");
  if (!match) return 0;
  return Number(match);
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
  name: "Fernando Vieira",
  photo: corretorImage,
  creci: "CRECI 123456-F",
  phone: "(48) 99693-1776",
  whatsapp: "5548996931776",
  email: "contato@vivabeiramar.com.br",
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
