import 'aos/dist/aos.css'
import { memo } from "react"

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Sobre Mim
      </h2>
    </div>

    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      Transformando ideias em experiências digitais
    </p>
  </div>
))

const ProfileImage = memo(() => (
  <div className="flex justify-center items-center p-6">
    <img
      src={`${import.meta.env.BASE_URL}profile.jpg`}
      alt="Lucas Gabriel"
      className="w-48 h-48 rounded-full object-cover border-4 border-purple-500"
    />
  </div>
))

const AboutContent = memo(() => (
  <div className="text-center max-w-3xl mx-auto px-6">
    <h3 className="text-2xl font-semibold text-white mb-4">
      Olá, eu sou Lucas Gabriel
    </h3>

    <p className="text-gray-400 text-lg leading-relaxed">
      Sou estudante de <strong>Análise e Desenvolvimento de Sistemas </strong> 
      com foco em desenvolvimento web. Tenho interesse em criar aplicações 
      modernas, funcionais e com boa experiência para o usuário.
      <br /><br />
      Atualmente desenvolvo projetos utilizando tecnologias como 
      <strong> HTML, CSS, JavaScript e React</strong>, sempre buscando 
      evoluir minhas habilidades e construir soluções digitais eficientes.
    </p>
  </div>
))

const SocialLinks = memo(() => (
  <div className="flex justify-center gap-6 mt-8">

    <a
      href="https://github.com/LucasGabrielOM"
      target="_blank"
      className="text-gray-300 hover:text-white transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/lucas-gabriel-de-oliveira-moreira-400769350"
      target="_blank"
      className="text-gray-300 hover:text-white transition"
    >
      LinkedIn
    </a>

    <a
      href="https://www.instagram.com/lucs_g0m/"
      target="_blank"
      className="text-gray-300 hover:text-white transition"
    >
      Instagram
    </a>

  </div>
))

const About = () => {
  return (
    <section id="sobre" className="py-16">

      <Header />

      <ProfileImage />

      <AboutContent />

      <SocialLinks />

    </section>
  )
}

export default About
