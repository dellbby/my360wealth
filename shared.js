/* shared.js — site-wide header (nav) + footer.
   Injected on every page. Edit this file to change the nav or footer everywhere. */
(function () {
  var NAV_HTML = `<div class="topbar" style="position:fixed;top:0;left:0;right:0;z-index:52;background:#0a0907;border-bottom:1px solid rgba(255,255,255,0.05);">
  <div class="container topbar-inner">
    <a href="https://brokercheck.finra.org/" target="_blank" rel="noopener" class="bc-badge" aria-label="FINRA BrokerCheck"><img src="https://static.fmgsuite.com/site/templates/global/img/brokerCheck-bar-logo.png" alt="BrokerCheck by FINRA" /></a>
    <div class="topbar-actions">
      <a href="#" class="topbar-portals" id="portalsBtnTop">Client Portals</a>
      <a class="btn-gold topbar-cta" href="/contact.html">Schedule a Consultation</a>
    </div>
  </div>
</div>
<header class="nav" id="nav">
  <div class="container nav-inner">
    <a href="/index.html" class="logo">
      <img src="/images/logo_white_transparent.webp" alt="My 360 Wealth Management Group" class="logo-img" />
    </a>
    <nav class="nav-links">      <div class="nav-item has-dropdown">
        <a href="/services.html" class="nav-trigger">Services <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="caret"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="dropdown">
          <div class="dropdown-col">
            <span class="dropdown-head">Personal &amp; Family</span>
            <a href="/services/wealth-retirement-planning.html">Wealth &amp; Retirement Planning</a>
            <a href="/services/portfolio-management.html">Portfolio Management</a>
            <a href="/services/trust-estate-planning.html">Trust &amp; Estate Planning</a>
            <a href="/services/foundation-endowment.html">Foundation &amp; Endowment</a>
            <a href="/services/concentrated-stock-strategies.html">Concentrated Stock Strategies</a>
            <a href="/services/retirement-income.html">Retirement Income Planning</a>
          </div>
          <div class="dropdown-col">
            <span class="dropdown-head">Business &amp; Employers</span>
            <a href="/services/401k-qualified-plans.html">401(k) &amp; Qualified Plans</a>
            <a href="/services/deferred-compensation.html">Deferred Compensation</a>
            <a href="/services/insurance-services.html">Insurance Services</a>
            <a href="/services/business-succession.html">Business Succession</a>
            <a href="/services/tax-planning.html">Tax Planning</a>
            <a href="/services/employee-education.html">Employee Education</a>
          </div>
          <a href="/services.html" class="dropdown-foot">View All Services <span aria-hidden="true">›</span></a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="/process.html" class="nav-trigger">Our Process <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="caret"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="dropdown dropdown-sm">
          <div class="dropdown-col">
            <a href="/process.html">Our Process</a>
            <a href="https://yourmoneymind.finlife.com/?iid=6c512f88-36fd-4ad5-bdef-66b7127b71d2" target="_blank" rel="noopener">What’s Your Money Mind?</a>
            <a href="https://pro.riskalyze.com/embed/581f798ad603a7e761ab" target="_blank" rel="noopener">What’s Your Risk Score?</a>
          </div>
        </div>
      </div>
      <a href="/index.html#milestones">Life Milestones</a>
      <div class="nav-item has-dropdown">
        <a href="/resource-center/index.html" class="nav-trigger">Resource Center <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="caret"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="dropdown dropdown-sm">
          <div class="dropdown-col">
            <a href="/resource-center/index.html">Resource Center</a>
            <a href="/resource-center/articles.html">All Articles</a>
            <a href="/resource-center/calculators/index.html">Calculators</a>
            <a href="/resource-center/glossary.html">Glossary</a>
          </div>
        </div>
      </div>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
    </nav>
    
    <div class="nav-mobile">
      <button class="icon-btn" id="menuBtn" aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </div>
</header>

<div class="menu-overlay" id="menu" aria-hidden="true">
  <div class="menu-top">
    <a href="/index.html" class="logo" data-close>
      <img src="/images/logo_white_transparent.webp" alt="My 360 Wealth Management Group" class="logo-img" />
    </a>
    <button class="icon-btn" id="menuClose" aria-label="Close menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <nav class="menu-links">    <a href="/services.html" data-close>Services</a>
    <a href="/process.html" data-close>Our Process</a>
    <a href="/index.html#milestones" data-close>Life Milestones</a>
    <a href="/resource-center/index.html" data-close>Resource Center</a>
    <a href="/resource-center/articles.html" data-close>All Articles</a>
    <a href="/resource-center/calculators/index.html" data-close>Calculators</a>
    <a href="/resource-center/glossary.html" data-close>Glossary</a>
    <a href="#" id="portalsBtnMobile">Client Portals</a>
    <a href="/about.html" data-close>About</a>
    <a href="/contact.html" data-close>Contact</a>
  </nav>
  <div class="menu-bottom">
    <a class="btn-gold" href="/contact.html" data-close>Schedule a Consultation</a>
    <div class="menu-meta">
      <a href="tel:8185474720">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1 .37 1.97.72 2.9a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0122 16.92z"/></svg>
        (818) 547-4720
      </a>
      <span style="color:rgba(243,238,226,0.1)">|</span>
      <a href="mailto:service@my360wealth.com">service@my360wealth.com</a>
    </div>
  </div>
</div>

<button id="scrollTopBtn" aria-label="Back to top" type="button">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
</button>

<!-- Client Portals modal -->
<div class="portal-overlay" id="portalOverlay" aria-hidden="true">
  <div class="portal-modal" role="dialog" aria-modal="true">
    <button class="portal-close" id="portalClose" aria-label="Close">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <div class="portal-tabs" role="tablist">
      <button class="portal-tab active" data-tab="client" role="tab">Client Login</button>
      <button class="portal-tab" data-tab="k401" role="tab">401(k) Login</button>
    </div>
    <div class="portal-panel active" id="portalPanel-client" role="tabpanel">
      <div class="portal-grid">
        <a class="portal-link" href="https://finlife.my.site.com/cx/s/login/" target="_blank" rel="noopener"><span>GuideCenter</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://wealth.emaplan.com/ema/SignIn?ema" target="_blank" rel="noopener"><span>eMoney</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx" target="_blank" rel="noopener"><span>Charles Schwab</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://www.fidelity.com/PASclient" target="_blank" rel="noopener"><span>Fidelity</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://mfaservices.seic.com/mfaservices/TSULogin.jsp?APPNAME=2&amp;CLIENT=1&amp;SAMUser=Y&amp;TYPE=33554433&amp;REALMOID=06-000cfd90-7120-1557-b914-0a3fac12902c&amp;GUID=&amp;SMAUTHREASON=0&amp;METHOD=GET&amp;SMAGENTNAME=$SM$kF6yJD7kpWAwXtz7MYO%2fiU55LpAQRiEtHKuQxVV1XGPALVZLK29qrfFrJ6%2brKNoT&amp;TARGET=$SM$HTTPS%3a%2f%2fiag%2eseiclientconnect%2ecom%2f" target="_blank" rel="noopener"><span>SEI</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
      </div>
      <p class="portal-note" style="font-size: 11px; line-height: 1.6;"><strong>PLEASE NOTE:</strong> The information being provided is strictly as a courtesy. When you link to any of the websites provided here, you are leaving this website. We make no representation as to the completeness or accuracy of information provided at these websites. Nor is the company liable for any direct or indirect technical or system issues or any consequences arising out of your access to or your use of third-party technologies, websites, information and programs made available through this website. When you access one of these websites, you are leaving our website and assume total responsibility and risk for your use of the websites you are linking to.</p>
    </div>
    <div class="portal-panel" id="portalPanel-k401" role="tabpanel">
      <div class="portal-grid">
        <a class="portal-link" href="https://www.mykplan.com/" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/adp.webp" alt="ADP" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://www.americanfunds.com/individual/accounts/login.htm" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/american_funds.webp" alt="American Funds" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://myaccount.ascensus.com/rplink/account/login" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/ascensus.webp" alt="Ascensus" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://www.jhancockpensions.com/do/home_page/homeRedirectionAction" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/john_hancock.webp" alt="John Hancock" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://auth.lincolnfinancial.com/login?state=hKFo2SBrT1ZCZk9waDhHSk9SaElJWlhwQ0xfNFpjVkt4X1JXb6FupWxvZ2luo3RpZNkgYUYzdGZNb2ZvU1hsOVJOSU1ILXJOT3hmLTNTTjlweTijY2lk2SB0QnNlNmVoYmtWamI3VUZBR0xjbzUySElHYlBOZFRqWA&amp;client=tBse6ehbkVjb7UFAGLco52HIGbPNdTjX&amp;protocol=oauth2&amp;response_type=code&amp;scope=openid%20profile&amp;redirect_uri=https%3A%2F%2Fwww.lincolnfinancial.com%2Fsecure%2Flogin%2Fcallback&amp;nonce=2Z2uZqDpHPiQcfh08_SUjIMNCviqCdIFFAtI4qQQBoM&amp;code_challenge=w6OJ06FbLM1MiTSW3RAOXHlbopX8NO-6zajKRh9riwo&amp;code_challenge_method=S256" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/lincoln.webp" alt="Lincoln Financial" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://www.massmutual.com/login-list" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/mass_mutual.webp" alt="Mass Mutual" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://login.nationwide.com/access/web/login.htm?logintType=retirementPlans" target="_blank" rel="noopener"><span>Nationwide</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://myapps.paychex.com/landing_remote/login.do?lang=en" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/paychex.webp" alt="Paychex" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://participant.empower-retirement.com/participant/#/login" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/pentegra.webp" alt="Pentegra" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://secure.transamerica.com/login/sign-in/login.html?TAM_OP=login&amp;_ga=2.84273369.1522537505.1540496111-1996331011.1540496111" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/transamerica.webp" alt="Transamerica" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://login.vanguard.com/login?state=hKFo2SAxV3JiUzZxZFBTZTBJQWN5ekhiXy14a3ZzaTVyTWFxRqFupWxvZ2luo3RpZNkgbWhNQ3RHM0VOeE9icXZ4V2JpMXpmUVNjeUY3QlBQTGGjY2lk2SBzeER2N3M3MGJPTkc0V2p3MGtXVVNrTE50cFduTkV0Mg&amp;client=sxDv7s70bONG4Wjw0kWUSkLNtpWnNEt2&amp;protocol=oauth2&amp;nonce=_lxG_DZoKkzj0PnUxlAKp1-v&amp;response_mode=query&amp;redirect_uri=https:%2F%2Fpersonal1.vanguard.com%2Fusa%2Flogin&amp;connection=crems&amp;code_challenge_method=S256&amp;code_challenge=3QtGgEXQ-jt841UTXoJcWHDZYSnET86Y7Spnqt-IJRg&amp;response_type=code&amp;audience=https:%2F%2Fretail.vanguard.com&amp;site=pi&amp;scope=openid%20offline_access" target="_blank" rel="noopener"><img class="portal-logo" src="/images/logos/vangaurd.webp" alt="Vanguard" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
      </div>
      <p class="portal-note" style="font-size: 11px; line-height: 1.6;"><strong>PLEASE NOTE:</strong> The information being provided is strictly as a courtesy. When you link to any of the websites provided here, you are leaving this website. We make no representation as to the completeness or accuracy of information provided at these websites. Nor is the company liable for any direct or indirect technical or system issues or any consequences arising out of your access to or your use of third-party technologies, websites, information and programs made available through this website. When you access one of these websites, you are leaving our website and assume total responsibility and risk for your use of the websites you are linking to.</p>
    </div>
  </div>
</div>

<style>
  /* Scroll-to-top button */
  #scrollTopBtn { position: fixed; right: 24px; bottom: 24px; z-index: 49; width: 46px; height: 46px; border-radius: 50%; background: #2a2421; color: #c9a974; border: 1px solid rgba(201,169,116,0.4); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; pointer-events: none; transform: translateY(8px); transition: opacity 0.25s, transform 0.25s, background 0.25s, color 0.25s; box-shadow: 0 6px 16px rgba(0,0,0,0.15); }
  #scrollTopBtn.show { opacity: 1; pointer-events: auto; transform: translateY(0); }
  #scrollTopBtn:hover { background: #c9a974; color: #2a221a; border-color: #c9a974; }
  @media (max-width: 640px) { #scrollTopBtn { right: 16px; bottom: 16px; width: 42px; height: 42px; } }

  /* BrokerCheck by FINRA badge */
  .bc-badge { display: inline-flex; align-items: center; min-width: 0; flex: 0 1 auto; transition: transform 0.2s, opacity 0.2s; }
  .bc-badge:hover { transform: translateY(-1px); opacity: 0.9; }
  .bc-badge img { height: 22px; width: auto; max-width: 100%; display: block; }

  /* Services dropdown */
  .nav-item.has-dropdown { position: relative; display: inline-flex; align-items: center; }
  .nav-item .nav-trigger { display: inline-flex; align-items: center; gap: 6px; color: var(--muted); text-transform: uppercase; font-size: 13px; letter-spacing: 0.06em; transition: color 0.3s; }
  .nav-item .nav-trigger:hover, .nav-item:hover .nav-trigger, .nav-item:focus-within .nav-trigger { color: var(--cream); }
  .nav-item .caret { transition: transform 0.25s; }
  .nav-item:hover .caret, .nav-item:focus-within .caret { transform: rotate(180deg); }
    /* Slim single-column dropdown variant */
  .dropdown.dropdown-sm { min-width: 220px; grid-template-columns: 1fr; padding: 10px 14px; gap: 0; }
  .dropdown.dropdown-sm .dropdown-col { gap: 2px; }
  .dropdown.dropdown-sm .dropdown-col a { padding: 6px 0; font-size: 13px; }

  .dropdown { position: absolute; top: 100%; left: 50%; transform: translate(-50%, 8px); min-width: 540px; background: rgba(17,15,13,0.97); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); padding: 22px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; opacity: 0; visibility: hidden; pointer-events: none; transition: opacity 0.25s, transform 0.25s, visibility 0s linear 0.25s; }
  .nav-item:hover .dropdown, .nav-item:focus-within .dropdown { opacity: 1; visibility: visible; pointer-events: auto; transform: translate(-50%, 0); transition: opacity 0.25s, transform 0.25s; }
  /* Invisible bridge so the dropdown doesn't close when crossing the gap */
  .nav-item .dropdown::before { content: ''; position: absolute; top: -10px; left: 0; right: 0; height: 12px; }
  .dropdown-col { display: flex; flex-direction: column; gap: 8px; }
  .dropdown-head { font-family: var(--font-heading); font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); padding-bottom: 6px; border-bottom: 1px solid rgba(201,169,116,0.25); margin-bottom: 4px; }
  .dropdown a { color: rgba(243,238,226,0.85); font-size: 13px; letter-spacing: 0; text-transform: none; padding: 4px 0; transition: color 0.2s; }
  .dropdown a:hover { color: var(--gold); }

  /* Top utility bar (above main nav) */
  .topbar { position: fixed; top: 0; left: 0; right: 0; z-index: 52; height: 42px; box-sizing: border-box; background: #0a0907; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .topbar-inner { display: flex; align-items: center; justify-content: space-between; height: 100%; min-height: 0; padding: 0; gap: 12px; flex-wrap: nowrap; }
  .topbar-meta { display: none; align-items: center; gap: 14px; font-size: 12px; color: rgba(243,238,226,0.55); }
  @media (min-width: 768px) { .topbar-meta { display: flex; } }
  .topbar-link { display: inline-flex; align-items: center; gap: 6px; color: rgba(243,238,226,0.55); transition: color 0.2s; }
  .topbar-link:hover { color: var(--cream); }
  .topbar-sep { color: rgba(243,238,226,0.2); }
  .topbar-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; flex-shrink: 0; }
  .topbar-portals { font-size: 11px; color: rgba(243,238,226,0.65); letter-spacing: 0.12em; text-transform: uppercase; transition: color 0.2s; }
  .topbar-portals:hover { color: var(--gold); }
  .topbar-cta { height: 30px; padding: 0 16px; font-size: 11px; }
  /* Hide Schedule button from topbar on mobile — it's already in the mobile menu */
  @media (max-width: 767px) { .topbar-cta { display: none; } }
  /* Narrow phones: shrink badge + Client Portals so both stay inside the frame */
  @media (max-width: 430px) {
    .container.topbar-inner { padding-left: 14px; padding-right: 14px; gap: 8px; }
    .bc-badge img { height: 18px; }
    .topbar-portals { font-size: 10px; letter-spacing: 0.06em; }
  }
  /* Push main nav down to clear the top bar */
  .nav { top: 42px !important; }

  /* Logo image */
  .logo { flex-shrink: 0; max-width: 45%; }
  .logo-img { height: 48px; width: auto; max-width: 100%; display: block; object-fit: contain; }
  @media (min-width: 768px) { .logo-img { height: 56px; } }
  @media (min-width: 1100px) { .logo-img { height: 64px; } }

  /* Compliance bar (FINRA BrokerCheck) — static, scrolls with the page */
  .compliance-bar { position: relative; z-index: 52; background: #0a0907; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 7px 0; text-align: center; font-size: 12px; color: #d9d3c4; line-height: 1.4; }
  .compliance-bar a { color: #c9a974; text-decoration: underline; }
  .compliance-bar a:hover { color: #d8bb8a; }

  .portal-overlay { position: fixed; inset: 0; z-index: 70; background: rgba(0,0,0,0.85); display: none; align-items: flex-start; justify-content: center; padding: 80px 20px 20px; overflow-y: auto; }
  .portal-overlay.open { display: flex; }
  .portal-modal { background: #110f0d; border: 1px solid rgba(255,255,255,0.08); width: 100%; max-width: 820px; padding: 40px 32px 32px; position: relative; }
  .portal-close { position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; color: rgba(243,238,226,0.78); background: none; border: none; cursor: pointer; transition: color 0.2s; }
  .portal-close:hover { color: #f3eee2; }
  .portal-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 28px; }
  .portal-tab { padding: 14px 8px; background: none; border: 1px solid transparent; color: rgba(243,238,226,0.5); font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase; cursor: pointer; transition: color 0.2s, border-color 0.2s; font-family: inherit; }
  .portal-tab.active { color: #c9a974; border-color: #c9a974; }
  .portal-panel { display: none; }
  .portal-panel.active { display: block; }
  .portal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  @media (min-width: 600px) { .portal-grid { grid-template-columns: 1fr 1fr 1fr; } }
  .portal-link { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px; border: 1px solid rgba(255,255,255,0.1); color: #f3eee2; text-decoration: none; font-size: 15px; transition: border-color 0.2s, background 0.2s, color 0.2s; }
  .portal-link:hover { border-color: rgba(201,169,116,0.5); background: rgba(201,169,116,0.05); color: #c9a974; }
  .portal-link svg { color: rgba(243,238,226,0.5); transition: color 0.2s; }
  .portal-link:hover svg { color: #c9a974; }
  .portal-logo { height: 50px; width: auto; max-width: 180px; object-fit: contain; display: block; }
  .portal-note { color: rgba(243,238,226,0.55); font-size: 12px; line-height: 1.6; margin: 24px 0 0; }

  /* Services dropdown — View All footer */
  .dropdown-foot { grid-column: 1 / -1; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(201,169,116,0.25); display: flex; align-items: center; justify-content: flex-end; gap: 6px; color: var(--gold) !important; font-size: 12px !important; letter-spacing: 0.18em !important; text-transform: uppercase !important; font-weight: 500; transition: color 0.2s; }
  .dropdown-foot:hover { color: var(--gold-light) !important; }
  .dropdown-foot span { font-size: 14px; }

  /* Mobile menu: allow scrolling so the Schedule button + contact info are always reachable on short screens */
  .menu-overlay { overflow-y: auto; -webkit-overflow-scrolling: touch; }
  .menu-links { flex: 1 0 auto; justify-content: flex-start; }
  .menu-links a { padding-top: 7px; padding-bottom: 7px; }
  .menu-bottom { margin-top: auto; padding-bottom: max(40px, env(safe-area-inset-bottom)); }
</style>

<script>
(function() {
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menuBtn');
  const menuClose = document.getElementById('menuClose');
  const closeMenu = () => { if (menu) { menu.classList.remove('open'); document.body.style.overflow = ''; } };
  if (menuBtn) menuBtn.addEventListener('click', () => { menu.classList.add('open'); document.body.style.overflow = 'hidden'; });
  if (menuClose) menuClose.addEventListener('click', closeMenu);

  const overlay = document.getElementById('portalOverlay');
  function openPortals() { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closePortals() { overlay.classList.remove('open'); document.body.style.overflow = ''; }
  const portalsBtn = document.getElementById('portalsBtnTop') || document.getElementById('portalsBtn');
  const portalsBtnAlt = document.getElementById('portalsBtn');
  [portalsBtn, portalsBtnAlt].forEach(b => { if (b) b.addEventListener('click', (e) => { e.preventDefault(); openPortals(); }); });
  const portalsBtnMobile = document.getElementById('portalsBtnMobile');
  if (portalsBtnMobile) portalsBtnMobile.addEventListener('click', (e) => { e.preventDefault(); closeMenu(); setTimeout(openPortals, 250); });
  const portalClose = document.getElementById('portalClose');
  if (portalClose) portalClose.addEventListener('click', closePortals);
  if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closePortals(); });

  document.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', closeMenu));

  document.querySelectorAll('.portal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.portal-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.portal-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('portalPanel-' + tab.dataset.tab).classList.add('active');
    });
  });
  // Scroll-to-top
  const stb = document.getElementById('scrollTopBtn');
  if (stb) {
    const onScrollTop = () => stb.classList.toggle('show', window.scrollY > 400);
    window.addEventListener('scroll', onScrollTop, { passive: true });
    onScrollTop();
    stb.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();
</script>`;
  var FOOTER_HTML = `<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/images/logo_white_transparent.webp" alt="My 360 Wealth Management Group" style="height:120px;width:auto;display:block;" />
        <p>Holistic financial life management. Helping you live your one best life through education and trusted advice.</p>
        <div class="socials">
          <a href="https://www.linkedin.com/in/pierremovsessian" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://x.com/pierre_my360" target="_blank" rel="noopener" aria-label="X (Twitter)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4>Navigation</h4>
        <div class="footer-links">
          <a href="/about.html">About</a>
          <a href="/services.html">Services</a>
          <a href="/process.html">Our Process</a>
          <a href="/index.html#milestones">Life Milestones</a>
          <a href="/resource-center/index.html">Resource Center</a>
          <a href="/contact.html">Contact</a>
        </div>
      </div>
      <div>
        <h4>Services</h4>
        <div class="footer-links">
          <a href="/services/wealth-retirement-planning.html">Wealth &amp; Retirement</a>
          <a href="/services/portfolio-management.html">Portfolio Management</a>
          <a href="/services/trust-estate-planning.html">Trust &amp; Estate</a>
          <a href="/services/foundation-endowment.html">Foundation &amp; Endowment</a>
          <a href="/services/concentrated-stock-strategies.html">Concentrated Stock</a>
          <a href="/services/retirement-income.html">Retirement Income</a>
          <a href="/services/401k-qualified-plans.html">401(k) &amp; Qualified Plans</a>
          <a href="/services/deferred-compensation.html">Deferred Compensation</a>
          <a href="/services/insurance-services.html">Insurance Services</a>
          <a href="/services/business-succession.html">Business Succession</a>
          <a href="/services/tax-planning.html">Tax Planning</a>
          <a href="/services/employee-education.html">Employee Education</a>
        </div>
      </div>
      <div>
        <h4>Contact</h4>
        <div class="footer-contact">
          <span>500 N. Brand Blvd, Suite 2120</span>
          <span>Glendale, CA 91203</span>
          <a href="tel:8185474720" style="margin-top:8px">(818) 547-4720</a>
          <span>Fax: (818) 301-4020</span>
          <a href="mailto:service@my360wealth.com">service@my360wealth.com</a>
        </div>
      </div>
    </div>
    <div class="disclaimers">
      <p><strong>Check the background of investment professionals associated with this site on FINRA's <a href="http://brokercheck.finra.org/" target="_blank" rel="noopener">BrokerCheck</a>.</strong></p>
      <p>Investment Advisory Services offered through Global Retirement Partners, LLC, an SEC registered investment advisor, dba My 360 Wealth Management Group.</p>
      <p>The information contained herein is for informational purposes only and should not be considered investment advice or a recommendation to buy or sell any security. Investing involves risk, including the potential loss of principal. No strategy assures success or protects against loss. Past performance is not indicative of future results.</p>
      <p>The LPL Financial registered representative(s) associated with this website may discuss and/or transact business only with residents of the states in which they are properly registered or licensed.</p>
      <div class="meta">
        <a href="https://www.finra.org/" target="_blank" rel="noopener">FINRA</a> <a href="https://brokercheck.finra.org/" target="_blank" rel="noopener">BrokerCheck</a>
        <span class="sep">|</span>
        <span>&copy; <span id="year"></span> My 360 Wealth Management Group. All rights reserved.</span>
      </div>
    </div>
  </div>
</footer>
<script>
  (function(){ var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear(); })();
</script>`;

  function inject(host, html) {
    if (!host) return;
    host.innerHTML = html;
    host.querySelectorAll('script').forEach(function (old) {
      var s = document.createElement('script');
      if (old.src) { s.src = old.src; } else { s.textContent = old.textContent; }
      document.body.appendChild(s);
    });
  }

  function init() {
    inject(document.getElementById('site-nav'), NAV_HTML);
    inject(document.getElementById('site-footer'), FOOTER_HTML);
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
