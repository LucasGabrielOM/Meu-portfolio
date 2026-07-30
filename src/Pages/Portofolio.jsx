import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Award, CalendarDays, Code2, ExternalLink, Github, Layers3, LockKeyhole } from "lucide-react";
import automacaoPncpCover from "../assets/projects/automacao-pncp.jpg";
import b2bTechnographicsCover from "../assets/projects/b2b-technographics.jpg";
import corteCertoCover from "../assets/projects/cortecerto.jpg";
import dashboardFinancasCover from "../assets/projects/dashboard-financas.jpg";
import smackChickenCover from "../assets/projects/smack-chicken.jpg";
import tahImoveisCover from "../assets/projects/tah-imoveis.jpg";
import { certificates } from "../data/certificates";

const projects = [
  {
    name: "CorteCerto Açougue Fort",
    description: "Sistema web para controle de quebra de carnes, análise mensal de perdas e escala de folgas em Kanban.",
    language: "TypeScript",
    repo: "https://github.com/LucasGabrielOM/cortecerto-acougue-fort",
    image: corteCertoCover,
  },
  {
    name: "B2B Technographics Prospector",
    description: "Plataforma de prospecção B2B com FastAPI, n8n e PostgreSQL para descobrir, enriquecer e priorizar leads.",
    language: "Python",
    repo: "https://github.com/LucasGabrielOM/b2b-technographics-prospector",
    image: b2bTechnographicsCover,
    private: true,
  },
  {
    name: "Smack Chicken",
    description: "Ecossistema para restaurante com site, caixa, fila da cozinha e dashboard operacional integrados.",
    language: "TypeScript",
    repo: "https://github.com/LucasGabrielOM/smack-chicken",
    image: smackChickenCover,
    private: true,
  },
  {
    name: "TAH Imóveis",
    description: "Site imobiliário responsivo com busca de imóveis, apresentação visual e geração de oportunidades comerciais.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/tah-imoveis",
    image: tahImoveisCover,
  },
  {
    name: "Dashboard Finanças",
    description: "Dashboard financeiro para acompanhar saldo, receitas, despesas, orçamento, transações e metas.",
    language: "TypeScript",
    repo: "https://github.com/LucasGabrielOM/dashboard-financas",
    image: dashboardFinancasCover,
    private: true,
  },
  {
    name: "Automação PNCP",
    description: "Sistema Python para coleta, tratamento e análise de contratos públicos com Pandas, API REST e visualizações.",
    language: "Python",
    repo: "https://github.com/LucasGabrielOM/sistema-automacao-pncp-python",
    image: automacaoPncpCover,
  },
];

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vite",
  "Tailwind CSS", "Bootstrap", "Material UI", "Node.js", "Python",
  "Pandas", "APIs REST", "Supabase", "Firebase", "Git", "GitHub",
  "Vercel", "Design responsivo", "Automação",
];

const languageColors = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  Python: "bg-emerald-400",
  HTML: "bg-orange-400",
  CSS: "bg-purple-400",
  Web: "bg-slate-400",
};

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/40">
      <div className="aspect-video overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={`Prévia do projeto ${project.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <span className="flex shrink-0 items-center gap-2 text-xs text-slate-300">
            <span className={`h-2 w-2 rounded-full ${languageColors[project.language] || languageColors.Web}`} />
            {project.language}
          </span>
        </div>
        <p className="min-h-[4.5rem] text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {project.demo && (
            <a className="flex items-center gap-2 text-violet-300 hover:text-white" href={project.demo} target="_blank" rel="noreferrer">
              Ver online <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.private ? (
            <span className="flex items-center gap-2 text-slate-400" title="Código-fonte não disponível publicamente">
              Repositório privado <LockKeyhole className="h-4 w-4" />
            </span>
          ) : (
            <a className="flex items-center gap-2 text-slate-300 hover:text-white" href={project.repo} target="_blank" rel="noreferrer">
              Código <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    private: PropTypes.bool,
    demo: PropTypes.string,
  }).isRequired,
};

export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const filters = ["Todos", ...new Set(projects.map((project) => project.language))];
  const visibleProjects = useMemo(
    () => filter === "Todos" ? projects : projects.filter((project) => project.language === filter),
    [filter],
  );

  return (
    <section className="w-full overflow-hidden bg-[#030014] px-[5%] py-20 md:px-[10%]" id="Projetos">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-violet-300">
            <Code2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Trabalhos recentes</span>
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Projetos em destaque</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Uma seleção de produtos web, automações e plataformas de dados que desenvolvi.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filtrar projetos">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === item
                  ? "border-violet-400 bg-violet-500/20 text-white"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => <ProjectCard key={project.repo} project={project} />)}
        </div>

        <div className="mt-20" id="Certificados">
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-7 w-7 text-violet-300" />
            <div>
              <h3 className="text-2xl font-bold text-white">Certificados</h3>
              <p className="text-sm text-slate-400">Formações que validam minhas habilidades técnicas.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {certificates.map((certificate) => (
              <a
                key={certificate.id}
                href={certificate.pdf}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/40"
              >
                <div className="bg-white p-2">
                  <img
                    src={certificate.image}
                    alt={`Certificado ${certificate.title} da ${certificate.issuer}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                    Cisco Networking Academy
                  </span>
                  <h4 className="mt-2 text-xl font-semibold text-white">{certificate.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-slate-300">
                      <CalendarDays className="h-4 w-4" />
                      {certificate.completedAt}
                    </span>
                    <span className="flex items-center gap-2 font-medium text-violet-300 transition group-hover:text-white">
                      Ver certificado <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/5 p-6 md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <Layers3 className="h-7 w-7 text-violet-300" />
            <div>
              <h3 className="text-2xl font-bold text-white">Skills e tecnologias</h3>
              <p className="text-sm text-slate-400">Ferramentas que uso para transformar ideias em produtos.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-violet-500/10">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
