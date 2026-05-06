# SUPRSLIM Acties & Automations

Centrale uitvoertabel voor SUPRSLIM: vaste afspraken, losse actiepunten, reminders, automations, strategische besluiten en operationele taken. Airtable is bron van waarheid; ChatGPT is werkplaats.

- Table ID: `tbl6G0tOy3JIkMzxk`
- Primary field: Titel
- Records: 57

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Titel | `singleLineText` | Korte duidelijke titel van de vastlegging, taak, reminder of automation. |
| Type vastlegging | `singleSelect` | Categorie van de vastlegging. |
| Status | `singleSelect` | Workflowstatus. |
| Eigenaar | `singleLineText` | Wie verantwoordelijk is voor opvolging of controle. |
| Frequentie / datum | `singleLineText` | Datum, frequentie of trigger waarop deze taak of reminder loopt. |
| Korte omschrijving | `multilineText` | Praktische omschrijving van wat is besloten of wat moet gebeuren. |
| Vervolgstap | `multilineText` | Concrete eerstvolgende actie. |
| Prioriteit | `singleSelect` | Prioriteit voor uitvoering. |
| Bron / context | `singleLineText` | Waar komt dit uit voort: chat, projectdocument, Airtable-regel of operationele afspraak. |
| Automation nodig | `checkbox` | Aanvinken als dit in Make/automation/reminder moet worden omgezet. |
| Laatste update | `date` | Laatste datum waarop dit record inhoudelijk is bijgewerkt. |

## Records

### Blogmachine starten

- Record ID: `rec1LRn6CtugcxUOU`
- Titel: Blogmachine starten
- Eigenaar: AI en Make
- Frequentie / datum: Week 1
- Korte omschrijving: Maak eerste 2 blogs automatisch vanuit Airtable en zet statusflow op.
- Vervolgstap: Koppel blog aan landingspagina met CTA.
- Bron / context: Content
- Automation nodig: ja

### Softr reCAPTCHA fout oplossen

- Record ID: `rec1uR8VWiSJKdNUO`
- Titel: Softr reCAPTCHA fout oplossen
- Eigenaar: Sander via Softr instellingen
- Frequentie / datum: Nu

#### Korte omschrijving

Het gratis weeklijst formulier geeft een reCAPTCHA configuration mismatch. Oorzaak: reCAPTCHA staat aan zonder juiste Google reCAPTCHA configuratie.
- Vervolgstap: Zet Enable reCAPTCHA uit in de formulierinstellingen en test het formulier opnieuw.
- Bron / context: Softr formulier test

### Herinnering: weekplanning en automations controleren

- Record ID: `rec5AKwk2NOJxBF4f`
- Titel: Herinnering: weekplanning en automations controleren
- Type vastlegging: Terugkerende reminder
- Status: Nieuw
- Eigenaar: Team SUPRSLIM
- Frequentie / datum: Wekelijks woensdag
- Korte omschrijving: Controleer of weekgenerator, AI bouwstenen en planning correct draaien vóór weekend.
- Vervolgstap: Reminder koppelen aan Make of kalender.
- Prioriteit: Hoog
- Bron / context: Planningafspraken SUPRSLIM
- Automation nodig: ja
- Laatste update: 2026-05-02

### Automation: Kirsten weekbriefing automatisch versturen

- Record ID: `rec5jc3ilb2yU87cK`
- Titel: Automation: Kirsten weekbriefing automatisch versturen
- Type vastlegging: Automation / terugkerende controle
- Status: Nieuw
- Eigenaar: Make / systeem
- Frequentie / datum: Wekelijks donderdag
- Korte omschrijving: Automatisch genereren en versturen van Kirsten weekbriefing op basis van Airtable data.
- Vervolgstap: Make-scenario bouwen en koppelen aan Airtable.
- Prioriteit: Hoog
- Bron / context: Afsprakendocument automatisering
- Automation nodig: ja
- Laatste update: 2026-05-02

### Fase 1 zonder Make

- Record ID: `rec7JI5oTRvxIu1r6`
- Titel: Fase 1 zonder Make
- Eigenaar: ChatGPT en Airtable
- Frequentie / datum: Fase 1

#### Korte omschrijving

Start zonder Make waar mogelijk. ChatGPT vult Airtable. Airtable bewaakt contentvoorraad. Website of Softr toont content uit Airtable of wordt handmatig licht bijgewerkt.
- Vervolgstap: Gebruik Make pas later voor echte triggers, publicatie en koppelingen.
- Bron / context: Automation strategie

### Besluit: Horeca Engine als Lovable quickscan-app bouwen

- Record ID: `rec8biWb2b0JK5Ivs`
- Titel: Besluit: Horeca Engine als Lovable quickscan-app bouwen
- Type vastlegging: Strategisch besluit
- Status: Nieuw
- Eigenaar: Kirsten
- Frequentie / datum: Na SUPRSLIM v1 basis / parallel prototype

#### Korte omschrijving

De Horeca Engine heeft al sterke inhoudelijke tabellen, vooral rondom La Cafetera. Voor opschaling ontbreekt een onboardinglaag. Lovable wordt gebruikt voor een simpele horeca quickscan-app: intakeformulier, bedankpagina en later intern adviesoverzicht. Airtable blijft de centrale database.

#### Vervolgstap

Maak/plan drie ontbrekende tabellen: Horeca leads / intakes, Horeca adviesmodules en Horeca adviesrapporten. Daarna Lovable quickscan bouwen met data naar Airtable.
- Prioriteit: Hoog
- Bron / context: ChatGPT advies 2026-05-04

### Controleer dat Lovable en Codex geen brein worden

- Record ID: `rec93DiAW7Sogh33O`
- Titel: Controleer dat Lovable en Codex geen brein worden
- Type vastlegging: Controlepunt
- Status: Te doen
- Eigenaar: ChatGPT / Codex / Lovable
- Frequentie / datum: Na volledige chat-audit

#### Korte omschrijving

Controleer expliciet dat weekmenu-logica, statussen, AI-regels, akkoordmomenten, budgetregels, duplicate-logica en workflowstructuren niet alleen in Lovable, Codex, GitHub, Make of frontend-code staan. Airtable moet bron van waarheid blijven.
- Vervolgstap: Maak ontbrekende architectuurregels en technische grenzen in Airtable.
- Prioriteit: Hoog
- Bron / context: Project audit chat

### Volgende stap Softr testflow

- Record ID: `rec9sg2sr1WtMRq1A`
- Titel: Volgende stap Softr testflow
- Eigenaar: Sander en ChatGPT
- Frequentie / datum: Nu

#### Korte omschrijving

Controleer Bedankt-pagina, test het gratis weeklijst formulier en publiceer daarna eerst op het Softr subdomein. Domein koppelen volgt pas na succesvolle test.
- Vervolgstap: 1. Bedankt-pagina openen. 2. Preview testen. 3. Formulier invullen. 4. Lead controleren. 5. Publiceren.
- Bron / context: Softr livegang

### Softr wijzigingen via chat

- Record ID: `rec9vNjuM2nJpVEoK`
- Titel: Softr wijzigingen via chat
- Eigenaar: Sander en Softr AI chat
- Frequentie / datum: Fase 1

#### Korte omschrijving

Afspraak: site-aanpassingen in Softr zoveel mogelijk via de Softr AI-chat uitvoeren. Handmatig klikken alleen voor navigatie, selectie, publish, preview en instellingen die de chat niet kan aanpassen.

#### Vervolgstap

Gebruik ChatGPT om korte Softr-chatprompts te maken. Plak die in Softr AI-chat en laat Softr de pagina/blokwijzigingen uitvoeren.
- Bron / context: Softr werkwijze

### Softr formulier testlead gelukt

- Record ID: `recBfhhiOUTSxOsvu`
- Titel: Softr formulier testlead gelukt
- Eigenaar: Sander en Softr
- Frequentie / datum: Nu

#### Korte omschrijving

De Gratis weeklijst test is gelukt. Testlead met e-mailadres sandervandenbaart@outlook.com staat in Softr Data → Leads. reCAPTCHA is uitgezet en formulier verzendt succesvol.
- Vervolgstap: Volgende stap: publiceren op Softr subdomein en daarna suprslim.nl koppelen via Versio DNS.
- Bron / context: Softr livegang

### Techniek eerst oplossen: Lovable Airtable-read structureel fixen

- Record ID: `recC7nf61eZNXkl6Z`
- Titel: Techniek eerst oplossen: Lovable Airtable-read structureel fixen
- Type vastlegging: Technische taak
- Status: Nieuw
- Eigenaar: ChatGPT / Kirsten
- Frequentie / datum: Voor livegang

#### Korte omschrijving

De live SUPRSLIM funnel werkt, maar de dynamische Airtable-read voor /weeklijst geeft problemen via de Lovable/Supabase get-page functie. Eerst alle techniek goed laten werken voordat SUPRSLIM breder live gedeeld wordt. Doel: formulier schrijven naar Leads én content lezen uit Airtable betrouwbaar werkend krijgen.

#### Vervolgstap

Niet verder designen of promoten voordat dit is opgelost. Eerst connector/token, Supabase Edge Function get-page, Airtable table/field IDs en read-permissions controleren. Daarna kleine technische test uitvoeren en pas daarna /weeklijst weer dynamisch koppelen.
- Prioriteit: Hoog
- Bron / context: Gebruikersbesluit 2026-05-05

### Mailflow voor nieuwe inschrijvers opzetten

- Record ID: `recCDITkWihbPPiIr`
- Titel: Mailflow voor nieuwe inschrijvers opzetten
- Type vastlegging: Automation / terugkerende controle
- Status: Nieuw
- Eigenaar: Make / mailplatform
- Frequentie / datum: Na downloadpagina
- Korte omschrijving: Nieuwe inschrijvers automatisch opvolgen met extra tips, boodschappenlijsten en maaltijdideeën.
- Vervolgstap: Mailflow structuur vastleggen: welkom, tips, boodschappen, social follow-up en later aanbod.
- Prioriteit: Hoog
- Bron / context: Leadgeneratie SUPRSLIM
- Automation nodig: ja
- Laatste update: 2026-05-02

### Werkafspraak: duidelijke stap-voor-stap uitleg bij externe tools

- Record ID: `recCITjvhB3zhlPXP`
- Titel: Werkafspraak: duidelijke stap-voor-stap uitleg bij externe tools
- Type vastlegging: Werkafspraak
- Status: Nieuw
- Eigenaar: ChatGPT / Kirsten
- Frequentie / datum: Altijd toepassen

#### Korte omschrijving

Bij alles buiten Airtable, zoals Lovable, MailerLite, domeinen, betaalinstellingen en toegangskoppelingen, moet ChatGPT de gebruiker concreet begeleiden. Niet vaag uitleggen, maar stap voor stap: waarheen gaan, waar klikken, welke optie kiezen, wat invullen, wat testen en wat niet doen. Airtable-zaken voert ChatGPT zelf uit waar mogelijk. Account- en toegangshandelingen blijven bij de gebruiker, maar worden helder uitgelegd.

#### Vervolgstap

Gebruik bij toekomstige instructies altijd: probleem, wat ChatGPT zelf kan doen, wat de gebruiker moet doen, klikstappen, teststap en waarschuwing wat niet te doen. Vooral toepassen bij Lovable-Airtable connector, tokens, domeinen en mailtools.
- Prioriteit: Hoog
- Bron / context: Gebruikersafspraak ChatGPT 2026-05-05

### Kirsten controleert weekmenu vóór operationeel gebruik

- Record ID: `recDNAZD2pIfPPMIi`
- Titel: Kirsten controleert weekmenu vóór operationeel gebruik
- Type vastlegging: Vaste afspraak
- Status: Actief
- Eigenaar: Kirsten
- Frequentie / datum: Wekelijks donderdag/vrijdag
- Korte omschrijving: Weekmenu’s en briefing worden pas gebruikt nadat Kirsten controle en akkoord in Airtable heeft vastgelegd.
- Vervolgstap: Controle & akkoord veld gebruiken in Kirsten weekbriefings.
- Prioriteit: Hoog
- Bron / context: Kirsten QA-afspraak
- Laatste update: 2026-05-02

### Softr label aangepast

- Record ID: `recEgASBTQy962HHq`
- Titel: Softr label aangepast
- Eigenaar: Sander via Softr editor/chat
- Frequentie / datum: Nu

#### Korte omschrijving

Het Engelstalige label op de Home-pagina is aangepast. De homepage, gratis weeklijstpagina, bedanktpagina en leadformulier zijn nu functioneel klaar voor publicatie.
- Vervolgstap: Volgende stap: Publish in Softr, live link testen en daarna suprslim.nl koppelen.
- Bron / context: Softr livegang

### Automatisering eerst, menselijk als laatste

- Record ID: `recGPS5ddlxUtmQUc`
- Titel: Automatisering eerst, menselijk als laatste
- Eigenaar: ChatGPT, Airtable, Softr chat en Sander
- Frequentie / datum: Doorlopend

#### Korte omschrijving

Definitieve werkwijze: eerst proberen via ChatGPT en Airtable. Daarna via gekoppelde tool of Softr AI-chat. Alleen als iets niet automatisch of via chat kan, voert Sander een kleine handmatige actie uit.

#### Vervolgstap

Bij elke stap eerst bepalen: kan dit in Airtable/ChatGPT, kan Softr-chat het doen, of is menselijke klikactie nodig. Handmatig werk beperken tot laatste redmiddel.
- Bron / context: Werkwijze automatisering

### Audit alle chats uitlezen en volledige SUPRSLIM todo-lijst maken

- Record ID: `recGuL1tNiZoNVSPh`
- Titel: Audit alle chats uitlezen en volledige SUPRSLIM todo-lijst maken
- Type vastlegging: Actiepunt
- Status: Te doen
- Eigenaar: ChatGPT / Kirsten
- Frequentie / datum: Na uitlezen alle chats

#### Korte omschrijving

Eerst alle beschikbare chats, notities en projectinformatie uitlezen. Daarna een volledige SUPRSLIM todo-lijst maken en bepalen welke afspraken, regels, workflows, prompts, Lovable/Codex-taken, Make-logica en marketingafspraken nog ontbreken in Airtable.

#### Vervolgstap

Alle chats uitlezen, daarna per onderwerp controleren wat al in Airtable staat en ontbrekende records Airtable-klaar maken.
- Prioriteit: Hoog
- Bron / context: Project audit chat + SUPRSLIM documenten

### Domein registreren voor SUPRSLIM

- Record ID: `recIrfIi4KtudNHQM`
- Titel: Domein registreren voor SUPRSLIM
- Eigenaar: Team SUPRSLIM
- Frequentie / datum: Fase 1

#### Korte omschrijving

Registreer een eigen domein voor de no-code website. Voorkeur: suprslim.nl. Alternatieven: getsuprslim.nl, suprslimweeklijst.nl of suprslimeten.nl.
- Vervolgstap: Controleer beschikbaarheid, registreer domein en koppel later aan Softr via DNS instellingen.
- Bron / context: Website setup

### Besluit: SUPRSLIM v1 klein opnieuw bouwen in Lovable

- Record ID: `recLTy4UWeDWadEhW`
- Titel: Besluit: SUPRSLIM v1 klein opnieuw bouwen in Lovable
- Type vastlegging: Strategisch besluit
- Status: Nieuw
- Eigenaar: Kirsten
- Frequentie / datum: Nu / v1

#### Korte omschrijving

SUPRSLIM blijft Airtable-first. Softr mag tijdelijk blijven staan, maar de kernfunnel wordt klein opnieuw opgebouwd in Lovable: homepage, gratis weeklijst-landingspagina, inschrijfformulier en bedankpagina. Doel is snel leren hoe Lovable werkt en tegelijk een zuivere AI-ready leadfunnel bouwen.

#### Vervolgstap

Richt eerst de Airtable marketinglaag goed in: Leads, E-mail campagnes, E-mail log, 1 gevulde Slimme Weeklijst en 1 gevulde Website pagina. Daarna Lovable v1 bouwen met formulier naar Airtable.
- Prioriteit: Hoog
- Bron / context: ChatGPT advies 2026-05-04

### Softr live preview zichtbaar

- Record ID: `recMUVnE0CnIRNWpq`
- Titel: Softr live preview zichtbaar
- Eigenaar: Sander en Softr
- Frequentie / datum: Nu

#### Korte omschrijving

De SUPRSLIM homepage staat zichtbaar in Softr preview met werkende navigatie, hero, CTA en gratis weeklijst flow. Leadtest is geslaagd in Softr Leads.
- Vervolgstap: Laatste check: Engelse template tekst 'See our latest news' vervangen of verwijderen, daarna Publish gebruiken.
- Bron / context: Softr livegang

### Softr eerste site gegenereerd

- Record ID: `recNKStJHtsz03EEY`
- Titel: Softr eerste site gegenereerd
- Eigenaar: Sander en Softr
- Frequentie / datum: Fase 1

#### Korte omschrijving

Softr heeft de eerste SUPRSLIM Marketing Website aangemaakt met Home, Gratis weeklijst, Blog, Blog detail en Bedankt pagina. De home voelt nog als dashboard en moet worden omgezet naar publieke marketinghomepage.
- Vervolgstap: Verwijder dashboardblokken op Home en vervang door hero, voordelen, CTA en weeklijstblok.
- Bron / context: Softr setup

### Controleer ontbrekende leadgeneratie-records

- Record ID: `recO5qdAQ8jnZgZ73`
- Titel: Controleer ontbrekende leadgeneratie-records
- Type vastlegging: Controlepunt
- Status: Te doen
- Eigenaar: ChatGPT
- Frequentie / datum: Na volledige chat-audit

#### Korte omschrijving

Controleer of de eerste fase goed in Airtable staat: gratis Slimme Weeklijst, downloadpagina, leads, e-mailcampagnes, e-mail log, social content en bespaartips. Verkoop pas later.
- Vervolgstap: Maak ontbrekende records in Slimme Weeklijsten, Website pagina's, E-mail campagnes, Social content en Slim inkopen.
- Prioriteit: Hoog
- Bron / context: SUPRSLIM bedrijfsplan + audit

### Controleer Kirsten briefing en akkoordflow

- Record ID: `recOBm2s6BJUThVvs`
- Titel: Controleer Kirsten briefing en akkoordflow
- Type vastlegging: Controlepunt
- Status: Te doen
- Eigenaar: ChatGPT / Make
- Frequentie / datum: Na volledige chat-audit

#### Korte omschrijving

Controleer of de wekelijkse Kirsten-briefing volledig vastligt: donderdagmail, weekmenu-overzicht, voorraad/soepen, boodschappenfocus, contentplanning, controle & akkoord. Kirsten moet kunnen accorderen of kleine aanpassingen aangeven.
- Vervolgstap: Maak ontbrekende records in Kirsten weekbriefings, SUPRSLIM Weekritme en SUPRSLIM Acties & Automations.
- Prioriteit: Hoog
- Bron / context: SUPRSLIM afsprakendocument + briefing chat
- Automation nodig: ja

### Techniek eerst: Lovable Airtable-read oplossen voor livegang

- Record ID: `recRFfhPttPsZ67an`
- Titel: Techniek eerst: Lovable Airtable-read oplossen voor livegang
- Type vastlegging: Technische taak
- Status: Nieuw
- Eigenaar: Sander / ChatGPT
- Frequentie / datum: Voor live delen

#### Korte omschrijving

De SUPRSLIM live funnel werkt, maar de dynamische Airtable-read voor de /weeklijst pagina geeft een 403 fout via de Lovable/Supabase get-page functie. Voor echte livegang moet dit technisch netjes opgelost worden. Geen handmatige workarounds als structurele oplossing. Eerst connector/token/functie testen en herstellen, daarna pas verkeer sturen.

#### Vervolgstap

Stap 1: live werkende versie behouden. Stap 2: Airtable connector in Lovable controleren. Stap 3: get-page functie laten testen met base ID appe53zLo9AuxXZuc, table ID tblqDY2oKmaalsFkg, field ID fldZoqvaTf3lGWzHR. Stap 4: pas publiceren als Airtable-read werkt zonder rode foutmelding.
- Prioriteit: Hoog
- Bron / context: Lovable foutlog 403 Airtable read

### Structuur check: geen losse ideeën zonder vastlegging

- Record ID: `recRX68SxgOdM0VAv`
- Titel: Structuur check: geen losse ideeën zonder vastlegging
- Type vastlegging: Vaste afspraak
- Status: Actief
- Eigenaar: SUPRSLIM systeem
- Frequentie / datum: Altijd
- Korte omschrijving: Alle ideeën moeten worden vertaald naar actie, planning of Airtable-record.
- Vervolgstap: Controleren bij elke output.
- Prioriteit: Hoog
- Bron / context: Nieuwe werkwijze
- Laatste update: 2026-05-02

### Werkvolgorde automatisering fase 1

- Record ID: `recRvOB0Lv5zD7xvn`
- Titel: Werkvolgorde automatisering fase 1
- Eigenaar: ChatGPT, Airtable en Softr chat
- Frequentie / datum: Fase 1

#### Korte omschrijving

Eerst alles via ChatGPT en Airtable voorbereiden en vastleggen. Als een wijziging in Softr nodig is, voert Sander die uit via de Softr AI-chat met prompts van ChatGPT. Handmatig klikken alleen als de chat of koppeling het niet kan.

#### Vervolgstap

Gebruik Airtable als bron, ChatGPT voor inhoud en instructies, Softr chat voor sitewijzigingen. Make pas later toevoegen als triggers echt nodig zijn.
- Bron / context: Werkwijze

### DNS koppeling suprslim.nl starten

- Record ID: `recSg6CkGkwlb9CsE`
- Titel: DNS koppeling suprslim.nl starten
- Eigenaar: Sander en ChatGPT
- Frequentie / datum: Volgende stap

#### Korte omschrijving

Na Softr livegang wordt suprslim.nl gekoppeld via Softr Custom domain en Versio DNS. Eerst in Softr domein toevoegen, daarna de DNS-records exact overnemen in Versio. Niet gokken.

#### Vervolgstap

Open Softr Settings > Custom domain > Add > vul suprslim.nl in. Stuur daarna screenshot van de DNS records die Softr toont.
- Bron / context: Domein koppeling

### Weekgenerator woensdag draaien voor volgende week

- Record ID: `recSlP67v42khaGnF`
- Titel: Weekgenerator woensdag draaien voor volgende week
- Type vastlegging: Automation / terugkerende controle
- Status: Nieuw
- Eigenaar: Make / SUPRSLIM systeem
- Frequentie / datum: Wekelijks woensdag
- Korte omschrijving: Maak automatisch de 20 weekmenu-bouwstenen voor maandag t/m vrijdag op basis van actieve Weekmenu Templates.
- Vervolgstap: Make-scenario controleren of bouwen: templates ophalen, bouwstenen aanmaken, duplicaten voorkomen.
- Prioriteit: Hoog
- Bron / context: Afsprakendocument automatisering
- Automation nodig: ja
- Laatste update: 2026-05-02

### Besluit: eerst mailflow bouwen na werkende weeklijstfunnel

- Record ID: `recTCjUesbd3GGZcV`
- Titel: Besluit: eerst mailflow bouwen na werkende weeklijstfunnel
- Type vastlegging: Strategisch besluit
- Status: Nieuw
- Eigenaar: Kirsten
- Frequentie / datum: Volgende bouwstap

#### Korte omschrijving

SUPRSLIM v1 funnel werkt: Lovable landingspagina, formulier naar Airtable Leads, bevestiging en /weeklijst pagina. Volgende prioriteit is mailflow: welkomstmail, waarde-mail en feedbackmail activeren via MailerLite of een vergelijkbare eenvoudige e-mailtool. Geen Make en geen complexe automatisering in deze fase.

#### Vervolgstap

Bouw of koppel mailflow met bestaande records in E-mail campagnes: 1 welkomstmail weeklijst, 2 slim boodschappen doen, 3 feedbackmail. Zorg dat nieuwe Lovable leads met Interesse = Gratis weeklijst in de juiste mailinglijst/segment komen.
- Prioriteit: Hoog
- Bron / context: ChatGPT SUPRSLIM v1 vervolg

### Website simpeler dan GitHub

- Record ID: `recUjnbGSnAOy3qbS`
- Titel: Website simpeler dan GitHub
- Eigenaar: AI en Make
- Frequentie / datum: Fase 1

#### Korte omschrijving

Gebruik eerst een no-code website of landingspagina. Airtable blijft contentbron. OpenAI vult teksten. Make zet content klaar of publiceert waar mogelijk.
- Vervolgstap: Kies route: Softr, Webflow, Framer of bestaande landingspagina. GitHub pas later als technische upgrade.
- Bron / context: Website strategie
- Automation nodig: ja

### Implementeren SUPRSLIM werkwijze in alle outputs

- Record ID: `recWRJLNsIV7seeDl`
- Titel: Implementeren SUPRSLIM werkwijze in alle outputs
- Type vastlegging: Operationele taak
- Status: Actief
- Eigenaar: ChatGPT / systeem
- Frequentie / datum: Doorlopend

#### Korte omschrijving

Alle antwoorden en ideeën binnen SUPRSLIM moeten automatisch worden omgezet naar Airtable-klare vastleggingen volgens afgesproken structuur.
- Vervolgstap: Bij elke nieuwe chat of opdracht direct toepassen en controleren op structuur.
- Prioriteit: Hoog
- Bron / context: Nieuwe SUPRSLIM werkafspraak
- Laatste update: 2026-05-02

### Softr automatiseren vanuit Airtable

- Record ID: `recWSFrln3JWxIaoZ`
- Titel: Softr automatiseren vanuit Airtable
- Eigenaar: ChatGPT en Airtable
- Frequentie / datum: Fase 1

#### Korte omschrijving

Na het aanmaken en koppelen van Softr hoeft de inhoud niet handmatig bedacht te worden. ChatGPT vult Airtable met pagina's, blogs en CTA's. Softr toont deze data via gekoppelde blokken.
- Vervolgstap: Maak in Airtable records voor homepage, gratis weeklijst, blogoverzicht, blogdetail, bedankt-pagina en CTA-blokken.
- Bron / context: Softr setup

### Maak definitieve Airtable todo-lijst uit auditresultaten

- Record ID: `recXyHemSjw2m2jlm`
- Titel: Maak definitieve Airtable todo-lijst uit auditresultaten
- Type vastlegging: Actiepunt
- Status: Te doen
- Eigenaar: ChatGPT
- Frequentie / datum: Na volledige chat-audit

#### Korte omschrijving

Zet alle ontbrekende Airtable-records, tabellen, velden, Make-scenario's, Lovable/Codex-bouwtaken, marketingrecords en contentrichtlijnen om naar concrete taken in SUPRSLIM Acties & Automations.
- Vervolgstap: Maak taken met titel, type, eigenaar, prioriteit, bron/context en concrete vervolgstap.
- Prioriteit: Hoog
- Bron / context: Project audit chat

### Automatisch bereik zonder mensenwerk

- Record ID: `recZ4FfXHbRvajSYB`
- Titel: Automatisch bereik zonder mensenwerk
- Eigenaar: AI
- Frequentie / datum: Doorlopend

#### Korte omschrijving

Maak content die geen opname nodig heeft: blogs, carrousels, pins, mailtips, checklistposts en hergebruik van bestaande beelden.
- Vervolgstap: Werk dit uit als vaste tweede contentlaag naast Kirsten en Lizzy.
- Bron / context: Marketingstrategie
- Automation nodig: ja

### Softr custom domain blokkeert live app

- Record ID: `recZ9h4VoHFiUXGem`
- Titel: Softr custom domain blokkeert live app
- Eigenaar: Sander en Softr support
- Frequentie / datum: Nu

#### Korte omschrijving

Softr support geeft aan dat live mode niet werkt omdat een custom domain is toegevoegd maar de noodzakelijke DNS records nog niet door Softr worden gezien. Preview werkt wel; blokkade zit bij custom domain/DNS-verificatie.

#### Vervolgstap

Controleer in Versio DNS of nameservers actief zijn en records exact staan. Vraag Softr support of tijdelijk custom domain verwijderd moet worden zodat herbert23713.softr.app weer live werkt, of welke DNS-records zij exact zien/missen.
- Bron / context: Softr DNS diagnose

### Softr site niet bereikbaar diagnose

- Record ID: `recao9H2Vuz72APdy`
- Titel: Softr site niet bereikbaar diagnose
- Eigenaar: Sander en ChatGPT
- Frequentie / datum: Nu

#### Korte omschrijving

Softr subdomein en custom domein geven foutmelding. AI-chat kan helpen met content en sommige instellingen, maar bereikbaarheid/publicatie moet eerst via Softr publicatie, subdomain, visibility en mogelijk custom domain status worden gecontroleerd.

#### Vervolgstap

Eerst exact foutscherm verzamelen. Check: is app published, zijn pagina's Everyone, is subdomain correct, werkt preview, en staat er geen blokkade door trial/custom domain. Daarna Softr AI-chat vragen om public access en default route te controleren.
- Bron / context: Softr storing diagnose

### Downloadpagina voor Slimme Weeklijst maken

- Record ID: `recbDCI6cUS2aTaAs`
- Titel: Downloadpagina voor Slimme Weeklijst maken
- Type vastlegging: Operationele taak
- Status: Nieuw
- Eigenaar: SUPRSLIM marketing
- Frequentie / datum: Na eerste weeklijst
- Korte omschrijving: Maak een landingspagina waarop bezoekers hun e-mailadres achterlaten voor de gratis SUPRSLIM Slimme Weeklijst.
- Vervolgstap: Website pagina-record aanmaken of vullen met titel, CTA, SEO en lead magnet tekst.
- Prioriteit: Hoog
- Bron / context: Lead magnet funnel
- Laatste update: 2026-05-02

### Setup accounts en tools

- Record ID: `reccC9O4TgLQApYiR`
- Titel: Setup accounts en tools
- Eigenaar: Team SUPRSLIM
- Frequentie / datum: Week 1
- Korte omschrijving: Zet basisaccounts op: website/blog, Instagram, Pinterest Business, mailtool en Canva.
- Vervolgstap: Zorg dat alles gekoppeld is aan landingspagina en Airtable.
- Bron / context: Setup
- Automation nodig: ja

### Gratis Slimme Weeklijst als lead magnet uitwerken

- Record ID: `reccWgeyHZbU9jIGm`
- Titel: Gratis Slimme Weeklijst als lead magnet uitwerken
- Type vastlegging: Strategisch besluit
- Status: Actief
- Eigenaar: SUPRSLIM marketing
- Frequentie / datum: Eerste marketingfase

#### Korte omschrijving

SUPRSLIM bouwt eerst publiek, vertrouwen en e-mailadressen via gratis slimme weeklijsten voordat betaalde producten worden verkocht.
- Vervolgstap: Eerste Slimme Weeklijst genereren en koppelen aan downloadpagina en mailserie.
- Prioriteit: Hoog
- Bron / context: Bedrijfsplan SUPRSLIM
- Laatste update: 2026-05-02

### Boodschappenlijst-generator toevoegen

- Record ID: `recdcTONgTiPO7e7q`
- Titel: Boodschappenlijst-generator toevoegen
- Type vastlegging: Operationele taak
- Status: Nieuw
- Eigenaar: SUPRSLIM systeem
- Frequentie / datum: Na goedgekeurde weekbouwstenen
- Korte omschrijving: Genereer boodschappenlijsten uitsluitend op basis van goedgekeurde weekmenu-bouwstenen, niet vanuit losse AI-fantasie.
- Vervolgstap: Airtable-logica bepalen: bronvelden, outputtabel en kwaliteitscontrole.
- Prioriteit: Middel
- Bron / context: Open bouwstap automatisering
- Automation nodig: ja
- Laatste update: 2026-05-02

### Fase 1 online zonder team

- Record ID: `receBG5Klx4zFUjAt`
- Titel: Fase 1 online zonder team
- Eigenaar: AI en Make
- Frequentie / datum: Startfase

#### Korte omschrijving

SUPRSLIM gaat eerst online zonder Kirsten of Lizzy. Focus op blogs, Pinterest, Instagram carrousels, mailflow en landingspagina.
- Vervolgstap: Start met basisaccounts, templates en automatische contentflow.
- Bron / context: Marketingstrategie
- Automation nodig: ja

### Softr blogs koppelen aan Airtable

- Record ID: `recg0wsakcx2lPMk9`
- Titel: Softr blogs koppelen aan Airtable
- Eigenaar: Sander via Softr chat
- Frequentie / datum: Nu

#### Korte omschrijving

Blogs staan in Airtable. Volgende stap is Softr Blog-pagina koppelen aan Airtable tabel Blogs, zodat blogrecords automatisch zichtbaar worden op de website.

#### Vervolgstap

Gebruik Softr chat met prompt: koppel Blog-pagina aan Airtable tabel Blogs en toon Blog titel, Intro en Hoofd zoekwoord. Blog detail toont Blog titel, Intro en Blog content. Zet pagina's op Everyone en druk daarna Publish.
- Bron / context: Softr blogkoppeling

### Na livegang site vullen met content

- Record ID: `recg9TJCtNhGSqsld`
- Titel: Na livegang site vullen met content
- Eigenaar: ChatGPT en Airtable
- Frequentie / datum: Nu

#### Korte omschrijving

Na DNS-koppeling gaat ChatGPT de site-inhoud vullen via Airtable/Softr: blogs, blogdetail, gratis weeklijst, SEO-teksten, Pinterest/Instagram content en mailflowteksten. Eerst contentvoorraad in Airtable, daarna tonen/publiceren in Softr.

#### Vervolgstap

Start met 5 SEO-blogrecords, 10 Pinterest-pin ideeën, 5 Instagram-carrousels en een 5-delige mailflow. Alles SUPRSLIM-proof, zonder harde claims.
- Bron / context: Content machine fase 1

### Vastleggen volledige SUPRSLIM toolarchitectuur

- Record ID: `recgGlr46GUspUZ2g`
- Titel: Vastleggen volledige SUPRSLIM toolarchitectuur
- Type vastlegging: Actiepunt
- Status: Te doen
- Eigenaar: ChatGPT
- Frequentie / datum: Na volledige chat-audit

#### Korte omschrijving

Controleer en leg volledig vast: Airtable = brein, ChatGPT = werkplaats, Make = uitvoerder, AI = taakgenerator, Kirsten = kwaliteitscontrole, GitHub/Codex = bouwomgeving, Lovable = visuele editor/interface. Geen enkele andere tool mag bron van waarheid zijn.
- Vervolgstap: Maak of update records in AI Regels SUPRSLIM en/of Technische architectuurregels met deze volledige toolverdeling.
- Prioriteit: Hoog
- Bron / context: Project audit chat

### Categorieoptie toevoegen AI Regels SUPRSLIM

- Record ID: `reciGOPGVrr3RbQ67`
- Titel: Categorieoptie toevoegen AI Regels SUPRSLIM
- Eigenaar: Kirsten

#### Korte omschrijving

Voeg in Airtable bij AI Regels SUPRSLIM een nieuwe single-select categorie toe zoals 'Systeemarchitectuur' zodat Codex/Lovable architectuurregels correct gecategoriseerd kunnen worden.
- Vervolgstap: Na toevoegen categorie bestaande record 'Codex & Lovable architectuur' updaten.
- Bron / context: ChatGPT architectuurvastlegging
- Laatste update: 2026-05-06

### Soep- en voorraadlogica structureren

- Record ID: `recjv0oJt0XG7IUuA`
- Titel: Soep- en voorraadlogica structureren
- Type vastlegging: Operationele taak
- Status: Nieuw
- Eigenaar: Kirsten / SUPRSLIM systeem
- Frequentie / datum: Voor eerste operationele week
- Korte omschrijving: Bepaal welke soepen of prep-producten klaar moeten staan, hoeveel porties nodig zijn en welke voorraadregels gelden.
- Vervolgstap: Tabel of velden ontwerpen voor voorraad, porties, houdbaarheid en voorbereiding.
- Prioriteit: Middel
- Bron / context: Open punt afsprakendocument
- Laatste update: 2026-05-02

### Softr subdomein ook foutmelding

- Record ID: `recmIiYV9Ac6x4xOp`
- Titel: Softr subdomein ook foutmelding
- Eigenaar: Sander en ChatGPT
- Frequentie / datum: Nu

#### Korte omschrijving

Niet alleen suprslim.nl maar ook herbert23713.softr.app geeft foutmelding. Dit wijst niet alleen op DNS-propagatie, maar mogelijk op Softr publicatie, app access, subdomein, custom domain status of verkeerde live URL.

#### Vervolgstap

Eerst Softr live status en juiste public URL controleren. In Softr: Settings > General > Subdomain controleren, Publish status controleren, eventueel live/open icoon naast subdomain gebruiken. Daarna testen zonder /login.
- Bron / context: Softr storing diagnose

### Domein suprslim.nl geregistreerd

- Record ID: `recmYDWKqPNlMZ112`
- Titel: Domein suprslim.nl geregistreerd
- Eigenaar: Team SUPRSLIM
- Frequentie / datum: Fase 1

#### Korte omschrijving

suprslim.nl is geregistreerd bij Versio. Domein loopt tot 3-5-2027. Nu nog niet extra hosting of premium diensten gebruiken.
- Vervolgstap: Volgende stap: Softr account maken, Airtable koppelen en daarna DNS records van Softr in Versio zetten.
- Bron / context: Website setup

### AI Bouwsteen Generator kostenrem controleren

- Record ID: `recpUxw4IecyOQDy0`
- Titel: AI Bouwsteen Generator kostenrem controleren
- Type vastlegging: Automation / terugkerende controle
- Status: Nieuw
- Eigenaar: Make / SUPRSLIM systeem
- Frequentie / datum: Doorlopend bij AI-runs
- Korte omschrijving: AI mag alleen unieke, actieve bouwstenen met Run status Wachten verwerken om kosten en duplicaten te voorkomen.
- Vervolgstap: Filter in Make controleren: Run status Wachten, Automatisering actief aangevinkt, Duplicate check status Uniek.
- Prioriteit: Hoog
- Bron / context: Kostenrem / duplicate-afspraak
- Automation nodig: ja
- Laatste update: 2026-05-02

### Aanbiedingen ophalen en SUPRSLIM-score geven

- Record ID: `recpa16PZv1O79KHE`
- Titel: Aanbiedingen ophalen en SUPRSLIM-score geven
- Type vastlegging: Automation / terugkerende controle
- Status: Nieuw
- Eigenaar: Make / AI specialist
- Frequentie / datum: Wekelijks vrijdag/zaterdag
- Korte omschrijving: Actuele aanbiedingen ophalen en beoordelen op gezondheid, prijs, eenvoud, herbruikbaarheid en budgetbijdrage.
- Vervolgstap: Scenario bouwen dat aanbiedingen vult in Airtable en alleen prioriteit 4/5 als leidend markeert.
- Prioriteit: Middel
- Bron / context: Aanbiedingenregels SUPRSLIM
- Automation nodig: ja
- Laatste update: 2026-05-02

### Volgende Lovable stap: downloadpagina toevoegen

- Record ID: `recrXxYpFI2ErKdE2`
- Titel: Volgende Lovable stap: downloadpagina toevoegen
- Type vastlegging: Websiteactie
- Status: Nieuw
- Eigenaar: Kirsten
- Frequentie / datum: Vandaag

#### Korte omschrijving

Voeg aan het bestaande Lovable project een tweede pagina toe waarop de gratis SUPRSLIM weeklijst direct bekeken kan worden. Laat de bestaande Airtable Leads-koppeling intact. Pas de bevestiging na formulierverzending aan met een knop naar de weeklijstpagina.

#### Vervolgstap

Gebruik in Lovable één gerichte prompt: voeg pagina /weeklijst toe, plaats weeklijstcontent uit Airtable record 'SUPRSLIM weeklijst bekijken', voeg knop toe na succesvolle inschrijving, wijzig geen Airtable mapping.
- Prioriteit: Hoog
- Bron / context: ChatGPT SUPRSLIM v1

### Softr wijzigingen altijd publishen

- Record ID: `recrfR1CFImEdVsjC`
- Titel: Softr wijzigingen altijd publishen
- Eigenaar: Sander en ChatGPT
- Frequentie / datum: Doorlopend

#### Korte omschrijving

Belangrijke les: na wijzigingen in Softr, zoals page visibility naar Everyone, tekstwijzigingen, formulierinstellingen of navigatie, altijd opnieuw op Publish drukken. Anders blijft de live site de oude versie tonen en kan hij nog naar /login sturen.

#### Vervolgstap

Nieuwe standaardcheck: wijziging gedaan → Publish drukken → incognito testen op kale URL zonder /login → formulier testen → lead checken in Data > Leads.
- Bron / context: Softr werkwijze

### Controleer belasting/dieetkosten marketingregels

- Record ID: `recvg3jPnyJLX8tjo`
- Titel: Controleer belasting/dieetkosten marketingregels
- Type vastlegging: Controlepunt
- Status: Te doen
- Eigenaar: ChatGPT
- Frequentie / datum: Na volledige chat-audit

#### Korte omschrijving

Controleer dat SUPRSLIM geen belastingvoordeel belooft. Dieetkosten alleen benoemen als mogelijk aftrekbaar onder voorwaarden. Altijd melden: SUPRSLIM geeft geen belastingadvies en verwijs naar Belastingdienst of adviseur.
- Vervolgstap: Maak of update AI Regels SUPRSLIM, Blog-record en Social content-record voor dit onderwerp.
- Prioriteit: Middel
- Bron / context: SUPRSLIM marketingnotitie belastingvoordeel

### Contentplanning koppelen aan goedgekeurde weekbriefing

- Record ID: `recxgmvX83UZ2EM3z`
- Titel: Contentplanning koppelen aan goedgekeurde weekbriefing
- Type vastlegging: Operationele taak
- Status: Nieuw
- Eigenaar: Kirsten / Lizzy / SUPRSLIM systeem
- Frequentie / datum: Wekelijks na akkoord briefing

#### Korte omschrijving

Social content en vlogideeën worden gekoppeld aan de goedgekeurde weekbriefing, zodat content uitvoerbaar en consistent blijft.
- Vervolgstap: Velden of links bepalen tussen Kirsten weekbriefings, Social content en Vlog ideeën.
- Prioriteit: Middel
- Bron / context: Content-output koppeling
- Laatste update: 2026-05-02

### Softr CTA knop Gratis weeklijst werkt niet

- Record ID: `recxuPr5A3ByqP3Jp`
- Titel: Softr CTA knop Gratis weeklijst werkt niet
- Eigenaar: Sander via Softr editor/chat
- Frequentie / datum: Nu

#### Korte omschrijving

Live site werkt op herbert23713.softr.app, maar de CTA-knop 'Download gratis de weeklijst' op Home werkt niet. Dit is een Softr button action/link probleem, geen Airtable of DNS probleem.

#### Vervolgstap

Open Home in Softr editor, klik de CTA-knop aan, zet Action/Link op Page > Gratis weeklijst. Daarna Publish en live testen.
- Bron / context: Softr knoplink fix

### Test automatische invoer

- Record ID: `recy0VG6DiYOT71hr`
- Titel: Test automatische invoer
- Eigenaar: AI
- Korte omschrijving: Test of record aanmaken werkt.
- Automation nodig: ja

### Softr public access juiste route

- Record ID: `reczcuwlKsKZXsjfb`
- Titel: Softr public access juiste route
- Eigenaar: Sander en ChatGPT
- Frequentie / datum: Doorlopend

#### Korte omschrijving

Belangrijke les voor volgende keer: als Softr na publish naar /login gaat, staat page visibility nog op Logged-in users. De juiste route is niet Settings > Advanced of General, maar Pages > juiste pagina > Page settings > Visibility.

#### Vervolgstap

Voor Home, Gratis weeklijst, Blog, Blog detail en Bedankt: Visibility > Who can see this Page > wijzigen van Logged-in users naar All users/Public/Anyone. Daarna testen via het kale subdomein zonder /login.
- Bron / context: Softr werkwijze

