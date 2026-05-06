# Bron van waarheid en architectuur

Airtable is de bron van waarheid voor SUPRSLIM. Dit is expliciet vastgelegd in `SUPRSLIM Acties & Automations` en `Project context Horeca Engine`.

## Toolverdeling

De vaste verdeling is:

- Airtable: brein, database, statussen, regels, bronrecords en akkoordmomenten.
- ChatGPT: werkplaats voor analyse, prompts, content, instructies en Airtable-klare vastlegging.
- Make: uitvoerder voor triggers, e-mail, recordgeneratie en terugkerende automatisering.
- AI: taakgenerator en inhoudelijke assistent, niet de eigenaar van waarheid.
- Kirsten: kwaliteitscontrole en inhoudelijk akkoord voor weekmenu's en briefings.
- Lovable: visuele interface en formulierlaag.
- Codex/GitHub: bouwomgeving voor frontend, scripts en documentatie.
- Softr: oudere/no-code route die nog context bevat, maar niet de kernarchitectuur moet bepalen.

## Harde architectuurregel

Lovable, Codex, GitHub, Make of frontend-code mogen geen inhoudelijk brein worden. Weekmenu-logica, statussen, AI-regels, akkoordmomenten, budgetregels, duplicate-logica en workflowstructuren horen in Airtable vast te liggen.

Frontend en code mogen Airtable-data lezen, schrijven of presenteren, maar de productlogica hoort terug te leiden naar Airtable-records.

## Werkwijze

Bij nieuwe output geldt:

1. Bepaal of het een besluit, actiepunt, automation, werkafspraak, controlepunt of technische taak is.
2. Leg het vast in Airtable of maak het Airtable-klaar.
3. Voeg eigenaar, prioriteit, bron/context en vervolgstap toe.
4. Gebruik Make pas wanneer de workflow stabiel genoeg is.
5. Beperk handmatig werk tot acties die niet via Airtable, ChatGPT, Make of toolchat kunnen.

## Technische prioriteit

Er staat een expliciet actiepunt dat techniek eerst opgelost moet worden voordat SUPRSLIM breder live gedeeld wordt:

- Lovable/Supabase `get-page` functie moet betrouwbaar uit Airtable kunnen lezen.
- Base ID, table ID en field IDs moeten kloppen.
- Connector/token en read-permissions moeten gecontroleerd worden.
- Formulier naar `Leads` en content uit Airtable moeten allebei werken.
- Geen handmatige workaround als structurele oplossing.

## Communicatie met externe tools

Bij externe tools zoals Lovable, MailerLite, domeinen, betaalinstellingen en toegangskoppelingen moet ChatGPT stap voor stap begeleiden:

- wat het probleem is;
- wat ChatGPT zelf kan doen;
- wat de gebruiker moet doen;
- waar geklikt moet worden;
- wat getest moet worden;
- wat niet gedaan moet worden.

Voor Airtable-zaken voert ChatGPT zelf uit waar mogelijk. Account- en toegangshandelingen blijven bij de gebruiker.
