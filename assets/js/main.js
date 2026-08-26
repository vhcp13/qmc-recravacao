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
  { title: 'O que é uma Recravação Dupla?', url: '../../artigos/o-que-e-recravacao-dupla/index.html', category: 'Visão Geral' },
  { title: 'Como é Feita a Recravação Dupla?', url: '../../artigos/como-e-feita-a-recravacao-dupla/index.html', category: 'Visão Geral' },
  { title: 'História da Lata', url: '../../artigos/historia-da-lata/index.html', category: 'Visão Geral' },
  { title: 'Lata de Alimento', url: '../../artigos/lata-de-alimento/index.html', category: 'Visão Geral' },
  { title: 'Lata de Bebida', url: '../../artigos/lata-de-bebida/index.html', category: 'Visão Geral' },
  { title: 'Lata Aerossol', url: '../../artigos/lata-aerossol/index.html', category: 'Visão Geral' },
  { title: 'Tampa Abre-Fácil', url: '../../artigos/tampa-abre-facil/index.html', category: 'Visão Geral' },
  { title: 'Inspeção Visual da Recravação', url: '../../artigos/inspecao-visual-recravacao/index.html', category: 'Visão Geral' },
  { title: 'Inspeção por Raio-X da Recravação', url: '../../artigos/inspecao-raio-x-recravacao/index.html', category: 'Visão Geral' },
  // Medições
  { title: 'Medições da Recravação Dupla', url: '../../artigos/medicoes-recravacao-dupla/index.html', category: 'Medições' },
  { title: 'Dimensões Internas da Recravação', url: '../../artigos/dimensoes-internas-recravacao/index.html', category: 'Medições' },
  { title: 'Dimensões Externas da Recravação Dupla', url: '../../artigos/dimensoes-externas-recravacao-dupla/index.html', category: 'Medições' },
  { title: 'Gancho do Corpo', url: '../../artigos/gancho-do-corpo/index.html', category: 'Medições' },
  { title: 'Gancho da Tampa', url: '../../artigos/gancho-da-tampa/index.html', category: 'Medições' },
  { title: 'Espessura do Corpo', url: '../../artigos/espessura-do-corpo/index.html', category: 'Medições' },
  { title: 'Espessura da Tampa', url: '../../artigos/espessura-da-tampa/index.html', category: 'Medições' },
  { title: 'Espessura da Recravação', url: '../../artigos/espessura-recravacao/index.html', category: 'Medições' },
  { title: 'Comprimento da Recravação (Altura)', url: '../../artigos/altura-recravacao/index.html', category: 'Medições' },
  { title: 'Largura da Recravação', url: '../../artigos/largura-recravacao/index.html', category: 'Medições' },
  { title: 'Sobreposição (Overlap)', url: '../../artigos/sobreposicao/index.html', category: 'Medições' },
  { title: 'Porcentagem de Sobreposição', url: '../../artigos/porcentagem-sobreposicao/index.html', category: 'Medições' },
  { title: 'Sobreposição do Gancho do Corpo (BH Butting)', url: '../../artigos/sobreposicao-gancho-corpo/index.html', category: 'Medições' },
  { title: 'Sobreposição do Gancho da Tampa (CH Butting)', url: '../../artigos/sobreposicao-gancho-tampa/index.html', category: 'Medições' },
  { title: 'Espaço Livre (Freespace)', url: '../../artigos/espaco-livre/index.html', category: 'Medições' },
  { title: 'Folga da Recravação (Seam Gap)', url: '../../artigos/folga-da-recravacao/index.html', category: 'Medições' },
  { title: 'Curl (Enrolamento)', url: '../../artigos/curl/index.html', category: 'Medições' },
  { title: 'Afundamento (Countersink)', url: '../../artigos/afundamento/index.html', category: 'Medições' },
  { title: 'Aperto da Recravação (Tightness)', url: '../../artigos/aperto-da-recravacao/index.html', category: 'Medições' },
  // Defeitos
  { title: 'Recravação Falsa (False Seam)', url: '../../artigos/recravacao-falsa/index.html', category: 'Defeitos' },
  { title: 'Recravação Partida (Split Seam)', url: '../../artigos/recravacao-partida/index.html', category: 'Defeitos' },
  { title: 'Recravação Saltada (Sprung Seam)', url: '../../artigos/recravacao-saltada/index.html', category: 'Defeitos' },
  { title: 'Recravação Afiada (Sharp Seam)', url: '../../artigos/recravacao-afiada/index.html', category: 'Defeitos' },
  { title: 'Gancho do Corpo Curto', url: '../../artigos/gancho-corpo-curto/index.html', category: 'Defeitos' },
  { title: 'Gancho do Corpo Longo', url: '../../artigos/gancho-corpo-longo/index.html', category: 'Defeitos' },
  { title: 'Gancho da Tampa Curto', url: '../../artigos/gancho-tampa-curto/index.html', category: 'Defeitos' },
  { title: 'Gancho da Tampa Longo', url: '../../artigos/gancho-tampa-longo/index.html', category: 'Defeitos' },
  { title: 'Sobreposição Baixa', url: '../../artigos/sobreposicao/index.html', category: 'Defeitos' },
  { title: 'Sobreposição Alta do Gancho do Corpo', url: '../../artigos/sobreposicao-gancho-corpo/index.html', category: 'Defeitos' },
  { title: 'Sobreposição Baixa do Gancho do Corpo', url: '../../artigos/sobreposicao-gancho-corpo/index.html', category: 'Defeitos' },
  { title: 'Folga Alta da Recravação', url: '../../artigos/folga-da-recravacao/index.html', category: 'Defeitos' },
  { title: 'Espessura de Recravação Frouxa', url: '../../artigos/espessura-recravacao-frouxa/index.html', category: 'Defeitos' },
  { title: 'Espessura de Recravação Apertada', url: '../../artigos/espessura-recravacao-apertada/index.html', category: 'Defeitos' },
  { title: 'Comprimento de Recravação Longo', url: '../../artigos/comprimento-recravacao-longo/index.html', category: 'Defeitos' },
  { title: 'Ruga na Recravação (Wrinkle)', url: '../../artigos/ruga-recravacao/index.html', category: 'Defeitos' },
  { title: 'Espora (Spur)', url: '../../artigos/espora/index.html', category: 'Defeitos' },
  { title: 'Vees (Defeito de Recravação)', url: '../../artigos/vees-defeito-recravacao/index.html', category: 'Defeitos' },
  { title: 'Flange Amassado (Knockdown Flange)', url: '../../artigos/flange-amassado/index.html', category: 'Defeitos' },
  { title: 'Afundamento Profundo (Deep Countersink)', url: '../../artigos/afundamento-profundo/index.html', category: 'Defeitos' },
  { title: 'Retenção de Produto (Product Entrapment)', url: '../../artigos/retencao-de-produto/index.html', category: 'Defeitos' },
  { title: 'Chuck Rachado', url: '../../artigos/chuck-rachado/index.html', category: 'Defeitos' },
  { title: 'Tampa Solta (Deadhead)', url: '../../artigos/deadhead-tampa-solta/index.html', category: 'Defeitos' },
  { title: 'Primeira Operação Frouxa', url: '../../artigos/primeira-operacao-frouxa/index.html', category: 'Defeitos' },
  { title: 'Segunda Operação Frouxa', url: '../../artigos/segunda-operacao-frouxa/index.html', category: 'Defeitos' },
  { title: 'Primeira Operação Apertada', url: '../../artigos/primeira-operacao-apertada/index.html', category: 'Defeitos' },
  { title: 'Segunda Operação Apertada', url: '../../artigos/segunda-operacao-apertada/index.html', category: 'Defeitos' },
  // Terminologia
  { title: 'Chuck (Mandril)', url: '../../artigos/chuck/index.html', category: 'Terminologia' },
  { title: 'Rolo de Recravação (Roll)', url: '../../artigos/rolo-de-recravacao/index.html', category: 'Terminologia' },
  { title: 'Rolo da Primeira Operação', url: '../../artigos/rolo-primeira-operacao/index.html', category: 'Terminologia' },
  { title: 'Rolo da Segunda Operação', url: '../../artigos/rolo-segunda-operacao/index.html', category: 'Terminologia' },
  { title: 'Recravadeira (Seamer)', url: '../../artigos/recravadeira/index.html', category: 'Terminologia' },
  { title: 'Cabeça da Recravadeira', url: '../../artigos/cabeca-recravadeira/index.html', category: 'Terminologia' },
  { title: 'Compound Vedante', url: '../../artigos/compound-vedante/index.html', category: 'Terminologia' },
  { title: 'Pressão da Placa Elevadora', url: '../../artigos/pressao-placa-elevadora/index.html', category: 'Terminologia' },
  { title: 'Altura do Pino', url: '../../artigos/altura-do-pino/index.html', category: 'Terminologia' },
  { title: 'Ângulo da Parede do Chuck', url: '../../artigos/angulo-parede-chuck/index.html', category: 'Terminologia' },
  { title: 'Retorno Elástico (Springback)', url: '../../artigos/retorno-elastico/index.html', category: 'Terminologia' },
  { title: 'Desmoldagem da Lata (Stripping)', url: '../../artigos/desmoldagem-da-lata/index.html', category: 'Terminologia' },
  { title: 'Micrômetro de Recravação', url: '../../artigos/micrometro-recravacao/index.html', category: 'Terminologia' },
  { title: 'Calibrador de Folga (Feeler Gauge)', url: '../../artigos/calibrador-de-folga/index.html', category: 'Terminologia' },
  { title: 'Rolamento Danificado', url: '../../artigos/rolamento-danificado/index.html', category: 'Terminologia' },
  { title: 'Rolo de Recravação Erodido', url: '../../artigos/rolo-de-recravacao-erodido/index.html', category: 'Terminologia' },
  // Como Fazer
  { title: 'Como Configurar uma Recravadeira?', url: '../../artigos/como-configurar-recravadeira/index.html', category: 'Como Fazer' },
  { title: 'Como é Feita a Recravação Dupla?', url: '../../artigos/como-e-feita-a-recravacao-dupla/index.html', category: 'Como Fazer' },
  { title: 'Como Fazer Controle de Qualidade da Recravação Dupla', url: '../../artigos/como-fazer-controle-qualidade-recravacao-dupla/index.html', category: 'Como Fazer' },
  { title: 'O que é a Primeira Operação?', url: '../../artigos/configuracao-primeira-operacao/index.html', category: 'Como Fazer' },
  { title: 'O que é a Segunda Operação?', url: '../../artigos/configuracao-segunda-operacao/index.html', category: 'Como Fazer' },
  { title: 'Regulamentação 21 CFR 11 / FDA', url: '../../artigos/regulamentacao-21-cfr-11-fda/index.html', category: 'Como Fazer' },
];

// Reajusta URLs se estiver na raiz
function adjustUrl(url) {
  const depth = (window.location.pathname.match(/\//g) || []).length;
  if (depth <= 2) return url.replace('../../', '');
  return url;
}

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
