/* HailOwner website: behaviour shared by the plain text pages (delete-account.html): language switch (EN / FA / AR) and the year. */
(function () {
  'use strict';

  var EMAIL = 'keyvan198954@gmail.com'; // PLACEHOLDER — keep equal to CONFIG.email in main.js; replace with the real support address
  var I18N = window.CP_I18N || {};
  var root = document.documentElement;

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function renderLegal(lang) {
    var host = document.getElementById('legal');
    if (!host || !window.CP_LEGAL) return;
    var set = window.CP_LEGAL[host.getAttribute('data-doc')] || {};
    var doc = set[lang] || set.en;
    if (!doc) return;
    // a language without its own legal text shows the English one, left to right
    host.dir = set[lang] ? '' : 'ltr';
    host.lang = set[lang] ? lang : 'en';
    var fill = function (t) { return esc(t).replace('{email}', '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>'); };
    document.getElementById('legalTitle').textContent = doc.title;
    document.getElementById('legalIntro').textContent = doc.intro;
    document.getElementById('legalUpdated').textContent = doc.updated;
    var html = '';
    doc.sections.forEach(function (sec) {
      html += '<h2>' + esc(sec.h) + '</h2>';
      (sec.p || []).forEach(function (t) { html += '<p>' + fill(t) + '</p>'; });
      if (sec.ul) html += '<ul class="bullets">' + sec.ul.map(function (t) { return '<li>' + fill(t) + '</li>'; }).join('') + '</ul>';
    });
    document.getElementById('legalBody').innerHTML = html;
    var draft = document.getElementById('legalDraft');
    if (draft) draft.hidden = window.CP_LEGAL_DRAFT === false;
    document.title = doc.title + ' — HailOwner';
  }

  function setLang(lang) {
    if (!I18N[lang]) lang = 'en';
    var dict = I18N[lang], base = I18N.en;
    root.lang = lang;
    root.dir = (lang === 'fa' || lang === 'ar' || lang === 'ckb') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = dict[k] != null ? dict[k] : base[k];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    if (document.getElementById('legal')) renderLegal(lang); else document.title = dict.del_title || base.del_title;
    safeSet('carping_lang', lang);
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  var mail = document.getElementById('delMail');
  if (mail) mail.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Delete my HailOwner account');
  var mailText = document.getElementById('delMailText');
  if (mailText) mailText.textContent = EMAIL;
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var saved = safeGet('carping_lang');
  var n = (navigator.language || 'en').toLowerCase();
  setLang(saved && I18N[saved] ? saved : n.indexOf('fa') === 0 ? 'fa' : n.indexOf('ar') === 0 ? 'ar' : n.indexOf('tr') === 0 ? 'tr' : (n.indexOf('ckb') === 0 || n.indexOf('ku') === 0) ? 'ckb' : 'en');
})();
