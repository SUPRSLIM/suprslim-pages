# AI Specialisten

Specialistische AI-rollen die weekmenu's controleren en verbeteren op smaak, gezondheid, seizoen, supermarktbaarheid, claims en SoepSlim merktoon.

- Table ID: `tbl0GOmdHep4sHUCU`
- Primary field: Specialist naam
- Records: 6

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Specialist naam | `singleLineText` | Naam van de specialistische AI-rol. |
| Rol | `singleSelect` | Korte rolomschrijving. |
| Doel | `multilineText` | Wat deze specialist moet verbeteren of bewaken. |
| Controlepunten | `multilineText` | Concrete punten waarop deze specialist weekmenu's beoordeelt. |
| Output instructie | `multilineText` | Instructie die Make/OpenAI kan gebruiken in de prompt. |
| Volgorde | `number` | Volgorde waarin de specialist wordt toegepast. |
| Actief | `checkbox` | Of deze specialist actief wordt gebruikt in prompts. |
| Status | `singleSelect` | Workflowstatus van deze specialist. |

## Records

### Smaak & Recept Specialist

- Record ID: `recAm6AKLkqhItaHf`
- Specialist naam: Smaak & Recept Specialist
- Rol: Smaak
- Doel: Zorgen dat weekmenu's logisch, gevarieerd en aantrekkelijk zijn qua smaak.
- Controlepunten: Past soep bij bijgerechten; voldoende variatie; combinaties zijn realistisch; klinkt smakelijk.
- Output instructie: Verbeter het weekmenu zodat alle combinaties logisch, gevarieerd en aantrekkelijk zijn.
- Volgorde: 1
- Actief: ja
- Status: Actief

### Voedingscoach Caloriebewust

- Record ID: `recEegNwkwbwjGX8s`
- Specialist naam: Voedingscoach Caloriebewust
- Rol: Voeding
- Doel: Zorgen dat weekmenu's passen bij gezond, licht en caloriebewust eten zonder het woord afvallen centraal te zetten.

#### Controlepunten

Kcal per dag is logisch; voldoende eiwit en verzadiging; geen crashdieet; focus op gezonde keuzes, lichte maaltijden en balans; vermijd directe afvalclaims.

#### Output instructie

Optimaliseer het weekmenu voor gezond, licht en caloriebewust eten met voldoende verzadiging. Benoem niet direct afvallen, maar gebruik woorden als gezond, licht, bewust, caloriearm en makkelijk vol te houden.
- Volgorde: 2
- Actief: ja
- Status: Actief

### SoepSlim Brand Editor

- Record ID: `recIJwnEOeWdBB5d5`
- Specialist naam: SoepSlim Brand Editor
- Rol: Brand editor
- Doel: Zorgen dat teksten passen bij de merktoon van SoepSlim.
- Controlepunten: Premium maar speels; toegankelijk; niet belerend; aantrekkelijk voor doelgroep.
- Output instructie: Herschrijf het menu in een premium, speelse en toegankelijke merktoon.
- Volgorde: 6
- Actief: ja
- Status: Actief

### Seizoensspecialist

- Record ID: `recY71FfDR0WEsJ7L`
- Specialist naam: Seizoensspecialist
- Rol: Seizoen
- Doel: Zorgen dat ingrediënten passen bij het seizoen.
- Controlepunten: Gebruik seizoensgroenten; geen onlogische producten voor het seizoen; prijs/ beschikbaarheid.
- Output instructie: Pas het menu aan zodat het aansluit bij het huidige seizoen en beschikbare producten.
- Volgorde: 3
- Actief: ja
- Status: Actief

### Supermarkt Specialist

- Record ID: `recfVtnJXnI65PfVY`
- Specialist naam: Supermarkt Specialist
- Rol: Supermarkt
- Doel: Zorgen dat alles praktisch en makkelijk verkrijgbaar is.
- Controlepunten: Alle ingrediënten verkrijgbaar bij AH/Jumbo/Lidl; geen exotische producten; simpele recepten.
- Output instructie: Maak het menu praktisch en gebaseerd op makkelijk verkrijgbare supermarktproducten.
- Volgorde: 4
- Actief: ja
- Status: Actief

### Claims & Veiligheid Checker

- Record ID: `recsEb7HeP0yTiqHO`
- Specialist naam: Claims & Veiligheid Checker
- Rol: Compliance
- Doel: Voorkomen van onjuiste of gevaarlijke claims.
- Controlepunten: Geen medische claims; geen garanties; calorieën als schatting; veilige formuleringen.
- Output instructie: Controleer en herschrijf het menu zodat het voldoet aan veilige en eerlijke communicatie.
- Volgorde: 5
- Actief: ja
- Status: Actief

