/**
 * Lista completa de bairros de Ubatuba – SP
 * Referência para uso no site Viva Beiramar.
 *
 * Agrupados por região para facilitar a navegação.
 */

/* ── Bairros por Região ──────────────────────────────────────────────── */

export interface Bairro {
    nome: string;
    regiao: "centro" | "norte" | "sul" | "leste" | "interior";
    /** Nomes alternativos ou sub-bairros agrupados */
    alias?: string[];
    /** Se o bairro é uma praia conhecida */
    praia?: boolean;
}

export const bairrosUbatuba: Bairro[] = [
    /* ── Centro & Região Central ─────────────────────────────────────── */
    { nome: "Centro", regiao: "centro" },
    { nome: "Itaguá", regiao: "centro", praia: true },
    { nome: "Estufa I", regiao: "centro" },
    { nome: "Estufa II", regiao: "centro" },
    { nome: "Ipiranguinha", regiao: "centro" },
    { nome: "Silop", regiao: "centro" },
    { nome: "Sumaré", regiao: "centro" },
    { nome: "Bela Vista", regiao: "centro" },
    { nome: "Jardim Ubatuba", regiao: "centro" },
    { nome: "Horto Florestal", regiao: "centro", alias: ["Horto", "Morro das Moças"] },
    { nome: "Monte Valério", regiao: "centro" },

    /* ── Praias e Bairros — Sul ──────────────────────────────────────── */
    { nome: "Perequê-Açu", regiao: "sul", praia: true },
    { nome: "Praia Grande", regiao: "sul", praia: true },
    { nome: "Toninhas", regiao: "sul", praia: true, alias: ["Praia do Godói", "Xanda", "Praia de Fora"] },
    { nome: "Enseada", regiao: "sul", praia: true },
    { nome: "Saco da Ribeira", regiao: "sul", praia: true, alias: ["Praia do Lambert"] },
    { nome: "Lázaro", regiao: "sul", praia: true, alias: ["Domingas Dias"] },
    { nome: "Pedra Verde", regiao: "sul", praia: true },
    { nome: "Fortaleza", regiao: "sul", praia: true },
    { nome: "Praia da Fortaleza", regiao: "sul", praia: true },
    { nome: "Lagoinha", regiao: "sul", praia: true },
    { nome: "Tenório", regiao: "sul", praia: true, alias: ["Praia Vermelha"] },
    { nome: "Maranduba", regiao: "sul", praia: true },
    { nome: "Praia da Caçandoca", regiao: "sul", praia: true, alias: ["Pulso", "Raposa"] },
    { nome: "Praia do Sapê", regiao: "sul", praia: true },
    { nome: "Tabatinga", regiao: "sul", praia: true },
    { nome: "Praia do Félix", regiao: "sul", praia: true, alias: ["Praia do Lúcio"] },
    { nome: "Praia Grande do Bonete", regiao: "sul", praia: true, alias: ["Praia Deserto"] },

    /* ── Praias e Bairros — Norte ────────────────────────────────────── */
    { nome: "Perequê-Mirim", regiao: "norte", praia: true },
    { nome: "Itamambuca", regiao: "norte", praia: true },
    { nome: "Promirim", regiao: "norte", praia: true },
    { nome: "Ubatumirim", regiao: "norte", praia: true },
    { nome: "Picinguaba", regiao: "norte", praia: true },
    { nome: "Praia da Fazenda", regiao: "norte", praia: true },
    { nome: "Praia do Puruba", regiao: "norte", praia: true },
    { nome: "Puruba", regiao: "norte", praia: true },
    { nome: "Camburi", regiao: "norte", praia: true },
    { nome: "Bonete", regiao: "norte", praia: true },
    { nome: "Almada", regiao: "norte", praia: true },
    { nome: "Ponta Grossa", regiao: "norte", praia: true },
    { nome: "Praia do Frade", regiao: "norte", praia: true, alias: ["Saco das Bananas"] },
    { nome: "Barra Seca", regiao: "norte", praia: true },
    { nome: "Folha Seca", regiao: "norte" },

    /* ── Bairros — Interior / Sertão ─────────────────────────────────── */
    { nome: "Acaraú", regiao: "interior" },
    { nome: "Águas do Ingá", regiao: "interior" },
    { nome: "Araribá", regiao: "interior" },
    { nome: "Barra da Lagoa", regiao: "interior" },
    { nome: "Corcovado", regiao: "interior" },
    { nome: "Figueira", regiao: "interior", alias: ["Pé da Serra"] },
    { nome: "Flamengo", regiao: "interior", alias: ["Praias Ribeira", "Sete Fontes"] },
    { nome: "Marafunda", regiao: "interior" },
    { nome: "Mato Dentro", regiao: "interior", alias: ["Carolina", "Trevo", "Samambaia"] },
    { nome: "Pedreira", regiao: "interior" },
    { nome: "Praia Vermelha", regiao: "interior", praia: true },
    { nome: "Ressaca", regiao: "interior" },
    { nome: "Rio Escuro", regiao: "interior" },
    { nome: "Rio da Prata", regiao: "interior" },
    { nome: "Santa Rita", regiao: "interior" },
    { nome: "Sertão da Quina", regiao: "interior" },
    { nome: "Sertão do Araribá", regiao: "interior" },
    { nome: "Sertão do Engenho Velho", regiao: "interior" },
    { nome: "Sertão do Ingá", regiao: "interior" },
    { nome: "Sertão do Meio", regiao: "interior" },
    { nome: "Sertão do Perequê-Mirim", regiao: "interior" },
    { nome: "Sesmarias", regiao: "interior" },
    { nome: "Sumidouro", regiao: "interior" },
    { nome: "Taquaral", regiao: "interior" },
    { nome: "Umuarama", regiao: "interior" },
    { nome: "Área Rural de Picinguaba", regiao: "interior" },
    { nome: "Área Rural de Ubatuba", regiao: "interior" },
];

/** Retorna apenas os nomes, em ordem alfabética */
export const bairroNames = bairrosUbatuba.map((b) => b.nome).sort();

/** Retorna bairros filtrados por região */
export const getBairrosByRegiao = (regiao: Bairro["regiao"]) =>
    bairrosUbatuba.filter((b) => b.regiao === regiao);

/** Retorna apenas os bairros que são praias */
export const bairrosPraia = bairrosUbatuba.filter((b) => b.praia);
