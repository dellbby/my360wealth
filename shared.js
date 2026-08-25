/* shared.js — site-wide header (nav) + footer.
   Injected on every page. Edit this file to change the nav or footer everywhere. */
(function () {
  /* Where this script was loaded from ('' at the site root, '../' inside /services).
     Used only when the pages are opened directly off a disk, where a leading "/"
     would resolve to the root of the filesystem instead of the root of the site. */
  var BASE = (function () {
    var el = document.currentScript;
    if (!el) {
      var all = document.getElementsByTagName('script');
      el = all[all.length - 1];
    }
    var src = (el && el.getAttribute('src')) || '';
    return src.replace(/shared\.js$/, '');
  })();

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
      <img src="/assets/logo.png" alt="My 360 Wealth Management Group" class="logo-img" />
    </a>
    <nav class="nav-links">      <a href="/start-here.html">Start Here</a>
      <div class="nav-item has-dropdown">
        <a href="/services.html" class="nav-trigger">Services <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="caret"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="dropdown dropdown-2">
          <div class="dropdown-col">
            <span class="dropdown-head">Personal &amp; Family</span>
            <a href="/services/private-wealth.html">Private Wealth Management</a>
            <a href="/services/family-office.html">Family Office &amp; Family CFO</a>
            <a href="/services/wealth-retirement-planning.html">Wealth &amp; Retirement Planning</a>
            <a href="/services/portfolio-management.html">Portfolio Management</a>
            <a href="/services/trust-estate-planning.html">Trust &amp; Estate Planning</a>
            <a href="/services/foundation-endowment.html">Foundation &amp; Endowment</a>
            <a href="/services/concentrated-stock-strategies.html">Concentrated Stock Strategies</a>
            <a href="/services/retirement-income.html">Retirement Income Planning</a>
          </div>
          <div class="dropdown-col">
            <span class="dropdown-head">Business &amp; Employers</span>
            <a href="/services/group-benefits.html">Group Benefits &amp; Retirement Plans</a>
            <a href="/services/exit-planning.html">Exit Planning for Owners</a>
            <a href="/services/401k-qualified-plans.html">401(k) &amp; Qualified Plans</a>
            <a href="/services/deferred-compensation.html">Deferred Compensation</a>
            <a href="/services/insurance-services.html">Insurance Services</a>
            <a href="/services/business-succession.html">Business Succession</a>
            <a href="/services/tax-planning.html">Tax Planning</a>
            <a href="/services/employee-education.html">Employee Education</a>
          </div>
          <a href="/services.html" class="dropdown-foot">View all services <span aria-hidden="true">›</span></a>
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
      <img src="/assets/logo.png" alt="My 360 Wealth Management Group" class="logo-img" />
    </a>
    <button class="icon-btn" id="menuClose" aria-label="Close menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <nav class="menu-links">    <a href="/start-here.html" data-close>Start Here</a>
    <a href="/services.html" data-close>Services</a>
    <a href="/index.html#private-wealth" data-close>Private Wealth</a>
    <a href="/index.html#group-benefits" data-close>Group Benefits &amp; 401(k)</a>
    <a href="/index.html#exit-planning" data-close>Exit Planning</a>
    <a href="/index.html#family-office" data-close>Family Office</a>
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
        <a class="portal-link portal-wide" href="https://wealth.emaplan.com/ema/SignIn?ema" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/emoney.png" alt="eMoney" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link portal-wide" href="https://login.orionadvisor.com/login.html?g=1527f71a-5067-4021-b194-35e4d88f2acd" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/black_diamond.png" alt="Black Diamond" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/charles.png" alt="Charles Schwab" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://www.fidelity.com/PASclient" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/fidelity.png" alt="Fidelity" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://accountview.lpl.com/web/login" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/lplfinancial.png" alt="LPL Financial" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
      </div>
      <p class="portal-note" style="font-size: 11px; line-height: 1.6;"><strong>PLEASE NOTE:</strong> The information being provided is strictly as a courtesy. When you link to any of the websites provided here, you are leaving this website. We make no representation as to the completeness or accuracy of information provided at these websites. Nor is the company liable for any direct or indirect technical or system issues or any consequences arising out of your access to or your use of third-party technologies, websites, information and programs made available through this website. When you access one of these websites, you are leaving our website and assume total responsibility and risk for your use of the websites you are linking to.</p>
    </div>
    <div class="portal-panel" id="portalPanel-k401" role="tabpanel">
      <div class="portal-grid">
        <a class="portal-link portal-wide" href="https://www.mykplan.com/" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/adp.png" alt="ADP" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link portal-wide" href="https://www.americanfunds.com/individual/accounts/login.htm" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/american_funds.png" alt="American Funds" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://myaccount.ascensus.com/rplink/account/login" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/ascensus.png" alt="Ascensus" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://www.jhancockpensions.com/do/home_page/homeRedirectionAction" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/john_hancock.png" alt="John Hancock" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://auth.lincolnfinancial.com/login?state=hKFo2SBrT1ZCZk9waDhHSk9SaElJWlhwQ0xfNFpjVkt4X1JXb6FupWxvZ2luo3RpZNkgYUYzdGZNb2ZvU1hsOVJOSU1ILXJOT3hmLTNTTjlweTijY2lk2SB0QnNlNmVoYmtWamI3VUZBR0xjbzUySElHYlBOZFRqWA&amp;client=tBse6ehbkVjb7UFAGLco52HIGbPNdTjX&amp;protocol=oauth2&amp;response_type=code&amp;scope=openid%20profile&amp;redirect_uri=https%3A%2F%2Fwww.lincolnfinancial.com%2Fsecure%2Flogin%2Fcallback&amp;nonce=2Z2uZqDpHPiQcfh08_SUjIMNCviqCdIFFAtI4qQQBoM&amp;code_challenge=w6OJ06FbLM1MiTSW3RAOXHlbopX8NO-6zajKRh9riwo&amp;code_challenge_method=S256" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/lincoln.png" alt="Lincoln Financial" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://www.massmutual.com/login-list" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/mass_mutual.png" alt="Mass Mutual" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://login.nationwide.com/access/web/login.htm?logintType=retirementPlans" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/nationwide.png" alt="Nationwide" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://myapps.paychex.com/landing_remote/login.do?lang=en" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/paychex.png" alt="Paychex" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://participant.empower-retirement.com/participant/#/login" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/pentegra.png" alt="Pentegra" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://secure.transamerica.com/login/sign-in/login.html?TAM_OP=login&amp;_ga=2.84273369.1522537505.1540496111-1996331011.1540496111" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/transamerica.png" alt="Transamerica" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link" href="https://login.vanguard.com/login?state=hKFo2SAxV3JiUzZxZFBTZTBJQWN5ekhiXy14a3ZzaTVyTWFxRqFupWxvZ2luo3RpZNkgbWhNQ3RHM0VOeE9icXZ4V2JpMXpmUVNjeUY3QlBQTGGjY2lk2SBzeER2N3M3MGJPTkc0V2p3MGtXVVNrTE50cFduTkV0Mg&amp;client=sxDv7s70bONG4Wjw0kWUSkLNtpWnNEt2&amp;protocol=oauth2&amp;nonce=_lxG_DZoKkzj0PnUxlAKp1-v&amp;response_mode=query&amp;redirect_uri=https:%2F%2Fpersonal1.vanguard.com%2Fusa%2Flogin&amp;connection=crems&amp;code_challenge_method=S256&amp;code_challenge=3QtGgEXQ-jt841UTXoJcWHDZYSnET86Y7Spnqt-IJRg&amp;response_type=code&amp;audience=https:%2F%2Fretail.vanguard.com&amp;site=pi&amp;scope=openid%20offline_access" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/vangaurd.png" alt="Vanguard" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link portal-placeholder" href="https://login.voya.com/voyassoui/index.html#/login-pweb" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/voya.png" alt="Voya" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link portal-placeholder" href="https://accounts.principal.com/app/bookmark/0oadm2qe1orihoKba5d7/login" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/principal.png" alt="Principal" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link portal-placeholder" href="https://secure.newportgroup.com/login/participant.aspx" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/newport_group.png" alt="Newport Group" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link portal-placeholder" href="https://login.standard.com/" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/standard.png" alt="The Standard" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
        <a class="portal-link portal-placeholder" href="https://my.guideline.com" target="_blank" rel="noopener"><img class="portal-logo" src="/assets/logos/gusto_guideline.png" alt="Gusto by Guideline" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a>
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

  .dropdown { --dd-x: -50%; position: absolute; top: 100%; left: 50%; transform: translate(var(--dd-x), 8px); min-width: 540px; max-width: calc(100vw - 24px); box-sizing: border-box; overflow-x: hidden; background: rgba(17,15,13,0.97); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); padding: 22px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; opacity: 0; visibility: hidden; pointer-events: none; transition: opacity 0.25s, transform 0.25s, visibility 0s linear 0.25s; }
  .nav-item:hover .dropdown, .nav-item:focus-within .dropdown { opacity: 1; visibility: visible; pointer-events: auto; transform: translate(var(--dd-x), 0); transition: opacity 0.25s, transform 0.25s; }
  /* Invisible bridge so the dropdown doesn't close when crossing the gap */
  .nav-item .dropdown::before { content: ''; position: absolute; top: -10px; left: 0; right: 0; height: 12px; }
  /* Three-column Services dropdown (practices + the two detail lists) */
  .dropdown.dropdown-2 { grid-template-columns: repeat(2, 1fr); min-width: 0; width: min(620px, calc(100vw - 24px)); gap: 26px; }
  
  @media (max-width: 700px) { .dropdown.dropdown-2 { min-width: 0; width: calc(100vw - 24px); grid-template-columns: 1fr; gap: 14px; max-height: calc(100vh - 150px); overflow-y: auto; } }
  
  
  .dropdown-col { display: flex; flex-direction: column; gap: 8px; }
  .dropdown-head { font-family: var(--font-heading); font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); padding-bottom: 6px; border-bottom: 1px solid rgba(201,169,116,0.25); margin-bottom: 4px; }
  .dropdown a { color: rgba(243,238,226,0.85); font-size: 13px; letter-spacing: 0; text-transform: none; padding: 4px 0; transition: color 0.2s; }
  .dropdown a:hover { color: var(--gold); }

  /* Top utility bar (above main nav) */
  .topbar { position: fixed; top: 0; left: 0; right: 0; z-index: 52; height: 42px; box-sizing: border-box; background: #0a0907; border-bottom: 1px solid rgba(255,255,255,0.05); }
  /* padding was 0, which cancelled .container's 24px gutter and left the
     BrokerCheck badge flush against the window edge, reading as cut off. */
  .topbar-inner { display: flex; align-items: center; justify-content: space-between; height: 100%; min-height: 0; padding: 0 24px; gap: 12px; flex-wrap: nowrap; }
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
  .logo-img { height: 62px; width: auto; max-width: 100%; display: block; object-fit: contain;
              transition: height 0.35s cubic-bezier(0.22,1,0.36,1); }
  .nav.scrolled .logo-img { height: 42px; }
  @media (min-width: 768px) { .logo-img { height: 76px; } .nav.scrolled .logo-img { height: 46px; } }
  @media (min-width: 1100px) { .logo-img { height: 88px; } .nav.scrolled .logo-img { height: 50px; } }

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
  .portal-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
  .portal-link { grid-column: span 3; }
  @media (min-width: 600px) { .portal-link { grid-column: span 2; } .portal-link.portal-wide, #portalPanel-k401 .portal-link { grid-column: span 3; } }
  .portal-link { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px; border: 1px solid rgba(255,255,255,0.1); color: #f3eee2; text-decoration: none; font-size: 15px; transition: border-color 0.2s, background 0.2s, color 0.2s; }
  .portal-link:hover { border-color: rgba(201,169,116,0.5); background: rgba(201,169,116,0.05); color: #c9a974; }
  .portal-link svg { color: rgba(243,238,226,0.5); transition: color 0.2s; }
  .portal-link:hover svg { color: #c9a974; }
  /* fixed box + contain: each trimmed wordmark fills the box on its longer axis */
  .portal-logo { width: 200px; height: 76px; object-fit: contain; object-position: left center; display: block; }
  .portal-logo-text { height: 76px; display: flex; align-items: center; font-size: 17px; letter-spacing: 0.02em; color: #f3eee2; }
  /* Client Login: the two primary platforms lead, the custodians sit under them */
  #portalPanel-client .portal-link.portal-wide { padding: 26px 28px; }
  #portalPanel-client .portal-link.portal-wide .portal-logo { width: 270px; height: 104px; }
  #portalPanel-client .portal-link.portal-wide .portal-logo-text { height: 104px; font-size: 21px; }
  #portalPanel-client .portal-link:not(.portal-wide) { padding: 13px 16px; }
  #portalPanel-client .portal-link:not(.portal-wide) .portal-logo { width: 155px; height: 60px; }
  #portalPanel-client .portal-link:not(.portal-wide) .portal-logo-text { height: 60px; font-size: 14px; }
  .portal-link:hover .portal-logo-text { color: #c9a974; }

  /* Legibility floor for the injected header and footer */
  .topbar-portals, .btn-gold.topbar-cta { font-size: 13px; }
  .nav-links a { font-size: 14px; }
  .dropdown-col a { font-size: 15px; }
  .dropdown-head { font-size: 12px; }
  .footer-links a, .footer-brand p, .footer-contact p, .footer-contact a { font-size: 15px; }
  /* Tighter footer link lists — the Services column runs long, and the old
     22.5px line-height plus 5px padding plus 8px gap made the footer ~1300px tall. */
  .footer-links { gap: 1px; }
  .footer-links a { line-height: 1.35; padding: 3px 0; }
  /* The Services column carries 17 links. Run it in two sub-columns above
     640px so the footer isn't a single very long list. */
  @media (min-width: 640px) {
    .footer-links-2col { display: block; column-count: 2; column-gap: 26px; }
    .footer-links-2col a { break-inside: avoid; }
  }
  .footer-head { font-size: 12px; }
  .footer-bottom, .footer-disc { font-size: 13px; line-height: 1.65; }
  .portal-link .portal-logo-text { font-size: 15px; }
  .portal-note { color: rgba(243,238,226,0.55); font-size: 12px; line-height: 1.6; margin: 24px 0 0; }

  /* Services dropdown — View All footer */
  .dropdown-foot { grid-column: 1 / -1; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(201,169,116,0.25); display: flex; align-items: center; justify-content: flex-end; gap: 6px; color: var(--gold) !important; font-size: 12px !important; letter-spacing: 0.18em !important; text-transform: uppercase !important; font-weight: 500; transition: color 0.2s; }
  .dropdown-foot:hover { color: var(--gold-light) !important; }
  .dropdown-foot span { font-size: 14px; }

  /* Compliance disclosures placed in page content.
     Font size comparable to the majority of site text; blank line between blocks.
     Colour is inherited so it works on both the light and dark page themes. */
  .compliance-note { font-size: 14px; line-height: 1.6; margin: 16px 0 0; opacity: 0.9; }
  .compliance-block { display: flex; flex-direction: column; gap: 12px; font-size: 14px; line-height: 1.6; margin: 28px 0 0; opacity: 0.9; }
  .compliance-block p { margin: 0; }

  /* Compliance: footer disclosures must be a font size comparable to the majority of site text,
     with a visible space between each disclosure block. */
  .disclaimers { gap: 12px; font-size: 14px; line-height: 1.6; color: rgba(243,238,226,0.7); }
  .disclaimers p { margin: 0; }
  .disclaimers .meta { font-size: 12px; }

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
    // Pages without a dark hero have nothing for a transparent bar to sit on,
    // so the nav keeps its solid background from the top.
    const needsSolid = !document.querySelector('.hero');
    const onScroll = () => nav.classList.toggle('scrolled', needsSolid || window.scrollY > 50);
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
  document.addEventListener('click', function (e) {
    if (e.target.closest('.footer-portals')) { e.preventDefault(); openPortals(); }
  });
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
        <img src="/assets/logo.png" alt="My 360 Wealth Management Group" style="height:120px;width:auto;display:block;" />
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
        <h4>What We Do</h4>
        <div class="footer-links">
          <a href="/index.html#private-wealth">Private Wealth</a>
          <a href="/index.html#group-benefits">Group Benefits &amp; 401(k)</a>
          <a href="/index.html#exit-planning">Exit Planning</a>
          <a href="/index.html#family-office">Family Office &amp; Family CFO</a>
        </div>
        <h4 style="margin-top:24px;">Navigation</h4>
        <div class="footer-links">
          <a href="/about.html">About</a>
          <a href="/services.html">All Services</a>
          <a href="/process.html">Our Process</a>
          <a href="/index.html#milestones">Life Milestones</a>
          <a href="/resource-center/index.html">Resource Center</a>
          <a href="/contact.html">Contact</a>
          <a href="#" class="footer-portals">Client Login</a>
        </div>
      </div>
      <div>
        <h4>Services In Detail</h4>
        <div class="footer-links footer-links-2col">
          <a href="/services/private-wealth.html">Private Wealth Management</a>
          <a href="/services/group-benefits.html">Group Benefits &amp; Retirement Plans</a>
          <a href="/services/exit-planning.html">Exit Planning for Owners</a>
          <a href="/services/family-office.html">Family Office &amp; Family CFO</a>
          <a href="/start-here.html">Start Here &mdash; Find Your Gaps</a>
          <a href="/services/wealth-retirement-planning.html">Wealth &amp; Retirement Planning</a>
          <a href="/services/portfolio-management.html">Portfolio Management</a>
          <a href="/services/trust-estate-planning.html">Trust &amp; Estate Planning</a>
          <a href="/services/foundation-endowment.html">Foundation &amp; Endowment</a>
          <a href="/services/concentrated-stock-strategies.html">Concentrated Stock Strategies</a>
          <a href="/services/retirement-income.html">Retirement Income Planning</a>
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
      <p>Securities offered through LPL Financial, Member <a href="https://www.finra.org/" target="_blank" rel="noopener">FINRA</a>/<a href="https://www.sipc.org/" target="_blank" rel="noopener">SIPC</a>. Investment advisory services offered through Global Retirement Partners, LLC dba My 360 Wealth Management, a registered investment advisor and separate entity from LPL Financial.</p>
      <p>My 360 Wealth Management Group employs (or contracts with) individuals who may be (1) registered representatives of LPL Financial and investment adviser representatives of Global Retirement Partners, LLC dba My 360 Wealth Management; or (2) solely investment adviser representatives of Global Retirement Partners, LLC dba My 360 Wealth Management. Although all personnel operate their businesses under the name My 360 Wealth Management Group, they are each possibly subject to differing obligations and limitations and may be able to provide differing products or services.</p>
      <p>The LPL Financial registered representative(s) associated with this website may discuss and/or transact business only with residents of the states in which they are properly registered or licensed. No offers may be made or accepted from any resident of any other state.</p>
      <p><a href="https://www.lpl.com/CRS" target="_blank" rel="noopener">LPL Financial Form CRS</a></p>
      <p>My 360 Wealth Management Group, Global Retirement Partners and LPL Financial do not provide tax or legal advice. Please consult your tax advisor or attorney for guidance specific to your situation.</p>
      <p>LPL Financial representatives offer access to Trust Services through The Private Trust Company N.A. an affiliate of LPL Financial.</p>
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

  /* Opened from a disk rather than served over http: rewrite site-absolute
     paths so the nav, footer and their images still resolve. No effect on the
     deployed site, where a leading "/" is already correct. */
  function localizePaths(scope) {
    if (location.protocol !== 'file:') return;
    scope.querySelectorAll('[href^="/"], [src^="/"]').forEach(function (el) {
      ['href', 'src'].forEach(function (attr) {
        var v = el.getAttribute(attr);
        if (v && v.charAt(0) === '/' && v.charAt(1) !== '/') {
          el.setAttribute(attr, BASE + v.slice(1));
        }
      });
    });
  }

  // on a one-page site the mark should take you back to the top
  function wireLogo() {
    document.querySelectorAll('.logo').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var here = location.pathname.replace(/index\.html$/, '');
        var target = (a.getAttribute('href') || '').replace(/index\.html$/, '');
        // only swallow the click when we are already on the home page
        if (target === here) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.replaceState(null, '', location.pathname);
        }
      });
    });
  }


  /* Keep dropdown panels inside the viewport. The panels are centred on their
     trigger, so one near either edge of a narrow window used to be clipped.
     Position is worked out from the trigger and the panel's own width rather
     than from a measured rect, because the panel's transform is transitioned
     and a rect read mid-animation gives the wrong answer. */
  function keepDropdownsOnScreen() {
    var PAD = 12;
    function place(item) {
      var dd = item.querySelector('.dropdown');
      if (!dd) return;
      var vw = document.documentElement.clientWidth;
      var box = item.getBoundingClientRect();
      var centre = box.left + box.width / 2;
      var w = dd.offsetWidth;
      if (!w) return;
      var left = centre - w / 2;
      var right = left + w;
      var shift = 0;
      if (w >= vw - PAD * 2) shift = (vw / 2) - centre;      // wider than the window: centre it
      else if (left < PAD) shift = PAD - left;
      else if (right > vw - PAD) shift = (vw - PAD) - right;
      dd.style.setProperty('--dd-x', shift ? 'calc(-50% + ' + Math.round(shift) + 'px)' : '-50%');
    }
    var items = document.querySelectorAll('.nav-item.has-dropdown');
    items.forEach(function (item) {
      item.addEventListener('mouseenter', function () { place(item); });
      item.addEventListener('focusin', function () { place(item); });
    });
    var timer;
    window.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { items.forEach(function (i) { place(i); }); }, 120);
    });
    items.forEach(function (i) { place(i); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { items.forEach(function (i) { place(i); }); });
    }
  }

  function init() {
    inject(document.getElementById('site-nav'), NAV_HTML);
    inject(document.getElementById('site-footer'), FOOTER_HTML);
    localizePaths(document);
    wireLogo();
    keepDropdownsOnScreen();
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
