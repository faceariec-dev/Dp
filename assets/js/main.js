(function(){
"use strict";

var DEFAULT_LANG = "cs";
var AUTO_DETECT  = true;   /* true = anglickým prohlížečům se web otevře rovnou v EN */

var T = {
  cs:{
    _title:"David Philipp s.r.o. | Účetnictví, finance a daně",
    _desc:"Vedení účetnictví, převody do mezinárodních a národních standardů a finanční řízení. Osobní dohled partnera nad každou zakázkou.",
    skip:"Přejít na obsah",
    navAria:"Hlavní navigace", footAria:"Patička", menuAria:"Menu",
    brandSub:"Účetnictví · finance · daně",
    navAbout:"Kdo jsme", navServices:"Co nabízíme", navWhy:"Proč my", navContact:"Kontakt",
    langCs:"CZ", langEn:"EN",
    heroKicker:"Účetnictví · finance · daně",
    heroTitle:"Finance s osobním <em>dohledem.</em>",
    heroLede:"Vedeme účetnictví, převádíme výkazy do mezinárodních i národních standardů a zajišťujeme kompletní daňovou agendu. Veškerou komunikaci má na starosti přímo partner společnosti.",
    heroAlt:"David Philipp v kanceláři",
    ctaContact:"Kontaktovat nás", ctaServices:"Co nabízíme",
    tick1t:"Vlastnictví", tick1d:"100% česká společnost",
    tick2t:"Vedení zakázky", tick2d:"Osobní dohled partnera nad každým klientem",
    tick3t:"Jazyky", tick3d:"Česky a anglicky, DPH v celé EU",
    aboutAlt:"David Philipp při práci s dokumentací",
    aboutTitle:"Česká společnost postavená na zkušenostech z vedení firem.",
    aboutBody1:"Jsme 100% česká společnost. Její zakladatel pracoval na vedoucích pozicích v prestižních domácích i mezinárodních firmách – a založil si vlastní, aby mohl tyto zkušenosti naplno využít pro své klienty.",
    philQuote:"Každý klient je pro nás stejně důležitý.",
    philP3:"Zachování mlčenlivosti a diskrétnost je pro nás samozřejmostí.",
    fact1t:"Vlastnictví", fact1d:"100% česká společnost, osobní a přímý přístup",
    fact2t:"Zkušenosti", fact2d:"Z vedoucích pozic v domácích i mezinárodních firmách",
    fact3t:"Individuální přístup", fact3d:"Smluvní podmínky i rozsah služeb šité na míru klientovi",
    svcTitle:"Komplexní účetní, finanční a administrativní servis.",
    svcLede:"Od každodenní účetní agendy po finanční řízení, daně, firemní změny a administrativu.",
    g1tag:"Oblast 01", g1:"Účetnictví a výkaznictví",
    g1sum:"Vedeme kompletní účetnictví, převádíme výkazy do mezinárodních i národních standardů a připravujeme manažerské reporty pro vaše rozhodování.",
    g1b1:"Vedení účetnictví", g1b2:"Mezinárodní standardy", g1b3:"Manažerské výkazy",
    g2tag:"Oblast 02", g2:"Daně a výkazy",
    g2sum:"Přiznání k DPH i dani z příjmu a povinné výkazy včetně Intrastatu, v souladu s legislativou napříč EU.",
    g2b2:"DPH a daňová přiznání", g2b3:"Intrastat",
    g3tag:"Oblast 03", g3:"Finanční řízení",
    g3sum:"Finanční analýzy, plánování a pomoc s optimalizací nákladů a ziskovosti – v případě potřeby i krizový finanční management.",
    g3b1:"Analýzy a plánování", g3b2:"Optimalizace nákladů", g3b3:"Krizový management",
    g4tag:"Oblast 04", g4:"Firemní změny",
    g4sum:"Založení, fúze, dělení i likvidace společností – od prvního návrhu až po realizaci.",
    g4b1:"Založení firmy", g4b2:"Fúze a dělení", g4b3:"Likvidace",
    g5tag:"Oblast 05", g5:"Administrativa a zastupování",
    g5sum:"Zastupujeme vás před úřady, připravujeme podklady pro banky a leasingové společnosti a zajišťujeme administrativní správu nemovitostí.",
    g5b1:"Jednání s úřady", g5b2:"Podklady pro banky", g5b3:"Správa nemovitostí",
    svcNoteLabel:"Samozřejmostí:",
    svcNote:"komunikace v angličtině a zajištění služeb auditora, daňového poradce a právního servisu.",
    whyTitle:"Čtyři důvody, na kterých spolupráce stojí.",
    why1t:"Podmínky", why1d:"Individuální podmínky, které zohlední potřeby i možnosti klienta",
    why2t:"Zkušenost", why2d:"Naše zkušenosti jsou zárukou kvalitní práce",
    why3t:"Rozsah", why3d:"Komplexní servis účetních a administrativních prací včetně konzultací",
    why4t:"Cena", why4d:"Cenou i kvalitou jsme plně konkurenceschopní na současném trhu",
    contactLede:"Napište nám nebo zavolejte. Veškerou komunikaci vede přímo partner společnosti.",
    ctaEmail:"Napsat e-mail", ctaCall:"Zavolat",
    cE:"E-mail", cP:"Telefon", cN:"Kontaktní osoba",
    formTitle:"Nebo napište zprávu", formSub:"Ozveme se vám zpět co nejdříve.",
    fName:"Jméno a příjmení", fEmail:"E-mail", fPhone:"Telefon (nepovinné)", fMsg:"Zpráva", fSend:"Odeslat zprávu", fSending:"Odesílám…",
    fNote:"Údaje z formuláře se neukládají do databáze webu. Slouží pouze k vyřízení vaší zprávy.",
    stOk:"Děkujeme, zpráva odešla. Ozveme se co nejdříve.",
    stErr:"Zprávu se nepodařilo odeslat. Zkontrolujte prosím údaje, nebo nám napište přímo na david.philipp@philippsro.cz."
  },
  en:{
    _title:"David Philipp s.r.o. | Accounting, finance and tax services",
    _desc:"Bookkeeping, conversions to international and national reporting standards and financial management. A partner personally oversees every engagement.",
    skip:"Skip to content",
    navAria:"Main navigation", footAria:"Footer", menuAria:"Menu",
    brandSub:"Accounting · finance · tax",
    navAbout:"About us", navServices:"What we do", navWhy:"Why us", navContact:"Contact",
    langCs:"CZ", langEn:"EN",
    heroKicker:"Accounting · finance · tax",
    heroTitle:"Finance under personal <em>oversight.</em>",
    heroLede:"We keep your books, convert statements to international and national reporting standards, and run a complete tax compliance service. All communication is handled directly by the partner of the firm.",
    heroAlt:"David Philipp in his office",
    ctaContact:"Get in touch", ctaServices:"What we do",
    tick1t:"Ownership", tick1d:"100% Czech-owned firm",
    tick2t:"Engagements", tick2d:"A partner personally oversees every client",
    tick3t:"Languages", tick3d:"Czech and English, VAT across the EU",
    aboutAlt:"David Philipp working through documentation",
    aboutTitle:"A Czech firm built on experience from running companies.",
    aboutBody1:"We are a 100% Czech-owned company. Its founder spent years in senior positions at respected Czech and international companies – and started his own firm to put that experience fully to work for his clients.",
    philQuote:"Every client matters to us equally.",
    philP3:"Confidentiality and discretion are a given.",
    fact1t:"Ownership", fact1d:"100% Czech-owned, direct and personal service",
    fact2t:"Experience", fact2d:"Senior positions in Czech and international companies",
    fact3t:"Individual approach", fact3d:"Contract terms and scope of services tailored to the client",
    svcTitle:"Complete accounting, finance and administrative support.",
    svcLede:"From day-to-day bookkeeping through to financial management, taxes, corporate changes and administration.",
    g1tag:"Area 01", g1:"Accounting and reporting",
    g1sum:"We keep full bookkeeping, convert statements to international and national standards, and prepare management reports for your decisions.",
    g1b1:"Bookkeeping", g1b2:"International standards", g1b3:"Management reporting",
    g2tag:"Area 02", g2:"Tax and filings",
    g2sum:"VAT and income-tax returns, and mandatory filings including Intrastat – compliant across the EU.",
    g2b2:"VAT & tax returns", g2b3:"Intrastat",
    g3tag:"Area 03", g3:"Financial management",
    g3sum:"Financial analysis, planning and help optimising costs and profitability – including crisis financial management when needed.",
    g3b1:"Analysis & planning", g3b2:"Cost optimisation", g3b3:"Crisis management",
    g4tag:"Area 04", g4:"Corporate changes",
    g4sum:"Company formation, mergers, demergers and liquidation – from the first draft through to execution.",
    g4b1:"Company formation", g4b2:"Mergers & demergers", g4b3:"Liquidation",
    g5tag:"Area 05", g5:"Administration and representation",
    g5sum:"We represent you before authorities, prepare documentation for banks and leasing companies, and handle administrative property management.",
    g5b1:"Dealing with authorities", g5b2:"Bank documentation", g5b3:"Property management",
    svcNoteLabel:"As standard:",
    svcNote:"communication in English, plus auditor, tax advisor and legal services arranged on your behalf.",
    whyTitle:"Four reasons the partnership works.",
    why1t:"Terms", why1d:"Individual terms that reflect what the client needs and can afford",
    why2t:"Experience", why2d:"Our experience is the guarantee of quality work",
    why3t:"Scope", why3d:"Complete accounting and administrative work, consulting included",
    why4t:"Price", why4d:"Fully competitive on today's market in both price and quality",
    contactLede:"Write or call. All communication is handled directly by the partner of the firm.",
    ctaEmail:"Send an email", ctaCall:"Call us",
    cE:"Email", cP:"Phone", cN:"Contact person",
    formTitle:"Or send a message", formSub:"We'll get back to you as soon as possible.",
    fName:"Full name", fEmail:"Email", fPhone:"Phone (optional)", fMsg:"Message", fSend:"Send message", fSending:"Sending…",
    fNote:"The form only sends your message to our email. Nothing is stored in a website database.",
    stOk:"Thank you, your message is on its way. We will get back to you shortly.",
    stErr:"The message could not be sent. Please check your details, or write directly to david.philipp@philippsro.cz."
  }
};

var lang = DEFAULT_LANG;

function apply(l){
  if(!T[l]) l = DEFAULT_LANG;
  lang = l;
  var d = T[l];

  document.documentElement.lang = l;
  document.title = d._title;
  var set = function(id, v){ var el = document.getElementById(id); if(el) el.setAttribute("content", v); };
  set("metaDesc", d._desc); set("ogTitle", d._title); set("ogDesc", d._desc);

  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var v = d[el.getAttribute("data-i18n")]; if(v !== undefined) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function(el){
    var v = d[el.getAttribute("data-i18n-html")]; if(v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function(el){
    var v = d[el.getAttribute("data-i18n-alt")]; if(v !== undefined) el.setAttribute("alt", v);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
    var v = d[el.getAttribute("data-i18n-aria")]; if(v !== undefined) el.setAttribute("aria-label", v);
  });

  document.querySelectorAll(".lang").forEach(function(b){
    b.setAttribute("aria-pressed", String(b.dataset.lang === l));
  });

  var statusEl = document.getElementById("status");
  if(statusEl && statusEl.dataset.state){
    statusEl.textContent = statusEl.dataset.state === "ok" ? d.stOk : d.stErr;
  }

  try{ localStorage.setItem("dp-lang", l); }catch(e){}
}

(function initLang(){
  var q = null, saved = null;
  try{ q = new URL(window.location.href).searchParams.get("lang"); }catch(e){}
  try{ saved = localStorage.getItem("dp-lang"); }catch(e){}
  var auto = DEFAULT_LANG;
  if(AUTO_DETECT){
    var n = (navigator.language || "").toLowerCase();
    auto = (n.indexOf("cs") === 0 || n.indexOf("sk") === 0) ? "cs" : (n ? "en" : DEFAULT_LANG);
  }
  apply(q || saved || auto);
})();

document.querySelectorAll(".lang").forEach(function(b){
  b.addEventListener("click", function(){ apply(b.dataset.lang); });
});

/* ---------- mobilní menu ---------- */
var burger = document.getElementById("burger");
var nav = document.getElementById("nav");
burger.addEventListener("click", function(){
  var open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
});
nav.querySelectorAll("a").forEach(function(a){
  a.addEventListener("click", function(){
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});
document.addEventListener("keydown", function(e){
  if(e.key === "Escape" && nav.classList.contains("open")){
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    burger.focus();
  }
});

/* ---------- zvýraznění aktivní sekce v menu ---------- */
if("IntersectionObserver" in window){
  var links = {};
  nav.querySelectorAll("a[href^='#']").forEach(function(a){ links[a.getAttribute("href").slice(1)] = a; });
  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      Object.keys(links).forEach(function(k){ links[k].removeAttribute("aria-current"); });
      var a = links[en.target.id];
      if(a) a.setAttribute("aria-current", "true");
    });
  }, {rootMargin:"-45% 0px -50% 0px"});
  document.querySelectorAll("section[id]").forEach(function(s){ spy.observe(s); });
}

document.getElementById("year").textContent = String(new Date().getFullYear());

/* ---------- odeslání formuláře (skutečný POST na contact.php) ---------- */
var form = document.getElementById("contactForm");
var submitBtn = document.getElementById("submitBtn");
if(form){
  form.addEventListener("submit", function(){
    if(submitBtn){
      submitBtn.disabled = true;
      var span = submitBtn.querySelector("[data-i18n='fSend']");
      if(span) span.textContent = T[lang].fSending;
    }
  });
}

/* ---------- stavová zpráva po návratu z contact.php ---------- */
(function formStatus(){
  var statusEl = document.getElementById("status");
  if(!statusEl) return;
  var params = new URLSearchParams(window.location.search);
  if(params.get("odeslano") === "1"){
    statusEl.dataset.state = "ok";
    statusEl.className = "status ok";
    statusEl.textContent = T[lang].stOk;
    history.replaceState(null, "", window.location.pathname + "#kontakt");
  }else if(params.get("chyba") === "1"){
    statusEl.dataset.state = "err";
    statusEl.className = "status err";
    statusEl.textContent = T[lang].stErr;
    history.replaceState(null, "", window.location.pathname + "#kontakt");
  }
})();

})();
