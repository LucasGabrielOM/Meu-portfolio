import { useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const WHATSAPP_URL = "https://wa.me/5548996116327?text=Ol%C3%A1%20Lucas%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.";

const professionalLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucas-gabriel-de-oliveira-moreira-400769350",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/LucasGabrielOM",
    icon: Github,
  },
];

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="contato"
      className="scroll-mt-20 px-[5%] py-20 sm:px-[5%] lg:px-[10%]"
      aria-labelledby="titulo-contato"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Contato direto
          </span>
          <h2
            id="titulo-contato"
            className="mt-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] md:text-5xl"
          >
            Vamos construir algo relevante?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
            Estou aberto a oportunidades em desenvolvimento Full Stack, automação e integração de sistemas. Fale comigo pelo WhatsApp para conversarmos sobre o seu time e os desafios da vaga.
          </p>
        </div>

        <div
          className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-10"
          data-aos="zoom-in"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-emerald-400/10 p-4 text-emerald-300">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">WhatsApp profissional</p>
                  <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">(48) 99611-6327</p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Uma conversa rápida é o melhor caminho para entender como minha experiência com React, Node.js, Python, n8n, dados e infraestrutura pode contribuir para a sua empresa.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {professionalLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-violet-400/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar com Lucas Gabriel pelo WhatsApp no número (48) 99611-6327"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 lg:w-auto"
            >
              <Phone className="h-5 w-5" />
              Falar no WhatsApp
              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
