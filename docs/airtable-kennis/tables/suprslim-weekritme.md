# SUPRSLIM Weekritme

Centrale weekstructuur voor SUPRSLIM marketing en operatie: wat moet er wekelijks gebeuren, wie is eigenaar, welke dag, welke output en welke Airtable/Make-koppeling hoort erbij. Airtable is het brein; Make voert uit; AI maakt kleine taken; Kirsten bewaakt kwaliteit.

- Table ID: `tblm3mj0DqiVwfxg8`
- Primary field: Taak
- Records: 4

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Taak | `singleLineText` | Korte naam van de wekelijkse taak. |
| Dag | `singleSelect` | Vaste uitvoerdag in het SUPRSLIM weekritme. |
| Eigenaar | `singleSelect` | Wie is eindverantwoordelijk voor deze taak. |
| Doel | `multilineText` | Waarom deze taak bestaat en wat het moet opleveren. |
| Output | `multilineText` | Concrete wekelijkse output die klaar moet zijn. |
| Status | `singleSelect` | Workflowstatus van deze wekelijkse taak. |
| Frequentie | `singleLineText` | Hoe vaak deze taak moet gebeuren. |
| Make nodig | `checkbox` | Aanvinken als deze taak via Make moet worden uitgevoerd of getriggerd. |
| Airtable koppeling | `singleLineText` | Welke bestaande Airtable tabel of workflow hierbij hoort. |
| Controlepunt | `multilineText` | Waar Kirsten of het team op moet controleren voordat iets live gaat. |

## Records

### Weekmenu bouwstenen genereren

- Record ID: `recQf6vHYxokhpPqp`
- Taak: Weekmenu bouwstenen genereren
- Dag: Woensdag
- Eigenaar: Make
- Doel: Start van de weekcyclus: templates omzetten naar concrete maaltijden.
- Output: 20 bouwstenen: maandag t/m vrijdag x ontbijt, lunch, diner en snack.
- Status: Actief
- Frequentie: Wekelijks
- Make nodig: ja
- Airtable koppeling: Weekmenu Templates naar Weekmenu Bouwstenen
- Controlepunt: Alle 20 bouwstenen aanwezig, geen lege velden, duplicate check status uniek.

### AI maaltijden vullen

- Record ID: `recTCy1mje6shj8Pd`
- Taak: AI maaltijden vullen
- Dag: Woensdag
- Eigenaar: AI
- Doel: Elke maaltijd-bouwsteen apart vullen volgens SUPRSLIM regels.
- Output: Per bouwsteen: naam gerecht, ingredienten met hoeveelheden en korte bereidingstip.
- Status: Actief
- Frequentie: Wekelijks
- Make nodig: ja
- Airtable koppeling: Weekmenu Bouwstenen en AI Regels SUPRSLIM
- Controlepunt: Geen boodschappenlijst of contentidee in maaltijdoutput; kcal per maaltijdtype respecteren.

### Weekmenu controleren en accorderen

- Record ID: `recXCsFklb85JN4LQ`
- Taak: Weekmenu controleren en accorderen
- Dag: Donderdag
- Eigenaar: Kirsten
- Doel: Kwaliteitscontrole op maakbaarheid, smaak en eenvoud.
- Output: Akkoord of aanpassing nodig in Airtable.
- Status: Actief
- Frequentie: Wekelijks
- Airtable koppeling: Weekmenu Bouwstenen
- Controlepunt: Pas na akkoord live gebruiken.

### Kirsten weekbriefing maken

- Record ID: `recyOLBSXGP5KtE5x`
- Taak: Kirsten weekbriefing maken
- Dag: Donderdag
- Eigenaar: Make
- Doel: Samenvatting maken van goedgekeurde weekdata.
- Output: Briefing met menu, planning en content.
- Status: Actief
- Frequentie: Wekelijks
- Make nodig: ja
- Airtable koppeling: Kirsten weekbriefings
- Controlepunt: Geen nieuw menu genereren.

