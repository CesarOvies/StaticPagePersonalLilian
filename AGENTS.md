# 🏋️‍♀️ Diretrizes & Treinamento do Agente - Landing Page Lilian Moreira

Este documento serve como **manual de treinamento e diretrizes de desenvolvimento** para qualquer agente de IA ou desenvolvedor atuando neste repositório. O objetivo é garantir total alinhamento com a arquitetura, padrões visuais, convenções de código e regras de segurança estabelecidas.

---

## 📌 1. Visão Geral da Arquitetura

O projeto é uma **Landing Page de Alta Conversão** e portfólio profissional para a Personal Trainer **Lilian Moreira Farias**, com backend serverless rodando na nuvem.

### Tech Stack
* **Frontend**: HTML5 Semântico + Vanilla JavaScript (ES6+).
* **Estilização**: Tailwind CSS (v3 via CDN) + Font Awesome 6.4 + Google Fonts (Inter).
* **Tema Visual**: **Dark Theme** elegante com paleta baseada em `slate-900/800/950` e destaques em verde esmeralda (`brand`: `#10b981`, `brand-light`: `#2dd4bf`, `brand-dark`: `#047857`).
* **Backend Serverless**: **Cloudflare Pages Functions** (diretório `/functions`).
* **Proteção & Segurança**: **Cloudflare Turnstile** (anti-bot) + Validação Server-side de senhas para formulário de anamnese.
* **Métricas & Rastreamento**: **Google Tag (gtag.js)** com ID `G-9VTPWXQYHF` (Google Analytics 4) para mensuração básica de tráfego e pageviews. ⚠️ Rastreamento de conversões do Google Ads (cliques no WhatsApp) ainda **não configurado** — a ser implementado futuramente com um ID `AW-`.
* **Persistência de Dados**: Integração externa com Google Apps Script e Google Sheets.

---

## 📂 2. Estrutura de Arquivos e Responsabilidades

```text
StaticPagePersonalLilian/
├── .github/workflows/          # Automações de CI/CD (GitHub Actions)
│   └── sync-main-to-dev.yml    # Sincronização automática da branch main para dev
├── assets/                     # Recursos visuais e componentes
│   ├── foto-sobre-mim.jpeg     # Foto de alta resolução na seção 'Sobre'
│   ├── hero-bg.webp            # Background otimizado da seção Hero
│   ├── perfil-lilian.jpeg      # Foto circular de perfil na Hero
│   └── site-footer.js          # Web Component do rodapé unificado com créditos
├── functions/                  # APIs Serverless (Cloudflare Pages Functions)
│   ├── depoimentos.js          # Proxy GET (listar) e POST (criar) depoimentos
│   ├── instagram.js            # Proxy do feed do Instagram (filtro anti-reels e cache Edge de 24h)
│   └── validar-senha.js        # Autenticação server-side de senha para a anamnese
├── .dev.vars                   # Variáveis de ambiente para desenvolvimento local (Wrangler)
├── index.html                  # Landing Page principal (Estrutura, Estilos Tailwind, Schema.org e FAQ)
├── politica-de-privacidade.html# Página legal de conformidade com LGPD
├── termos-de-uso.html          # Termos de Uso da plataforma e serviços
├── robots.txt                  # Diretivas de rastreamento para robôs de busca (Googlebot)
├── sitemap.xml                 # Mapa do site com URLs canônicas das páginas públicas
├── AGENTS.md                   # Diretrizes operacionais e treinamento do agente (Este arquivo)
└── README.md                   # Documentação pública do repositório
```

---

## 🎨 3. Padrões de Design e Interface (UI/UX)

### 3.1 Sistema de Cores (Tailwind CSS)
Sempre utilize as cores customizadas configuradas no script `tailwind.config` do `index.html`:
* `bg-slate-900`: Fundo principal das seções padrão.
* `bg-slate-800`: Fundo de seções alternadas e cards.
* `bg-slate-950`: Fundo do Header fixo e do Footer.
* `text-brand` (`#10b981`): Destaques principais, ícones de ação e links ativos.
* `text-brand-light` (`#2dd4bf`): Subtítulos, destaques secundários e hovers.
* `bg-brand`: Botões de Ação Principal (CTA).

### 3.2 Componentes e Modais
1. **Header Fixo**: Deve manter `backdrop-blur-md` e transição ao rolar a tela (`window.addEventListener('scroll')`).
2. **Rodapé Unificado (`<site-footer>`)**: Definido em `assets/site-footer.js`. Todas as páginas devem importar este script e usar a tag `<site-footer></site-footer>` para garantir consistência visual e créditos atualizados em um único lugar. O rodapé organiza-se em 3 colunas (Identidade da Marca, Contatos e Card de Avaliação no Google Maps em formato neutro com selo verificado).
3. **Modais**: Modais de Senha (`#senhaModal`) e Depoimento (`#depoimentoModal`) utilizam `backdrop-blur-sm` e overlay escuro (`bg-slate-950/80`).
4. **Botões CTA**: Todos os botões do WhatsApp devem abrir em nova aba (`target="_blank" rel="noopener noreferrer"`) e conter mensagens pré-formatadas (`wa.me/5513996660817?text=...`).
5. **Feed do Instagram**: O grid utiliza 3 colunas (`lg:grid-cols-3`) centralizadas. Apenas postagens permanentes (`/p/...`) são renderizadas, ignorando Reels que expiram ou redirecionam.

---

## 🔐 4. Regras Críticas de Segurança e Performance

1. **PROIBIDO Expor Credenciais ou Endpoints Restritos no Client-side**:
   * Senhas (como a senha da Anamnese), URLs do Google Forms, tokens do Apps Script e URLs de endpoints de API de terceiros (como feeds do Behold) **NUNCA** devem ser inseridos diretamente no `index.html` ou em arquivos JS públicos.
   * Toda consulta sensitiva ou integrada a APIs externas DEVE passar pelas Cloudflare Functions em `/functions/`.

2. **Nomes de Variáveis de Ambiente (`.dev.vars` / Cloudflare Dashboard)**:
   * Mantidos por compatibilidade com a infraestrutura existente:
     - `API_GOOGLE_SCRIPTS_URL`: Endpoint do Apps Script.
     - `API_GOOLE_SCRIPTS_TOKEN`: Token de autenticação da planilha (preservar a grafia original).
     - `ANANMESE_KEY`: Senha de acesso ao formulário (preservar a grafia original).
     - `URL_FORMS`: Link final do Google Forms.
     - `INSTAGRAM_FEED_URL`: Endpoint do conector Behold.so (lido exclusivamente pelo backend `/functions/instagram.js`).

3. **Política de Cache Estrito para o Instagram (Economia de Quota Behold)**:
   * O conector Behold possui cota mensal limitada (1.200 requisições no plano gratuito).
   * A rota `/functions/instagram.js` DEVE manter cache de **24 horas** no Edge (`s-maxage=86400`) e no cliente (`localStorage`), garantindo no máximo 1 requisição diária (~30/mês, < 2.5% da cota).
   * A chave do Edge Cache deve ser versionada para permitir invalidação imediata quando necessário.

4. **Filtro Anti-Reels no Feed do Instagram**:
   * Instagram Reels expiram e mudam de rota frequentemente. Por definição arquitetural, a integração filtra e descarta itens de vídeo (`mediaType === 'VIDEO'`, `is_video` e URLs contendo `/reel/`), exibindo exclusivamente posts estáticos e carrosséis permanentes (`/p/...`).

5. **Verificação Anti-bot (Turnstile)**:
   * Ao modificar o formulário de depoimentos, garanta que o token `cf-turnstile-response` seja validado no envio (`new FormData(this).get('cf-turnstile-response')`).

6. **Bloqueio por Força Bruta no Client-side**:
   * O formulário de senha limita a 3 tentativas incorretas consecutivas com temporizador de 60 segundos antes de permitir novas tentativas.

7. **Proteção contra Injeção de Fórmulas (CSV/Formula Injection)**:
   * No backend (`/functions/depoimentos.js`) e no Google Apps Script (`scriptDepoimentos.gs`), qualquer entrada que comece com `=`, `+`, `-`, `@`, `\t` ou `\r` DEVE ser neutralizada adicionando o apóstrofo prefixo (`'`) para garantir que o Google Sheets trate o valor como texto puro e não execute chamadas externas (`=IMPORTXML`, `=IMAGE`, etc.).

8. **Proteção contra Cross-Site Scripting (XSS) e Limites de Dados**:
   * Todos os dados dinâmicos injetados no DOM no frontend (`dep.nome`, `dep.mensagem`, `perfil`) DEVEM ser escapados via `escapeHtml()`.
   * O campo `nome` limita-se estritamente a **30 caracteres**.
   * O campo `mensagem` limita-se estritamente a **300 caracteres**.
   * O campo `perfil_social` limita-se a **30 caracteres** alfanuméricos com pontos e underscores.

9. **Diretrizes de SEO Local e Indexação Orgânica**:
   * **Praça de Atendimento Restrita**: As cidades oficiais e exclusivas de atendimento presencial são **Santos** e **São Vicente** (Baixada Santista/SP). Qualquer nova chamada, modalidade ou texto institucional DEVE respeitar e reforçar essa delimitação geográfica para garantir alta relevância no algoritmo do Google.
   * **Manutenção do Schema.org (`JSON-LD`)**: O bloco `<script type="application/ld+json">` em `index.html` deve manter sincronia entre os serviços ofertados e as entidades estruturadas `LocalBusiness`, `SportsActivityLocation`, `Person` e `FAQPage`. A sintaxe deve permanecer sempre JSON estrito e válido.
   * **Seção de FAQ Nativa e Acessível**: O acordeão de dúvidas (`#faq`) deve ser mantido com elementos HTML5 nativos (`<details name="faq-accordion">` e `<summary>`). Não substituir por bibliotecas JS externas ou estilos com `display: none` que possam prejudicar o rastreamento do Googlebot ou a navegação acessível.
   * **Integração com Google Maps e Schema.org (`hasMap` e `sameAs`)**: O link oficial da ficha no Google Maps (`https://share.google/c8XepCzhuYQiu3qbu`) deve ser preservado nos dados estruturados de `LocalBusiness` e `Person` para máxima correlação com o Knowledge Graph do Google.
   * **Arquivos de Rastreamento (`robots.txt` e `sitemap.xml`)**: Novas páginas públicas devem ser adicionadas ao `sitemap.xml` com suas URLs limpas e canônicas, e as diretivas de permissão do `robots.txt` devem ser preservadas.

---

## 🛠️ 5. Convenções de Código (Code Style Guidelines)

### HTML & Tailwind
* Mantenha código semântico e limpo.
* Preserve a acessibilidade (`alt` nas imagens, `aria-labels` se necessário).
* Mantenha seletores de ID usados pelos scripts intactos: `#navbar`, `#listaDepoimentos`, `#navDepoimentos`, `#btnPrevDepoimento`, `#btnNextDepoimento`, `#containerCarregarMais`, `#gridInstagram`, `#senhaModal`, `#depoimentoModal`, `#formSenha`, `#formDepoimento`, `#senhaInput`, `#erroSenha`, `#nomeDepoimento`, `#papelDepoimento`, `#redeSocialDepoimento`, `#perfilSocialDepoimento`, `#prefixoRedeSocial`, `#textoDepoimento`, `#contadorTextoDepoimento`.

### JavaScript Vanilla
* Utilize `async/await` para todas as requisições assíncronas (`fetch`).
* Trate erros amigavelmente com mensagens visuais para o usuário final.
* Não adicione frameworks JS externos (como React, Vue ou jQuery). Mantenha o projeto leve e nativo.

### Cloudflare Pages Functions
* Exportar funções nomeadas no padrão Cloudflare: `onRequestGet(context)` e `onRequestPost(context)`.
* Ler variáveis de ambiente exclusivamente através de `context.env`.
* Retornar objetos `Response` com os headers apropriados (`Content-Type: application/json`).

---

## 🧪 6. Como Executar e Validar Alterações (Regras de Ouro Pré-Commit e Pré-Push)

> [!CAUTION]
> **1. PROIBIDO COMMITAR SEM TESTAR ANTES**  
> O agente NUNCA deve realizar `git commit` sem antes validar localmente e comprovar empiricamente que as alterações funcionam e não quebraram nada existente.

> [!CAUTION]
> **2. PROIBIDO DAR GIT PUSH SEM APROVAÇÃO EXPLÍCITA DO USUÁRIO**  
> O agente NUNCA deve executar `git push` de forma autônoma ou antecipada. O agente pode criar branches, modificar arquivos, rodar testes e realizar commits locais, mas **DEVE OBRIGATORIAMENTE** apresentar as alterações para avaliação do usuário e aguardar autorização expressa (ex: *"pode dar push"*) antes de qualquer envio ao repositório remoto.

### 1. Protocolo Obrigatório de Teste Pré-Commit:
1. **Validação de Sintaxe JS**:
   ```bash
   node --check assets/site-footer.js
   node --check functions/depoimentos.js
   node --check functions/validar-senha.js
   node --check functions/instagram.js
   ```
2. **Execução e Teste no Servidor Local**:
   ```bash
   npx wrangler pages dev .
   ```
   *Subir o servidor local e validar via requisições/HTTP se todas as páginas (`/`, `/politica-de-privacidade`, `/termos-de-uso`), rotas de indexação (`/robots.txt`, `/sitemap.xml`) e rotas serverless (`/depoimentos`, `/instagram`) estão respondendo sem erros.*

3. **Checklist Pré-Commit e Pré-Push**:
   - [ ] **Testes Executados com Sucesso**: Todas as alterações foram testadas em ambiente local antes do commit?
   - [ ] **Validação de Dados Estruturados**: O Schema.org (JSON-LD) foi parseado e validado sem erros de sintaxe JSON?
   - [ ] **Encerramento de Servidores de Teste**: Servidores locais (`wrangler pages dev`), daemons ou processos iniciados durante os testes foram finalizados/encerrados após a validação?
   - [ ] **Nenhuma Quebra de Regressão**: As funcionalidades existentes (anamnese, depoimentos, feed instagram, FAQ) continuam operantes?
   - [ ] **Componentização Reutilizável**: Elementos comuns entre páginas (ex: rodapé `<site-footer>`) usam Web Components em `assets/`?
   - [ ] **Design e Responsividade**: Tema visual mantido (`slate-900/800/950` + `brand`) responsivo em mobile e desktop?
   - [ ] **Segurança de Credenciais**: Nenhuma chave, URL restrita ou senha exposta no HTML/JS público?
   - [ ] **Aprovação Explícita para Push**: O usuário avaliou as mudanças e concedeu autorização expressa antes de qualquer `git push`?



