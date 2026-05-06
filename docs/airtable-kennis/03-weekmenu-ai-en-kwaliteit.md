# Weekmenu, AI en kwaliteit

SUPRSLIM gebruikt AI voor weekmenu's, content en boodschappenlogica, maar de Airtable-kennis maakt duidelijk dat vrije AI-output niet blind vertrouwd mag worden.

## Weekritme

Het vaste SUPRSLIM Weekritme bevat vier actieve taken:

| Taak | Dag | Eigenaar | Output | Controlepunt |
| --- | --- | --- | --- | --- |
| Weekmenu bouwstenen genereren | Woensdag | Make | 20 bouwstenen: maandag t/m vrijdag x ontbijt, lunch, diner en snack | Alle 20 bouwstenen aanwezig, geen lege velden, duplicate check uniek |
| AI maaltijden vullen | Woensdag | AI | Per bouwsteen naam gerecht, ingredienten met hoeveelheden en bereidingstip | Geen boodschappenlijst of contentidee in maaltijdoutput |
| Weekmenu controleren en accorderen | Donderdag | Kirsten | Akkoord of aanpassing nodig | Pas na akkoord live gebruiken |
| Kirsten weekbriefing maken | Donderdag | Make | Briefing met menu, planning en content | Geen nieuw menu genereren |

## AI Specialisten

De actieve specialistrollen zijn:

| Volgorde | Specialist | Doel |
| ---: | --- | --- |
| 1 | Smaak & Recept Specialist | Logische, gevarieerde en aantrekkelijke combinaties |
| 2 | Voedingscoach Caloriebewust | Gezond, licht en caloriebewust eten met verzadiging |
| 3 | Seizoensspecialist | Ingredienten passend bij seizoen en beschikbaarheid |
| 4 | Supermarkt Specialist | Makkelijk verkrijgbaar bij AH, Jumbo, Lidl of vergelijkbaar |
| 5 | Claims & Veiligheid Checker | Geen medische claims, garanties of onveilige formuleringen |
| 6 | SoepSlim Brand Editor | Premium, speelse en toegankelijke merktoon |

## Belangrijke AI-les

De tabel `AI Output Test` bevat een cruciale test: vrije tekst voor weekmenu's faalde op calorieplanning.

Fouten uit de test:

- dagtotalen lagen buiten 1700-1900 kcal;
- rekensommen klopten niet;
- AI voegde toch extra secties toe ondanks instructie;
- vrije tekst bleek niet betrouwbaar genoeg voor calorieplanning.

Verbeterprompt:

- gebruik geen vrije tekst;
- genereer een strak tabel-formaat;
- gebruik vaste kcal-waarden;
- ontbijt 400 kcal;
- lunch 450 kcal;
- diner 650 kcal;
- snack 250 kcal;
- totaal exact 1750 kcal;
- geen uitleg, boodschappenlijst, content of extra secties.

## Kwaliteitsregels

Belangrijke regels voor weekmenu's:

- AI-output moet klein en afgebakend zijn.
- Eerst maaltijdoutput, daarna pas boodschappen of content.
- Kcal zijn schattingen en moeten rekentechnisch kloppen.
- Geen crashdieet.
- Voldoende eiwit en verzadiging.
- Geen directe afvalclaims of garanties.
- Ingredienten moeten supermarktbaar en betaalbaar zijn.
- Kirsten controleert voordat output operationeel gebruikt wordt.

## Inkoopmonitor

Er zijn tabellen voorbereid voor een toekomstige SUPRSLIM Inkoop Monitor:

- `Boodschappenlijst Regels`: samengevoegde boodschappenitems per week.
- `Product Matches SUPRSLIM`: koppeling van ingredienten aan supermarktproducten en prijzen.
- `Week Budget Analyse SUPRSLIM`: vergelijking van totale kosten per supermarkt.

Deze tabellen hadden op het moment van documenteren nog geen records, maar ze leggen de beoogde architectuur voor boodschappen- en budgetcontrole vast.
