import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Code2, Github, Layers3, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Rollix Portfolio",
    description: "Portfólio moderno desenvolvido para apresentar identidade, serviços e trabalhos com uma experiência visual responsiva.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/rollix-portfolio",
  },
  {
    name: "TAH Imóveis",
    description: "Site imobiliário com foco em apresentação de imóveis, navegação clara e geração de oportunidades comerciais.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/tah-imoveis",
  },
  {
    name: "Automação PNCP",
    description: "Sistema em Python para coleta, tratamento e análise de contratos públicos usando Pandas, API REST e visualizações.",
    language: "Python",
    repo: "https://github.com/LucasGabrielOM/sistema-automacao-pncp-python",
  },
  {
    name: "Meu Portfólio",
    description: "Portfólio full-stack em React com painel administrativo, projetos, certificados e integração com Supabase.",
    language: "JavaScript",
    repo: "https://github.com/LucasGabrielOM/Meu-portfolio",
  },
  {
    name: "Agência Nexa",
    description: "Website institucional para uma agência de marketing digital, com foco em branding, serviços e presença online.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/nexa-agency",
    demo: "https://lucasgabrielom.github.io/nexa-agency/",
  },
  {
    name: "Burger House",
    description: "Landing page para restaurante com cardápio, carrinho e envio de pedidos pelo WhatsApp.",
    language: "CSS",
    repo: "https://github.com/LucasGabrielOM/burgerhouse",
    demo: "https://lucasgabrielom.github.io/burgerhouse/",
  },
  {
    name: "Meu Portfólio 2",
    description: "Uma das versões do meu portfólio pessoal, criada para experimentar novas interfaces e interações.",
    language: "JavaScript",
    repo: "https://github.com/LucasGabrielOM/Meu-portfolio2",
  },
  {
    name: "Portfolio",
    description: "Projeto de estudo e evolução contínua da minha presença profissional na web.",
    language: "Web",
    repo: "https://github.com/LucasGabrielOM/portfolio",
  },
  {
    name: "Trabalho Estácio SA",
    description: "Projeto acadêmico responsivo desenvolvido para aplicar fundamentos de desenvolvimento web.",
    language: "CSS",
    repo: "https://github.com/LucasGabrielOM/trabalho-estacio-Sa",
    demo: "https://lucasgabrielom.github.io/trabalho-estacio-Sa/",
  },
  {
    name: "Academia Flex",
    description: "Aplicação para academia desenvolvida com TypeScript, componentes reutilizáveis e interface responsiva.",
    language: "TypeScript",
    repo: "https://github.com/LucasGabrielOM/Academia_Flex_Projeto",
  },
  {
    name: "Trabalho Avaliativo Main",
    description: "Projeto acadêmico de desenvolvimento web voltado à prática de estrutura, estilo e interatividade.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/Trabalho-avaliativo-main",
  },
  {
    name: "Trabalho Avaliativo",
    description: "Exercício acadêmico criado durante minha formação em Análise e Desenvolvimento de Sistemas.",
    language: "Web",
    repo: "https://github.com/LucasGabrielOM/Trabalho-avaliativo",
  },
  {
    name: "Loja Brechó",
    description: "Site de loja de brechó com catálogo visual e uma experiência simples para descoberta de produtos.",
    language: "HTML",
    repo: "https://github.com/LucasGabrielOM/SITE-LOJA-BRECHO",
    demo: "https://lucasgabrielom.github.io/SITE-LOJA-BRECHO/",
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
  const image = `https://opengraph.githubassets.com/portfolio/${project.repo.replace("https://github.com/", "")}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/40">
      <div className="aspect-[16/8] overflow-hidden bg-slate-950">
        <img
          src={image}
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
          <a className="flex items-center gap-2 text-slate-300 hover:text-white" href={project.repo} target="_blank" rel="noreferrer">
            Código <Github className="h-4 w-4" />
          </a>
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
          <h2 className="text-4xl font-bold text-white md:text-5xl">Todos os meus projetos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Projetos de desenvolvimento web, aplicações acadêmicas e automações publicados no meu GitHub.
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
