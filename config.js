/* ============================================================
   CONFIGURAÇÃO DA RIFA DE VERÃO - EQUIPE 7 CAPITÃES
   Edite apenas este arquivo para mudar textos, valores e datas.
   ============================================================ */
window.RIFA = {
  // --- Supabase (veja o LEIA-ME.md, passo 4) ---
  SUPABASE_URL: "SUPABASE_URL=https://ympbuupomyfsifzbkfpt.supabase.co",
  SUPABASE_KEY: "sb_publishable_5lGmD677oj9uYwsdj-MIXQ_RJk27-L0",

  // --- Instagram (onde as vendas acontecem) ---
  INSTAGRAM_URL: "https://www.instagram.com/equipe7capitaes/",
  INSTAGRAM_USUARIO: "@equipe7capitaes",

  // --- Números ---
  TOTAL_NUMEROS: 1000,   // quantidade máxima de números da rifa
  TAMANHO_LOTE: 100,     // quantos números aparecem por vez

  // --- Valores ---
  PRECO_UNITARIO: 5,     // R$ por número
  PROMO_QTD: 3,          // promoção: quantidade de números...
  PROMO_PRECO: 12,       // ...por este valor (R$)

  // --- Datas (deixe "" enquanto não definidas) ---
  DATA_SORTEIO: "",       // ex.: "20/12/2026 às 19h"
  PERIODO_VENDAS: "",     // ex.: "01/12/2026 a 15/12/2026"

  // --- Prêmios (troque os textos quando definidos) ---
  PREMIOS: [
    { titulo: "1º prêmio", descricao: "A definir" },
    { titulo: "2º prêmio", descricao: "A definir" },
    { titulo: "3º prêmio", descricao: "A definir" }
  ],

  // --- Informações adicionais (uma por linha; lista pode ficar vazia) ---
  INFO_EXTRA: [
    "Todo o valor arrecadado apoia os projetos da Equipe 7 Capitães, do IFFluminense Campos Centro."
  ]
};
