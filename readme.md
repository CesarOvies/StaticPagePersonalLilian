# 🏋️‍♀️ Landing Page - Lilian Moreira | Personal Trainer

Um site moderno e de alta conversão desenvolvido para apresentação de portfólio, serviços de treinamento físico e captação de alunos (natação e musculação) para a Personal Trainer Lilian Moreira Farias.

🔗 **Status do Projeto:** Finalizado e em Produção.

## 🎯 Sobre o Projeto

O objetivo principal desta landing page é servir como um hub central de conversão e relacionamento. O site apresenta as qualificações da profissional, detalha as modalidades de acompanhamento (saúde e alto rendimento), exibe depoimentos aprovados e direciona os leads para o WhatsApp ou para o formulário de anamnese.

### 🌟 Principais Funcionalidades

- **Design Responsivo & Dark Mode:** Interface atlética, moderna e adaptável a qualquer tela (Mobile-first).
- **Integração com WhatsApp:** Botões de CTA com mensagens pré-configuradas para agilizar o contato.
- **Feed Dinâmico do Instagram:** Sincronização diária de postagens oficiais via conector Behold/Cloudflare Function (`/functions/instagram.js`), com filtro anti-reels (apenas publicações permanentes), layout responsivo em Dark Mode e cache inteligente de 24 horas no Edge e no cliente.
- **Sistema de Depoimentos Seguro & Carrossel:** Listagem em carrossel horizontal responsivo (com até 3 cards simultâneos no desktop e setas de navegação suave), ordenação pelos mais recentes e suporte a paginação inteligente (ativada automaticamente se ultrapassar 100 itens). O envio conta com seleção de relação (*Aluno(a)* vs *Pai, Mãe ou Responsável*), link para perfil público (*Instagram* ou *Facebook*), verificação anti-bot (Cloudflare Turnstile), limites estritos (30 letras para nome, 300 para mensagem com contador dinâmico) e arquitetura de segurança em camadas com sanitização contra Cross-Site Scripting (XSS) e injeção de fórmulas (CSV/Formula Injection) no Google Sheets.
- **Acesso Restrito Server-side (Anamnese):** Validação segura de senha e redirecionamento para o Google Forms processados no Edge (Cloudflare Pages Functions), sem expor senhas nem links no código do navegador.
- **Adequação à LGPD:** Páginas dedicadas de "Política de Privacidade" e "Termos de Uso".

## 💻 Tecnologias Utilizadas

- **HTML5 & Vanilla JavaScript:** Estrutura semântica e interatividade nativa.
- **Tailwind CSS (via CDN):** Estilização utilitária com identidade visual personalizada.
- **Cloudflare Pages & Functions:** Hospedagem, CI/CD automático, Edge Cache e funções serverless.
- **Cloudflare Turnstile:** Verificação inteligente anti-bot para envio de formulários.
- **Google Apps Script:** Backend serverless integrado a planilhas para armazenamento e moderação dos depoimentos.
- **Behold.so:** Sincronização de feed do Instagram integrada via proxy serverless com cache rigoroso de 24 horas.

## 📂 Estrutura de Arquivos

```text
/
├── assets/                     # Imagens locais (fotos de perfil, favicons) e componentes
├── functions/                  # Cloudflare Pages Functions (Edge APIs)
│   ├── depoimentos.js          # Proxy seguro para leitura e envio de depoimentos
│   ├── instagram.js            # Proxy do feed do Instagram com cache Edge de 24h e filtro anti-reels
│   └── validar-senha.js        # Validação server-side de senha para a anamnese
├── .dev.vars                   # Variáveis de ambiente para teste local (ignorado no Git)
├── index.html                  # Landing Page principal
├── politica-de-privacidade.html# Política de Privacidade (LGPD)
├── termos-de-uso.html          # Termos de Uso do serviço
└── README.md                   # Documentação do projeto
```
