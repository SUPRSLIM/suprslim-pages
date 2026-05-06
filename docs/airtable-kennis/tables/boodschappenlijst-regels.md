# Boodschappenlijst Regels

Stap 1 van de SUPRSLIM Inkoop Monitor. Eén record per samengevoegd boodschappenitem per week. Wordt gevuld vanuit goedgekeurde Weekmenu Bouwstenen; geen content of menu-output, alleen inkoopdata.

- Table ID: `tblThnkFF2SGjuLvF`
- Primary field: Boodschappenregel
- Records: 0

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Boodschappenregel | `singleLineText` | Unieke naam, bijvoorbeeld Week 18 - kipfilet - totaal. |
| Weeknummer | `singleLineText` | Weeknummer of testweek waaraan dit boodschappenitem hoort. |
| Week startdatum | `singleLineText` | Maandagdatum van de week. Format YYYY-MM-DD. |
| Ingrediënt | `singleLineText` | Genormaliseerde ingredientnaam, bijvoorbeeld kipfilet, havermout of broccoli. |
| Zoekterm supermarkt | `singleLineText` | Praktische zoekterm voor AH, Jumbo, Lidl of andere supermarkt. |
| Categorie | `singleSelect` | Boodschappencategorie voor ordening en matching. |
| Hoeveelheid totaal | `singleLineText` | Totale hoeveelheid voor de week, bijvoorbeeld 750 g, 1 liter of 5 stuks. |
| Eenheid | `singleSelect` | Eenheid voor latere prijsvergelijking. |
| Aantal personen | `number` | Voor hoeveel personen de boodschappenlijst bedoeld is. |
| Gekoppelde bouwstenen tekst | `multilineText` | Welke maaltijdbouwstenen dit ingredient gebruiken. Tekstveld voor Make/AI-output zolang directe recordlinks niet nodig zijn. |
| Status | `singleSelect` | Workflowstatus van deze boodschappenregel. |
| Match status | `singleSelect` | Of dit item al gekoppeld is aan productprijzen of aanbiedingen. |
| Opmerking | `multilineText` | Ruimte voor Kirsten/Lizzy of Make om opmerkingen vast te leggen. |

## Records

Geen records gevonden.
