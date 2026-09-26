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
* **Persistência de Dados**: Integração externa com Google Apps Script e Google Sheets.

---

## 📂 2. Estrutura de Arquivos e Responsabilidades

```text
StaticPagePersonalLilian/
├── assets/                     # Recursos visuais e componentes
│   ├── foto-sobre-mim.jpeg     # Foto de alta resolução na seção 'Sobre'
│   ├── hero-bg.webp            # Background otimizado da seção Hero
│   ├── perfil-lilian.jpeg      # Foto circular de perfil na Hero
│   └── site-footer.js          # Web Component do rodapé unificado com créditos
├── functions/                  # APIs Serverless (Cloudflare Pages Functions)
│   ├── depoimentos.js          # Proxy GET (listar) e POST (criar) depoimentos
│   └── validar-senha.js        # Autenticação server-side de senha para a anamnese
├── .dev.vars                   # Variáveis de ambiente para desenvolvimento local (Wrangler)
├── index.html                  # Landing Page principal (Estrutura, Estilos Tailwind e JS Vanilla)
├── politica-de-privacidade.html# Página legal de conformidade com LGPD
├── termos-de-uso.html          # Termos de Uso da plataforma e serviços
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
2. **Rodapé Unificado (`<site-footer>`)**: Definido em `assets/site-footer.js`. Todas as páginas devem importar este script e usar a tag `<site-footer></site-footer>` para garantir consistência visual e créditos atualizados em um único lugar.
3. **Modais**: Modais de Senha (`#senhaModal`) e Depoimento (`#depoimentoModal`) utilizam `backdrop-blur-sm` e overlay escuro (`bg-slate-950/80`).
4. **Botões CTA**: Todos os botões do WhatsApp devem abrir em nova aba (`target="_blank" rel="noopener noreferrer"`) e conter mensagens pré-formatadas (`wa.me/5513996660817?text=...`).

---

## 🔐 4. Regras Críticas de Segurança e Performance

1. **PROIBIDO Expor Credenciais no Client-side**:
   * Senhas (como a senha da Anamnese), URLs do Google Forms e tokens do Google Apps Script **NUNCA** devem ser inseridos no `index.html` ou arquivos JS do front-end.
   * Toda validação sensitiva DEVE passar pelas Cloudflare Functions em `/functions/`.

2. **Nomes de Variáveis de Ambiente (`.dev.vars` / Cloudflare Dashboard)**:
   * Mantidos por compatibilidade com a infraestrutura existente:
     - `API_GOOGLE_SCRIPTS_URL`: Endpoint do Apps Script.
     - `API_GOOLE_SCRIPTS_TOKEN`: Token de autenticação da planilha (preservar a grafia original).
     - `ANANMESE_KEY`: Senha de acesso ao formulário (preservar a grafia original).
     - `URL_FORMS`: Link final do Google Forms.

3. **Verificação Anti-bot (Turnstile)**:
   * Ao modificar o formulário de depoimentos, garanta que o token `cf-turnstile-response` seja validado no envio (`new FormData(this).get('cf-turnstile-response')`).

4. **Bloqueio por Força Bruta no Client-side**:
   * O formulário de senha limita a 3 tentativas incorretas consecutivas com temporizador de 60 segundos antes de permitir novas tentativas.

---

## 🛠️ 5. Convenções de Código (Code Style Guidelines)

### HTML & Tailwind
* Mantenha código semântico e limpo.
* Preserve a acessibilidade (`alt` nas imagens, `aria-labels` se necessário).
* Mantenha seletores de ID usados pelos scripts intactos: `#navbar`, `#listaDepoimentos`, `#senhaModal`, `#depoimentoModal`, `#formSenha`, `#formDepoimento`, `#senhaInput`, `#erroSenha`, `#nomeDepoimento`, `#textoDepoimento`.

### JavaScript Vanilla
* Utilize `async/await` para todas as requisições assíncronas (`fetch`).
* Trate erros amigavelmente com mensagens visuais para o usuário final.
* Não adicione frameworks JS externos (como React, Vue ou jQuery). Mantenha o projeto leve e nativo.

### Cloudflare Pages Functions
* Exportar funções nomeadas no padrão Cloudflare: `onRequestGet(context)` e `onRequestPost(context)`.
* Ler variáveis de ambiente exclusivamente através de `context.env`.
* Retornar objetos `Response` com os headers apropriados (`Content-Type: application/json`).

---

## 🧪 6. Como Executar e Validar Alterações (Regra de Ouro Pré-Commit)

> [!CAUTION]
> **PROIBIDO COMMITAR SEM TESTAR ANTES**  
> O agente NUNCA deve realizar `git commit` ou `git push` sem antes validar localmente e comprovar empiricamente que as alterações funcionam e não quebraram nada existente.

### 1. Protocolo Obrigatorio de Teste Pré-Commit:
1. **Validação de Sintaxe JS**:
   ```bash
   node --check assets/site-footer.js
   node --check functions/depoimentos.js
   node --check functions/validar-senha.js
   ```
2. **Execução e Teste no Servidor Local**:
   ```bash
   npx wrangler pages dev .
   ```
   *Subir o servidor local e validar via requisições/HTTP se todas as páginas (`/`, `/politica-de-privacidade.html`, `/termos-de-uso.html`) e rotas serverless estão respondendo sem erros.*

3. **Checklist Pré-Commit**:
   - [ ] **Testes Executados com Sucesso**: Todas as alterações foram testadas em ambiente local antes do commit?
   - [ ] **Nenhuma Quebra de Regressão**: As funcionalidades existentes (formulário de anamnese, modal de depoimentos, carregamento de depoimentos) continuam operantes?
   - [ ] **Componentização Reutilizável**: Elementos comuns entre páginas (ex: rodapé `<site-footer>`) usam Web Components em `assets/`?
   - [ ] **Design e Responsividade**: Tema visual mantido (`slate-900/800/950` + `brand`) responsivo em mobile e desktop?
   - [ ] **Segurança de Credenciais**: Nenhuma chave, URL restrita ou senha exposta no HTML/JS público?

