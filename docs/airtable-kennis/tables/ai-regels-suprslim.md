# AI Regels SUPRSLIM

Centrale regels en uitgangspunten voor SUPRSLIM AI agents, weekmenu generatie, aanbiedingen en budgetnormen.

- Table ID: `tbl8OrVIrFJN5hO1h`
- Primary field: Regel titel
- Records: 13

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Regel titel | `singleLineText` | Naam van de AI-regel of beleidsregel. |
| Categorie | `singleSelect` |  |
| Regel tekst | `multilineText` | Volledige regel of instructie die AI en automatiseringen moeten volgen. |
| Prioriteit | `rating` |  |
| Actief | `checkbox` |  |
| Laatst bijgewerkt | `date` |  |
| Categorie tekst | `singleLineText` | Vrij tekstveld voor categorieën tijdens de bouwfase. Gebruik dit wanneer single-select categorieën nog niet bestaan of niet via API aangemaakt mogen worden. |

## Records

### Airtable is het brein, Make blijft simpel

- Record ID: `rec3FMqECWt4QG8T0`
- Regel titel: Airtable is het brein, Make blijft simpel
- Categorie: Weekmenu

#### Regel tekst

Architectuurregel: Airtable bewaakt de structuur, regels, templates en unieke sleutels. Make moet zo simpel mogelijk blijven en alleen uitvoeren: templates zoeken, records aanmaken/updaten en AI-output verwerken. Duplicate-preventie hoort primair in Airtable via een unieke bouwsteen sleutel: Weeknummer + Dag + Maaltijdtype. Complexe logica, templates en regels worden niet hardcoded in Make maar vastgelegd in Airtable.
- Prioriteit: 5
- Actief: ja

### Kirsten controleert en accordeert voor gebruik

- Record ID: `rec86FwaMrRzq37R0`
- Regel titel: Kirsten controleert en accordeert voor gebruik

#### Regel tekst

AI maakt de briefing, Kirsten controleert praktische uitvoerbaarheid, voorraad, soepplanning, hoeveelheden en contentplanning. Pas na Controle & akkoord = Akkoord mag het weekmenu operationeel gebruikt worden.
- Prioriteit: 5
- Actief: ja
- Laatst bijgewerkt: 2026-04-27

### Donderdag briefing voor komende maandag

- Record ID: `rec9Uz1Pu8SqKRlhq`
- Regel titel: Donderdag briefing voor komende maandag

#### Regel tekst

Make maakt en verstuurt de Kirsten-weekbriefing elke donderdag ochtend voor de week die start op de komende maandag. Weekend is bedoeld voor koken, filmen, voorraad en kleine correcties.
- Prioriteit: 5
- Actief: ja
- Laatst bijgewerkt: 2026-04-27

### Planningregel Kirsten briefing

- Record ID: `recDT6xX1KiIWQFmW`
- Regel titel: Planningregel Kirsten briefing
- Categorie: Weekmenu

#### Regel tekst

SUPRSLIM weekplanning: het weekmenu voor de volgende week moet uiterlijk woensdag worden gegenereerd en gecontroleerd, zodat Kirsten uiterlijk donderdag een briefing ontvangt. De briefing bevat: weekmenu maandag t/m vrijdag, benodigde voorraad/soepen, boodschappenfocus en te maken filmpjes. Kirsten gebruikt donderdag/vrijdag en het weekend voor controle, voorraad en contentproductie. De oude zondaggeneratie is te krap voor boodschappen en content.
- Prioriteit: 5
- Actief: ja

### Budgetnorm SUPRSLIM

- Record ID: `recGuJ3KD1TNXxSkC`
- Regel titel: Budgetnorm SUPRSLIM
- Categorie: Budget

#### Regel tekst

SUPRSLIM budgetnorm: €6-€8 per persoon per dag als doel, €42-€56 per week als richtlijn en maximaal €70 per week. AI moet weekmenu's bouwen die binnen deze grenzen blijven. Als het menu boven €70 per week uitkomt, moet het menu worden aangepast.
- Prioriteit: 5
- Actief: ja

### Actuele hoofdregel SUPRSLIM architectuur

- Record ID: `recLzHeJoVffTq7nY`
- Regel titel: Actuele hoofdregel SUPRSLIM architectuur

#### Regel tekst

Actuele hoofdregel voor SUPRSLIM:

Airtable = bron van waarheid en brein
ChatGPT = werkplaats
Make = uitvoerder
AI = taakgenerator voor kleine controleerbare bouwstenen
Kirsten = kwaliteitscontrole en akkoord

Deze regel is leidend voor prompts, automatiseringen, Airtable-inrichting, Codex/GitHub-bouwtaken en Lovable-aanpassingen. Airtable bewaakt structuur, statussen, regels en akkoordmomenten. ChatGPT wordt gebruikt als werkplaats om taken, prompts, structuren en bouwopdrachten uit te werken. Make voert simpele automatiseringen uit. AI maakt kleine controleerbare bouwstenen en geen grote oncontroleerbare weekmenu's. Kirsten controleert kwaliteit en geeft akkoord voordat outputs operationeel worden gebruikt.
- Prioriteit: 5
- Actief: ja
- Laatst bijgewerkt: 2026-05-06
- Categorie tekst: Systeemarchitectuur

### Codex & Lovable architectuur

- Record ID: `recVkBu0uUVG9VrS5`
- Regel titel: Codex & Lovable architectuur

#### Regel tekst

Airtable blijft het centrale brein van SUPRSLIM. GitHub + Codex worden gebruikt als bouw- en ontwikkelomgeving voor de applicatie. Lovable blijft de visuele editor/interface voor snelle aanpassingen en testen. Make blijft verantwoordelijk voor eenvoudige automatiseringen zoals records ophalen, AI-runs starten, terugschrijven en mails versturen. Geen complexe businesslogica hardcoderen in Lovable of frontend-code. Alle weekmenu-logica, statussen, akkoordmomenten, AI-regels en workflowstructuren blijven beheerd in Airtable. Lovable/Codex mogen alleen UI, lead capture, dashboards, formulieren en API-koppelingen beheren. Geen grote AI-logica direct in frontend verwerken. AI werkt via gecontroleerde Airtable-gestuurde bouwstenen.
- Prioriteit: 5
- Actief: ja
- Laatst bijgewerkt: 2026-05-06
- Categorie tekst: Systeemarchitectuur

### Aanbiedingen zijn leidend binnen SUPRSLIM

- Record ID: `recVylDTBuJbES7OA`
- Regel titel: Aanbiedingen zijn leidend binnen SUPRSLIM
- Categorie: Aanbiedingen

#### Regel tekst

Aanbiedingen zijn leidend voor weekmenu generatie, maar alleen als ze SUPRSLIM-proof zijn. AI moet eerst alle actuele supermarkt-aanbiedingen analyseren en beoordelen. Daarna alleen aanbiedingen gebruiken die goedkoop zijn per portie, passen bij gezond eten of afvallen, simpel te bereiden zijn en meerdere keren per week gebruikt kunnen worden. Producten zoals snoep, frisdrank, alcohol en dure luxeproducten worden genegeerd. Alleen aanbiedingen met hoge prioriteit (4 of 5) worden gebruikt in weekmenu's.
- Prioriteit: 5
- Actief: ja

### Hoofdmenu maximaal 5 ingrediënten

- Record ID: `rechHwTem2oVLHkN8`
- Regel titel: Hoofdmenu maximaal 5 ingrediënten

#### Regel tekst

Bij het bedenken van SUPRSLIM-hoofdmenu's gebruikt AI als uitgangspunt maximaal 5 hoofdingrediënten per hoofdgerecht. Dit is bedoeld om gerechten simpel, betaalbaar, overzichtelijk en makkelijk uitvoerbaar te houden. Kruiden, water, olie, azijn, peper, zout en kleine smaakmakers mogen buiten deze telling vallen als ze logisch en beperkt blijven. Wanneer meer dan 5 ingrediënten echt nodig zijn, moet AI dit expliciet kort motiveren en de eenvoudige variant eerst overwegen.
- Prioriteit: 5
- Actief: ja
- Laatst bijgewerkt: 2026-05-01

### Calorieverdeling per dag

- Record ID: `rectBXfAmlseof2U6`
- Regel titel: Calorieverdeling per dag
- Categorie: Calorie

#### Regel tekst

Dagelijkse calorieverdeling voor SUPRSLIM: ontbijt max 400 kcal, lunch max 450 kcal, diner max 650 kcal en snack max 250 kcal. AI moet zich per bouwsteen aan deze limieten houden en mag geen totale dagberekening uitvoeren.
- Prioriteit: 5
- Actief: ja

### Kirsten weekbriefing is samenvatting, geen nieuw menu

- Record ID: `recvo789XuKelltBT`
- Regel titel: Kirsten weekbriefing is samenvatting, geen nieuw menu

#### Regel tekst

De Kirsten-weekbriefing mag geen nieuw weekmenu verzinnen. De briefing gebruikt alleen bestaande records uit Weekmenu Bouwstenen en benoemt ontbrekende informatie als aandachtspunt.
- Prioriteit: 5
- Actief: ja
- Laatst bijgewerkt: 2026-04-27

### SUPRSLIM werkwijze vastleggingen, reminders en automations

- Record ID: `recxJ4ROawF9tbWAI`
- Regel titel: SUPRSLIM werkwijze vastleggingen, reminders en automations
- Categorie: Werkafspraak

#### Regel tekst

Binnen project SUPRSLIM worden alle besluiten, actiepunten, planningen, reminders, taken, automations en terugkerende opvolgingen duidelijk vastgelegd. Maak altijd onderscheid tussen vaste afspraken, losse actiepunten, terugkerende reminders, automations/terugkerende controles, strategische besluiten en operationele taken. Formuleer vastleggingen direct Airtable-klaar met titel, type vastlegging, status, eigenaar, frequentie/datum indien relevant, korte omschrijving en vervolgstap. Airtable blijft de bron van waarheid; ChatGPT is alleen de werkplaats. Denk actief mee welke punten een reminder of automation moeten worden. Vraag niet telkens opnieuw om context als die al binnen project SUPRSLIM staat. Houd SUPRSLIM praktisch, commercieel en uitvoerbaar. Geef geen losse ideeën zonder vertaling naar actie, planning of vastlegging. Eindig waar nodig met een blok 'Vastleggen in Airtable'.
- Prioriteit: 5
- Actief: ja
- Laatst bijgewerkt: 2026-05-02

### Weekmenu bouwlogica met aanbiedingen

- Record ID: `reczvhM9ZCTrig3Sp`
- Regel titel: Weekmenu bouwlogica met aanbiedingen
- Categorie: Weekmenu

#### Regel tekst

Weekmenu's worden opgebouwd op basis van aanbiedingen met prioriteit 4 of 5. Deze producten moeten meerdere keren in de week terugkomen. Aanvulling gebeurt met vaste budgetproducten. AI moet eerst aanbiedingen selecteren, daarna maaltijden bouwen en vervolgens controleren of het totale weekmenu binnen het budget blijft.
- Prioriteit: 5
- Actief: ja

