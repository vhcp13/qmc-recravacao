/* main.js - QMC Brasil */

// =============================================
// MENU MOBILE TOGGLE
// =============================================
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }
})();

// =============================================
// SEARCH - Índice de artigos
// =============================================
const ARTICLES = [
  // Visão Geral
  { title: 'O que é uma Recravação Dupla?', url: '/conhecimento/artigos/o-que-e-recravacao-dupla/index.html', category: 'Visão Geral' },
  { title: 'Como é Feita a Recravação Dupla?', url: '/conhecimento/artigos/como-e-feita-a-recravacao-dupla/index.html', category: 'Visão Geral' },
  { title: 'História da Lata', url: '/conhecimento/artigos/historia-da-lata/index.html', category: 'Visão Geral' },
  { title: 'Lata de Alimento', url: '/conhecimento/artigos/lata-de-alimento/index.html', category: 'Visão Geral' },
  { title: 'Lata de Bebida', url: '/conhecimento/artigos/lata-de-bebida/index.html', category: 'Visão Geral' },
  { title: 'Lata Aerossol', url: '/conhecimento/artigos/lata-aerossol/index.html', category: 'Visão Geral' },
  { title: 'Tampa Abre-Fácil', url: '/conhecimento/artigos/tampa-abre-facil/index.html', category: 'Visão Geral' },
  { title: 'Inspeção Visual da Recravação', url: '/conhecimento/artigos/inspecao-visual-recravacao/index.html', category: 'Visão Geral' },
  { title: 'Inspeção por Raio-X da Recravação', url: '/conhecimento/artigos/inspecao-raio-x-recravacao/index.html', category: 'Visão Geral' },
  // Medições
  { title: 'Medições da Recravação Dupla', url: '/conhecimento/artigos/medicoes-recravacao-dupla/index.html', category: 'Medições' },
  { title: 'Dimensões Internas da Recravação', url: '/conhecimento/artigos/dimensoes-internas-recravacao/index.html', category: 'Medições' },
  { title: 'Dimensões Externas da Recravação Dupla', url: '/conhecimento/artigos/dimensoes-externas-recravacao-dupla/index.html', category: 'Medições' },
  { title: 'Gancho do Corpo', url: '/conhecimento/artigos/gancho-do-corpo/index.html', category: 'Medições' },
  { title: 'Gancho da Tampa', url: '/conhecimento/artigos/gancho-da-tampa/index.html', category: 'Medições' },
  { title: 'Espessura do Corpo', url: '/conhecimento/artigos/espessura-do-corpo/index.html', category: 'Medições' },
  { title: 'Espessura da Tampa', url: '/conhecimento/artigos/espessura-da-tampa/index.html', category: 'Medições' },
  { title: 'Espessura da Recravação', url: '/conhecimento/artigos/espessura-recravacao/index.html', category: 'Medições' },
  { title: 'Comprimento da Recravação (Altura)', url: '/conhecimento/artigos/altura-recravacao/index.html', category: 'Medições' },
  { title: 'Largura da Recravação', url: '/conhecimento/artigos/largura-recravacao/index.html', category: 'Medições' },
  { title: 'Sobreposição (Overlap)', url: '/conhecimento/artigos/sobreposicao/index.html', category: 'Medições' },
  { title: 'Porcentagem de Sobreposição', url: '/conhecimento/artigos/porcentagem-sobreposicao/index.html', category: 'Medições' },
  { title: 'Sobreposição do Gancho do Corpo (BH Butting)', url: '/conhecimento/artigos/sobreposicao-gancho-corpo/index.html', category: 'Medições' },
  { title: 'Sobreposição do Gancho da Tampa (CH Butting)', url: '/conhecimento/artigos/sobreposicao-gancho-tampa/index.html', category: 'Medições' },
  { title: 'Espaço Livre (Freespace)', url: '/conhecimento/artigos/espaco-livre/index.html', category: 'Medições' },
  { title: 'Folga da Recravação (Seam Gap)', url: '/conhecimento/artigos/folga-da-recravacao/index.html', category: 'Medições' },
  { title: 'Curl (Enrolamento)', url: '/conhecimento/artigos/curl/index.html', category: 'Medições' },
  { title: 'Afundamento (Countersink)', url: '/conhecimento/artigos/afundamento/index.html', category: 'Medições' },
  { title: 'Aperto da Recravação (Tightness)', url: '/conhecimento/artigos/aperto-da-recravacao/index.html', category: 'Medições' },
  // Defeitos
  { title: 'Recravação Falsa (False Seam)', url: '/conhecimento/artigos/recravacao-falsa/index.html', category: 'Defeitos' },
  { title: 'Recravação Partida (Split Seam)', url: '/conhecimento/artigos/recravacao-partida/index.html', category: 'Defeitos' },
  { title: 'Recravação Saltada (Sprung Seam)', url: '/conhecimento/artigos/recravacao-saltada/index.html', category: 'Defeitos' },
  { title: 'Recravação Afiada (Sharp Seam)', url: '/conhecimento/artigos/recravacao-afiada/index.html', category: 'Defeitos' },
  { title: 'Gancho do Corpo Curto', url: '/conhecimento/artigos/gancho-corpo-curto/index.html', category: 'Defeitos' },
  { title: 'Gancho do Corpo Longo', url: '/conhecimento/artigos/gancho-corpo-longo/index.html', category: 'Defeitos' },
  { title: 'Gancho da Tampa Curto', url: '/conhecimento/artigos/gancho-tampa-curto/index.html', category: 'Defeitos' },
  { title: 'Gancho da Tampa Longo', url: '/conhecimento/artigos/gancho-tampa-longo/index.html', category: 'Defeitos' },
  { title: 'Sobreposição Baixa', url: '/conhecimento/artigos/sobreposicao/index.html', category: 'Defeitos' },
  { title: 'Sobreposição Alta do Gancho do Corpo', url: '/conhecimento/artigos/sobreposicao-gancho-corpo/index.html', category: 'Defeitos' },
  { title: 'Sobreposição Baixa do Gancho do Corpo', url: '/conhecimento/artigos/sobreposicao-gancho-corpo/index.html', category: 'Defeitos' },
  { title: 'Folga Alta da Recravação', url: '/conhecimento/artigos/folga-da-recravacao/index.html', category: 'Defeitos' },
  { title: 'Espessura de Recravação Frouxa', url: '/conhecimento/artigos/espessura-recravacao-frouxa/index.html', category: 'Defeitos' },
  { title: 'Espessura de Recravação Apertada', url: '/conhecimento/artigos/espessura-recravacao-apertada/index.html', category: 'Defeitos' },
  { title: 'Comprimento de Recravação Longo', url: '/conhecimento/artigos/comprimento-recravacao-longo/index.html', category: 'Defeitos' },
  { title: 'Ruga na Recravação (Wrinkle)', url: '/conhecimento/artigos/ruga-recravacao/index.html', category: 'Defeitos' },
  { title: 'Espora (Spur)', url: '/conhecimento/artigos/espora/index.html', category: 'Defeitos' },
  { title: 'Vees (Defeito de Recravação)', url: '/conhecimento/artigos/vees-defeito-recravacao/index.html', category: 'Defeitos' },
  { title: 'Flange Amassado (Knockdown Flange)', url: '/conhecimento/artigos/flange-amassado/index.html', category: 'Defeitos' },
  { title: 'Afundamento Profundo (Deep Countersink)', url: '/conhecimento/artigos/afundamento-profundo/index.html', category: 'Defeitos' },
  { title: 'Retenção de Produto (Product Entrapment)', url: '/conhecimento/artigos/retencao-de-produto/index.html', category: 'Defeitos' },
  { title: 'Chuck Rachado', url: '/conhecimento/artigos/chuck-rachado/index.html', category: 'Defeitos' },
  { title: 'Tampa Solta (Deadhead)', url: '/conhecimento/artigos/deadhead-tampa-solta/index.html', category: 'Defeitos' },
  { title: 'Primeira Operação Frouxa', url: '/conhecimento/artigos/primeira-operacao-frouxa/index.html', category: 'Defeitos' },
  { title: 'Segunda Operação Frouxa', url: '/conhecimento/artigos/segunda-operacao-frouxa/index.html', category: 'Defeitos' },
  { title: 'Primeira Operação Apertada', url: '/conhecimento/artigos/primeira-operacao-apertada/index.html', category: 'Defeitos' },
  { title: 'Segunda Operação Apertada', url: '/conhecimento/artigos/segunda-operacao-apertada/index.html', category: 'Defeitos' },
  // Terminologia
  { title: 'Chuck (Mandril)', url: '/conhecimento/artigos/chuck/index.html', category: 'Terminologia' },
  { title: 'Rolo de Recravação (Roll)', url: '/conhecimento/artigos/rolo-de-recravacao/index.html', category: 'Terminologia' },
  { title: 'Rolo da Primeira Operação', url: '/conhecimento/artigos/rolo-primeira-operacao/index.html', category: 'Terminologia' },
  { title: 'Rolo da Segunda Operação', url: '/conhecimento/artigos/rolo-segunda-operacao/index.html', category: 'Terminologia' },
  { title: 'Recravadeira (Seamer)', url: '/conhecimento/artigos/recravadeira/index.html', category: 'Terminologia' },
  { title: 'Cabeça da Recravadeira', url: '/conhecimento/artigos/cabeca-recravadeira/index.html', category: 'Terminologia' },
  { title: 'Compound Vedante', url: '/conhecimento/artigos/compound-vedante/index.html', category: 'Terminologia' },
  { title: 'Pressão da Placa Elevadora', url: '/conhecimento/artigos/pressao-placa-elevadora/index.html', category: 'Terminologia' },
  { title: 'Altura do Pino', url: '/conhecimento/artigos/altura-do-pino/index.html', category: 'Terminologia' },
  { title: 'Ângulo da Parede do Chuck', url: '/conhecimento/artigos/angulo-parede-chuck/index.html', category: 'Terminologia' },
  { title: 'Retorno Elástico (Springback)', url: '/conhecimento/artigos/retorno-elastico/index.html', category: 'Terminologia' },
  { title: 'Desmoldagem da Lata (Stripping)', url: '/conhecimento/artigos/desmoldagem-da-lata/index.html', category: 'Terminologia' },
  { title: 'Micrômetro de Recravação', url: '/conhecimento/artigos/micrometro-recravacao/index.html', category: 'Terminologia' },
  { title: 'Calibrador de Folga (Feeler Gauge)', url: '/conhecimento/artigos/calibrador-de-folga/index.html', category: 'Terminologia' },
  { title: 'Rolamento Danificado', url: '/conhecimento/artigos/rolamento-danificado/index.html', category: 'Terminologia' },
  { title: 'Rolo de Recravação Erodido', url: '/conhecimento/artigos/rolo-de-recravacao-erodido/index.html', category: 'Terminologia' },
  // Como Fazer
  { title: 'Como Configurar uma Recravadeira?', url: '/conhecimento/artigos/como-configurar-recravadeira/index.html', category: 'Como Fazer' },
  { title: 'Como é Feita a Recravação Dupla?', url: '/conhecimento/artigos/como-e-feita-a-recravacao-dupla/index.html', category: 'Como Fazer' },
  { title: 'Como Fazer Controle de Qualidade da Recravação Dupla', url: '/conhecimento/artigos/como-fazer-controle-qualidade-recravacao-dupla/index.html', category: 'Como Fazer' },
  { title: 'O que é a Primeira Operação?', url: '/conhecimento/artigos/configuracao-primeira-operacao/index.html', category: 'Como Fazer' },
  { title: 'O que é a Segunda Operação?', url: '/conhecimento/artigos/configuracao-segunda-operacao/index.html', category: 'Como Fazer' },
  { title: 'Regulamentação 21 CFR 11 / FDA', url: '/conhecimento/artigos/regulamentacao-21-cfr-11-fda/index.html', category: 'Como Fazer' },
];

// URLs ja absolutas - nao precisa ajustar
function adjustUrl(url) { return url; }

// =============================================
// SEARCH FUNCTIONALITY
// =============================================
(function () {
  const searchInputs = document.querySelectorAll('.search-input, .header-search input');
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;

  searchInputs.forEach(input => {
    input.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      if (q.length < 2) {
        overlay.innerHTML = '';
        overlay.classList.remove('active');
        return;
      }

      const results = ARTICLES.filter(a =>
        a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
      ).slice(0, 8);

      if (results.length === 0) {
        overlay.innerHTML = '<p style="padding:1rem;color:#64748b;font-size:.875rem">Nenhum resultado encontrado.</p>';
      } else {
        overlay.innerHTML = results.map(r => `
          <a href="${adjustUrl(r.url)}" class="search-result-item">
            <div>
              <span class="res-tag">${r.category}</span>
              <div class="res-title">${r.title}</div>
            </div>
          </a>
        `).join('');
      }
      overlay.classList.add('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search') && !e.target.closest('.search-widget')) {
      overlay.classList.remove('active');
    }
  });
})();

// =============================================
// ACTIVE NAV LINK HIGHLIGHT
// =============================================
(function () {
  const path = window.location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.site-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    // Normalizar href removendo prefixos relativos (../../ ou ../)
    const cleanHref = href.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
    // Extrair segmento identificador: "categoria/defeitos", "calculadora-recravacao" etc.
    const parts = cleanHref.split('/');
    const seg = parts[0] === 'categoria' ? parts[0] + '/' + parts[1] : parts[0];
    if (seg && path.includes(seg)) {
      link.classList.add('active');
    }
  });
})();
