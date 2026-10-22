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
    g2sum:"Přiznání k daním a povinné výkazy v souladu s legislativou napříč EU.",
    g2b1:"Přiznání k DPH",
    g2b2:"Přiznání k dani z příjmů včetně povinných příloh a zveřejnění ve sbírce listin",
    g2b3:"Přiznání k dani z nemovitých věcí",
    g2b4:"Přiznání k dani silniční",
    g2b5:"Přiznání k dani z hazardních her",
    g2b6:"Intrastat",
    g3tag:"Oblast 03", g3:"Finanční řízení",
    g3sum:"Finanční analýzy, plánování a pomoc s optimalizací nákladů a ziskovosti – v případě potřeby i krizový finanční management.",
    g3b1:"Analýzy a plánování",
    g3b2:"Kompletní finanční management",
    g3b3:"Optimalizace nákladů",
    g3b4:"Krizový management",
    g4tag:"Oblast 04", g4:"Firemní změny",
    g4sum:"Založení, fúze, dělení i likvidace společností – od prvního návrhu až po realizaci.",
    g4b1:"Založení firmy", g4b2:"Fúze a dělení", g4b3:"Likvidace",
    g5tag:"Oblast 05", g5:"Administrativa a zastupování",
    g5sum:"Zastupujeme vás před úřady, připravujeme podklady pro banky a leasingové společnosti a zajišťujeme administrativní správu nemovitostí.",
    g5b1:"Jednání s úřady, přejímání úředních dokumentů a zasílání úředních dokumentů",
    g5b2:"Podklady pro bankovní úvěry",
    g5b3:"Výkazy pro banky dle požadavků bankovního ústavu",
    g5b4:"Podklady pro leasingové společnosti při žádosti o leasing",
    g5b5:"Administrativní správa nemovitostí",
    g6tag:"Oblast 06", g6:"Založení společnosti plánující růst",
    g6sum:"Pro nově založené společnosti plánující růst, u kterých je externí účetnictví pouze prvotním stádiem.",
    g6b1:"Vypracování metodiky účetnictví",
    g6b2:"Vypracování vnitropodnikové směrnice o oběhu a zpracování účetních dokladů",
    g6b3:"Zavedení účetního systému s důrazem na maximální automatizaci účetních procesů",
    g6b4:"Vypracování a zavedení kontrolních mechanismů",
    g6b5:"Pomoc při zřízení a vybudování interního účetního oddělení a jeho struktury",
    g6b6:"Vedení účetnictví a finanční management až do předání internímu účetnímu oddělení",
    g7tag:"Oblast 07", g7:"Služby pro zahraniční společnosti registrované k DPH na území České republiky",
    g7sum:"Pro zahraniční společnosti registrované na základě zákona o DPH k dani na území České republiky poskytujeme následující služby.",
    g7b1:"Registrace k DPH",
    g7b2:"Zpracování a odeslání přiznání k DPH, kontrolního hlášení a souhrnného hlášení",
    g7b3:"Kompletní zastupování před Finančním úřadem ve vztahu k DPH včetně kontrol ze strany Finančního úřadu",
    g7b4:"Služby zmocněnce pro doručování podle § 96 odst. 3 a § 98b zákona o DPH prostřednictvím datové schránky",
    g7b5:"Zrušení registrace k DPH",
    g8tag:"Oblast 08", g8:"Služby pro zahraniční společnosti registrované k DPH na území Slovenska",
    g8sum:"Pro zahraniční společnosti registrované na základě zákona o DPH k dani na území Slovenska poskytujeme následující služby.",
    g8b1:"Služby zmocněnce na základě plné moci",
    g8b2:"Registrace k DPH",
    g8b3:"Zpracování a odeslání přiznání k DPH, kontrolního hlášení a souhrnného hlášení",
    g8b4:"Kompletní zastupování před Finančním úřadem ve vztahu k DPH včetně kontrol ze strany Daňového úřadu",
    g8b5:"Přijímání a zasílání veškeré korespondence prostřednictvím Daňového portálu Daňové správy",
    g8b6:"Kontrola osobního daňového účtu",
    g8b7:"Zrušení registrace k DPH",
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
    brandSub:"Accounting · Finance · Taxes",
    navAbout:"About Us", navServices:"What We Offer", navWhy:"Why Us", navContact:"Contact",
    langCs:"CZ", langEn:"EN",
    heroKicker:"Accounting · Finance · Taxes",
    heroTitle:"Finance with personal <em>oversight.</em>",
    heroLede:"We handle bookkeeping, convert financial statements to international and national standards and take care of all your tax matters. All communication is handled directly by a partner of the company.",
    heroAlt:"David Philipp in his office",
    ctaContact:"Contact Us", ctaServices:"What We Offer",
    tick1t:"Ownership", tick1d:"100% Czech-owned company",
    tick2t:"Client Management", tick2d:"Personal partner oversight of every client",
    tick3t:"Languages", tick3d:"Czech and English, VAT across the EU",
    aboutAlt:"David Philipp working through documentation",
    aboutTitle:"A Czech company built on experience in company management.",
    aboutBody1:"We are a 100% Czech-owned company. Our founder held senior positions at prestigious domestic and international companies – and established his own company so that he could put this experience to full use for his clients.",
    philQuote:"Every client is equally important to us.",
    philP3:"Confidentiality and discretion are a given for us.",
    fact1t:"Ownership", fact1d:"100% Czech-owned company, personal and direct approach",
    fact2t:"Experience", fact2d:"From senior positions at domestic and international companies",
    fact3t:"Individual Approach", fact3d:"Contract terms and scope of services tailored to each client",
    svcTitle:"Comprehensive accounting, financial and administrative services.",
    svcLede:"From day-to-day accounting to financial management, taxes, corporate changes and administration.",
    g1tag:"Area 01", g1:"Accounting and Reporting",
    g1sum:"We handle all of your bookkeeping, convert financial statements to international and national standards and prepare management reports to support your decision-making.",
    g1b1:"Bookkeeping", g1b2:"International standards", g1b3:"Management reports",
    g2tag:"Area 02", g2:"Taxes and Reporting",
    g2sum:"Tax returns and statutory reports in compliance with legislation across the EU.",
    g2b1:"VAT returns",
    g2b2:"Income tax returns, including mandatory attachments and filing in the Collection of Deeds",
    g2b3:"Real estate tax returns",
    g2b4:"Road tax returns",
    g2b5:"Gambling tax returns",
    g2b6:"Intrastat",
    g3tag:"Area 03", g3:"Financial Management",
    g3sum:"Financial analysis, planning and assistance with cost and profitability optimization – including crisis financial management when needed.",
    g3b1:"Analysis and planning",
    g3b2:"Comprehensive financial management",
    g3b3:"Cost optimization",
    g3b4:"Crisis management",
    g4tag:"Area 04", g4:"Corporate Changes",
    g4sum:"Formation, mergers, demergers and liquidation of companies – from the initial proposal through to implementation.",
    g4b1:"Company formation", g4b2:"Mergers and demergers", g4b3:"Liquidation",
    g5tag:"Area 05", g5:"Administration and Representation",
    g5sum:"We represent you before public authorities, prepare documentation for banks and leasing companies and provide administrative property management.",
    g5b1:"Dealing with public authorities, receiving and sending official documents",
    g5b2:"Documentation for bank loans",
    g5b3:"Reports for banks in line with each bank's requirements",
    g5b4:"Documentation for leasing companies when applying for a lease",
    g5b5:"Administrative property management",
    g6tag:"Area 06", g6:"Formation of Companies Planning for Growth",
    g6sum:"For newly formed companies planning for growth, for which outsourced accounting is only the initial stage.",
    g6b1:"Development of an accounting methodology",
    g6b2:"Development of an internal directive on the circulation and processing of accounting documents",
    g6b3:"Implementation of an accounting system with an emphasis on maximum automation of accounting processes",
    g6b4:"Development and implementation of control mechanisms",
    g6b5:"Assistance with setting up and building an in-house accounting department and its structure",
    g6b6:"Bookkeeping and financial management until handover to the in-house accounting department",
    g7tag:"Area 07", g7:"Services for Foreign Companies Registered for VAT in the Czech Republic",
    g7sum:"For foreign companies registered for VAT in the Czech Republic under the VAT Act, we provide the following services.",
    g7b1:"VAT registration",
    g7b2:"Preparation and submission of VAT returns, VAT control statements and EC Sales Lists",
    g7b3:"Full representation before the Tax Office in VAT matters, including Tax Office audits",
    g7b4:"Services as an agent for the delivery of documents under Section 96(3) and Section 98b of the VAT Act via a data box",
    g7b5:"VAT deregistration",
    g8tag:"Area 08", g8:"Services for Foreign Companies Registered for VAT in Slovakia",
    g8sum:"For foreign companies registered for VAT in Slovakia under the VAT Act, we provide the following services.",
    g8b1:"Services as an agent under a power of attorney",
    g8b2:"VAT registration",
    g8b3:"Preparation and submission of VAT returns, VAT control statements and EC Sales Lists",
    g8b4:"Full representation before the Tax Office in VAT matters, including Tax Office audits",
    g8b5:"Receiving and sending all correspondence via the Tax Administration's Tax Portal",
    g8b6:"Monitoring of the personal tax account",
    g8b7:"VAT deregistration",
    svcNoteLabel:"Included as standard:",
    svcNote:"communication in English and arrangement of auditor, tax advisor and legal services.",
    whyTitle:"Four reasons our cooperation is built on.",
    why1t:"Terms", why1d:"Individual terms that reflect each client's needs and means",
    why2t:"Experience", why2d:"Our experience is a guarantee of quality work",
    why3t:"Scope", why3d:"Comprehensive accounting and administrative services, including consultations",
    why4t:"Price", why4d:"We are fully competitive on today's market in both price and quality",
    contactLede:"Write to us or give us a call. All communication is handled directly by a partner of the company.",
    ctaEmail:"Send an email", ctaCall:"Call",
    cE:"Email", cP:"Phone", cN:"Contact person",
    formTitle:"Or send us a message", formSub:"We'll get back to you as soon as possible.",
    fName:"Full name", fEmail:"Email", fPhone:"Phone (optional)", fMsg:"Message", fWebsite:"Website", fSend:"Send message", fSending:"Sending…",
    fNote:"Form data is not stored in the website database. It is used solely to handle your message.",
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
