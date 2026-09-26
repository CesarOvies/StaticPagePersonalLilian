# 🏋️‍♀️ Diretrizes & Treinamento do Agente - Landing Page Lilian Moreira

Este documento contem as diretrizes e regras essenciais de desenvolvimento para manter a integridade arquitetural, segurança e estética do projeto.

---

## 📌 Visão Geral da Arquitetura

* **Front-end**: HTML5 semântico, Vanilla JavaScript (ES6+), Tailwind CSS v3 via CDN.
* **Estética**: Dark Theme elegante (`slate-900`, `slate-800`, `slate-950`) com acentos em Verde Esmeralda (`#10b981`, `#2dd4bf`).
* **Back-end Edge**: Cloudflare Pages Functions em `/functions/`.
* **Segurança**: Cloudflare Turnstile anti-bot e validação server-side de senhas de acesso à Anamnese.
* **Persistência**: Google Apps Script + Google Sheets.

---

## 🔐 Regras Absolutas de Segurança

1. **Zero Credenciais Visíveis no Client-side**:
   - NUNCA colocar senhas, URLs diretas do Google Forms ou Google Apps Script no HTML/JS público.
   - Sempre transitar requisições sensíveis pelas funções serverless `/functions/validar-senha.js` ou `/functions/depoimentos.js`.

2. **Preservação de Variáveis de Ambiente**:
   - `API_GOOGLE_SCRIPTS_URL`
   - `API_GOOLE_SCRIPTS_TOKEN` (preservar typo original)
   - `ANANMESE_KEY` (preservar typo original)
   - `URL_FORMS`

---

## 🎨 Padrões Visuais e Componentes

- **Cores**: `brand` (#10b981), `brand-light` (#2dd4bf), `brand-dark` (#047857).
- **Tipografia**: Google Font `Inter`.
- **Ícones**: Font Awesome 6.4.
- **WhatsApp Links**: Preencher sempre com mensagem codificada para o número `5513996660817`.
- **Modais**: Manter IDs `#senhaModal` e `#depoimentoModal` com efeito `backdrop-blur`.

---

- **Adicionar Novas Seções**: Manter padrão semântico `<section id="..." class="py-24 bg-slate-900">` (ou `bg-slate-800`).
- **Modificar Edge Functions**: Trabalhar dentro de `/functions/`, exportando `onRequestGet` ou `onRequestPost`.
- **Componentes Compartilhados**: Utilizar Web Components nativos em `assets/` (ex: `assets/site-footer.js` para `<site-footer>`) ao criar elementos que repetem em múltiplas páginas.
- **Validação Pré-Commit (OBRIGATÓRIA)**: NUNCA commitar ou fazer push sem validar a sintaxe (`node --check`) e testar localmente com `npx wrangler pages dev .` para garantir zero regressões.
