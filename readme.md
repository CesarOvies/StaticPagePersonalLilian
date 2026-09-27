# 🏋️‍♀️ Landing Page - Lilian Moreira | Personal Trainer

Um site moderno e de alta conversão desenvolvido para apresentação de portfólio, serviços de treinamento físico e captação de alunos (natação e musculação) para a Personal Trainer Lilian Moreira Farias.

🔗 **Status do Projeto:** Finalizado e em Produção.

## 🎯 Sobre o Projeto

O objetivo principal desta landing page é servir como um hub central de conversão e relacionamento. O site apresenta as qualificações da profissional, detalha os serviços de acompanhamento (natação particular e musculação), exibe depoimentos aprovados e direciona os leads para o WhatsApp ou para o formulário de anamnese.

### 🌟 Principais Funcionalidades

- **Design Responsivo & Dark Mode:** Interface atlética, moderna e adaptável a qualquer tela (Mobile-first).
- **Integração com WhatsApp:** Botões de CTA com mensagens pré-configuradas para agilizar o contato.
- **Feed Dinâmico do Instagram:** Sincronização diária de postagens oficiais via conector Behold/Cloudflare Function (`/functions/instagram.js`), com filtro anti-reels (apenas publicações permanentes), layout responsivo em Dark Mode e cache inteligente de 24 horas no Edge e no cliente.
- **Sistema de Depoimentos Seguro & Carrossel:** Listagem em carrossel horizontal responsivo (com até 3 cards simultâneos no desktop e setas de navegação suave), ordenação pelos mais recentes e suporte a paginação inteligente (ativada automaticamente se ultrapassar 100 itens). O envio conta com seleção de relação (*Aluno(a)* vs *Pai, Mãe ou Responsável*), link para perfil público (*Instagram* ou *Facebook*), verificação anti-bot (Cloudflare Turnstile), limites estritos (30 letras para nome, 300 para mensagem com contador dinâmico) e arquitetura de segurança em camadas com sanitização contra Cross-Site Scripting (XSS) e injeção de fórmulas (CSV/Formula Injection) no Google Sheets.
- **SEO Local Avançado & Descoberta Orgânica:** Otimização estratégica para buscas orgânicas no Google focadas em **Santos e São Vicente** (Baixada Santista). Conta com metadados geo-localizados (`geo.region`, `geo.placename`, coordenadas), Open Graph/Twitter Cards com prévias ricas, marcação de dados estruturados **Schema.org (JSON-LD)** para `LocalBusiness`, `Person` e `FAQPage`, além de arquivos de rastreamento oficiais (`robots.txt` e `sitemap.xml`).
- **Seção de Perguntas Frequentes (FAQ Nativo):** Accordion interativo implementado com elementos HTML5 nativos (`<details name="faq-accordion">` e `<summary>`), 100% acessível e rastreável pelo Googlebot sem necessidade de scripts externos, cobrindo dúvidas sobre serviços, locais de atendimento e agendamento.
- **Integração com Google Maps & Perfil de Empresa:** Card oficial de avaliação e selo de empresa verificada integrado no rodapé unificado, com vinculação direta aos dados estruturados Schema.org (`hasMap` e `sameAs`), fortalecendo o ranqueamento orgânico em buscas locais de Santos e São Vicente.
- **Acesso Restrito Server-side (Anamnese):** Validação segura de senha e redirecionamento para o Google Forms processados no Edge (Cloudflare Pages Functions), sem expor senhas nem links no código do navegador.
- **Métricas & Google Tag (Google Ads):** Tag global oficial (`gtag.js` com ID `AW-18479219428`) integrada no `<head>` de todas as páginas públicas com rastreamento automático de eventos de conversão nos botões do WhatsApp.
- **Adequação à LGPD:** Páginas dedicadas de "Política de Privacidade" e "Termos de Uso" com URLs limpas e tags canônicas configuradas.

## 💻 Tecnologias Utilizadas

- **HTML5 & Vanilla JavaScript:** Estrutura semântica, acessibilidade e interatividade nativa.
- **Tailwind CSS (via CDN):** Estilização utilitária com identidade visual personalizada (Dark Mode).
- **SEO & Dados Estruturados:** Schema.org (JSON-LD), Open Graph, Geo-targeting, XML Sitemap e Robots.txt.
- **Cloudflare Pages & Functions:** Hospedagem, CI/CD automático, Edge Cache e funções serverless.
- **Cloudflare Turnstile:** Verificação inteligente anti-bot para envio de formulários.
- **Google Apps Script:** Backend serverless integrado a planilhas para armazenamento e moderação dos depoimentos.
- **Behold.so:** Sincronização de feed do Instagram integrada via proxy serverless com cache rigoroso de 24 horas.

## 📂 Estrutura de Arquivos

```text
/
├── .github/workflows/          # Workflows de automação CI/CD (GitHub Actions)
│   └── sync-main-to-dev.yml    # Espelhamento automático da branch main para dev
├── assets/                     # Imagens locais (fotos de perfil, favicons) e componentes
├── functions/                  # Cloudflare Pages Functions (Edge APIs)
│   ├── depoimentos.js          # Proxy seguro para leitura e envio de depoimentos
│   ├── instagram.js            # Proxy do feed do Instagram com cache Edge de 24h e filtro anti-reels
│   └── validar-senha.js        # Validação server-side de senha para a anamnese
├── .dev.vars                   # Variáveis de ambiente para teste local (ignorado no Git)
├── index.html                  # Landing Page principal com Schema.org JSON-LD e FAQ
├── politica-de-privacidade.html# Política de Privacidade (LGPD)
├── termos-de-uso.html          # Termos de Uso do serviço
├── robots.txt                  # Diretivas de rastreamento para robôs de busca
├── sitemap.xml                 # Mapa do site oficial para indexação de páginas públicas
├── AGENTS.md                   # Diretrizes operacionais e treinamento do agente
└── README.md                   # Documentação do projeto
```
