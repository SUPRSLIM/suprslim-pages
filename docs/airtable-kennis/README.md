# SUPRSLIM Airtable kennis

Deze map zet de kennis uit Airtable om naar markdown-documentatie voor de context en bedoeling van de app.

Bron: Airtable-base `Soepslim systeem` (`appe53zLo9AuxXZuc`)  
Bijgewerkt: 2026-05-06

## Start hier

- [App context en bedoeling](00-app-context-en-bedoeling.md)
- [Bron van waarheid en architectuur](01-bron-van-waarheid-en-architectuur.md)
- [SUPRSLIM funnel en content](02-suprslim-funnel-en-content.md)
- [Weekmenu, AI en kwaliteit](03-weekmenu-ai-en-kwaliteit.md)
- [Horeca Engine](04-horeca-engine.md)
- [Airtable tabellen](05-airtable-tabellen.md)
- [Acties en open punten](06-acties-en-open-punten.md)
- [Redactie en privacy](07-redactie-en-privacy.md)

## Scope

Dit is geen ruwe datadump. Het doel is om de productcontext, werkafspraken, AI-regels, contentstrategie, app-logica en operationele keuzes vindbaar te maken voor ontwikkeling.

Ruwe records uit `Leads`, `Contracts` en `E-mail log` zijn bewust niet opgenomen. Die tabellen kunnen persoonsgegevens, contractinformatie of e-maillogs bevatten. Airtable blijft daarvoor de bron.

## Verversen

Er staat een exportscript in [scripts/export-airtable-knowledge.mjs](../../scripts/export-airtable-knowledge.mjs). Dat script kan later een volledige markdown-export maken als er een geldige `AIRTABLE_PERSONAL_ACCESS_TOKEN` beschikbaar is met leesrechten op metadata en records.
