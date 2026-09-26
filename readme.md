# 🏋️‍♀️ Landing Page - Lilian Moreira | Personal Trainer

Um site moderno e de alta conversão desenvolvido para apresentação de portfólio, serviços de treinamento físico e captação de alunos (natação e musculação) para a Personal Trainer Lilian Moreira Farias.

🔗 **Status do Projeto:** Finalizado e em Produção.

## 🎯 Sobre o Projeto

O objetivo principal desta landing page é servir como um hub central de conversão e relacionamento. O site apresenta as qualificações da profissional, detalha as modalidades de acompanhamento (saúde e alto rendimento), exibe depoimentos aprovados e direciona os leads para o WhatsApp ou para o formulário de anamnese.

### 🌟 Principais Funcionalidades

- **Design Responsivo & Dark Mode:** Interface atlética, moderna e adaptável a qualquer tela (Mobile-first).
- **Integração com WhatsApp:** Botões de CTA com mensagens pré-configuradas para agilizar o contato.
- **Sistema de Depoimentos Seguro:** Envio e listagem dinâmica de depoimentos integrados ao Google Apps Script, protegidos por Cloudflare Turnstile (anti-bot) e proxy serverless.
- **Acesso Restrito Server-side (Anamnese):** Validação segura de senha e redirecionamento para o Google Forms processados no Edge (Cloudflare Pages Functions), sem expor senhas nem links no código do navegador.
- **Adequação à LGPD:** Páginas dedicadas de "Política de Privacidade" e "Termos de Uso".

## 💻 Tecnologias Utilizadas

- **HTML5 & Vanilla JavaScript:** Estrutura semântica e interatividade nativa.
- **Tailwind CSS (via CDN):** Estilização utilitária com identidade visual personalizada.
- **Cloudflare Pages & Functions:** Hospedagem, CI/CD automático e funções serverless rodando no Edge.
- **Cloudflare Turnstile:** Verificação inteligente anti-bot para envio de formulários.
- **Google Apps Script:** Backend serverless integrado a planilhas para armazenamento e moderação dos depoimentos.

## 📂 Estrutura de Arquivos

```text
/
├── assets/                     # Imagens locais (fotos de perfil, favicons)
├── functions/                  # Cloudflare Pages Functions (Edge APIs)
│   ├── depoimentos.js          # Proxy seguro para leitura e envio de depoimentos
│   └── validar-senha.js        # Validação server-side de senha para a anamnese
├── .dev.vars                   # Variáveis de ambiente para teste local (ignorado no Git)
├── index.html                  # Landing Page principal
├── politica-de-privacidade.html# Política de Privacidade (LGPD)
├── termos-de-uso.html          # Termos de Uso do serviço
└── README.md                   # Documentação do projeto
