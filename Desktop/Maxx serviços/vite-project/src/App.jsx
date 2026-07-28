import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Droplets,
  ShieldCheck,
  Truck,
  Clock,
  MapPin,
  CheckCircle2,
  Star,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const whatsapp =
  "https://wa.me/558008080888?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20MAXX%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento.";
const instagram = "https://www.instagram.com/dedetizadoramaxx";

const services = [
  {
    icon: Droplets,
    title: "Desentupidora 24h",
    text: "Desentupimento de pias, vasos, ralos, caixas de gordura, redes de esgoto e tubulações com agilidade e segurança.",
  },
  {
    icon: Truck,
    title: "Limpa Fossa",
    text: "Sucção, limpeza e manutenção de fossas sépticas, caixas e reservatórios com equipe especializada.",
  },
  {
    icon: Sparkles,
    title: "Hidrojateamento",
    text: "Jatos de alta pressão para limpeza profunda de tubulações, galerias, redes pluviais e esgoto sem quebra-quebra.",
  },
  {
    icon: ShieldCheck,
    title: "Dedetização",
    text: "Controle de pragas urbanas com aplicação técnica para residências, empresas, condomínios e comércios.",
  },
];

const cities = [
  "Florianópolis",
  "São José",
  "Palhoça",
  "Biguaçu",
  "Santo Amaro",
  "Gov. Celso Ramos",
  "Antônio Carlos",
  "Toda Grande Florianópolis",
];

const diferenciais = [
  "Atendimento emergencial",
  "Equipe especializada",
  "Equipamentos modernos",
  "Orçamento pelo WhatsApp",
  "Serviço limpo e organizado",
  "Atende empresas e residências",
];

function ButtonPrimary({ children, className = "", href = whatsapp }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#f47c12] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#dc6e0f] active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}

function ButtonSecondary({ children, className = "", href = "tel:+558008080888" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#9acd32]/40 bg-white/90 px-6 py-4 text-sm font-bold text-[#1f3b16] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f6ffe9] active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}

export default function MaxxServicosSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#cidades", label: "Atendimento" },
    { href: "#contato", label: "Contato" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f8fbf3] text-[#172111]">

      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 border-b border-lime-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#9acd32] to-[#f47c12] text-lg font-black text-white shadow-lg sm:h-12 sm:w-12 sm:rounded-2xl">
              M
            </div>
            <div className="leading-tight">
              <p className="text-xl font-black tracking-tight sm:text-2xl">
                <span className="text-[#9acd32]">MA</span>
                <span className="text-[#f47c12]">XX</span>
              </p>
              <p className="-mt-1 text-xs font-bold text-[#7aaa20] sm:text-sm">
                Serviços Ambientais
              </p>
            </div>
          </a>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-700 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-[#f47c12]">
                {l.label}
              </a>
            ))}
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 transition hover:text-[#f47c12]"
            >
              <InstagramIcon size={16} /> Instagram
            </a>
          </nav>

          <div className="hidden md:block">
            <ButtonPrimary>
              <MessageCircle size={18} /> Orçamento
            </ButtonPrimary>
          </div>

          {/* Botão hamburguer */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="rounded-xl border border-zinc-200 p-2.5 transition hover:bg-zinc-50 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu mobile animado — CORRIGIDO: z-index alto e posição fixa abaixo do header */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden border-t border-lime-100 bg-white shadow-xl md:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={handleNavClick}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-700 transition hover:bg-[#f6ffe9] hover:text-[#f47c12]"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleNavClick}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-zinc-700 hover:bg-[#f6ffe9] hover:text-[#f47c12]"
                >
                  <InstagramIcon size={16} /> Instagram
                </a>
                <div className="mt-3 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-4">
                  <ButtonPrimary className="w-full text-xs px-4 py-3" href={whatsapp}>
                    <MessageCircle size={16} /> WhatsApp
                  </ButtonPrimary>
                  <ButtonSecondary className="w-full text-xs px-4 py-3" href="tel:+558008080888">
                    <Phone size={16} /> Ligar
                  </ButtonSecondary>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="inicio">

        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#9acd32]/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#f47c12]/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:py-24">

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f1ffd9] px-4 py-2 text-xs font-bold text-[#5b8215] sm:text-sm">
                <Clock size={14} /> Atendimento rápido na Grande Florianópolis
              </div>
              <h1 className="text-3xl font-black leading-tight tracking-tight text-[#192312] sm:text-4xl md:text-5xl lg:text-6xl">
                Soluções ambientais, desentupimento e limpeza técnica com a força da{" "}
                <span className="text-[#f47c12]">MAXX</span>.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
                Desentupidora, limpa fossa e dedetizadora 24h. Atendimento para residências,
                condomínios, comércios e empresas na Grande Florianópolis.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonPrimary className="w-full sm:w-auto">
                  <MessageCircle size={18} /> Chamar no WhatsApp
                </ButtonPrimary>
                <ButtonSecondary className="w-full sm:w-auto">
                  <Phone size={18} /> Ligar agora
                </ButtonSecondary>
              </div>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-3 gap-3 max-w-sm sm:max-w-lg">
                {[
                  ["24h", "Plantão"],
                  ["+15", "Anos no ramo"],
                  ["100%", "Orçamento rápido"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="rounded-2xl border border-lime-100 bg-white p-3 shadow-sm sm:p-4"
                  >
                    <p className="text-xl font-black text-[#f47c12] sm:text-2xl">{a}</p>
                    <p className="text-xs font-bold text-zinc-500">{b}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card visual — CORRIGIDO: cards internos com tamanho mínimo e texto sem quebra estranha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-sm md:max-w-none"
            >
              <div className="rounded-[2.5rem] bg-gradient-to-br from-[#9acd32] via-[#f47c12] to-[#111] p-2 shadow-2xl">
                <div className="rounded-[2rem] bg-white p-4 sm:p-5">
                  <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#eef9d8] to-white sm:h-[460px]">
                    <div className="absolute inset-x-6 top-6 rounded-3xl bg-[#151515] p-5 text-white shadow-2xl sm:inset-x-8 sm:top-8 sm:p-6">
                      <p className="text-center text-3xl font-black sm:text-4xl">
                        <span className="text-[#9acd32]">MA</span>
                        <span className="text-[#f47c12]">XX</span>
                      </p>
                      <p className="text-center text-lg font-bold text-[#9acd32] sm:text-xl">
                        Serviços
                      </p>
                    </div>
                    <div className="absolute left-8 top-36 h-48 w-48 rounded-full bg-[#f47c12]/90 blur-2xl sm:top-40 sm:h-56 sm:w-56" />
                    <div className="absolute right-8 top-48 h-56 w-56 rounded-full bg-[#9acd32]/80 blur-2xl sm:top-52 sm:h-64 sm:w-64" />

                    {/* CORRIGIDO: cards de serviço com altura fixa, texto centralizado e sem quebra de palavra */}
                    <div className="absolute bottom-5 left-4 right-4 rounded-3xl bg-white/90 p-4 shadow-2xl backdrop-blur sm:bottom-8 sm:left-6 sm:right-6 sm:p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f47c12] text-white sm:h-12 sm:w-12">
                          <Truck size={22} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-black leading-tight sm:text-base">Caminhão equipado</p>
                          <p className="text-xs text-zinc-500 leading-tight">Limpa fossa e hidrojateamento</p>
                        </div>
                      </div>
                      {/* CORRIGIDO: grid 2x2 com altura fixa nos itens para não quebrar o layout */}
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { label: "Desentupidora", bg: "bg-[#f6ffe9]" },
                          { label: "Limpa Fossa",   bg: "bg-[#fff3e7]" },
                          { label: "Dedetização",   bg: "bg-[#fff3e7]" },
                          { label: "Caixa d'água",  bg: "bg-[#f6ffe9]" },
                        ].map(({ label, bg }) => (
                          <div
                            key={label}
                            className={`${bg} flex h-10 items-center justify-center rounded-xl px-2 sm:h-12`}
                          >
                            <p className="text-center text-xs font-bold leading-tight text-zinc-700 sm:text-sm">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SERVIÇOS ─── */}
        <section id="servicos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9acd32]">
              Nossos Serviços
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl md:text-5xl">
              Serviços completos para resolver o problema sem enrolação
            </h2>
            <p className="mt-4 text-zinc-600">
              Atendimento técnico para urgências e manutenções preventivas.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  whileHover={{ y: -6 }}
                  key={service.title}
                  className="rounded-[2rem] border border-lime-100 bg-white p-5 shadow-sm transition hover:shadow-xl sm:p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9acd32] to-[#f47c12] text-white sm:mb-5 sm:h-14 sm:w-14">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-black sm:text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{service.text}</p>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#f47c12] transition hover:gap-3"
                  >
                    Solicitar orçamento <ArrowRight size={16} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ─── DIFERENCIAIS ─── */}
        <section id="diferenciais" className="bg-[#15210f] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9acd32]">
                Por que escolher
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl md:text-5xl">
                Atendimento forte, rápido e profissional
              </h2>
              <p className="mt-5 text-white/70">
                A MAXX Serviços une experiência, equipamentos adequados e atendimento direto
                para resolver desde emergências até contratos recorrentes.
              </p>
              <div className="mt-8">
                <ButtonPrimary>
                  <MessageCircle size={18} /> Falar com técnico
                </ButtonPrimary>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {diferenciais.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5"
                >
                  <CheckCircle2 className="mb-2 text-[#9acd32] sm:mb-3" size={20} />
                  <p className="text-sm font-bold sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CIDADES ─── */}
        <section id="cidades" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl sm:rounded-[2.5rem] sm:p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f47c12]">
                  Área de atendimento
                </p>
                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl md:text-5xl">
                  Atendimento na Grande Florianópolis
                </h2>
                <p className="mt-4 text-zinc-600">
                  Entre em contato e informe seu bairro para verificar disponibilidade e
                  tempo de chegada.
                </p>
                <div className="mt-6">
                  <ButtonPrimary>
                    <MessageCircle size={18} /> Verificar atendimento
                  </ButtonPrimary>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 rounded-xl bg-[#f8fbf3] p-3 text-sm font-bold text-zinc-700 sm:gap-3 sm:rounded-2xl sm:p-4"
                  >
                    <MapPin size={16} className="shrink-0 text-[#f47c12]" />
                    <span className="leading-tight">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SEGMENTOS ─── */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {[
              ["Residencial", "Casas, apartamentos, condomínios e áreas comuns."],
              ["Comercial", "Restaurantes, mercados, lojas, escritórios e empresas."],
              ["Industrial", "Limpeza técnica, redes, caixas, fossas e manutenção."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] bg-gradient-to-br from-white to-[#f1ffd9] p-6 shadow-sm sm:p-8"
              >
                <Star className="mb-3 text-[#f47c12] sm:mb-4" size={22} />
                <h3 className="text-xl font-black sm:text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-zinc-600 sm:mt-3">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA FINAL ─── */}
        <section
          id="contato"
          className="bg-gradient-to-br from-[#9acd32] to-[#f47c12] px-4 py-14 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 text-center shadow-2xl sm:rounded-[2.5rem] sm:p-10 md:p-14">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9acd32] sm:text-sm">
              Contato rápido
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl md:text-5xl">
              Precisa de atendimento agora?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600 sm:text-base">
              Chame no WhatsApp, envie fotos ou explique o problema para receber um orçamento
              rápido.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:mt-8">
              <ButtonPrimary className="w-full sm:w-auto">
                <MessageCircle size={20} /> Chamar no WhatsApp
              </ButtonPrimary>
              <ButtonSecondary className="w-full sm:w-auto">
                <Phone size={20} /> 0800 808 0888
              </ButtonSecondary>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#111] px-4 py-8 text-white sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-black sm:text-3xl">
              <span className="text-[#9acd32]">MA</span>
              <span className="text-[#f47c12]">XX</span>
            </p>
            <p className="text-xs text-white/60 sm:text-sm">Serviços Ambientais LTDA</p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-white/50 sm:text-sm">
            <p>Desentupidora · Limpa Fossa · Dedetizadora 24h</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 transition hover:text-white/80"
              >
                <InstagramIcon size={14} /> @dedetizadoramaxx
              </a>
              <a
                href="tel:+558008080888"
                className="flex items-center gap-1 transition hover:text-white/80"
              >
                <Phone size={14} /> 0800 808 0888
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 transition hover:text-white/80"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}