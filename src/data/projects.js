import automacaoPncpCover from "../assets/projects/automacao-pncp.jpg";
import b2bTechnographicsCover from "../assets/projects/b2b-technographics.jpg";
import corteCertoCover from "../assets/projects/cortecerto.jpg";
import dashboardFinancasCover from "../assets/projects/dashboard-financas.jpg";
import rollixPortfolioCover from "../assets/projects/rollix-portfolio.jpg";
import smackChickenCover from "../assets/projects/smack-chicken.jpg";
import tahImoveisCover from "../assets/projects/tah-imoveis.jpg";

export const projects = [
  {
    name: "Rollix Portfolio",
    description: "Website institucional e plataforma de conversão moderna desenvolvida para apresentar serviços, soluções em IA e automações com alta performance.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/rollix-portfolio",
    demo: "https://lucasgabrielom.github.io/rollix-portfolio/",
    image: rollixPortfolioCover,
  },
  {
    name: "CorteCerto Açougue Fort",
    description: "Sistema operacional para registrar quebras de carnes, analisar perdas mensais e organizar a escala da equipe em Kanban.",
    language: "TypeScript",
    repo: "https://github.com/LucasGabrielOM/cortecerto-acougue-fort",
    demo: "https://lucasgabrielom.github.io/cortecerto-acougue-fort/",
    image: corteCertoCover,
  },
  {
    name: "B2B Technographics Prospector",
    description: "SaaS de prospecção B2B que descobre empresas, identifica tecnologias, enriquece contatos e prioriza oportunidades comerciais.",
    language: "Python",
    repo: "https://github.com/LucasGabrielOM/b2b-technographics-prospector",
    demo: "https://b2b-technographics-prospector.onrender.com/dashboard",
    image: b2bTechnographicsCover,
  },
  {
    name: "Smack Chicken",
    description: "Ecossistema integrado para restaurante com site, caixa, fila de cozinha, pedidos e dashboard de gestão em tempo real.",
    language: "TypeScript",
    repo: "https://github.com/LucasGabrielOM/smack-chicken",
    image: smackChickenCover,
    private: true,
  },
  {
    name: "TAH Imóveis",
    description: "Landing page imobiliária responsiva, rápida e orientada à conversão de visitantes em oportunidades de atendimento.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/tah-imoveis",
    image: tahImoveisCover,
  },
  {
    name: "Duo Finance",
    description: "Painel de gestão financeira em tempo real para controle de receitas, despesas, fluxo de caixa, orçamento, dívidas e metas.",
    language: "TypeScript",
    repo: "https://github.com/LucasGabrielOM/dashboard-financas",
    demo: "http://dashboard-financas-lucasgabrielom.onrender.com",
    demoCredentials: {
      email: "recrutador.dashfin2@gmail.com",
      password: "Recrutador#2026Demo",
    },
    image: dashboardFinancasCover,
  },
  {
    name: "Automação PNCP",
    description: "Pipeline em Python que coleta oportunidades do PNCP, higieniza dados com Pandas e gera análises para apoiar decisões comerciais.",
    language: "Python",
    repo: "https://github.com/LucasGabrielOM/sistema-automacao-pncp-python",
    image: automacaoPncpCover,
  },
];
