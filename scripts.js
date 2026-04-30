/* ──────────────────────────────────────────────
   Feel-In landing — behavior
   i18n · language persistence · device detect
   modal · newsletter → Google Forms · SEO dinámico
   ────────────────────────────────────────────── */

(function () {
  'use strict';

  // ── Icon font loading (prevents FOUT of ligature text) ──
  if ('fonts' in document) {
    document.fonts.load('24px "Material Symbols Outlined"').then(function () {
      document.documentElement.classList.add('fonts-loaded');
    });
  } else {
    document.documentElement.classList.add('fonts-loaded');
  }

  // ── Google Form (Newsletter) ──────────────────
  var FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc-xzNRt7bP_nGp0hbdlHUfISjfk9a9VUA5fCYo4PmVNf_9YA/formResponse';
  var ENTRY_ID = 'entry.1074143854';
  var STORAGE_KEY = 'feelin_lang';

  // ── i18n strings ──────────────────────────────
  var i18n = {
    es: {
      htmlLang: 'es',
      title: 'Feel-In — Más allá de las apariencias',
      metaDesc: 'La app donde las conexiones nacen de lo que piensas y sientes. Responde preguntas profundas, descubre quién vibra contigo.',
      navSkip: 'Saltar al contenido',

      heroH1Light: 'Más allá',
      heroH1Bold: 'de las apariencias',
      heroCtaPrimary: 'Suscríbete a las novedades',
      heroStoreNote: 'Próximamente',

      storeIosLine1: 'App Store',
      storeIosLine2: 'Próximamente',
      storeAndroidLine1: 'Google Play',
      storeAndroidLine2: 'Próximamente',
      scrollHint: 'Sigue bajando',

      s1Overline: 'La idea',
      s1TitleLight: 'Conexiones que',
      s1TitleBold: 'empiezan desde adentro',
      s1Sub: '',
      p1Title: 'Sin fotos',
      p1Copy: 'Nada de swipes. Solo palabras.',
      p2Title: 'Preguntas reales',
      p2Copy: 'Siete categorías, de lo tranquilo a lo profundo. Tú eliges qué tan lejos ir.',
      p3Title: 'Revelación progresiva',
      p3Copy: 'La identidad se revela de a poco, a medida que sus palabras conectan. El chat se abre cuando ambos están listos.',

      s2Overline: 'El ritual',
      s2TitleLight: 'Cómo',
      s2TitleBold: 'funciona',
      s2Sub: 'Sin presión, sin scroll infinito.',
      step1Title: 'Pregunta',
      step1Copy: 'Se te presenta una pregunta.',
      step2Title: 'Respondes',
      step2Copy: 'Escribes lo que piensas, en tus palabras.',
      step3Title: 'Vibra',
      step3Copy: 'Si resuena con alguien, se forma una Vibra.',
      step4Title: 'Chat',
      step4Copy: 'Cuando ambos están listos, desbloquean el chat.',

      previewChip: 'Identidad',
      previewQ: '¿Qué lugar te hace sentir en casa, incluso cuando no lo es?',
      previewAnswer: '"Un café en domingo de lluvia, cuando nadie espera nada de mí."',
      previewVibe: '3 Vibras',
      previewLabel: 'Casi',
      previewMeta: 'Así se ve una pregunta',
      previewNoteTitleLight: 'Una pregunta a la vez,',
      previewNoteTitleBold: 'sin apuro',
      previewNoteCopy: 'Cada categoría tiene su atmósfera y su ritmo. Puedes responder ahora, mañana o la semana que viene.',

      nlTitleLight: 'Quédate',
      nlTitleBold: 'cerca',
      nlSub: 'Te contamos antes que a nadie las novedades.',
      nlCta: 'Suscríbete a las novedades',
      nlFine: 'Sin spam. Puedes darte de baja cuando quieras.',

      footerContact: 'Contacto',
      footerPrivacy: 'Privacidad',
      footerCopy: '© 2026 Feel-In · Hecho con intención',

      modalTitleStore: 'Ya falta poco',
      modalSubStore: 'Deja tu email y te avisamos cuando la app esté disponible en tu tienda.',
      modalTitleSubscribe: 'Quédate cerca',
      modalSubSubscribe: 'Te contamos antes que a nadie lo que se viene.',
      modalPlaceholder: 'tu@email.com',
      modalSubmit: 'Suscribirme',
      modalSubmitting: 'Enviando...',
      modalSuccess: '¡Listo! Te avisamos cuando haya novedades.',
      modalErrorEmail: 'Ingresa un email válido.',
      modalErrorGeneric: 'Hubo un error. Inténtalo de nuevo.',
      modalClose: 'Cerrar'
    },

    en: {
      htmlLang: 'en',
      title: 'Feel-In — Beyond Appearances',
      metaDesc: 'The app where connections are born from what you think and feel. Answer real questions, find who vibes like you.',
      navSkip: 'Skip to content',

      heroH1Light: 'Beyond',
      heroH1Bold: 'appearances',
      heroCtaPrimary: 'Subscribe for updates',
      heroStoreNote: 'Coming soon',

      storeIosLine1: 'App Store',
      storeIosLine2: 'Coming soon',
      storeAndroidLine1: 'Google Play',
      storeAndroidLine2: 'Coming soon',
      scrollHint: 'Keep scrolling',

      s1Overline: 'The idea',
      s1TitleLight: 'Connections that',
      s1TitleBold: 'start from within',
      s1Sub: '',
      p1Title: 'No photos',
      p1Copy: 'No swipes. Just words.',
      p2Title: 'Real questions',
      p2Copy: 'Seven categories, from light to deep. You choose how far to go.',
      p3Title: 'Progressive reveal',
      p3Copy: 'Identity unfolds slowly, as your words start to connect. Chat opens once you both feel ready.',

      s2Overline: 'The ritual',
      s2TitleLight: 'How it',
      s2TitleBold: 'works',
      s2Sub: 'No pressure, no infinite scroll.',
      step1Title: 'Question',
      step1Copy: 'A question appears.',
      step2Title: 'Answer',
      step2Copy: 'Write what you think, in your own words.',
      step3Title: 'Vibe',
      step3Copy: 'If it resonates with someone, a Vibe forms.',
      step4Title: 'Chat',
      step4Copy: 'When you’re both ready, the chat unlocks.',

      previewChip: 'Identity',
      previewQ: 'What place makes you feel at home, even when it isn\u2019t?',
      previewAnswer: '"A café on a rainy Sunday, when nobody expects anything from me."',
      previewVibe: '3 Vibes',
      previewLabel: 'Almost',
      previewMeta: 'A question in the app',
      previewNoteTitleLight: 'One question at a time,',
      previewNoteTitleBold: 'no rush',
      previewNoteCopy: 'Each category has its own atmosphere and pace. Answer now, tomorrow, or next week.',

      nlTitleLight: 'Stay',
      nlTitleBold: 'close',
      nlSub: "Hear about what's new before anyone else.",
      nlCta: 'Subscribe for updates',
      nlFine: "No spam. Unsubscribe whenever you want.",

      footerContact: 'Contact',
      footerPrivacy: 'Privacy',
      footerCopy: '© 2026 Feel-In · Made with intention',

      modalTitleStore: 'Almost there',
      modalSubStore: "Leave your email and we'll let you know when the app lands on your store.",
      modalTitleSubscribe: 'Stay close',
      modalSubSubscribe: "Be the first to hear about what's coming.",
      modalPlaceholder: 'you@email.com',
      modalSubmit: 'Subscribe',
      modalSubmitting: 'Sending...',
      modalSuccess: "You're in! We'll notify you when there's news.",
      modalErrorEmail: 'Enter a valid email.',
      modalErrorGeneric: 'Something went wrong. Try again.',
      modalClose: 'Close'
    },

    pt: {
      htmlLang: 'pt-BR',
      title: 'Feel-In — Além das aparências',
      metaDesc: 'O app onde as conexões nascem do que você pensa e sente. Responda perguntas reais, encontre quem vibra como você.',
      navSkip: 'Ir ao conteúdo',

      heroH1Light: 'Além das',
      heroH1Bold: 'aparências',
      heroCtaPrimary: 'Receba as novidades',
      heroStoreNote: 'Em breve',

      storeIosLine1: 'App Store',
      storeIosLine2: 'Em breve',
      storeAndroidLine1: 'Google Play',
      storeAndroidLine2: 'Em breve',
      scrollHint: 'Continue rolando',

      s1Overline: 'A ideia',
      s1TitleLight: 'Conexões que',
      s1TitleBold: 'começam por dentro',
      s1Sub: '',
      p1Title: 'Sem fotos',
      p1Copy: 'Nada de swipes. Só palavras.',
      p2Title: 'Perguntas reais',
      p2Copy: 'Sete categorias, do tranquilo ao profundo. Você escolhe até onde ir.',
      p3Title: 'Revelação progressiva',
      p3Copy: 'A identidade se revela aos poucos, à medida que as palavras se conectam. O chat abre quando os dois se sentem prontos.',

      s2Overline: 'O ritual',
      s2TitleLight: 'Como',
      s2TitleBold: 'funciona',
      s2Sub: 'Sem pressão, sem scroll infinito.',
      step1Title: 'Pergunta',
      step1Copy: 'Uma pergunta aparece.',
      step2Title: 'Responde',
      step2Copy: 'Escreve o que você pensa, nas suas palavras.',
      step3Title: 'Vibra',
      step3Copy: 'Se ressoa com alguém, nasce uma Vibra.',
      step4Title: 'Chat',
      step4Copy: 'Quando os dois estão prontos, o chat se abre.',

      previewChip: 'Identidade',
      previewQ: 'Que lugar te faz sentir em casa, mesmo quando não é?',
      previewAnswer: '"Um café em um domingo de chuva, quando ninguém espera nada de mim."',
      previewVibe: '3 Vibras',
      previewLabel: 'Quase',
      previewMeta: 'Uma pergunta no app',
      previewNoteTitleLight: 'Uma pergunta por vez,',
      previewNoteTitleBold: 'sem pressa',
      previewNoteCopy: 'Cada categoria tem sua atmosfera e seu ritmo. Responde agora, amanhã ou semana que vem.',

      nlTitleLight: 'Fique por',
      nlTitleBold: 'perto',
      nlSub: 'Saiba das novidades antes de todo mundo.',
      nlCta: 'Receba as novidades',
      nlFine: 'Sem spam. Você pode sair quando quiser.',

      footerContact: 'Contato',
      footerPrivacy: 'Privacidade',
      footerCopy: '© 2026 Feel-In · Feito com intenção',

      modalTitleStore: 'Falta pouco',
      modalSubStore: 'Deixe seu email e avisaremos quando o app chegar à sua loja.',
      modalTitleSubscribe: 'Fique por perto',
      modalSubSubscribe: 'Saiba antes de todo mundo o que está por vir.',
      modalPlaceholder: 'voce@email.com',
      modalSubmit: 'Inscrever-se',
      modalSubmitting: 'Enviando...',
      modalSuccess: 'Pronto! Avisaremos quando houver novidades.',
      modalErrorEmail: 'Insira um email válido.',
      modalErrorGeneric: 'Ocorreu um erro. Tente novamente.',
      modalClose: 'Fechar'
    }
  };

  var currentLang = 'es';
  var currentModalType = 'subscribe';

  // ── Helpers ────────────────────────────────────
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  // ── Language detect + persist ──────────────────
  function detectLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && i18n[stored]) return stored;
    } catch (e) { /* localStorage may be blocked */ }

    var browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    if (browserLang.indexOf('pt') === 0) return 'pt';
    if (browserLang.indexOf('es') === 0) return 'es';
    if (browserLang.indexOf('en') === 0) return 'en';
    return 'es';
  }

  function persistLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* noop */ }
  }

  // ── Apply strings to the DOM ───────────────────
  function setLang(lang) {
    if (!i18n[lang]) lang = 'es';
    currentLang = lang;
    var t = i18n[lang];

    document.documentElement.lang = t.htmlLang;
    document.title = t.title;
    var metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.metaDesc);
    var metaOgTitle = $('meta[property="og:title"]');
    if (metaOgTitle) metaOgTitle.setAttribute('content', t.title);
    var metaOgDesc = $('meta[property="og:description"]');
    if (metaOgDesc) metaOgDesc.setAttribute('content', t.metaDesc);
    var metaOgLocale = $('meta[property="og:locale"]');
    if (metaOgLocale) {
      var localeMap = { es: 'es_ES', en: 'en_US', pt: 'pt_BR' };
      metaOgLocale.setAttribute('content', localeMap[lang]);
    }
    var metaTwTitle = $('meta[name="twitter:title"]');
    if (metaTwTitle) metaTwTitle.setAttribute('content', t.title);
    var metaTwDesc = $('meta[name="twitter:description"]');
    if (metaTwDesc) metaTwDesc.setAttribute('content', t.metaDesc);

    // Inject/Refresh all data-i18n bindings
    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });

    $$('[data-i18n-attr]').forEach(function (el) {
      // data-i18n-attr="placeholder:modalPlaceholder,aria-label:modalClose"
      var pairs = el.getAttribute('data-i18n-attr').split(',');
      pairs.forEach(function (p) {
        var kv = p.split(':');
        var attr = kv[0].trim();
        var key = kv[1].trim();
        if (t[key] != null) el.setAttribute(attr, t[key]);
      });
    });

    // Lang switcher state
    $$('.lang__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    updateModalText();
    persistLang(lang);
  }

  function updateModalText() {
    var t = i18n[currentLang];
    var titleEl = $('#modal-title');
    var subEl = $('#modal-subtitle');
    if (!titleEl || !subEl) return;
    if (currentModalType === 'store') {
      titleEl.textContent = t.modalTitleStore;
      subEl.textContent = t.modalSubStore;
    } else {
      titleEl.textContent = t.modalTitleSubscribe;
      subEl.textContent = t.modalSubSubscribe;
    }
    var submit = $('#modal-submit');
    if (submit) submit.textContent = t.modalSubmit;
    var input = $('#modal-input');
    if (input) input.setAttribute('placeholder', t.modalPlaceholder);
  }

  // ── Device detect ──────────────────────────────
  function reorderStores() {
    var ua = navigator.userAgent || navigator.vendor || '';
    var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    var isAndroid = /android/i.test(ua);
    var row = $('#stores-row');
    if (!row) return;
    var ios = $('#btn-ios');
    var android = $('#btn-android');
    if (!ios || !android) return;
    if (isAndroid) {
      row.insertBefore(android, ios);
    } else if (isIOS) {
      row.insertBefore(ios, android);
    }
    // Desktop: keep default order (iOS first)
  }

  // ── Modal ──────────────────────────────────────
  function openModal(type) {
    currentModalType = type;
    updateModalText();
    var overlay = $('#modal-overlay');
    var input = $('#modal-input');
    var msg = $('#modal-msg');
    var submit = $('#modal-submit');
    if (!overlay) return;
    if (input) { input.value = ''; input.classList.remove('has-error'); }
    if (msg) { msg.textContent = ''; msg.className = 'modal__msg'; }
    if (submit) submit.disabled = false;
    overlay.classList.add('visible');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { if (input) input.focus(); }, 120);
  }

  function closeModal() {
    var overlay = $('#modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // ── Submit → Google Form (unchanged contract) ──
  function submitEmail() {
    var t = i18n[currentLang];
    var input = $('#modal-input');
    var msg = $('#modal-msg');
    var btn = $('#modal-submit');
    if (!input || !msg || !btn) return;

    var email = (input.value || '').trim();
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email)) {
      input.classList.add('has-error');
      msg.textContent = t.modalErrorEmail;
      msg.className = 'modal__msg is-error';
      return;
    }

    input.classList.remove('has-error');
    btn.disabled = true;
    btn.textContent = t.modalSubmitting;
    msg.textContent = '';
    msg.className = 'modal__msg';

    var iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe_' + Date.now();
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    var form = document.createElement('form');
    form.method = 'POST';
    form.action = FORM_URL;
    form.target = iframe.name;
    form.style.display = 'none';

    var field = document.createElement('input');
    field.type = 'hidden';
    field.name = ENTRY_ID;
    field.value = email;
    form.appendChild(field);
    document.body.appendChild(form);
    form.submit();

    setTimeout(function () {
      msg.textContent = t.modalSuccess;
      msg.className = 'modal__msg is-success';
      btn.textContent = t.modalSubmit;
      btn.disabled = false;
      input.value = '';
      if (form.parentNode) form.parentNode.removeChild(form);
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      setTimeout(closeModal, 2400);
    }, 1000);
  }

  // ── Reveal on scroll ───────────────────────────
  function initReveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }

  // ── Stars (SVG) ────────────────────────────────
  function drawStars() {
    var host = $('#stars');
    if (!host) return;
    var count = window.innerWidth < 600 ? 50 : 80;
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.position = 'absolute';
    svg.style.inset = '0';
    for (var i = 0; i < count; i++) {
      var c = document.createElementNS(svgNS, 'circle');
      var cx = Math.random() * 100;
      var cy = Math.random() * 100;
      var r = Math.random() * 1.2 + 0.4;
      var min = (Math.random() * 0.25 + 0.1).toFixed(2);
      var max = (Math.random() * 0.4 + 0.5).toFixed(2);
      var dur = (Math.random() * 5 + 3).toFixed(2);
      var delay = (Math.random() * 6).toFixed(2);
      c.setAttribute('cx', cx + '%');
      c.setAttribute('cy', cy + '%');
      c.setAttribute('r', r);
      c.setAttribute('fill', Math.random() > 0.85 ? '#F5E3C6' : '#F0EDF6');
      c.style.setProperty('--s-min', min);
      c.style.setProperty('--s-max', max);
      c.style.opacity = min;
      c.style.animation = 'twinkle ' + dur + 's ease-in-out ' + delay + 's infinite';
      svg.appendChild(c);
    }
    host.appendChild(svg);
  }

  // ── Enable hero animations only if tab is visible on load ──
  function enableHeroAnimations() {
    document.documentElement.classList.add('js-animate');
  }

  // ── Boot ───────────────────────────────────────
  function init() {
    if (document.visibilityState === 'visible') {
      enableHeroAnimations();
    } else {
      // Background tab: skip entry fade; enable animation class once user looks.
      var onVis = function () {
        if (document.visibilityState === 'visible') {
          document.removeEventListener('visibilitychange', onVis);
          // Content is already visible (opacity:1 default) — no fade needed.
        }
      };
      document.addEventListener('visibilitychange', onVis);
    }

    // Expose openModal globally for onclicks on the stores / CTA
    window.__feelin = {
      openModal: openModal,
      closeModal: closeModal,
      submitEmail: submitEmail,
      setLang: setLang
    };

    // Wire handlers
    $$('.lang__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });

    $$('[data-open-modal]').forEach(function (el) {
      el.addEventListener('click', function (ev) {
        ev.preventDefault();
        openModal(el.getAttribute('data-open-modal'));
      });
    });

    var closeBtn = $('#modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    var overlay = $('#modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
      });
    }

    var submit = $('#modal-submit');
    if (submit) submit.addEventListener('click', submitEmail);

    document.addEventListener('keydown', function (e) {
      var isOpen = overlay && overlay.classList.contains('visible');
      if (e.key === 'Enter' && isOpen) { e.preventDefault(); submitEmail(); }
      if (e.key === 'Escape' && isOpen) { closeModal(); }
    });

    reorderStores();
    drawStars();
    initReveal();
    setLang(detectLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
