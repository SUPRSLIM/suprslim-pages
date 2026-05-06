# Weekmenu Bouwstenen

V2 SUPRSLIM structuur: AI vult kleine maaltijdblokken; Airtable bewaakt kcal, dagstructuur en kwaliteit.

- Table ID: `tblMCPXZzkLkQ1Map`
- Primary field: Bouwsteen naam
- Records: 89

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Bouwsteen naam | `singleLineText` | Naam van de maaltijdbouwsteen, bijvoorbeeld Maandag ontbijt. |
| Dag | `singleSelect` |  |
| Maaltijdtype | `singleSelect` |  |
| Kcal target | `number` |  |
| Gerecht | `multilineText` | AI-output: korte maaltijdnaam en omschrijving. |
| Ingrediënten | `multilineText` | Alle ingredienten voor deze maaltijd. |
| Bereidingstip | `multilineText` | Korte praktische bereiding of prep-tip. |
| Budgetcheck | `rating` |  |
| Kwaliteitscheck | `rating` |  |
| Goedgekeurd | `checkbox` |  |
| AI prompt | `multilineText` | Specifieke prompt voor deze ene maaltijd. |
| AI output | `multilineText` | Antwoord van AI voor deze bouwsteen. |
| Status | `singleSelect` |  |
| Automatisering actief | `checkbox` | Vink aan wanneer Make deze bouwsteen automatisch mag genereren. |
| Run status | `singleSelect` | Automatiseringsstatus voor Make. |
| Weeknummer | `singleSelect` | Weeknummer van de testfase of automatische weekgeneratie. |
| Weekfase | `singleSelect` | Status van de week (genereren, controleren, klaar) |
| Regels snapshot | `multilineText` | Samenvatting van actieve SUPRSLIM AI-regels die in de prompt meegenomen moeten worden. |
| Unieke bouwsteen sleutel | `singleLineText` | Unieke sleutel voor duplicate-preventie: Weeknummer + Dag + Maaltijdtype. Make vult dit veld bij het aanmaken van bouwstenen. Airtable gebruikt dit als brein om dubbele weekmenu-bouwstenen te voorkomen. |
| Duplicate check status | `singleSelect` | Controleveld voor duplicate-preventie. Airtable-brein: records met dezelfde unieke bouwsteen sleutel mogen niet dubbel actief blijven. |
| Week startdatum | `singleLineText` | Maandagdatum van de week waarvoor deze bouwsteen geldt. Format: YYYY-MM-DD. Make gebruikt dit om de juiste komende maandag t/m vrijdag op te halen voor de Kirsten-briefing. |

## Records

### Vrijdag lunch

- Record ID: `rec0lGr1jPYio7L0Z`
- Bouwsteen naam: Vrijdag lunch
- Dag: Vrijdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik: volkorenbrood, wrap, kip, tonijn, bonen, hummus, komkommer, paprika, wortel. Max 30 g hummus. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Tonijn en Bonen Wrap

**Ingrediënten:**
- 1 volkoren wrap
- 100 g tonijn (afgegoten)
- 50 g bonen (ook afgekookt)
- 30 g hummus
- 50 g komkommer (in plakjes)
- 50 g paprika (in reepjes)
- 50 g wortel (geraspt)

**Bereidingstip:**
Smeer de hummus op de wrap, verdeel de tonijn en bonen erover, voeg de komkommer, paprika en geraspte wortel toe. Rol de wrap op en snijd doormidden.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Genereren

### Dinsdag snack

- Record ID: `rec0qV5iBhrONI5at`
- Bouwsteen naam: Dinsdag snack
- Dag: Dinsdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Snack
- Duplicate check status: Uniek

### Maandag diner

- Record ID: `rec1Z0cBNy6rhxuv4`
- Bouwsteen naam: Maandag diner
- Dag: Maandag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Diner: Groentecurry met Rijst

**Ingrediënten:**
- 75 g ongekookte basmati rijst
- 1 blik kikkererwten (240 g uitlekgewicht)
- 1 courgette (ongeveer 200 g)
- 1 rode paprika (ongeveer 150 g)
- 100 g spinazie (vers of diepvries)
- 1 blik kokosmelk (200 ml)
- 1 eetlepel curry poeder (15 g)
- Zout en peper naar smaak

**Bereidingstip:**
Kook de rijst volgens de verpakking. Snijd de courgette en paprika in blokjes. Bak de courgette en paprika in een pan, voeg de kikkererwten, kokosmelk, curry poeder en spinazie toe. Laat het 10 minuten sudderen. Serveer de curry met de gekookte rijst.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Duplicate check status: Dubbel

### Dinsdag lunch

- Record ID: `rec1hRo98cVdIjbwV`
- Bouwsteen naam: Dinsdag lunch
- Dag: Dinsdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak een goedkope SUPRSLIM lunch van maximaal 450 kcal. Gebruik alleen: volkorenbrood, wraps, kip, tonijn, bonen, hummus, komkommer, paprika en wortel. Gebruik maximaal 30 g hummus. Maak een variatie op maandag, geen exacte herhaling. Geef alleen: naam gerecht, ingredienten met hoeveelheden en korte bereidingstip.

#### AI output

### Tonijn- en Groentewrap

**Ingrediënten:**
- 1 volkorenwrap
- 100 g tonijn (uit blik, op water)
- 30 g hummus
- 50 g komkommer (in plakjes)
- 50 g paprika (in reepjes)
- 50 g wortel (geraspt)

**Bereidingstip:**
Smeer de hummus over de wrap, leg de tonijn erop en voeg de komkommer, paprika en wortel toe. Rol op en snijd doormidden.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Genereren

### Donderdag ontbijt

- Record ID: `rec2MhNFmUQxZ3eGZ`
- Bouwsteen naam: Donderdag ontbijt
- Dag: Donderdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Ontbijt
- Duplicate check status: Uniek

### Maandag diner

- Record ID: `rec2oZa1Q4CR60JN8`
- Bouwsteen naam: Maandag diner
- Dag: Maandag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Diner
- Duplicate check status: Uniek

### Dinsdag lunch

- Record ID: `rec34Hyl5kAkAyv8g`
- Bouwsteen naam: Dinsdag lunch
- Dag: Dinsdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Lunch
- Duplicate check status: Uniek

### Vrijdag snack

- Record ID: `rec3rDsiRPXvzCAIL`
- Bouwsteen naam: Vrijdag snack
- Dag: Vrijdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Snack
- Duplicate check status: Uniek

### Donderdag ontbijt

- Record ID: `rec4Q8W0btnJrioHI`
- Bouwsteen naam: Donderdag ontbijt
- Dag: Donderdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Havermout met Banaan en Pindakaas

**Ingrediënten:**
- 50 g havermout
- 1 middelgrote banaan (ongeveer 120 g)
- 1 theelepel pindakaas (10 g)
- 200 ml ongezoete amandelmelk of halfvolle melk

**Bereidingstip:**
Kook de havermout met de amandelmelk volgens de verpakking. Snijd de banaan in plakjes en voeg deze samen met de pindakaas toe aan de gekookte havermout. Goed doorroeren en serveren.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Ontbijt
- Duplicate check status: Uniek
- Week startdatum: 2026-05-01

### Vrijdag diner

- Record ID: `rec4tzOob9Pr5awEm`
- Bouwsteen naam: Vrijdag diner
- Dag: Vrijdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Diner
- Duplicate check status: Uniek

### Woensdag diner

- Record ID: `rec53GwQWpzV2HiGW`
- Bouwsteen naam: Woensdag diner
- Dag: Woensdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Diner
- Duplicate check status: Uniek

### Dinsdag ontbijt

- Record ID: `rec59ut6VTgvLBeui`
- Bouwsteen naam: Dinsdag ontbijt
- Dag: Dinsdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Havermout met banaan en pindakaas

**Ingrediënten:**
- 40 g havermout
- 200 ml water of melk
- 1 kleine banaan
- 1 tl pindakaas
- Snufje kaneel (optioneel)

**Bereidingstip:**
Kook de havermout met water of melk volgens de aanwijzingen op de verpakking. Snijd de banaan in plakjes en voeg deze samen met de pindakaas en eventueel kaneel toe aan de havermout zodra deze klaar is. Roer goed door en serveer warm.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Ontbijt
- Duplicate check status: Uniek
- Week startdatum: 2026-05-01

### Woensdag diner

- Record ID: `rec5PbKHAVKGLAG22`
- Bouwsteen naam: Woensdag diner
- Dag: Woensdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Diner
- Duplicate check status: Uniek

### Woensdag ontbijt

- Record ID: `rec6PFJacgKv5hSEM`
- Bouwsteen naam: Woensdag ontbijt
- Dag: Woensdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik: havermout, kwark, yoghurt, banaan, appel, pindakaas. Max 1 tl pindakaas. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Havermout met fruit en pindakaas

**Ingrediënten:**
- 50 g havermout
- 150 g magere kwark
- 1 kleine banaan
- 1/2 appel
- 1 tl pindakaas

**Bereidingstip:** Kook de havermout met 150 ml water of melk totdat het dik is. Snijd de banaan en appel in stukjes en meng deze door de gekookte havermout. Schep de kwark erop en voeg de pindakaas toe voor extra smaak.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: gebruik aanbiedingen met prioriteit 4-5 als basis, blijf binnen budget €42-€56 per week (max €70), houd kcal per maaltijd: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingrediënten.

### Woensdag ontbijt

- Record ID: `rec6cQfSLc1ZH1hjS`
- Bouwsteen naam: Woensdag ontbijt
- Dag: Woensdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Ontbijt
- Duplicate check status: Uniek

### Donderdag lunch

- Record ID: `rec6oHeMgFO0dBU16`
- Bouwsteen naam: Donderdag lunch
- Dag: Donderdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Lunch
- Duplicate check status: Uniek

### Woensdag snack

- Record ID: `rec7WVadgCsnP1jis`
- Bouwsteen naam: Woensdag snack
- Dag: Woensdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik: kwark, yoghurt, appel, banaan, pindakaas, wortel, komkommer, hummus. Max 1 tl pindakaas. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Appel met kwark en pindakaas

**Ingrediënten:**
- 150 g magere kwark
- 1 kleine appel
- 1 tl pindakaas (ongeveer 15 g)
  
**Bereidingstip:** Snijd de appel in plakjes en serveer met kwark en een lepel pindakaas eroverheen. Geniet van de combinatie!
- Status: Gegenereerd
- Run status: Klaar

#### Regels snapshot

SUPRSLIM regels: gebruik aanbiedingen met prioriteit 4-5 als basis, blijf binnen budget €42-€56 per week (max €70), houd kcal per maaltijd: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingrediënten.

### Dinsdag ontbijt

- Record ID: `rec9PUVpxOrVv5auV`
- Bouwsteen naam: Dinsdag ontbijt
- Dag: Dinsdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Ontbijt
- Duplicate check status: Uniek

### Vrijdag ontbijt

- Record ID: `rec9aW8Jf2A4CBAqP`
- Bouwsteen naam: Vrijdag ontbijt
- Dag: Vrijdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik: havermout, kwark, yoghurt, banaan, appel, pindakaas. Max 1 tl pindakaas. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Ontbijt: Havermout met Kwark en Fruit**

**Ingrediënten:**
- 40 g havermout
- 150 g kwark
- 1/2 banaan (ongeveer 60 g)
- 1/2 appel (ongeveer 60 g)
- 1 theelepel pindakaas

**Bereidingstip:**
Kook de havermout met water of melk volgens de instructies. Meng de kwark erdoor, snijd de banaan en appel in stukjes en voeg deze samen met de pindakaas toe aan de havermout. Serveer warm.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Genereren

### Maandag lunch

- Record ID: `recATzXrcLoBBXrkn`
- Bouwsteen naam: Maandag lunch
- Dag: Maandag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Lunch
- Duplicate check status: Uniek

### Maandag snack

- Record ID: `recBgEwxopdHY3C0a`
- Bouwsteen naam: Maandag snack
- Dag: Maandag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Duplicate check status: Dubbel

### Dinsdag lunch

- Record ID: `recBt1sAGjBDncsQM`
- Bouwsteen naam: Dinsdag lunch
- Dag: Dinsdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Lunch
- Duplicate check status: Uniek

### Donderdag diner

- Record ID: `recCMrf0QKLdrDxjo`
- Bouwsteen naam: Donderdag diner
- Dag: Donderdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik: rijst, volkoren pasta, kip, bonen, tonijn, eieren, diepvriesgroenten, tomatensaus. Max 75 g rijst of pasta ongekookt. Geen olie. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht**: Kip met rijst en groenten in tomatensaus

**Ingrediënten**:
- 75 g ongekookte rijst
- 150 g kipfilet
- 200 g diepvriesgroenten
- 200 g tomatensaus
- Zout en peper naar smaak

**Bereidingstip**:
Kook de rijst volgens de verpakking. Bak de kipfilet in een pan tot deze gaar is en voeg de diepvriesgroenten en tomatensaus toe. Laat alles samen wat pruttelen. Serveer de kip met de groenten en tomatensaus bovenop de rijst.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Genereren

### Woensdag snack

- Record ID: `recDNqxx2muEYeZSJ`
- Bouwsteen naam: Woensdag snack
- Dag: Woensdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Snack
- Duplicate check status: Uniek

### Maandag ontbijt

- Record ID: `recDnsLwhLvTKCEUT`
- Bouwsteen naam: Maandag ontbijt
- Dag: Maandag
- Maaltijdtype: Ontbijt
- Kcal target: 400
- Gerecht: Havermoutbowl met banaan en pindakaas
- Ingrediënten: 40 g havermout; 150 g magere kwark; 100 g magere yoghurt; 1 kleine banaan; 1 kleine appel; 1 theelepel pindakaas

#### Bereidingstip

Kook de havermout met water. Snijd banaan en appel. Meng met kwark en yoghurt en gebruik 1 theelepel pindakaas als topping.
- Budgetcheck: 4
- Kwaliteitscheck: 4
- Goedgekeurd: ja

#### AI prompt

Maak een goedkoop SUPRSLIM ontbijt van maximaal 400 kcal. Gebruik alleen: havermout, magere kwark, magere yoghurt, banaan, appel en pindakaas. Let op: gebruik maximaal 1 theelepel pindakaas. Geef alleen: naam gerecht, ingrediënten met hoeveelheden en korte bereidingstip.

#### AI output

### Naam gerecht: Havermoutbowl met Banaan en Pindakaas

#### Ingrediënten:
- 40 g havermout
- 150 g magere kwark
- 100 g magere yoghurt
- 1 kleine banaan (ongeveer 100 g)
- 1 kleine appel (ongeveer 100 g)
- 1 theelepel pindakaas (ongeveer 5 g)

#### Bereidingstip:
Kook de havermout met water of melk volgens de verpakking. Snijd de banaan en appel in stukjes. Meng de gekookte havermout met magere kwark en yoghurt. Voeg de stukjes banaan en appel toe, en top af met de pindakaas. Geniet van je heerlijke en voedzame ontbijtbowl!
- Status: Goedgekeurd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Klaar

### Dinsdag snack

- Record ID: `recFxtf0JghdqOI44`
- Bouwsteen naam: Dinsdag snack
- Dag: Dinsdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak een goedkope SUPRSLIM snack van maximaal 250 kcal. Gebruik alleen: magere kwark, magere yoghurt, appel, banaan, pindakaas, wortel, komkommer en hummus. Gebruik maximaal 1 theelepel pindakaas als je pindakaas gebruikt. Maak een variatie op maandag, geen exacte herhaling. Geef alleen: naam snack, ingredienten met hoeveelheden en korte bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Maandag diner

- Record ID: `recGLRUNEqlizUmMj`
- Bouwsteen naam: Maandag diner
- Dag: Maandag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Diner
- Duplicate check status: Uniek

### Dinsdag snack

- Record ID: `recGNUsZCK1xTmMjP`
- Bouwsteen naam: Dinsdag snack
- Dag: Dinsdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Snack: Appel met Hummus**

**Ingrediënten:**
- 1 middelgrote appel (ca. 150 g)
- 30 g hummus
- 1 tl pindakaas (ca. 15 g)

**Bereidingstip:**
Snijd de appel in schijven en serveer met hummus en een beetje pindakaas voor extra smaak.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Snack
- Duplicate check status: Uniek
- Week startdatum: 2026-05-01

### Vrijdag snack

- Record ID: `recGbSSTT9gXv8rs7`
- Bouwsteen naam: Vrijdag snack
- Dag: Vrijdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik: kwark, yoghurt, appel, banaan, pindakaas, wortel, komkommer, hummus. Max 1 tl pindakaas. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Maandag ontbijt

- Record ID: `recGnIwqj3OTFiugj`
- Bouwsteen naam: Maandag ontbijt
- Dag: Maandag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Havermout met banaan en pindakaas

**Ingrediënten:**
- 50 gram havermout
- 1 middelgrote banaan (ongeveer 100 gram)
- 1 theelepel pindakaas (5 gram)
- 200 ml water of melk (kies voor een goedkope plantaardige variant als melk in aanbieding is)

**Bereidingstip:** Kook de havermout in het water of de melk volgens de verpakking. Voeg de in plakjes gesneden banaan en de pindakaas toe, roer goed door en serveer warm.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Ontbijt
- Duplicate check status: Dubbel

### Maandag ontbijt

- Record ID: `recHeB6uLbwjZlpaK`
- Bouwsteen naam: Maandag ontbijt
- Dag: Maandag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Duplicate check status: Dubbel

### Dinsdag diner

- Record ID: `recHyzeMUDVvNvsmT`
- Bouwsteen naam: Dinsdag diner
- Dag: Dinsdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Kip met groenten en rijst

**Ingrediënten:**
- 150 g kipfilet
- 75 g ongekookte witte rijst
- 200 g gemengde groenten (bijv. diepvriesmix)
- 1 teentje knoflook
- 1 eetlepel sojasaus
- 1/2 theelepel gemberpoeder
- Peper en zout naar smaak

**Bereidingstip:**
Kook de rijst volgens de aanwijzingen op de verpakking. Bak de kipfilet in een pan met een beetje water tot deze gaar is, voeg de knoflook, gember en gemengde groenten toe en bak kort mee. Voeg de sojasaus toe en laat een paar minuten staan. Serveer de kip en groenten bovenop de rijst.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Diner
- Duplicate check status: Uniek
- Week startdatum: 2026-05-01

### Donderdag diner

- Record ID: `recIARrmXkYC62Muk`
- Bouwsteen naam: Donderdag diner
- Dag: Donderdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Diner
- Duplicate check status: Uniek

### Maandag diner

- Record ID: `recID3b8Fo4Ne74Xl`
- Bouwsteen naam: Maandag diner
- Dag: Maandag
- Maaltijdtype: Diner
- Kcal target: 650
- Gerecht: Tonijn- en groentepasta
- Ingrediënten: 75 g volkoren pasta; 150 g tonijn uit blik; 200 g diepvriesgroenten; 100 g tomatensaus; peper en zout

#### Bereidingstip

Kook de pasta, voeg diepvriesgroenten de laatste 5 minuten toe, giet af en meng met tonijn en tomatensaus. Warm kort door. Geen olie nodig.
- Budgetcheck: 4
- Kwaliteitscheck: 4
- Goedgekeurd: ja

#### AI prompt

Maak een goedkoop SUPRSLIM diner van maximaal 650 kcal. Gebruik alleen: rijst, volkoren pasta, kip, bonen, tonijn, eieren, diepvriesgroenten en tomatensaus. Geef alleen: naam gerecht, ingrediënten met hoeveelheden en korte bereidingstip. Houd het simpel, budgetvriendelijk en geschikt voor mealprep.

#### AI output

### Gerecht: Tonijn- en groentepasta

Ingrediënten:
- 75 g volkoren pasta
- 150 g tonijn uit blik
- 200 g diepvriesgroenten
- 100 g tomatensaus
- Peper en zout

Bereidingstip:
Kook de pasta, voeg diepvriesgroenten de laatste 5 minuten toe, giet af en meng met tonijn en tomatensaus. Warm kort door. Geen olie nodig.

Kcal-check: aangepast naar circa 600-650 kcal.
- Status: Goedgekeurd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Klaar

### Vrijdag lunch

- Record ID: `recJGvALOHUsTZHy7`
- Bouwsteen naam: Vrijdag lunch
- Dag: Vrijdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Lunch
- Duplicate check status: Uniek

### Woensdag diner

- Record ID: `recK1PJGYL5p2yajt`
- Bouwsteen naam: Woensdag diner
- Dag: Woensdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Kruidige kip met groenten en rijst

**Ingrediënten:**
- 150 g kipfilet
- 75 g ongekookte basmatirijst
- 200 g gemengde diepvriesgroenten (zoals broccoli, wortel, en paprika)
- 1 teentje knoflook (geperst)
- 1 theelepel paprikapoeder
- Zout en peper naar smaak
- 300 ml groentenbouillon

**Bereidingstip:**
Kook de rijst volgens de aanwijzingen op de verpakking. Bak ondertussen de kipfilet in een pan tot ze goudbruin is. Voeg de knoflook en paprikapoeder toe en bak nog 1 minuut. Voeg de diepvriesgroenten en bouillon toe, laat ongeveer 10 minuten sudderen. Serveer de kip met de groenten en rijst.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Diner
- Duplicate check status: Uniek
- Week startdatum: 2026-05-01

### Vrijdag ontbijt

- Record ID: `recLOqPSTAr6ZqZ98`
- Bouwsteen naam: Vrijdag ontbijt
- Dag: Vrijdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Ontbijt
- Duplicate check status: Uniek

### Dinsdag snack

- Record ID: `recMnp4CUkYj3Yd7m`
- Bouwsteen naam: Dinsdag snack
- Dag: Dinsdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Snack
- Duplicate check status: Uniek

### Dinsdag ontbijt

- Record ID: `recNNua0H8Sp6Jsum`
- Bouwsteen naam: Dinsdag ontbijt
- Dag: Dinsdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak een goedkoop SUPRSLIM ontbijt van maximaal 400 kcal. Gebruik alleen: havermout, magere kwark, magere yoghurt, banaan, appel en pindakaas. Gebruik maximaal 1 theelepel pindakaas. Maak een duidelijke variatie op maandag, geen exacte herhaling. Geef alleen: naam gerecht, ingredienten met hoeveelheden en korte bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Donderdag ontbijt

- Record ID: `recPtAsuZEOYrEkTl`
- Bouwsteen naam: Donderdag ontbijt
- Dag: Donderdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Ontbijt
- Duplicate check status: Uniek

### Vrijdag lunch

- Record ID: `recR3iUTVUpRE3Xq7`
- Bouwsteen naam: Vrijdag lunch
- Dag: Vrijdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Hummuswrap met groenten

**Ingrediënten:**
- 1 volkoren wrap (50 g)
- 30 g hummus
- 100 g komkommer, in plakjes
- 100 g paprika, in reepjes
- 50 g geraspte wortel
- 50 g spinazie
- Peper en zout naar smaak

**Bereidingstip:**
Smeer de hummus over de volkoren wrap, leg de groenten erop, breng op smaak met peper en zout, rol de wrap op en snijd doormidden.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Lunch
- Duplicate check status: Uniek
- Week startdatum: 2026-05-01

### Vrijdag diner

- Record ID: `recR5ub8SfeFqcH5s`
- Bouwsteen naam: Vrijdag diner
- Dag: Vrijdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Groentecurry met Kip en Rijst

**Ingrediënten:**
- 150 g kipfilet
- 1 rode paprika
- 1 courgette
- 100 g spinazie (diepvries)
- 75 g ongekookte basmatirijst
- 200 ml kokosmelk (light)
- 1 eetlepel curry poeder
- Peper en zout naar smaak

**Bereidingstip:**
Kook de rijst volgens de verpakking. Bak de kipfilet in een pan tot deze gaar is. Voeg de gesneden paprika en courgette toe en bak enkele minuten mee. Voeg de spinazie, kokosmelk en curry poeder toe en laat het geheel 10 minuten pruttelen. Serveer de curry met de rijst.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Diner
- Duplicate check status: Uniek

### Maandag snack

- Record ID: `recRNT8FRlJxT2Eph`
- Bouwsteen naam: Maandag snack
- Dag: Maandag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Snack
- Duplicate check status: Uniek

### Donderdag lunch

- Record ID: `recRT7KBY4RP27tiX`
- Bouwsteen naam: Donderdag lunch
- Dag: Donderdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Groentewrap met hummus en kipfilet

**Ingrediënten:**
- 1 volkoren wrap (ca. 60 g)
- 100 g kipfilet, gekookt of gegrild
- 50 g komkommer, in plakjes
- 50 g paprika, in reepjes
- 30 g hummus
- 20 g rucola

**Bereidingstip:** Besmeer de wrap met hummus, leg de kipfilet, komkommer, paprika en rucola erop. Rol op en snijd doormidden. Ready to go!
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Lunch
- Duplicate check status: Uniek

### Maandag diner

- Record ID: `recSAZXdHmEVCIn4f`
- Bouwsteen naam: Maandag diner
- Dag: Maandag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Diner
- Duplicate check status: Dubbel

### Woensdag diner

- Record ID: `recTGyUp0sPOX0NsC`
- Bouwsteen naam: Woensdag diner
- Dag: Woensdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik: rijst, volkoren pasta, kip, bonen, tonijn, eieren, diepvriesgroenten, tomatensaus. Max 75 g rijst of pasta ongekookt. Geen olie. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten

#### Regels snapshot

SUPRSLIM regels: gebruik aanbiedingen met prioriteit 4-5 als basis, blijf binnen budget €42-€56 per week (max €70), houd kcal per maaltijd: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingrediënten.

### Maandag lunch

- Record ID: `recTmK5OjScentiAs`
- Bouwsteen naam: Maandag lunch
- Dag: Maandag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Hummus Wrap met Groenten

**Ingrediënten:**
- 1 volkoren wrap (ongeveer 60 g)
- 30 g hummus
- 50 g geraspte wortel
- 50 g komkommer (in plakken)
- 50 g paprika (in plakken)
- 1 kleine tomaat (in plakken)
- Peper en zout naar smaak

**Bereidingstip:**
Smeer de hummus over de volkoren wrap, leg de groenten erop, breng op smaak met peper en zout, rol op en snijd doormidden.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Lunch
- Duplicate check status: Uniek

### Vrijdag snack

- Record ID: `recUbPNpiYRBnSYtX`
- Bouwsteen naam: Vrijdag snack
- Dag: Vrijdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Snack
- Duplicate check status: Uniek

### Woensdag snack

- Record ID: `recVIy9HF5Ldvm381`
- Bouwsteen naam: Woensdag snack
- Dag: Woensdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Snack: Banaan met Pindakaas en Havermout**

**Ingrediënten:**
- 1 grote banaan
- 1 theelepel pindakaas
- 30 gram havermout

**Bereidingstip:**
Snijd de banaan in plakken, besmeer de plakken met pindakaas en bestrooi met havermout. Serveer direct.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Snack
- Duplicate check status: Uniek

### Woensdag lunch

- Record ID: `recVjNw5I9x9zz0Ow`
- Bouwsteen naam: Woensdag lunch
- Dag: Woensdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Lunch
- Duplicate check status: Uniek

### Woensdag ontbijt

- Record ID: `recWPfAdHcAsBA6IO`
- Bouwsteen naam: Woensdag ontbijt
- Dag: Woensdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Havermout met Banaan en Kaneel

**Ingrediënten:**
- 50 g havermout
- 300 ml water of melk
- 1 middelgrote banaan
- 1 tl pindakaas
- 0,5 tl kaneel

**Bereidingstip:**
Kook de havermout in water of melk volgens de instructies. Snijd de banaan in plakjes en roer deze samen met de pindakaas en kaneel door de havermout. Serveer warm.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Ontbijt
- Duplicate check status: Uniek

### Vrijdag diner

- Record ID: `recWxz73JevcnzkE8`
- Bouwsteen naam: Vrijdag diner
- Dag: Vrijdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Diner
- Duplicate check status: Uniek

### Maandag ontbijt

- Record ID: `recX1JYL45DUvHO1R`
- Bouwsteen naam: Maandag ontbijt
- Dag: Maandag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Ontbijt
- Duplicate check status: Uniek

### Donderdag snack

- Record ID: `recaLE8Y6U1A1oI0I`
- Bouwsteen naam: Donderdag snack
- Dag: Donderdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Snack: Banaan met pindakaas en kanneel**  
- 1 middelgrote banaan  
- 1 theelepel pindakaas  
- Een snufje kaneel  

**Bereidingstip:** Snijd de banaan in plakjes, besmeer met pindakaas en bestrooi met kaneel. Geniet direct!
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Snack
- Duplicate check status: Uniek

### Maandag ontbijt

- Record ID: `recb7Rj4hwo6YydHF`
- Bouwsteen naam: Maandag ontbijt
- Dag: Maandag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Havermout met banaan en pindakaas

**Ingrediënten:**
- 50g havermout
- 250ml water of melk
- 1 kleine banaan (ca. 100g)
- 1 tl pindakaas (ca. 15g)
- Kaneel (optioneel)

**Bereidingstip:** Kook de havermout met water of melk volgens de verpakking. Snijd de banaan in plakjes en meng deze door de havermout als het klaar is. Voeg de pindakaas en eventueel een snufje kaneel toe. Serveer warm.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Ontbijt
- Duplicate check status: Uniek

### Donderdag snack

- Record ID: `recbwVxWHrao7LfAU`
- Bouwsteen naam: Donderdag snack
- Dag: Donderdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Snack
- Duplicate check status: Uniek

### Donderdag lunch

- Record ID: `reccc9p1f9H9fjVez`
- Bouwsteen naam: Donderdag lunch
- Dag: Donderdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Lunch
- Duplicate check status: Uniek

### Dinsdag lunch

- Record ID: `recdYIHlWlkUet4Ah`
- Bouwsteen naam: Dinsdag lunch
- Dag: Dinsdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam gerecht:** Hummus Wrap met Groenten

**Ingrediënten:**
- 1 volkoren wrap (ongeveer 60 g)
- 30 g hummus
- 100 g komkommer (in plakjes)
- 100 g paprika (in reepjes)
- 50 g wortel (geraspt)
- 20 g feta (optie voor extra smaak, kan weggelaten worden)
- Peper en zout naar smaak

**Bereidingstip:**
Smeer de hummus gelijkmatig over de volkoren wrap, leg de komkommer, paprika en wortel erop, bestrooi met peper, zout en eventueel feta. Rol de wrap stevig op en snijd doormidden.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Lunch
- Duplicate check status: Uniek

### Donderdag snack

- Record ID: `recdgInGDieJ4S53M`
- Bouwsteen naam: Donderdag snack
- Dag: Donderdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik: kwark, yoghurt, appel, banaan, pindakaas, wortel, komkommer, hummus. Max 1 tl pindakaas. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Woensdag snack

- Record ID: `recdiMEOEaFUUKUZL`
- Bouwsteen naam: Woensdag snack
- Dag: Woensdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Snack
- Duplicate check status: Uniek

### Vrijdag ontbijt

- Record ID: `recf6uGx1OQg7OHlr`
- Bouwsteen naam: Vrijdag ontbijt
- Dag: Vrijdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Ontbijt: Havermout met Banaan en Pindakaas

**Ingrediënten:**
- 40 g havermout
- 200 ml water of melk
- 1/2 banaan (ongeveer 60 g)
- 1 theelepel pindakaas (5 g)
- Kaneel naar smaak

**Bereidingstip:**
Kook de havermout met water of melk totdat het romig is. Voeg in plakjes gesneden banaan en pindakaas toe, en bestrooi met kaneel. Serveer warm.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Ontbijt
- Duplicate check status: Uniek

### Maandag diner

- Record ID: `recfDaO6KTs7tpHCG`
- Bouwsteen naam: Maandag diner
- Dag: Maandag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Naam gerecht: Eenpansgerecht met kip en groenten

#### Ingrediënten:
- 150 g kipfilet (in blokjes)
- 75 g ongekookte basmatirijst
- 200 g gemengde diepvriesgroenten
- 1 ui (fijngehakt)
- 2 teentjes knoflook (geperst)
- 600 ml kippenbouillon (zoutarm)
- 1 theelepel paprikapoeder
- Peper en zout naar smaak

#### Bereidingstip:
1. Bak de ui en knoflook in een pan zonder olie tot ze glazig zijn.
2. Voeg de kipblokjes toe en bak deze gaar.
3. Voeg de rijst, gemengde groenten, paprikapoeder, peper en zout toe.
4. Giet de kippenbouillon erbij en breng aan de kook.
5. Laat 15-20 minuten koken tot de rijst gaar is. Serveer warm.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Diner
- Duplicate check status: Uniek

### Maandag snack

- Record ID: `recg93qSTwnXYIKJ2`
- Bouwsteen naam: Maandag snack
- Dag: Maandag
- Maaltijdtype: Snack
- Kcal target: 250
- Gerecht: Fruitige kwarkkom
- Ingrediënten: 150 g magere kwark; 1 kleine appel; 1 theelepel pindakaas; kaneel optioneel
- Bereidingstip: Meng magere kwark met appelblokjes en 1 theelepel pindakaas. Voeg eventueel kaneel toe.
- Budgetcheck: 5
- Kwaliteitscheck: 5
- Goedgekeurd: ja

#### AI prompt

Maak een goedkope SUPRSLIM snack van maximaal 250 kcal. Gebruik alleen: magere kwark, magere yoghurt, appel, banaan, pindakaas, wortel, komkommer en hummus. Let op: gebruik maximaal 1 theelepel pindakaas als je pindakaas gebruikt. Geef alleen: naam snack, ingrediënten met hoeveelheden en korte bereidingstip.

#### AI output

### Naam Snack: Fruitige Kwarkkom

#### Ingrediënten:
- 150 g magere kwark
- 1 kleine appel (ongeveer 100 g), in blokjes
- 1 theelepel pindakaas (5 g)
- Snufje kaneel (optioneel)

#### Bereidingstip:
Meng de magere kwark met de in blokjes gesneden appel en de pindakaas. Voeg eventueel een snufje kaneel toe voor extra smaak.

Calorieen: ongeveer 230 kcal.
- Status: Goedgekeurd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Klaar

### Dinsdag diner

- Record ID: `rech7hQfeAKSw01xd`
- Bouwsteen naam: Dinsdag diner
- Dag: Dinsdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak een goedkoop SUPRSLIM diner van maximaal 650 kcal. Gebruik alleen: rijst, volkoren pasta, kip, bonen, tonijn, eieren, diepvriesgroenten en tomatensaus. Gebruik maximaal 75 g pasta of rijst ongekookt en geen olie. Maak een variatie op maandag, geen exacte herhaling. Geef alleen: naam gerecht, ingredienten met hoeveelheden en korte bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Donderdag diner

- Record ID: `rechmFjQMN5PEYl4F`
- Bouwsteen naam: Donderdag diner
- Dag: Donderdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Diner
- Duplicate check status: Uniek

### Vrijdag diner

- Record ID: `rechv5iGas35PXrOz`
- Bouwsteen naam: Vrijdag diner
- Dag: Vrijdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik: rijst, volkoren pasta, kip, bonen, tonijn, eieren, diepvriesgroenten, tomatensaus. Max 75 g rijst of pasta ongekookt. Geen olie. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Vrijdag ontbijt

- Record ID: `rechvXLgQZyFn4f69`
- Bouwsteen naam: Vrijdag ontbijt
- Dag: Vrijdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Ontbijt
- Duplicate check status: Uniek

### Donderdag lunch

- Record ID: `reciFreEpI2J59H3Q`
- Bouwsteen naam: Donderdag lunch
- Dag: Donderdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik: volkorenbrood, wrap, kip, tonijn, bonen, hummus, komkommer, paprika, wortel. Max 30 g hummus. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Donderdag diner

- Record ID: `recj5crrQk37RGrTe`
- Bouwsteen naam: Donderdag diner
- Dag: Donderdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Kruidige Gevulde Paprika met Rijst

**Ingrediënten:**
- 2 grote paprika's
- 100 g gekookte quinoa (of 75 g ongekookte rijst)
- 1 blikje tomatenblokjes (400 g)
- 1 ui, fijngesnipperd
- 1 teentje knoflook, geperst
- 1 tl gemalen komijn
- 1 tl paprikapoeder
- 100 g zwarte bonen (uit blik, afgespoeld)
- Zout en peper naar smaak
- 30 g geraspte kaas (optioneel)

**Bereidingstip:**
Verwarm de oven voor op 180°C. Snijd de paprika's doormidden en verwijder de zaadjes. Bak ui en knoflook in een pan tot ze glazig zijn. Voeg tomatenblokjes, kruiden en zwarte bonen toe. Laat 10 minuten sudderen. Meng in een kom met quinoa/rijst. Vul de paprika's en leg ze in een ovenschaal. Bestrooi met geraspte kaas. Bak 25-30 minuten in de oven. Serveer warm.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Diner
- Duplicate check status: Uniek

### Dinsdag diner

- Record ID: `reckc0CtRyEKhWIVd`
- Bouwsteen naam: Dinsdag diner
- Dag: Dinsdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Diner
- Duplicate check status: Uniek

### Dinsdag ontbijt

- Record ID: `recknOIswvXiIwGvB`
- Bouwsteen naam: Dinsdag ontbijt
- Dag: Dinsdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Ontbijt
- Duplicate check status: Uniek

### Maandag snack

- Record ID: `reckwKB1sV5OTMTaN`
- Bouwsteen naam: Maandag snack
- Dag: Maandag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Snack
- Duplicate check status: Dubbel

### Donderdag ontbijt

- Record ID: `reckzFfIqH1ajjOtN`
- Bouwsteen naam: Donderdag ontbijt
- Dag: Donderdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik: havermout, kwark, yoghurt, banaan, appel, pindakaas. Max 1 tl pindakaas. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

### Vrijdag lunch

- Record ID: `recm4txfFeIvklfCn`
- Bouwsteen naam: Vrijdag lunch
- Dag: Vrijdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Lunch
- Duplicate check status: Uniek

### Maandag lunch

- Record ID: `recn4xSt4KWXsrLO4`
- Bouwsteen naam: Maandag lunch
- Dag: Maandag
- Maaltijdtype: Lunch
- Kcal target: 450
- Gerecht: Volkoren wrap met tonijn en groenten
- Ingrediënten: 1 volkoren wrap; 100 g tonijn uit blik op water; 30 g hummus; 50 g komkommer; 50 g paprika; 50 g wortel
- Bereidingstip: Smeer 30 g hummus over de wrap, verdeel tonijn en groenten erover, rol strak op en snijd doormidden.
- Budgetcheck: 4
- Kwaliteitscheck: 4
- Goedgekeurd: ja

#### AI prompt

Maak een goedkope SUPRSLIM lunch van maximaal 450 kcal. Gebruik alleen: volkorenbrood, wraps, kip, tonijn, bonen, hummus, komkommer, paprika en wortel. Geef alleen: naam gerecht, ingrediënten met hoeveelheden en korte bereidingstip. Houd het simpel, budgetvriendelijk en vullend.

#### AI output

### Naam gerecht: Volkoren wrap met tonijn en groenten

Ingrediënten:
- 1 volkoren wrap
- 100 g tonijn uit blik op water
- 30 g hummus
- 50 g komkommer
- 50 g paprika
- 50 g wortel

Bereidingstip:
Smeer 30 g hummus over de wrap, verdeel tonijn en groenten erover, rol strak op en snijd doormidden.

Kcal-check: aangepast naar circa 430-440 kcal.
- Status: Goedgekeurd
- Run status: Klaar
- Weeknummer: Week 1
- Weekfase: Klaar

### Dinsdag diner

- Record ID: `recnaCnJiWHwfkQOc`
- Bouwsteen naam: Dinsdag diner
- Dag: Dinsdag
- Maaltijdtype: Diner
- Kcal target: 650

#### AI prompt

Maak diner max 650 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 75 g rijst of pasta ongekookt. Geen olie. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Dinsdag-Diner
- Duplicate check status: Uniek

### Woensdag ontbijt

- Record ID: `recoG53sKOE3pKhub`
- Bouwsteen naam: Woensdag ontbijt
- Dag: Woensdag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Ontbijt
- Duplicate check status: Uniek

### Woensdag lunch

- Record ID: `recoM9xEoYlUXLhra`
- Bouwsteen naam: Woensdag lunch
- Dag: Woensdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik: volkorenbrood, wrap, kip, tonijn, bonen, hummus, komkommer, paprika, wortel. Max 30 g hummus. Variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 1
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: gebruik aanbiedingen met prioriteit 4-5 als basis, blijf binnen budget €42-€56 per week (max €70), houd kcal per maaltijd: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingrediënten.

### Maandag snack

- Record ID: `recpjQjnZb7ZqxJBL`
- Bouwsteen naam: Maandag snack
- Dag: Maandag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Naam snack:** Bananen met pindakaas

**Ingrediënten:**
- 1 rijpe banaan (ca. 100g)
- 1 theelepel pindakaas (ca. 5g)
- 10 amandelen (ca. 15g)

**Bereidingstip:**
Snijd de banaan in plakjes en smeer de pindakaas erover. Serveer met de amandelen erbij.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Snack
- Duplicate check status: Uniek

### Maandag snack

- Record ID: `recqHfFYLbct9Yz0Z`
- Bouwsteen naam: Maandag snack
- Dag: Maandag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Snack
- Duplicate check status: Uniek

### Maandag lunch

- Record ID: `recsIaOc97SjkM5TX`
- Bouwsteen naam: Maandag lunch
- Dag: Maandag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Duplicate check status: Dubbel

### Woensdag lunch

- Record ID: `recsaRY6BbDIYwuZe`
- Bouwsteen naam: Woensdag lunch
- Dag: Woensdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Lunch
- Duplicate check status: Uniek

### Test Weekgenerator - Maandag ontbijt

- Record ID: `recsbRrEpGm4lg3us`
- Bouwsteen naam: Test Weekgenerator - Maandag ontbijt
- Dag: Maandag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Max 1 tl pindakaas. Geef naam, ingrediënten met hoeveelheden, bereidingstip.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is €42-€56 per persoon per week, max €70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingrediënten.
- Duplicate check status: Dubbel

### Maandag ontbijt

- Record ID: `recso7VurxtnbkvQ6`
- Bouwsteen naam: Maandag ontbijt
- Dag: Maandag
- Maaltijdtype: Ontbijt
- Kcal target: 400

#### AI prompt

Maak ontbijt max 400 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Ontbijt
- Duplicate check status: Uniek

### Maandag lunch

- Record ID: `recu3M8tSMXMyt13N`
- Bouwsteen naam: Maandag lunch
- Dag: Maandag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Afgekeurd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Klaar

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Lunch
- Duplicate check status: Dubbel

### Woensdag lunch

- Record ID: `recxt62ASSlR1qrA1`
- Bouwsteen naam: Woensdag lunch
- Dag: Woensdag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

### Naam gerecht
Volkoren wrap met hummus en groenten

### Ingrediënten
- 1 volkoren wrap (50g)
- 30g hummus
- 100g komkommer (in reepjes)
- 100g paprika (in reepjes)
- 50g geraspte wortel
- 50g gemengde sla
- Peper en zout naar smaak

### Bereidingstip
Besmeer de volkoren wrap met hummus, beleg met de gesneden groenten en sla, en rol de wrap stevig op. Snijd doormidden en serveer direct.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Woensdag-Lunch
- Duplicate check status: Uniek

### Vrijdag snack

- Record ID: `recyfLeBobiPOiRAp`
- Bouwsteen naam: Vrijdag snack
- Dag: Vrijdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.

#### AI output

**Snack:** Munt-yoghurt met fruit

**Ingrediënten:**  
- 150 gram natuur-yoghurt  
- 1 theelepel pindakaas  
- 100 gram gemengd fruit (bijvoorbeeld bessen of banaan)  
- Verse munt (optioneel)  

**Bereidingstip:**  
Meng de natuur-yoghurt met de pindakaas en serveer met het gesneden fruit en verse munt.
- Status: Gegenereerd
- Run status: Klaar
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Vrijdag-Snack
- Duplicate check status: Uniek

### Donderdag snack

- Record ID: `reczaViPzUp4CJExX`
- Bouwsteen naam: Donderdag snack
- Dag: Donderdag
- Maaltijdtype: Snack
- Kcal target: 250

#### AI prompt

Maak snack max 250 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 1 tl pindakaas. Maak variatie op vorige dagen. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Donderdag-Snack
- Duplicate check status: Uniek

### Maandag lunch

- Record ID: `reczxs4puiBcFMx38`
- Bouwsteen naam: Maandag lunch
- Dag: Maandag
- Maaltijdtype: Lunch
- Kcal target: 450

#### AI prompt

Maak lunch max 450 kcal. Gebruik aanbiedingen waar mogelijk. Gebruik simpele goedkope producten. Max 30 g hummus. Geef naam, ingredienten met hoeveelheden, bereidingstip.
- Status: Te genereren
- Automatisering actief: ja
- Run status: Wachten
- Weeknummer: Week 2
- Weekfase: Genereren

#### Regels snapshot

SUPRSLIM regels: aanbiedingen zijn leidend als ze prioriteit 4-5 hebben. Budgetdoel is EUR 42-56 per persoon per week, max EUR 70. Kcal targets: ontbijt 400, lunch 450, diner 650, snack 250. Gebruik simpele, goedkope en herbruikbare ingredienten.
- Unieke bouwsteen sleutel: Week 2-Maandag-Lunch
- Duplicate check status: Uniek

