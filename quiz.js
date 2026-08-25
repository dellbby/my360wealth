/* quiz.js — the service questionnaires.
   A page supplies window.MY360_QUIZ and mounts <div id="quiz-mount"></div>.
   Everything below is presentation + scoring; the questions live in the page. */
(function () {
  'use strict';
  var CFG = window.MY360_QUIZ;
  var mount = document.getElementById('quiz-mount');
  if (!CFG || !mount) return;

  var CSS = '\
  #quiz-mount{background:#f0e8d8;padding:52px 0}\
  .qz-wrap{max-width:760px;margin:0 auto;padding:0 24px}\
  .qz-head{margin-bottom:26px}\
  .qz-k{margin:0 0 10px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#7d5f22;font-weight:700}\
  .qz-head h2{font-family:var(--font-heading),Georgia,serif;font-weight:400;font-size:clamp(26px,3.6vw,36px);line-height:1.18;color:#2a221a;margin:0 0 12px}\
  .qz-head p{margin:0;font-size:16px;line-height:1.7;color:rgba(42,34,26,.72)}\
  .qz-bar{height:3px;background:rgba(42,34,26,.12);margin:26px 0 30px}\
  .qz-bar span{display:block;height:100%;width:0;background:#a07b32;transition:width .4s cubic-bezier(.22,1,.36,1)}\
  .qz-step{display:none}.qz-step.on{display:block}\
  .qz-count{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#7d5f22;font-weight:700;margin:0 0 10px}\
  .qz-q{font-family:var(--font-heading),Georgia,serif;font-weight:400;font-size:clamp(22px,3vw,29px);line-height:1.24;color:#2a221a;margin:0 0 8px}\
  .qz-help{margin:0 0 20px;font-size:16px;line-height:1.65;color:rgba(42,34,26,.66)}\
  .qz-opts{display:grid;gap:10px}\
  .qz-opt{display:flex;gap:14px;align-items:flex-start;width:100%;text-align:left;background:#fff;border:1px solid rgba(42,34,26,.14);padding:15px 18px;font:inherit;color:inherit;cursor:pointer;transition:border-color .2s,background .2s}\
  .qz-opt:hover{border-color:rgba(160,123,50,.55);background:#fffaf0}\
  .qz-opt:focus-visible{outline:2px solid #a07b32;outline-offset:2px}\
  .qz-opt.sel{border-color:#a07b32;background:#fffaf0}\
  .qz-box{flex:0 0 auto;width:19px;height:19px;border:1px solid rgba(42,34,26,.35);margin-top:2px;display:grid;place-items:center;background:#fff}\
  .qz-opt.sel .qz-box{background:#a07b32;border-color:#a07b32}\
  .qz-box svg{opacity:0}.qz-opt.sel .qz-box svg{opacity:1}\
  .qz-txt strong{display:block;font-size:16px;color:#2a221a;font-weight:600;line-height:1.35}\
  .qz-txt span{display:block;margin-top:3px;font-size:14px;line-height:1.55;color:rgba(42,34,26,.66)}\
  .qz-nav{display:flex;gap:14px;align-items:center;margin-top:24px}\
  .qz-btn{font:inherit;font-size:14px;letter-spacing:.14em;text-transform:uppercase;border:0;cursor:pointer;background:#a07b32;color:#fffaf0;padding:14px 26px;transition:background .2s}\
  .qz-btn:hover{background:#8a6a2b}.qz-btn[disabled]{opacity:.4;cursor:not-allowed}\
  .qz-back{font:inherit;font-size:14px;letter-spacing:.12em;text-transform:uppercase;background:none;border:0;color:rgba(42,34,26,.55);cursor:pointer;padding:6px 2px;border-bottom:1px solid rgba(42,34,26,.2)}\
  .qz-hint{margin-left:auto;font-size:14px;color:rgba(42,34,26,.5)}\
  .qz-res{display:none}.qz-res.on{display:block}\
  .qz-verdict{background:#17130f;color:#f3eee2;padding:30px 32px}\
  .qz-score{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#c9a974;font-weight:700;margin:0 0 10px}\
  .qz-verdict h3{font-family:var(--font-heading),Georgia,serif;font-weight:400;font-size:clamp(24px,3.2vw,31px);line-height:1.2;margin:0 0 12px}\
  .qz-verdict p{margin:0;font-size:16px;line-height:1.72;color:rgba(243,238,226,.78)}\
  .qz-gaps{background:#fff;border:1px solid rgba(42,34,26,.13);padding:24px 28px;margin-top:14px}\
  .qz-gaps h4{font-family:var(--font-heading),Georgia,serif;font-weight:500;font-size:19px;margin:0 0 12px;color:#2a221a}\
  .qz-gaps ul{margin:0;padding:0;list-style:none}\
  .qz-gaps li{position:relative;padding:9px 0 9px 18px;font-size:16px;line-height:1.62;color:rgba(42,34,26,.75);border-top:1px solid rgba(42,34,26,.08)}\
  .qz-gaps li:first-child{border-top:0}\
  .qz-gaps li::before{content:"";position:absolute;left:0;top:17px;width:5px;height:5px;border-radius:50%;background:#a07b32}\
  .qz-gaps li b{color:#2a221a;font-weight:600}\
  .qz-done{margin-top:14px;background:#fffaf0;border-left:3px solid #a07b32;padding:20px 24px;font-size:16px;line-height:1.65;color:rgba(42,34,26,.75)}\
  .qz-act{margin-top:20px;display:flex;gap:18px;align-items:center;flex-wrap:wrap}\
  .qz-act .qz-btn{text-decoration:none;display:inline-flex;align-items:center}\
  .qz-act a.alt{font-size:14px;color:#7d5f22;border-bottom:1px solid rgba(125,95,34,.4);padding-bottom:2px}\
  .qz-again{margin-top:22px;font:inherit;font-size:14px;color:rgba(42,34,26,.55);background:none;border:0;cursor:pointer;border-bottom:1px solid rgba(42,34,26,.2);padding:4px 2px}\
  .qz-priv{margin-top:22px;font-size:14px;line-height:1.65;color:rgba(42,34,26,.5)}';

  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

  var CHECK = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fffaf0" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  var Q = CFG.questions, answers = {}, cur = 0;

  var html = '<div class="qz-wrap"><div class="qz-head"><p class="qz-k">' + CFG.kicker + '</p>' +
             '<h2>' + CFG.title + '</h2><p>' +
             CFG.blurb.replace('__NWORD__', (['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'][Q.length] || Q.length) + ' questions').replace(' questions questions',' questions') +
             '</p></div>' +
             '<div class="qz-bar" role="progressbar" aria-label="Progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div><form novalidate>';
  Q.forEach(function (q, i) {
    html += '<div class="qz-step' + (i === 0 ? ' on' : '') + '"><p class="qz-count">Question ' + (i + 1) + ' of ' + Q.length + '</p>' +
            '<h3 class="qz-q">' + q.q + '</h3>' + (q.help ? '<p class="qz-help">' + q.help + '</p>' : '') +
            '<div class="qz-opts" data-i="' + i + '" data-multi="' + (q.multi ? 'true' : 'false') + '"></div></div>';
  });
  html += '<div class="qz-nav"><button type="button" class="qz-btn" data-next disabled>Continue</button>' +
          '<button type="button" class="qz-back" data-back hidden>Back</button><span class="qz-hint"></span></div>' +
          '</form><div class="qz-res" tabindex="-1"></div></div>';
  mount.innerHTML = html;

  var form = mount.querySelector('form'), res = mount.querySelector('.qz-res'),
      bar = mount.querySelector('.qz-bar span'), barBox = mount.querySelector('.qz-bar'),
      next = mount.querySelector('[data-next]'), back = mount.querySelector('[data-back]'),
      hint = mount.querySelector('.qz-hint'), steps = [].slice.call(mount.querySelectorAll('.qz-step'));

  mount.querySelectorAll('.qz-opts').forEach(function (wrap) {
    var qi = +wrap.dataset.i, multi = wrap.dataset.multi === 'true';
    Q[qi].options.forEach(function (o, oi) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'qz-opt'; b.dataset.oi = oi; b.setAttribute('aria-pressed', 'false');
      b.innerHTML = '<span class="qz-box">' + CHECK + '</span><span class="qz-txt"><strong>' + o[0] + '</strong>' +
                    (o[1] ? '<span>' + o[1] + '</span>' : '') + '</span>';
      b.addEventListener('click', function () {
        if (multi) { b.classList.toggle('sel'); }
        else {
          wrap.querySelectorAll('.qz-opt').forEach(function (x) { x.classList.remove('sel'); x.setAttribute('aria-pressed', 'false'); });
          b.classList.add('sel');
        }
        b.setAttribute('aria-pressed', b.classList.contains('sel') ? 'true' : 'false');
        answers[qi] = [].slice.call(wrap.querySelectorAll('.qz-opt.sel')).map(function (x) { return +x.dataset.oi; });
        sync();
      });
      wrap.appendChild(b);
    });
  });

  function sync() {
    var multi = Q[cur].multi, picked = (answers[cur] || []).length;
    next.disabled = !multi && picked === 0;
    next.textContent = cur === Q.length - 1 ? 'See my result' : 'Continue';
    back.hidden = cur === 0;
    hint.textContent = multi ? 'Choose any that apply, or none' : '';
    var pct = Math.round((cur / Q.length) * 100);
    bar.style.width = pct + '%'; barBox.setAttribute('aria-valuenow', pct);
  }
  function show(i) { steps[cur].classList.remove('on'); cur = i; steps[cur].classList.add('on'); sync();
                     mount.scrollIntoView({ block: 'start', behavior: 'smooth' }); }

  next.addEventListener('click', function () { cur < Q.length - 1 ? show(cur + 1) : finish(); });
  back.addEventListener('click', function () { if (cur > 0) show(cur - 1); });

  function finish() {
    var score = 0, flags = [];
    Object.keys(answers).forEach(function (qi) {
      (answers[qi] || []).forEach(function (oi) {
        var o = Q[qi].options[oi];
        score += (o[2] || 0);
        if (o[3]) flags.push(o[3]);
      });
    });
    var band = CFG.bands[CFG.bands.length - 1];
    for (var i = 0; i < CFG.bands.length; i++) { if (score <= CFG.bands[i].max) { band = CFG.bands[i]; break; } }

    /* A second axis. Complexity alone should not point someone at a service whose
       scope and fee assume a balance sheet they may not have. Options can carry a
       capacity score (index 5); if the top band is reached without it, we recommend
       the lighter starting point instead. */
    if (CFG.altTop && band === CFG.bands[CFG.bands.length - 1]) {
      var cap = 0;
      Object.keys(answers).forEach(function (qi) {
        (answers[qi] || []).forEach(function (oi) { cap += (Q[qi].options[oi][5] || 0); });
      });
      if (cap < (CFG.capMinForTop || 0)) band = CFG.altTop;
    }

    // an option may carry an 'echo' (index 4) — a line that reflects their stated
    // priority back, so two people with the same score don't get identical text
    var echo = '';
    Object.keys(answers).forEach(function (qi) {
      (answers[qi] || []).forEach(function (oi) {
        var o = Q[qi].options[oi];
        if (o[4] && !echo) echo = o[4];
      });
    });
    var h = '<div class="qz-verdict"><p class="qz-score">Your result</p><h3>' + band.title + '</h3><p>' +
            band.text + (echo ? '</p><p style="margin-top:14px;">' + echo : '') + '</p></div>';
    if (flags.length) {
      h += '<div class="qz-gaps"><h4>What stood out</h4><ul>';
      flags.forEach(function (f) { h += '<li><b>' + f[0] + '</b> &mdash; ' + f[1] + '</li>'; });
      h += '</ul></div>';
    } else {
      h += '<div class="qz-done">Nothing here looks urgent from your answers. That is worth confirming rather than assuming &mdash; a short conversation is usually enough to tell.</div>';
    }
    // The email has to carry the whole picture — a bare headline tells us nothing.
    function plain(x) { var d = document.createElement('div'); d.innerHTML = x; return (d.textContent || '').trim(); }
    function transcript(withQuestions) {
      var L = ['My 360 \u2014 ' + plain(CFG.service) + ' questionnaire', '',
               'RESULT: ' + plain(band.title), '', 'MY ANSWERS'];
      Q.forEach(function (q, qi) {
        var picked = (answers[qi] || []).map(function (oi) { return plain(q.options[oi][0]); });
        L.push((qi + 1) + '. ' + (withQuestions ? plain(q.q) : ''));
        L.push(picked.length ? '   ' + picked.join('\n   ') : '   (not answered)');
      });
      if (flags.length) {
        L.push('', 'WHAT STOOD OUT');
        flags.forEach(function (f) { L.push(' - ' + plain(f[0])); });
      }
      L.push('', 'Please contact me:', 'Name:', 'Best number:', 'Best time to reach me:', '');
      return L.join('\n');
    }
    var body = transcript(true);
    // some mail clients truncate long mailto links; drop the question text before the answers
    if (encodeURIComponent(body).length > 1800) body = transcript(false);

    h += '<div class="qz-act"><a class="qz-btn" href="mailto:service@my360wealth.com?subject=' +
         encodeURIComponent(plain(CFG.subject) + ' \u2014 ' + plain(band.title)) + '&body=' +
         encodeURIComponent(body) +
         '">' + CFG.cta + '</a><a class="alt" href="tel:8185474720">or call 818.547.4720</a></div>';
    h += '<button type="button" class="qz-again">Start over</button>';
    h += '<p class="qz-priv">Your answers stay in this browser. Nothing is sent to My 360 Wealth unless you choose to send it. ' +
         'This is a general educational tool, not personalised investment, tax or legal advice, and it does not take your full circumstances into account.</p>';

    form.style.display = 'none'; bar.style.width = '100%';
    res.innerHTML = h; res.classList.add('on'); res.focus();
    mount.scrollIntoView({ block: 'start', behavior: 'smooth' });
    res.querySelector('.qz-again').addEventListener('click', function () {
      res.classList.remove('on'); res.innerHTML = ''; form.style.display = ''; answers = {};
      mount.querySelectorAll('.qz-opt.sel').forEach(function (x) { x.classList.remove('sel'); x.setAttribute('aria-pressed', 'false'); });
      show(0);
    });
  }
  sync();
})();
