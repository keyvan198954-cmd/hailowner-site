/* HailOwner website v2 prototype: language, scroll-built pictures, pinned four-step story, reveal, tiers and sticky call to action.
   New v2 sentences live in V2 below (en, fa, ar; Turkish and Sorani only where noted). Anything missing falls back to English. */
(function () {
  'use strict';

  var BASE = window.CP_I18N || {};
  var V2 = {
    en: {
      v2_pill1: 'No phone number shared',
      v2_pill2: 'Scanner needs no app',
      v2_pill3: '18 languages',
      v2_feat_title: 'Everything you need. Nothing you don’t.',
      v2_buy_title: 'Get your HailOwner card',
      v2_buy_lead: 'Put it on your car and anyone who notices a problem — lights left on, a door open, you’re blocking them — can tell you in seconds. Your number is never shown.',
      v2_done: 'Your car is now reachable',
      v2_t1: '1 card', v2_t2: '2 cards', v2_t3: '5 cards', v2_best: 'Best value',
      v2_sample: 'Sample prices for this preview. Real prices come before launch.',
      v2_wa: 'Order on WhatsApp', v2_mail: 'Email us',
      v2_tr1: 'Pay in person or by transfer — no card details online',
      v2_tr2: 'Your card code is shown once, right after payment',
      v2_tr3: 'Lost it or changed your mind? Write to us and we will sort it out',
      v2_faq_title: 'Questions, answered',
      v2_sticky: 'Get your card',
      v2_app_title: 'Get the app', v2_app_get: 'Get it on',
      v2_wa_msg: 'Hello HailOwner, I would like to order {n}. My name: '
    },
    fa: {
      v2_pill1: 'بدون اشتراک شماره‌ی تلفن',
      v2_pill2: 'اسکن‌کننده به اپ نیاز ندارد',
      v2_pill3: '۱۸ زبان',
      v2_feat_title: 'هر چه لازم دارید. نه بیشتر.',
      v2_buy_title: 'کارت HailOwner خودتان را بگیرید',
      v2_buy_lead: 'روی ماشین بگذارید تا هر کسی چراغ روشن، در باز یا راه بسته‌شده را دید، در چند ثانیه به شما خبر بدهد. شماره‌ی شما هیچ‌وقت نشان داده نمی‌شود.',
      v2_done: 'ماشین شما حالا در دسترس است',
      v2_t1: '۱ کارت', v2_t2: '۲ کارت', v2_t3: '۵ کارت', v2_best: 'به‌صرفه‌ترین',
      v2_sample: 'قیمت‌ها نمونه‌اند و فقط برای این پیش‌نمایش. قیمت واقعی پیش از انتشار تعیین می‌شود.',
      v2_wa: 'سفارش در واتساپ', v2_mail: 'ایمیل بزنید',
      v2_tr1: 'پرداخت حضوری یا با انتقال — اطلاعات کارت بانکی در سایت وارد نمی‌شود',
      v2_tr2: 'کد کارت درست بعد از پرداخت یک‌بار نشان داده می‌شود',
      v2_tr3: 'گم شد یا پشیمان شدید؟ بنویسید تا حلش کنیم',
      v2_faq_title: 'پرسش‌ها و پاسخ‌ها',
      v2_sticky: 'کارت خودت را بگیر',
      v2_app_title: 'اپ را دانلود کنید', v2_app_get: 'دانلود از',
      v2_wa_msg: 'سلام HailOwner، می‌خواهم {n} سفارش بدهم. نام من: '
    },
    ar: {
      v2_pill1: 'بلا مشاركة لرقم الهاتف',
      v2_pill2: 'من يمسح لا يحتاج تطبيقاً',
      v2_pill3: '18 لغة',
      v2_feat_title: 'كل ما تحتاجه. لا أكثر.',
      v2_buy_title: 'احصل على بطاقة HailOwner',
      v2_buy_lead: 'ضعها على سيارتك، فإذا لاحظ أي شخص ضوءاً مضاءً أو باباً مفتوحاً أو أنك تعيق طريقه، أخبرك في ثوانٍ. رقمك لا يظهر أبداً.',
      v2_done: 'سيارتك الآن في المتناول',
      v2_t1: 'بطاقة واحدة', v2_t2: 'بطاقتان', v2_t3: '5 بطاقات', v2_best: 'الأوفر',
      v2_sample: 'أسعار تجريبية لهذه المعاينة. تُحدَّد الأسعار الحقيقية قبل الإطلاق.',
      v2_wa: 'اطلب عبر واتساب', v2_mail: 'راسلنا',
      v2_tr1: 'الدفع حضورياً أو بالتحويل — لا تُدخَل بيانات البطاقة المصرفية في الموقع',
      v2_tr2: 'يظهر رمز بطاقتك مرة واحدة فور الدفع',
      v2_tr3: 'فقدتَه أو غيّرتَ رأيك؟ راسلنا وسنحلّ الأمر',
      v2_faq_title: 'أسئلة وأجوبة',
      v2_sticky: 'احصل على بطاقتك',
      v2_app_title: 'حمّل التطبيق', v2_app_get: 'حمّله من',
      v2_wa_msg: 'مرحباً HailOwner، أريد أن أطلب {n}. اسمي: '
    },
    tr: {
      v2_app_title: 'Uygulamayı indirin', v2_app_get: 'Buradan indirin',
      v2_buy_lead: 'Aracınıza koyun; bir sorunu — açık kalan far, aralık kapı, yolunu kapatmanız — fark eden herkes size saniyeler içinde haber verebilir. Numaranız asla gösterilmez.'
    },
    ckb: {
      v2_app_title: 'ئەپەکە دابەزێنە', v2_app_get: 'دابەزاندن لە',
      v2_buy_lead: 'لەسەر ئۆتۆمبێلەکەت دایبنێ؛ هەر کەسێک کێشەیەک ببینێت — چرای ڕووناک، دەرگای کراوە، یان ڕێگاگرتن — لە چەند چرکەیەکدا ئاگادارت دەکاتەوە. ژمارەکەت هەرگیز پیشان نادرێت.'
    }
  };

  var root = document.documentElement;
  var current = 'en';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  function t(key) {
    var d = BASE[current] || {}, v = V2[current] || {};
    if (v[key] != null) return v[key];
    if (d[key] != null) return d[key];
    if (V2.en[key] != null) return V2.en[key];
    return (BASE.en || {})[key] || '';
  }

  /* ---------- language ---------- */
  function setLang(lang) {
    if (!BASE[lang]) lang = 'en';
    current = lang;
    root.lang = lang;
    root.dir = (lang === 'fa' || lang === 'ar' || lang === 'ckb') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('.v2-langlist button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) { var cur = document.getElementById('v2LangCur'); cur.textContent = b.textContent; cur.setAttribute('lang', lang); }
    });
    document.title = 'HailOwner — ' + t('foot_tag');
    safeSet('carping_lang', lang);
    updateOrderLinks();
    onScroll();
  }
  function pickInitial() {
    var saved = safeGet('carping_lang');
    if (saved && BASE[saved]) return saved;
    var nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
    if (nav.indexOf('fa') === 0) return 'fa';
    if (nav.indexOf('ar') === 0) return 'ar';
    if (nav.indexOf('tr') === 0) return 'tr';
    if (nav.indexOf('ku') === 0 || nav.indexOf('ckb') === 0) return 'ckb';
    return 'en';
  }

  /* ---------- app download buttons ----------
     Paste the real addresses here (Google Play, App Store, or a direct .apk on the site). Empty = the button says "Coming soon". */
  var APP_LINKS = { android: '', ios: '' };
  document.querySelectorAll('[data-store]').forEach(function (a) {
    var url = APP_LINKS[a.getAttribute('data-store')];
    if (!url) return;
    a.href = url;
    a.classList.remove('is-soon');
    a.removeAttribute('aria-disabled');
    if (/\.apk(\?|$)/i.test(url)) a.setAttribute('download', '');
    var small = a.querySelector('small');
    if (small) small.setAttribute('data-i18n', 'v2_app_get');
  });

  /* ---------- order links (WhatsApp / mail) ---------- */
  var tier = 1;
  var WA_NUMBER = ''; // the owner's WhatsApp number: digits only with country code, e.g. 9647XXXXXXXXX
  function tierLabel() { return t('v2_t' + tier); }
  function updateOrderLinks() {
    var msg = t('v2_wa_msg').replace('{n}', tierLabel());
    var wa = document.getElementById('v2Wa');
    var mail = document.getElementById('v2Mail');
    if (wa) wa.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    if (mail) mail.href = 'mailto:keyvan198954@gmail.com?subject=' + encodeURIComponent('HailOwner — ' + tierLabel()) + '&body=' + encodeURIComponent(msg);
  }
  document.querySelectorAll('.v2-tier').forEach(function (b) {
    b.addEventListener('click', function () {
      tier = Number(b.getAttribute('data-tier'));
      document.querySelectorAll('.v2-tier').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      updateOrderLinks();
    });
  });

  /* ---------- scroll ---------- */
  var nav = document.getElementById('v2Nav');
  var hero = document.getElementById('v2Hero');
  var story = document.getElementById('v2Story');
  var board = document.getElementById('v2Board');
  var steps = [].slice.call(document.querySelectorAll('.v2-step'));
  var rail = [].slice.call(document.querySelectorAll('.v2-rail button'));
  var sticky = document.getElementById('v2Sticky');
  var buy = document.getElementById('v2Buy');
  var scrubs = [].slice.call(document.querySelectorAll('[data-scrub]'));
  var pins = [].slice.call(document.querySelectorAll('[data-pin]')); /* pinned sections: --p runs 0 to 1 while the section is pinned */
  var counters = [].slice.call(document.querySelectorAll('[data-count]'));
  var intro = document.getElementById('v2Intro');
  var introBox = document.getElementById('v2IntroBox');
  var introVid = document.getElementById('v2IntroVid');
  var brand = document.getElementById('v2Brand');
  var step = -1, ticking = false, heroP = 0;

  function clamp(x, a, b) { return Math.min(b, Math.max(a, x)); }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  /* intro video: plays once on open; with reduced motion the intro is skipped (CSS), with data saver it shows the finished logo */
  (function () {
    var c = navigator.connection || {};
    if (reduce) { intro.classList.add('is-off'); return; }
    introVid.addEventListener('ended', function () { intro.classList.add('is-done'); });
    if (c.saveData || /(^|-)2g$/.test(c.effectiveType || '')) {
      introVid.preload = 'metadata';
      introVid.addEventListener('loadedmetadata', function () { try { introVid.currentTime = Math.max(0, introVid.duration - 0.05); } catch (e) { /* ignore */ } intro.classList.add('is-done'); });
      return;
    }
    var go = function () { var p = introVid.play(); if (p && p.catch) p.catch(function () { intro.classList.add('is-done'); }); };
    if (introVid.readyState >= 2) go(); else introVid.addEventListener('canplay', go, { once: true });
  })();
  function setStep(i) {
    if (i === step) return;
    step = i;
    story.setAttribute('data-step', String(i));
    steps.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
  }

  /* progress of a block: 0 when its top reaches 92% of the screen, 1 when its bottom reaches 50% */
  function blockProgress(el, vh) {
    var r = el.getBoundingClientRect();
    var from = vh * 0.92, to = vh * 0.5;
    return clamp((from - r.top) / (r.height + from - to), 0, 1);
  }

  function onScroll() {
    ticking = false;
    var y = window.scrollY || 0, vh = window.innerHeight || 800;
    nav.classList.toggle('is-stuck', y > 24);

    /* intro: the animated logo shrinks from the middle of the screen into the corner brand (where the nav logo is) */
    var ip = 1;
    if (!reduce && !intro.classList.contains('is-off')) {
      var ir = intro.getBoundingClientRect();
      ip = clamp(-ir.top / Math.max(1, intro.offsetHeight - vh), 0, 1);
      var e = ease(clamp(ip / 0.9, 0, 1));
      var br = brand.getBoundingClientRect();
      var bw = introBox.offsetWidth || 1;
      var sEnd = Math.max(br.width * 1.2, 130) / bw;
      var tx = (br.left + br.width / 2 - window.innerWidth / 2) * e;
      var ty = (br.top + br.height / 2 - vh / 2) * e;
      introBox.style.setProperty('--ix', tx.toFixed(1) + 'px');
      introBox.style.setProperty('--iy', ty.toFixed(1) + 'px');
      introBox.style.setProperty('--is', (1 + (sEnd - 1) * e).toFixed(4));
      introBox.style.setProperty('--io', (1 - clamp((ip - 0.8) / 0.18, 0, 1)).toFixed(3));
      intro.style.setProperty('--ip', ip.toFixed(3));
      intro.style.setProperty('--ib', (1 - clamp((ip - 0.55) / 0.4, 0, 1)).toFixed(3));
      brand.style.setProperty('--bo', clamp((ip - 0.82) / 0.16, 0, 1).toFixed(3));
    } else {
      brand.style.setProperty('--bo', 1);
    }

    var hr = hero.getBoundingClientRect();
    if (!reduce) {
      hero.style.setProperty('--hp', clamp(-hr.top / (vh * 0.9), 0, 1).toFixed(3));
      /* heroP: 0 when the hero starts to rise behind the logo, about .53 when it is in place, 1 when it has left */
      heroP = clamp((vh - hr.top) / (vh * 1.9), 0, 1);
      hero.style.setProperty('--p', heroP.toFixed(3));
    }

    var r = story.getBoundingClientRect();
    var total = story.offsetHeight - vh;
    var p = clamp(-r.top / Math.max(1, total), 0, 1);
    var raw = p * steps.length;
    storyP = p;
    setStep(clamp(Math.floor(raw), 0, steps.length - 1));
    rail.forEach(function (b, k) { b.style.setProperty('--fill', clamp(raw - k, 0, 1).toFixed(3)); });
    if (!reduce) {
      story.style.setProperty('--p', p.toFixed(3));
      board.style.setProperty('--sr', ((p - 0.5) * 14).toFixed(2));
      board.style.setProperty('--sx', (Math.sin(p * Math.PI) * 3).toFixed(2));
      scrubs.forEach(function (el) { el.style.setProperty('--p', blockProgress(el, vh).toFixed(3)); });
      pins.forEach(function (el) {
        var pr = el.getBoundingClientRect();
        el.style.setProperty('--p', clamp(-pr.top / Math.max(1, el.offsetHeight - vh), 0, 1).toFixed(3));
      });
      counters.forEach(function (b) {
        var host = b.closest('[data-scrub]');
        var pp = host ? Number(host.style.getPropertyValue('--p') || 1) : 1;
        var k = clamp(pp / 0.6, 0, 1);
        b.textContent = Math.round(Number(b.getAttribute('data-count')) * k) + (b.getAttribute('data-suffix') || '');
      });
    }

    var inStory = r.top <= vh * 0.2 && r.bottom > vh * 0.2;
    var bb = buy.getBoundingClientRect();
    var overBuy = bb.top < vh * 0.9 && bb.bottom > 0;
    var inPin = pins.some(function (el) { var q = el.getBoundingClientRect(); return q.top <= vh * 0.2 && q.bottom > vh * 0.2; });
    sticky.classList.toggle('is-on', hr.top < -vh * 0.5 && !overBuy && !inStory && !inPin);
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);

  rail.forEach(function (b, k) {
    b.addEventListener('click', function () {
      var total = story.offsetHeight - window.innerHeight;
      var top = story.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + total * (k + 0.5) / steps.length, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---------- optional scroll-played video for the four steps ----------
     Put the finished file at howitworks.mp4 (encoded with a keyframe on every frame so it can be scrubbed).
     If it exists, the drawn board is replaced by the video; time follows the pinned story progress.
     Reduced motion: the video is paused on its last frame (the finished picture). */
  /* Videos that follow the scroll need to jump to any moment. Some hosts do not answer byte-range requests, and then a plain
     <video src> cannot seek. So the whole file (a few MB) is downloaded once and played from memory (a blob address), which always seeks.
     If that fails, the normal address is tried; if that fails too, onFail runs. */
  function seekableSrc(video, url, onReady, onFail) {
    var done = false;
    function ready() { if (!done) { done = true; onReady(); } }
    function direct() {
      video.addEventListener('loadedmetadata', ready, { once: true });
      video.addEventListener('error', function () { if (!done && onFail) onFail(); }, { once: true });
      video.src = url;
      video.load();
    }
    if (!window.fetch || !window.URL || !URL.createObjectURL) { direct(); return; }
    fetch(url).then(function (r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.blob();
    }).then(function (b) {
      video.addEventListener('loadedmetadata', ready, { once: true });
      video.addEventListener('error', function () { if (!done) direct(); }, { once: true });
      video.src = URL.createObjectURL(new Blob([b], { type: 'video/mp4' }));
      video.load();
    }).catch(function () { direct(); });
  }

  var vid = document.getElementById('v2Vid');
  var storyP = 0, vidT = 0, vidReady = false;
  /* the four clips are not equally long, so each step is mapped to its own stretch of the video:
     times (seconds) where steps 2, 3 and 4 begin in howitworks.mp4 (middle of each cross-fade) */
  var VIDEO_MARKS = [0, 4.94, 9.73, 13.52];
  function videoTimeFor(p, dur) {
    var n = VIDEO_MARKS.length;
    var seg = Math.min(n - 1, Math.floor(p * n));
    var f = p * n - seg;
    var a = VIDEO_MARKS[seg];
    var b = seg + 1 < n ? VIDEO_MARKS[seg + 1] : dur - 0.05;
    return a + (b - a) * Math.min(1, f);
  }
  function setVideoTime(tm) {
    try { if (vid.fastSeek) vid.fastSeek(tm); else vid.currentTime = tm; } catch (e) { vid.currentTime = tm; }
  }
  function vidLoop() {
    if (vidReady && vid.duration) {
      var target = videoTimeFor(reduce ? 1 : storyP, vid.duration);
      vidT += (target - vidT) * (reduce ? 1 : 0.18);
      if (Math.abs(vid.currentTime - vidT) > 0.025) setVideoTime(vidT);
    }
    requestAnimationFrame(vidLoop);
  }
  if (vid) {
    vid.poster = 'howitworks-poster.jpg';
    seekableSrc(vid, 'howitworks.mp4',
      function () { vidReady = true; board.classList.add('has-video'); },
      function () { vid.remove(); });
    requestAnimationFrame(vidLoop);
  }

  /* ---------- reveal ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 }) : null;
  document.querySelectorAll('.reveal').forEach(function (el) { if (io) io.observe(el); else el.classList.add('is-in'); });

  /* ---------- hero video: respect reduced motion and data saver ---------- */
  /* ---------- hero background video: played by scroll ----------
     time follows how far the hero has risen and left (heroP, set in onScroll); with reduced motion or data saver it stays on its poster */
  var heroVid = document.getElementById('v2Video');
  var conn = navigator.connection || {};
  var heroReady = false, heroT = 0;
  if (heroVid) {
    if (reduce || conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '')) {
      try { heroVid.pause(); heroVid.preload = 'none'; } catch (e) { /* ignore */ }
    } else {
      seekableSrc(heroVid, 'hero-scrub.mp4?v=1', function () { heroReady = true; try { heroVid.pause(); } catch (e) { /* ignore */ } });
      var heroLoop = function () {
        if (heroReady && heroVid.duration) {
          var target = heroP * (heroVid.duration - 0.05);
          heroT += (target - heroT) * 0.2;
          if (Math.abs(heroVid.currentTime - heroT) > 0.025) {
            try { if (heroVid.fastSeek) heroVid.fastSeek(heroT); else heroVid.currentTime = heroT; } catch (e) { heroVid.currentTime = heroT; }
          }
        }
        requestAnimationFrame(heroLoop);
      };
      requestAnimationFrame(heroLoop);
    }
  }

  /* ---------- init ---------- */
  /* language menu: a button that opens a list with each language's own full name */
  var langMenu = document.getElementById('v2LangMenu');
  var langBtn = document.getElementById('v2LangBtn');
  function langOpen(open) {
    langMenu.classList.toggle('is-open', open);
    langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = !langMenu.classList.contains('is-open');
    langOpen(open);
    if (open) { var sel = langMenu.querySelector('[aria-selected="true"]') || langMenu.querySelector('button[data-lang]'); if (sel) sel.focus(); }
  });
  document.addEventListener('click', function (e) { if (!langMenu.contains(e.target)) langOpen(false); });
  langMenu.addEventListener('keydown', function (e) {
    var items = [].slice.call(langMenu.querySelectorAll('.v2-langlist button'));
    var i = items.indexOf(document.activeElement);
    if (e.key === 'Escape') { langOpen(false); langBtn.focus(); }
    else if (e.key === 'ArrowDown' && langMenu.classList.contains('is-open')) { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === 'ArrowUp' && langMenu.classList.contains('is-open')) { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });
  document.querySelectorAll('.v2-langlist button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); langOpen(false); langBtn.focus(); });
  });
  setLang(pickInitial());
  setStep(0);
  onScroll();
})();
