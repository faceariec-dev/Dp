PHILIPPSRO.CZ – STATICKÝ WEB (CZ/EN)
========================================

Obsah balíku:
- index.html ........ onepage web, česky a anglicky (přepínač jazyků v menu)
- assets/css/style.css
- assets/js/main.js ... i18n přepínač, mobilní menu, odeslání formuláře
- assets/fonts/ ...... samostatně hostovaný přístupný font Atkinson Hyperlegible Next (žádné externí požadavky na Google Fonts)
- assets/ld.json ..... strukturovaná data (schema.org) načítaná externě kvůli CSP
- images/ ............ optimalizované WebP fotografie
- contact.php ........ odeslání formuláře bez databáze (skutečný POST, honeypot)
- .htaccess .......... HTTPS, bezpečnostní hlavičky (CSP) a přesměrování starých CZ URL
- favicon.svg
- robots.txt
- sitemap.xml

NASAZENÍ NA ČESKÝ HOSTING
1. Nejdřív si ponechte úplnou lokální zálohu staré Joomly a databáze.
2. Pro ostré nasazení odstraňte ze serveru staré Joomla PHP soubory, pluginy a databázové konfigurace.
3. Nahrajte OBSAH tohoto adresáře do webového kořene domény philippsro.cz.
4. Soubor .htaccess musí být skutečně pojmenovaný .htaccess.
5. Ověřte https://philippsro.cz/ a odešlete testovací formulář.
6. Pokud formulář zobrazí chybu, ověřte na hostingu funkci PHP mail(). Samotný web funguje nezávisle na formuláři.

JAZYKY
Web je od začátku dvojjazyčný (CS/EN). Přepínač je v hlavním menu i v mobilním
rozbalovacím menu. Jazyk se ukládá do localStorage a prohlížeči se automaticky
detekuje při první návštěvě (anglické prohlížeče → EN).

FORMULÁŘ
Skutečné odeslání přes contact.php na e-mail david.philipp@philippsro.cz.
Data se neukládají do databáze, jde jen o e-mailové doručení + honeypot proti robotům.

DESIGN
Tmavě modrá + zlatá, karty místo dlouhého seznamu odrážek u nabídky služeb,
velká přístupná CTA tlačítka a font Atkinson Hyperlegible Next (navržený pro
maximální čitelnost, včetně slabozrakých uživatelů).
