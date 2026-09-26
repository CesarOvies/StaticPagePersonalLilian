# 🏋️‍♀️ Landing Page - Lilian Moreira | Personal Trainer

Um site estático de alta conversão desenvolvido para a apresentação de portfólio, serviços de treinamento físico e captação de alunos (natação e musculação) para a Personal Trainer Lilian Moreira Farias.

🔗 **Status do Projeto:** Finalizado e em Produção.

## 🎯 Sobre o Projeto

O objetivo principal desta landing page é servir como um hub central de conversão. O site apresenta as qualificações da profissional, detalha as modalidades de acompanhamento (baixo e alto rendimento) e direciona os leads para um contato direto via WhatsApp ou para o preenchimento de uma anamnese.

### 🌟 Principais Funcionalidades

- **Design Responsivo & Dark Mode:** Interface atlética, moderna e adaptável a qualquer tamanho de tela (Mobile-first).
- **Integração com WhatsApp:** Botões de CTA (Call to Action) com mensagens pré-configuradas para agilizar o contato inicial.
- **Sistema de Acesso Restrito (Client-side):** O botão de "Anamnese" exige uma senha fornecida pela treinadora. A validação é feita via JavaScript nativo com ofuscação (Base64/Hash), protegendo a URL do Google Forms sem a necessidade de um banco de dados.
- **Adequação à LGPD:** Inclusão de páginas dedicadas para "Política de Privacidade" e "Termos de Uso", garantindo segurança jurídica na coleta de dados de saúde.

## 💻 Tecnologias Utilizadas

Este projeto foi construído focando em máxima performance, utilizando uma arquitetura 100% estática (Serverless):

- **HTML5:** Estrutura semântica e acessível.
- **Tailwind CSS (via CDN):** Estilização rápida e utilitária, garantindo consistência visual (com cores customizadas da marca).
- **JavaScript (Vanilla):** Controle de interatividade, modais, validação de senha e efeitos de scroll.
- **Font Awesome:** Biblioteca de ícones (SVGs embutidos e via CDN).
- **Cloudflare Pages:** Plataforma de hospedagem e CI/CD (Continuous Integration/Continuous Deployment). O deploy é feito automaticamente a cada novo *commit* na branch principal (sem necessidade de *build commands*).

## 🤖 Desenvolvimento Auxiliado por IA (Google Gemini)

A arquitetura, o design de interface (UI/UX), a lógica de programação e a redação deste projeto foram desenvolvidos em um ambiente de **Pair Programming** (Programação em Par) entre o desenvolvedor Cesar Ovies e o **Google Gemini** (IA).

O Gemini atuou com os seguintes papéis durante o ciclo de desenvolvimento:
1. **Engenharia Front-End Sênior:** Estruturação do HTML/Tailwind e implementação do sistema de validação de senha *client-side*.
2. **Consultoria de UI/UX:** Definição da paleta de cores, tipografia, hierarquia visual e disposição das chamadas para ação.
3. **Copywriting e Assessoria Jurídica Básica:** Redação dos textos comerciais da página principal, bem como a elaboração das diretrizes e páginas estáticas de Política de Privacidade e Termos de Uso (focadas na área de saúde e LGPD).
4. **DevOps:** Orientação detalhada para a integração e o deploy correto no Cloudflare Pages.

## 📂 Estrutura de Arquivos

```text
/
├── assets/                     # Imagens locais (fotos de perfil, favicon)
├── index.html                  # Landing Page principal
├── politica-de-privacidade.html # Texto legal (LGPD)
├── termos-de-uso.html          # Regras de contratação e cancelamento
└── README.md                   # Documentação do projeto
```

## 🚀 Como rodar localmente

Como o projeto é totalmente estático, não há necessidade de instalar dependências complexas (como Node.js ou NPM).

1. Clone o repositório:
   ```bash
   git clone https://github.com/CesarOvies/nome-do-seu-repositorio.git
   ```
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão, ou utilize a extensão **Live Server** no VS Code para visualizar as alterações em tempo real.

---
Feito com ❤️ por [Cesar Ovies](https://linkedin.com/in/cesarovies) & **Gemini** ✨