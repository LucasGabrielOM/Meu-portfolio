Portfolio V5

Olá pessoal 👋

Deixe-me me apresentar. Sou Lucas Gabriel de Oliveira Moreira, Desenvolvedor Frontend e estudante de Análise e Desenvolvimento de Sistemas.

Este repositório contém meu site de portfólio pessoal, construído com React e Supabase, com um site público e um painel de administração para gerenciar projetos, certificados e comentários.

🌐 Site Online

Portfolio:
https://lucasgabrielOM.dev

GitHub:
https://github.com/LucasGabrielOM

🛠️ Tecnologias Usadas

Este projeto foi construído usando tecnologias modernas:

ReactJS — Framework frontend

Tailwind CSS — Framework CSS utilitário

Supabase — Backend para projetos, certificados e comentários

AOS — Biblioteca de animação ao rolar a página

Framer Motion — Biblioteca de animação

Lucide Icons — Biblioteca de ícones

Material UI — Biblioteca de componentes React

SweetAlert2 — Alertas estilizados

👤 Perfis de Usuário
Papel	Acesso
Visitante	Visualizar projetos, certificados e comentários
Visitante	Deixar comentários
Admin	Entrar no painel
Admin	Criar, editar e deletar projetos
Admin	Fazer upload de certificados
Admin	Deletar ou destacar comentários
🚀 Começando
Pré-requisitos

Você precisa ter instalado:

Node.js >=14

npm ou yarn

1. Clonar o Repositório
git clone https://github.com/LucasGabrielOM/Portofolio_V5.git
cd Portofolio_V5
npm install


Se ocorrerem erros de dependência:

npm install --legacy-peer-deps

2. Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

VITE_SUPABASE_URL=seu-url-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-supabase


Você encontra esses valores em:

Painel Supabase
Configurações → API


⚠️ Nunca faça commit do arquivo .env no GitHub.

3. Cliente Supabase

Arquivo:

src/supabase.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Credenciais do Supabase faltando. Verifique o arquivo .env.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

4. Configuração do Banco de Dados

Abra Supabase → Editor SQL e execute o script SQL para criar as tabelas.

Isso criará:

Tabela de projetos

Tabela de certificados

Comentários do portfólio

Perfis de usuários

Buckets de armazenamento

5. Habilitar Realtime (Comentários)

Acesse:

Supabase → Editor de Tabelas → portfolio_comments


Ative:

Realtime

6. Criar Conta de Admin

Passo 1:

Vá em

Autenticação → Usuários


Crie um novo usuário e copie o User ID (UUID).

Passo 2:

Execute esta query SQL:

INSERT INTO public.profiles (id, username, role)
VALUES ('USER_UUID', 'lucas', 'admin');


Substitua USER_UUID pelo ID real do usuário.

7. Executar o Projeto

Inicie o servidor de desenvolvimento:

npm run dev


Abra no navegador:

http://localhost:5173

📄 Páginas e Funcionalidades
Páginas Públicas

Home
Seção principal com introdução e tecnologias usadas.

Projetos
Exibe todos os projetos publicados com detalhes.

Certificados
Galeria de certificados.

Comentários
Visitantes podem deixar comentários com nome e foto opcional.

Painel Administrativo

Página de Login
Autenticação usando Supabase.

Dashboard
Painel de visão geral.

Projetos
Criar, editar e deletar projetos.

Certificados
Enviar e deletar certificados.

Comentários
Gerenciar comentários dos visitantes (destacar ou deletar).

📦 Build para Produção
npm run build


Envie a pasta dist para o seu provedor de hospedagem.

⚠️ Solução de Problemas

Se algo não funcionar:

Verifique se o Node.js está instalado

Confira se as variáveis do .env estão corretas

Reinicie o servidor de desenvolvimento após editar .env

Certifique-se de que o usuário admin existe na tabela profiles

Limpe o cache do navegador

👨‍💻 Autor

Lucas Gabriel de Oliveira Moreira
Desenvolvedor Frontend

GitHub
https://github.com/LucasGabrielOM

LinkedIn
https://www.linkedin.com/in/lucas-gabriel-de-oliveira-moreira-400769350

Instagram
https://www.instagram.com/lucs_g0m/