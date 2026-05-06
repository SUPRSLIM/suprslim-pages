# Airtable schema-overzicht

Base: `Soepslim systeem` (`appe53zLo9AuxXZuc`)

## Producten en ingredienten

Centrale productdatabase voor SUPRSLIM. Producten komen later; focus eerst op slim koken, inkopen, weeklijsten en gezond eten.

- Table ID: `tblV2GHV31Qrxkiw6`
- Primary field ID: `fldMFyWqFk3uxTClW`
- Records: 3

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Productnaam | `singleLineText` |  |
| Status | `singleSelect` |  |
| Attachment Summary | `aiText` | An AI generated summary of the Attachments field. Upload files to Attachments to generate a summary. |
| kcal | `number` | Aantal calorieën per portie |
| eiwit (g) | `number` | Eiwit per portie |
| Created | `createdTime` |  |
| Doelgroep | `singleSelect` | Voor wie is dit product |
| Product beschrijving | `multilineText` | AI gegenereerde producttekst |
| Last Modified | `lastModifiedTime` |  |
| Product | `multipleRecordLinks` | Product |
| From field: Product | `multipleRecordLinks` |  |
| Weekmenu's | `multipleRecordLinks` |  |
| Blogs | `multipleRecordLinks` |  |

## Contracts

- Table ID: `tblMyGRnxlXqZQGI9`
- Primary field ID: `fld3g0g4e2f86U0TB`
- Records: 5

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Name | `singleLineText` |  |
| Party | `singleLineText` |  |
| Status | `singleSelect` |  |
| Document | `multipleAttachments` |  |
| Type | `singleSelect` |  |
| Start Date | `aiText` |  |
| End Date | `aiText` |  |
| Value | `currency` |  |
| Key Terms | `aiText` |  |

## Weekmenu's

Weekmenu's en afslankplannen die automatisch door AI worden gevuld op basis van SoepSlim producten.

- Table ID: `tblQiTEMuoS3YQm9e`
- Primary field ID: `fldVdbjw2F4d2cGFk`
- Records: 1

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Naam weekmenu | `singleLineText` | Naam van het weekmenu of plan. |
| Product | `multipleRecordLinks` | Gekoppeld SoepSlim product dat als basis dient voor het weekmenu. |
| Doel | `singleSelect` | Hoofddoel van het weekmenu. |
| kcal per dag | `number` | Doelcalorieen per dag voor het weekmenu. |
| Weekmenu | `multilineText` | AI output: volledig 5-daags weekmenu met maaltijden, kcal en tips. |
| Status | `singleSelect` | Workflowstatus voor generatie/publicatie. |
| Created | `dateTime` | Automatisch aangemaakt tijdstip voor Make trigger. |
| Last Modified | `dateTime` | Automatisch bijgewerkt tijdstip voor Make trigger wanneer een weekmenu-record wijzigt. |
| Blogs | `multipleRecordLinks` |  |
| Boxen en proefperiodes | `multipleRecordLinks` |  |

## Website pagina's

Landingspagina's en websiteteksten voor SoepSlim, gekoppeld aan producten en weekmenu's.

- Table ID: `tblqDY2oKmaalsFkg`
- Primary field ID: `fldEcdVbtwGLSFBvk`
- Records: 2

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Pagina titel | `singleLineText` | Titel van de websitepagina of landingspagina. |
| Type pagina | `singleSelect` | Soort pagina. |
| Doelgroep | `singleSelect` | Primaire doelgroep van de pagina. |
| SEO zoekwoord | `singleLineText` | Belangrijkste zoekwoord voor deze pagina. |
| Meta titel | `singleLineText` | SEO meta title voor deze pagina. |
| Meta description | `multilineText` | SEO meta description voor deze pagina. |
| Pagina tekst | `multilineText` | AI output: volledige websitetekst. |
| CTA | `singleLineText` | Call to action voor deze pagina. |
| Status | `singleSelect` | Workflowstatus. |

## Blogs

SEO blogs gebaseerd op producten en weekmenu's van SoepSlim.

- Table ID: `tbl9boU0B4hnZDRHe`
- Primary field ID: `fldcPMiVWzjiDw9bP`
- Records: 7

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Blog titel | `singleLineText` | Titel van het blogartikel. |
| Hoofd zoekwoord | `singleLineText` | Belangrijkste SEO zoekwoord. |
| Intro | `multilineText` | Korte introductie. |
| Blog content | `multilineText` | AI output volledige blog. |
| Status | `singleSelect` | Workflowstatus. |
| Product | `multipleRecordLinks` | Gekoppeld product voor dit blog. |
| Weekmenu | `multipleRecordLinks` | Gekoppeld weekmenu voor dit blog. |

## Social content

Social media content (TikTok, Instagram) gebaseerd op producten en weekmenu's.

- Table ID: `tbltqXwm2BwWKKiML`
- Primary field ID: `fldBbRlQ6G7SMw2QG`
- Records: 4

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Titel | `singleLineText` | Naam van de post of idee. |
| Platform | `singleSelect` | Waar wordt dit geplaatst. |
| Hook | `singleLineText` | Eerste zin / scroll stopper. |
| Caption | `multilineText` | Volledige caption. |
| Script | `multilineText` | Script voor video. |
| Status | `singleSelect` | Workflowstatus. |

## Vlog ideeën

Ideeën en scripts voor vlogs gebaseerd op SoepSlim weekmenu's en producten.

- Table ID: `tbl5snSwsMDnZgD12`
- Primary field ID: `fldfKsmYoA1X6p0Sa`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Titel | `singleLineText` | Titel van het vlog idee. |
| Type vlog | `singleSelect` | Soort vlog. |
| Beschrijving | `multilineText` | Korte uitleg van het idee. |
| Script | `multilineText` | Uitgewerkt script. |
| Hook | `singleLineText` | Openingszin voor video. |
| Status | `singleSelect` | Workflowstatus. |

## Weekmenu kwaliteit

Kwaliteitsregels, kaders en prompts voor betere SoepSlim weekmenu's.

- Table ID: `tblL9V3rsk6leCAOW`
- Primary field ID: `fldTP27PS2HwJjisN`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Regel naam | `singleLineText` | Naam van de kwaliteitsregel of richtlijn. |
| Categorie | `singleSelect` | Type kwaliteitsregel. |
| Richtlijn | `multilineText` | Concrete instructie die OpenAI moet volgen bij weekmenu's. |
| Verplicht | `checkbox` | Moet deze regel altijd worden toegepast? |
| Status | `singleSelect` | Actief of later gebruiken. |

## AI Specialisten

Specialistische AI-rollen die weekmenu's controleren en verbeteren op smaak, gezondheid, seizoen, supermarktbaarheid, claims en SoepSlim merktoon.

- Table ID: `tbl0GOmdHep4sHUCU`
- Primary field ID: `fldYyYa0fvr0fKpkA`
- Records: 6

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

## Kirsten weekbriefings

Wekelijkse instructies voor Kirsten: wat er gekookt moet worden, welke soepen centraal staan en welke kookcontent nodig is.

- Table ID: `tblAw6gHhkHJf4KIU`
- Primary field ID: `fldlv0WuJgAkqr90J`
- Records: 2

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Briefing titel | `singleLineText` | Naam van de wekelijkse briefing. |
| Week | `singleLineText` | Week of periode waarvoor deze briefing geldt. |
| Kookplanning | `multilineText` | Wat Kirsten die week moet maken/koken/voorbereiden. |
| Contentplanning | `multilineText` | Welke kookvideo's, shots en uitlegvideo's Kirsten moet maken. |
| Boodschappen focus | `multilineText` | Belangrijke ingredienten en supermarktproducten voor deze week. |
| Status | `singleSelect` | Workflowstatus van de briefing. |
| Controle & akkoord | `singleSelect` | Ruimte voor Kirsten om aan te geven of het weekmenu is gecontroleerd, akkoord is of kleine aanpassingen nodig heeft. |
| Volledige briefing | `multilineText` | Complete AI-samenvatting voor Kirsten, geschikt als mailtekst en als intern briefingoverzicht. AI mag hierin alleen bestaande Weekmenu Bouwstenen samenvatten en ontbrekende informatie benoemen. |
| Week startdatum | `singleLineText` | Maandagdatum van de briefingweek. Format: YYYY-MM-DD. Zelfde waarde als de bouwstenen die in deze briefing zijn samengevat. |
| Mail onderwerp | `singleLineText` | Onderwerpregel die Make gebruikt voor de e-mail aan Kirsten. |
| Mail status | `singleSelect` | Status van de mailflow voor de Kirsten-weekbriefing. |
| Verzenddatum | `singleLineText` | Wanneer de briefingmail naar Kirsten is verstuurd. |

## Slim inkopen

Ideeën en instructies voor boodschappen, aanbiedingen, budgettips en ingevulde boodschappenlijsten voor SoepSlim content.

- Table ID: `tbl8cS3iqy2YBx6pn`
- Primary field ID: `fld2WCDig2k46q0gr`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Titel | `singleLineText` | Naam van het inkoopidee of de contenthoek. |
| Type | `singleSelect` | Soort inkoopcontent. |
| Supermarkt | `singleSelect` | Relevante supermarkt of kanaal. |
| Boodschappenlijst | `multilineText` | Ingevulde boodschappenlijst of voorbeeldlijst. |
| Content idee | `multilineText` | Hoe dit omgezet wordt naar vlog, Reel of TikTok. |
| Hook | `singleLineText` | Openingszin voor social of vlog. |
| Status | `singleSelect` | Workflowstatus. |

## Boxen en proefperiodes

Commerciele boxen, startersboxen en proefperiodes voor SoepSlim met aantal maaltijden, personen en marketingpositionering.

- Table ID: `tblUo6E3SlEeACnh6`
- Primary field ID: `fldwIzdnh8dRW9mmT`
- Records: 1

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Box naam | `singleLineText` | Naam van de box of proefperiode. |
| Type box | `singleSelect` | Commercieel type aanbod. |
| Aantal maaltijden | `number` | Aantal maaltijden in de box. |
| Aantal personen | `number` | Voor hoeveel personen de box bedoeld is. |
| Positionering | `multilineText` | Hoe deze box verkocht wordt. |
| Inhoud box | `multilineText` | Wat zit er in de box: soepen, weekmenu, boodschappenlijst, tips. |
| Prijsindicatie | `currency` | Interne prijsrichting of adviesprijs. |
| CTA | `singleLineText` | Call to action voor website of advertentie. |
| Status | `singleSelect` | Workflowstatus. |
| Gekoppeld weekmenu | `multipleRecordLinks` | Weekmenu dat hoort bij deze box, zodat inhoud en content gelijk blijven aan de boxinhoud van dezelfde week. |

## Concurrentie inzichten

Lessen uit concurrenten zoals HelloFresh, Marley Spoon en foodblogs. Niet kopiëren, maar patronen analyseren en vertalen naar SoepSlim.

- Table ID: `tblRobY4fWEu695mJ`
- Primary field ID: `fldzznLxTdciVuWzb`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Inzicht titel | `singleLineText` | Naam van het inzicht of patroon. |
| Bron type | `singleSelect` | Type concurrent of inspiratiebron. |
| Bron / voorbeeld | `singleLineText` | Naam van concurrent, website of voorbeeld. |
| Wat werkt daar | `multilineText` | Welke marketing-, verkoop- of contentaanpak lijkt te werken. |
| Waarom werkt het | `multilineText` | Psychologische of commerciële reden waarom dit werkt. |
| SoepSlim vertaling | `multilineText` | Hoe we dit principe vertalen naar SoepSlim zonder te kopiëren. |
| Toepassing | `multipleSelects` | Waar gebruiken we dit: website, box, weekmenu, social, vlog, ads. |
| Status | `singleSelect` | Workflowstatus van dit inzicht. |

## Slimme Weeklijsten

Gratis lead magnet weekmenu's met ontbijt, lunch, maximaal 1 keer per dag soep, avondeten, snacks, smoothies, boodschappenlijst en bespaartips.

- Table ID: `tble9rw5zy7T0uORW`
- Primary field ID: `fldipODH4Eqn7LHFh`
- Records: 1

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Weeklijst titel | `singleLineText` | Naam van de slimme weeklijst of lead magnet. |
| Doelgroep | `singleSelect` | Voor wie is deze weeklijst bedoeld. |
| Aantal dagen | `number` | Aantal dagen in de weeklijst. |
| Ontbijt | `multilineText` | Ontbijtopties per dag, inclusief makkelijke prep zoals smoothies. |
| Lunch | `multilineText` | Lunchopties per dag. Maximaal 1 keer per dag soep over het totale menu heen. |
| Avondeten | `multilineText` | Avondmaaltijden per dag, snel en makkelijk klaar. |
| Snacks | `multilineText` | Caloriebewuste snackopties. |
| Prepmaaltijden | `multilineText` | Mealprep opties zoals smoothies, overnight oats of diepvriesvriendelijke items. |
| Boodschappenlijst | `multilineText` | Ingevulde boodschappenlijst voor deze weeklijst. |
| Bespaartips | `multilineText` | Aanbiedingscategorieen en slimme inkoopmomenten. |
| Lead magnet tekst | `multilineText` | Tekst voor de downloadpagina of mailinginschrijving. |
| Status | `singleSelect` | Workflowstatus. |

## AI Output Test

Testtabel om alle AI-output van SUPRSLIM te beoordelen op kwaliteit, correctheid, budget, calorieen, merkfit en bruikbaarheid.

- Table ID: `tblzj7DTxXvQjJFck`
- Primary field ID: `fldBs0hADz931Y3AS`
- Records: 1

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Test titel | `singleLineText` | Naam van de AI-test of output die beoordeeld wordt. |
| Output type | `singleSelect` | Type AI-output. |
| Input prompt | `multilineText` | Prompt of opdracht die aan AI is gegeven. |
| AI output | `multilineText` | Volledige output van AI. |
| Kwaliteit score | `rating` | Algemene kwaliteit van de output. |
| Correctheid score | `rating` | Hoe feitelijk of praktisch correct de output is. |
| Budget score | `rating` | Hoe goed AI rekening houdt met goedkoop en slim inkopen. |
| Calorie score | `rating` | Hoe betrouwbaar de calorie- en voedingslogica is. |
| Merkfit score | `rating` | Past de output bij SUPRSLIM tone of voice en positionering? |
| Bruikbaar | `checkbox` | Kan deze output praktisch gebruikt worden? |
| Menselijke correctie nodig | `checkbox` | Moet een mens dit nog aanpassen voordat het gebruikt kan worden? |
| Grootste fout | `multilineText` | Belangrijkste fout of zwakke plek in de AI-output. |
| Verbeterprompt | `multilineText` | Nieuwe prompt of instructie om de output beter te maken. |
| Status | `singleSelect` | Workflowstatus van de AI-test. |
| Automatisering actief | `checkbox` | Vink aan wanneer Make/OpenAI deze AI-output automatisch mag genereren. |
| Run status | `singleSelect` |  |
| Make trigger tijd | `dateTime` | Datum/tijdveld voor Make Watch Records trigger. Wordt gebruikt om records correct te sorteren en op te pakken. |
| Make created trigger | `dateTime` | Created time veld speciaal voor Make Watch Records trigger. |

## Boodschappen Validatie

Simpele testtabel om AI-boodschappenlijsten snel te beoordelen op compleetheid, betaalbaarheid, logische hoeveelheden en praktische uitvoerbaarheid.

- Table ID: `tbldVsoRYIA6fOYiP`
- Primary field ID: `fldASEnZfNFlGJlXX`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Validatie titel | `singleLineText` | Naam van de boodschappenvalidatie, bijvoorbeeld Week 1 boodschappen. |
| Week | `singleLineText` | Week of testperiode. |
| Supermarkt | `singleSelect` | Waar de boodschappen vooral gekocht worden. |
| AI boodschappenlijst | `multilineText` | De door AI gemaakte boodschappenlijst. |
| Geschatte totaalprijs | `currency` | Snelle prijsinschatting van de lijst. |
| Werkelijke totaalprijs | `currency` | Werkelijke prijs als bekend, niet verplicht in simpele test. |
| Mist er iets | `checkbox` | Vink aan als er producten missen om het menu te maken. |
| Dubbele producten | `checkbox` | Vink aan als producten onnodig dubbel of verwarrend genoemd worden. |
| Hoeveelheden logisch | `rating` | Zijn hoeveelheden logisch genoeg voor de week? |
| Goedkoop ingekocht | `rating` | Gebruikt AI huismerk, basisproducten, diepvries en hergebruik? |
| Praktisch uitvoerbaar | `rating` | Is de lijst makkelijk te gebruiken in de supermarkt? |
| Correcties | `multilineText` | Wat moet worden aangepast aan de boodschappenlijst? |
| Status | `singleSelect` | Status van de validatie. |

## Calorie Check

Snelle controle of AI calorie-inschattingen logisch zijn, zonder complexe tracking.

- Table ID: `tblGuQtkIJZHNi6J5`
- Primary field ID: `fldHXG5NlmcvDYyKX`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Maaltijd | `singleLineText` | Naam van de maaltijd of gerecht. |
| Type maaltijd | `singleSelect` | Soort maaltijd. |
| AI kcal | `number` |  |
| Realistische kcal | `number` |  |
| Verschil | `number` |  |
| Eiwit aanwezig | `checkbox` |  |
| Vullend | `rating` |  |
| Gezond gevoel | `rating` |  |
| Opmerking | `multilineText` |  |
| Status | `singleSelect` |  |

## Lizzy Performance

Tracking van Lizzy content om te zien wat werkt en hoe AI feedback helpt verbeteren.

- Table ID: `tblJAHHLmy3ghlBP1`
- Primary field ID: `fld9jssNuDWU9789a`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Video titel | `singleLineText` |  |
| Datum | `date` |  |
| Platform | `singleSelect` |  |
| Hook | `singleLineText` |  |
| Thema | `singleSelect` |  |
| Views | `number` |  |
| Saves | `number` |  |
| Reacties | `number` |  |
| Performance score | `rating` |  |
| AI feedback | `multilineText` |  |
| Verbeterpunt | `multilineText` |  |
| Status | `singleSelect` |  |

## Weekmenu Bouwstenen

V2 SUPRSLIM structuur: AI vult kleine maaltijdblokken; Airtable bewaakt kcal, dagstructuur en kwaliteit.

- Table ID: `tblMCPXZzkLkQ1Map`
- Primary field ID: `fld4t4a5mMJJdkxDn`
- Records: 89

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

## Aanbiedingen

Automatisch gevulde tabel met actuele supermarkt aanbiedingen die SUPRSLIM gebruikt voor weekmenu generatie.

- Table ID: `tblAyBf3Xclgw1pMN`
- Primary field ID: `fldczBcHjlRVi07TX`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Aanbieding titel | `singleLineText` | Korte naam van de aanbieding. |
| Product | `singleLineText` | Productnaam uit de aanbieding. |
| Supermarkt | `singleSelect` |  |
| Categorie | `singleSelect` |  |
| Aanbieding tekst | `multilineText` | Originele tekst uit folder of bron. |
| Prijs | `currency` |  |
| Geldig van | `date` |  |
| Geldig t/m | `date` |  |
| Bron URL | `url` |  |
| SUPRSLIM geschikt | `checkbox` |  |
| Prioriteit | `rating` |  |
| Actief | `checkbox` |  |

## AI Regels SUPRSLIM

Centrale regels en uitgangspunten voor SUPRSLIM AI agents, weekmenu generatie, aanbiedingen en budgetnormen.

- Table ID: `tbl8OrVIrFJN5hO1h`
- Primary field ID: `fldGQ6vptlI493Kgd`
- Records: 13

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Regel titel | `singleLineText` | Naam van de AI-regel of beleidsregel. |
| Categorie | `singleSelect` |  |
| Regel tekst | `multilineText` | Volledige regel of instructie die AI en automatiseringen moeten volgen. |
| Prioriteit | `rating` |  |
| Actief | `checkbox` |  |
| Laatst bijgewerkt | `date` |  |
| Categorie tekst | `singleLineText` | Vrij tekstveld voor categorieën tijdens de bouwfase. Gebruik dit wanneer single-select categorieën nog niet bestaan of niet via API aangemaakt mogen worden. |

## Weekmenu Templates

Template-brein voor automatische weekgeneratie. Make hoeft alleen templates te kopieren naar Weekmenu Bouwstenen; Airtable bewaakt de structuur.

- Table ID: `tblSPwuKKJTwzsECt`
- Primary field ID: `fldJI1cp73HoV82JI`
- Records: 20

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Template naam | `singleLineText` | Naam van de template, bijvoorbeeld Maandag ontbijt. |
| Dag | `singleSelect` |  |
| Maaltijdtype | `singleSelect` |  |
| Kcal target | `number` |  |
| Prompt template | `multilineText` | Standaard prompt voor deze maaltijdtemplate. |
| Regels snapshot | `multilineText` | SUPRSLIM regels die moeten worden meegenomen bij generatie. |
| Actief | `checkbox` |  |
| Volgorde | `number` |  |

## Weekmenu Archief Controle

Overzichtstabel voor het netjes apart zetten van dubbele, afgekeurde en niet-actieve weekmenu bouwstenen. Airtable blijft het brein; deze tabel documenteert archief- en cleanup-regels.

- Table ID: `tblhbxGHg2ktSuqWh`
- Primary field ID: `fldbJInX7jEuv16Uy`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Controle naam | `singleLineText` | Naam van de archief- of controleview. |
| Doel | `multilineText` | Waarom deze controle bestaat en wat ermee moet gebeuren. |
| Filterlogica | `multilineText` | Welke records hieronder vallen. |
| Actie | `singleSelect` |  |
| Actief | `checkbox` |  |

## Horeca klanten

SUPRSLIM horeca module: klantprofielen voor horecazaken zoals La Cafetera. Houdt concept, leverancier, sfeer en operationele kaders bij.

- Table ID: `tbljZhWvUxVSs3F8y`
- Primary field ID: `fldrthkffVJuM7ckm`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Klantnaam | `singleLineText` | Naam van de horecazaak of klant. |
| Concept basis | `singleLineText` | Hoofdconcept van de zaak, bijvoorbeeld Spaans of Spaans + Mediterraans. |
| Leverancier | `singleLineText` | Belangrijkste leverancier of groothandel, bijvoorbeeld HANOS. |
| Prijsstrategie | `multilineText` | Interne notitie over prijsniveau en marge, bijvoorbeeld huidige prijzen +20%. |
| Keuken capaciteit | `multilineText` | Operationele werkelijkheid: apparatuur, kok beschikbaarheid en uitvoerbaarheid. |
| Sfeer / stijl | `multilineText` | Korte stijlnotitie voor AI en menu-output. |
| Status | `singleSelect` | Workflowstatus van deze horecaklant. |

## Horeca inspiratie

Input van klanten: links, screenshots en inspiratie die gebruikt worden voor maandconcepten.

- Table ID: `tblNpUDTzkMRzBpZ3`
- Primary field ID: `fldUfHo1OzGHZKJI4`
- Records: 9

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Titel | `singleLineText` | Korte naam of omschrijving van de inspiratie. |
| Klant | `singleLineText` | Gekoppelde horecaklant. |
| Link / bron | `url` | Link naar Instagram, website of voorbeeld. |
| Afbeelding | `multipleAttachments` | Screenshots of foto's. |
| Wat spreekt aan | `multipleSelects` | Wat de klant interessant vindt. |
| Mediterrane richting | `multipleSelects` | Voorkeursrichting. |

## Horeca concepten

- Table ID: `tblUp5iyBhK2OrX3B`
- Primary field ID: `fldsGWqNPiFwxGGmR`
- Records: 1

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Naam | `singleLineText` |  |
| Klant | `singleLineText` |  |
| Periode | `singleLineText` |  |
| Thema | `singleLineText` |  |
| Menu | `multilineText` |  |
| Kernproducten | `multilineText` |  |
| Soep | `multilineText` |  |
| Prijs | `currency` |  |
| Status | `singleSelect` |  |

## Horeca specials

- Table ID: `tblFxowmfeeBdjUFf`
- Primary field ID: `fldkkNlsF5eeyXAfi`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Naam | `singleLineText` |  |
| Klant | `singleLineText` |  |
| Concept | `singleLineText` |  |
| Type | `singleLineText` |  |
| Producten | `multilineText` |  |
| Omschrijving | `multilineText` |  |
| Prijs | `currency` |  |
| Marge | `multilineText` |  |
| Status | `singleLineText` |  |

## Horeca communicatie

- Table ID: `tblP2RHAhPTFWy5Oe`
- Primary field ID: `fldTHRiVg5aOVxeFB`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Naam | `singleLineText` |  |
| Concept | `singleLineText` |  |
| Klant | `singleLineText` |  |
| Instagram | `multilineText` |  |
| WhatsApp | `multilineText` |  |
| Nieuwsbrief | `multilineText` |  |
| Menukaart | `multilineText` |  |
| Landingspagina | `multilineText` |  |
| Status | `singleLineText` |  |

## Horeca smaakprofielen

Profiel laag tussen inspiratie en maandconcept. Legt vast wat een horecazaak wil uitstralen, waar het voor staat, wat het moet opleveren en welke stijl van gerechten en events daarbij passen.

- Table ID: `tblXXuvY55J1tcybZ`
- Primary field ID: `fld628AHQKhocbCOk`
- Records: 1

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Profiel naam | `singleLineText` |  |
| Klant | `singleLineText` |  |
| Kernprofiel | `multilineText` |  |
| Wat uitstralen | `multilineText` |  |
| Waar staan we voor | `multilineText` |  |
| Wat moet het opleveren | `multilineText` |  |
| Patroon uit inspiratie | `multilineText` |  |
| Aanbevolen richting | `multilineText` |  |
| Eventstrategie | `multilineText` |  |
| Specials strategie | `multilineText` |  |
| Status | `singleLineText` |  |

## Horeca gerechten

Gerechten en bouwstenen voor horeca events en specials. Deze tabel wordt gebruikt om recepten, kernproducten, marge en doorvertaling naar specials vast te leggen.

- Table ID: `tblGD202UYHJqs11V`
- Primary field ID: `fld815xG6PdIjR43o`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Gerecht naam | `singleLineText` |  |
| Klant | `singleLineText` |  |
| Concept | `singleLineText` |  |
| Type | `singleSelect` |  |
| Omschrijving | `multilineText` |  |
| Kernproducten | `multilineText` |  |
| Hanos inkooplogica | `multilineText` |  |
| Marge inschatting | `multilineText` |  |
| Doorvertaling | `multilineText` |  |
| Status | `singleSelect` |  |

## Events & Maandconcepten

Maandelijkse thematische avonden en concepten gekoppeld aan smaakprofielen. Hier worden nieuwe gerechten getest die later doorstromen naar specials.

- Table ID: `tbl4cPQfMkP9UAmrr`
- Primary field ID: `fldqU4fmVNcVKikPF`
- Records: 1

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Event naam | `singleLineText` |  |
| Gekoppeld smaakprofiel | `singleLineText` |  |
| Thema | `singleLineText` |  |
| Doel van event | `multilineText` |  |
| Testgerechten | `multilineText` |  |
| Doorstroom naar specials | `multilineText` |  |
| Frequentie | `singleLineText` |  |
| Status | `singleLineText` |  |

## Gerechten & Specials

Alle gerechten die voortkomen uit events en doorstromen naar de kaart. Inclusief marge, type en rotatie.

- Table ID: `tblI0FQCtFY0oKsaz`
- Primary field ID: `fldrHH848UC0oSIv9`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Gerecht naam | `singleLineText` |  |
| Gekoppeld event | `singleLineText` |  |
| Type gerecht | `singleLineText` |  |
| Inkoopindicatie | `singleLineText` |  |
| Verkoopprijs | `singleLineText` |  |
| Marge indicatie | `singleLineText` |  |
| Status | `singleLineText` |  |
| Op kaart sinds | `singleLineText` |  |

## Huidige Cafetera kaart

Vastlegging van de huidige menukaart van La Cafetera als nulmeting. Hiermee vergelijken we de huidige basis met inspiratie, smaakprofiel, events en toekomstige specials.

- Table ID: `tblIMqbXy0pmmwYHM`
- Primary field ID: `fldU6oP8XffZoO0ps`
- Records: 8

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Item naam | `singleLineText` |  |
| Categorie | `singleLineText` |  |
| Omschrijving | `multilineText` |  |
| Prijs | `currency` |  |
| Huidige rol | `singleLineText` |  |
| Doorontwikkel kans | `multilineText` |  |
| Status | `singleLineText` |  |

## Doorontwikkel matrix Cafetera

Matrix voor de huidige Cafetera kaart: behouden, upgraden of doorontwikkelen naar specials en events. Stuurt op marge, herbruikbaarheid en aansluiting op het smaakprofiel.

- Table ID: `tblRHS6YUrN9QwP4Q`
- Primary field ID: `fldH67OLE8DVbxOQ1`
- Records: 26

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Item | `singleLineText` |  |
| Huidige categorie | `singleLineText` |  |
| Advies | `singleSelect` |  |
| Waarom | `multilineText` |  |
| Nieuwe richting | `multilineText` |  |
| Marge inschatting | `singleLineText` |  |
| Event potentie | `singleLineText` |  |
| Special potentie | `singleLineText` |  |
| Prioriteit | `singleLineText` |  |

## QR upsell strategie

Strategie voor QR ordering en Lightspeed upsells per dagdeel. Doel: sneller bestellen, hogere bonwaarde en slimme combinaties vanuit de huidige kaart.

- Table ID: `tblAsjEHoHh4H1R2O`
- Primary field ID: `fldyXV1qwo01C8h55`
- Records: 8

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Moment | `singleLineText` |  |
| Gast intentie | `multilineText` |  |
| Huidig aanbod | `multilineText` |  |
| Upsell voorstel | `multilineText` |  |
| QR triggertekst | `multilineText` |  |
| Lightspeed actie | `multilineText` |  |
| Marge logica | `multilineText` |  |
| Prioriteit | `singleLineText` |  |

## Project context Horeca Engine

Centrale projectlaag voor SuprSlim Horeca Engine. Gebruik deze tabel als vaste contextbron voor nieuwe chats, besluiten, uitgangspunten, werkwijze en promptblokken.

- Table ID: `tblJP4XUsoU2BjLlq`
- Primary field ID: `fld2o5Ja1zpu8Olog`
- Records: 16

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Context naam | `singleLineText` |  |
| Type | `singleSelect` |  |
| Inhoud | `multilineText` |  |
| Gebruik in nieuwe chat | `checkbox` |  |
| Status | `singleSelect` |  |

## Soeprotatie Horeca

Subtiele SuprSlim soeprotatie voor horeca. Alleen lunch en specials, geen ochtend en geen borrelpush. Maximaal 1 tot 2 soepen tegelijk.

- Table ID: `tblFpjrkcxybGaMuE`
- Primary field ID: `fldfQLnkevMDrU6IR`
- Records: 4

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Week | `singleLineText` |  |
| Soep naam | `singleLineText` |  |
| Mediterrane richting | `singleLineText` |  |
| Koppeling met specials | `multilineText` |  |
| Basisproducten | `multilineText` |  |
| Lunch inzet | `multilineText` |  |
| Niet gebruiken voor | `multilineText` |  |
| Marge logica | `multilineText` |  |
| Status | `singleLineText` |  |

## Lightspeed QR taken Cafetera

Projectbrede uitvoertabel voor La Cafetera: alle ideeën en besluiten uit de Horeca Engine omzetten naar concrete taken voor Airtable, Lightspeed, QR, upsells, specials en soeprotatie.

- Table ID: `tblqI7OjURbvIn7HL`
- Primary field ID: `fldQBJv5rrXVSQ1WS`
- Records: 17

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Taak | `singleLineText` | Concrete uitvoertaak voor Lightspeed/QR inrichting. |
| Fase | `singleSelect` | Projectfase waarin deze taak hoort. |
| Status | `singleSelect` | Workflowstatus van de taak. |
| Prioriteit | `singleSelect` | Prioriteit voor uitvoering. |
| Dagdeel | `singleSelect` | Relevant dagdeel voor de taak. |
| Bron / projectlaag | `singleLineText` | Welke bestaande Horeca Engine laag of tabel de basis vormt. |
| Uitwerking | `multilineText` | Concrete uitvoeringsnotitie: wat moet er gebeuren en waarom. |
| Lightspeed actie | `multilineText` | Wat er uiteindelijk in Lightspeed moet worden gedaan. |
| QR actie | `multilineText` | Wat er in QR/Order Anywhere zichtbaar of getest moet worden. |
| Airtable vastleggen | `multilineText` | Welke velden of records in Airtable vastgelegd moeten worden. |
| Haalbaarheid / marge check | `multilineText` | Controle op eenvoud, keukenhaalbaarheid, marge, hergebruik en HANOS-proof inkoop. |
| Volgende checkdatum | `date` | Datum waarop deze taak opnieuw gecontroleerd of opgevolgd moet worden. |
| Laatste update | `date` | Laatste keer dat deze taak is bekeken of aangepast. |

## SUPRSLIM Acties & Automations

Centrale uitvoertabel voor SUPRSLIM: vaste afspraken, losse actiepunten, reminders, automations, strategische besluiten en operationele taken. Airtable is bron van waarheid; ChatGPT is werkplaats.

- Table ID: `tbl6G0tOy3JIkMzxk`
- Primary field ID: `fld5jpAgcGAQGf3fm`
- Records: 57

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

## Boodschappenlijst Regels

Stap 1 van de SUPRSLIM Inkoop Monitor. Eén record per samengevoegd boodschappenitem per week. Wordt gevuld vanuit goedgekeurde Weekmenu Bouwstenen; geen content of menu-output, alleen inkoopdata.

- Table ID: `tblThnkFF2SGjuLvF`
- Primary field ID: `fldzXDSsyuwSuM9sL`
- Records: 0

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

## Product Matches SUPRSLIM

Stap 2 van de Inkoop Monitor. Koppelt ingrediënten aan concrete supermarktproducten en prijzen.

- Table ID: `tblrBHKyACnAO79bE`
- Primary field ID: `fldLbnztXIdd24xXY`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Match naam | `singleLineText` | Bijv: kipfilet AH 500g |
| Ingrediënt | `singleLineText` | Basis ingrediënt |
| Supermarkt | `singleSelect` | Winkel |
| Productnaam | `singleLineText` | Naam product |
| Verpakking | `singleLineText` | Bijv 500g |
| Prijs | `currency` | Prijs per verpakking |
| Prijs per eenheid | `number` | Prijs per kg/l/stuk |
| Link | `url` | Productlink |
| SUPRSLIM score | `rating` | Geschiktheid |
| Status | `singleSelect` | Workflow |

## Week Budget Analyse SUPRSLIM

Stap 3 van de Inkoop Monitor. Vergelijkt totale kosten per supermarkt op basis van boodschappenlijst en productmatches.

- Table ID: `tblf0guoj9HFptGsQ`
- Primary field ID: `fldqqaSFxrSvLu5qV`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Analyse naam | `singleLineText` | Bijv: Week 18 Budget Analyse |
| Weeknummer | `singleLineText` | Weeknummer |
| Week startdatum | `singleLineText` | Maandagdatum |
| Totaalprijs AH | `currency` | Totale prijs bij AH |
| Totaalprijs Jumbo | `currency` | Totale prijs bij Jumbo |
| Totaalprijs Lidl | `currency` | Totale prijs bij Lidl |
| Goedkoopste winkel | `singleSelect` | Automatisch of handmatig bepaald |
| Verschil | `currency` | Prijsverschil tussen goedkoopste en duurste |
| Budgetstatus | `singleSelect` | Check vs SUPRSLIM norm |
| Opmerking | `multilineText` | Extra context |

## SUPRSLIM Weekritme

Centrale weekstructuur voor SUPRSLIM marketing en operatie: wat moet er wekelijks gebeuren, wie is eigenaar, welke dag, welke output en welke Airtable/Make-koppeling hoort erbij. Airtable is het brein; Make voert uit; AI maakt kleine taken; Kirsten bewaakt kwaliteit.

- Table ID: `tblm3mj0DqiVwfxg8`
- Primary field ID: `fldcNWdMuRQ4tcXEO`
- Records: 4

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

## Leads

Centrale SUPRSLIM marketingtabel voor leads uit site, nieuwsbrief, social en handmatige invoer.

- Table ID: `tblHRxkNPWGhxmgVm`
- Primary field ID: `fld50pl1MCDbmsbCF`
- Records: 4

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Lead naam | `singleLineText` | Naam van de lead. |
| E-mail | `email` | E-mailadres. |
| Telefoon | `phoneNumber` | Optioneel telefoonnummer. |
| Bericht | `multilineText` | Bericht of aanvraag. |
| Bron | `singleSelect` | Herkomst van de lead. |
| Interesse | `singleSelect` | Interesse van de lead. |
| Status | `singleSelect` | Leadstatus. |
| Score | `rating` | Leadscore. |
| Prioriteit | `singleSelect` | Opvolgprioriteit. |
| AI analyse | `multilineText` | AI analyse en voorstel. |
| Volgende actie | `multilineText` | Concrete volgende actie. |
| Laatste contactmoment | `date` | Laatste contactmoment. |
| Toestemming nieuwsbrief | `checkbox` | Toestemming voor nieuwsbrief. |
| Lead magnet URL | `url` | Link naar de weeklijst of downloadpagina die bij deze lead hoort. |
| UTM bron | `singleLineText` | Campagnebron, bijvoorbeeld Instagram, TikTok, nieuwsbrief of direct. |
| UTM campagne | `singleLineText` | Campagnenaam, bijvoorbeeld weeklijst-launch, reel-1 of bio-link. |

## E-mail campagnes

SUPRSLIM nieuwsbrief en mailcampagnes (AI-ready, controleerbaar).

- Table ID: `tblmmNMmyEw7Dp2xM`
- Primary field ID: `fldzR6c62kQhdHpGe`
- Records: 3

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Campagne naam | `singleLineText` |  |
| Type | `singleSelect` |  |
| Onderwerpregel | `singleLineText` |  |
| Preview tekst | `singleLineText` |  |
| Mailtekst | `multilineText` |  |
| CTA | `singleLineText` |  |
| Doelgroep | `singleSelect` |  |
| Status | `singleSelect` |  |
| AI prompt | `multilineText` |  |
| AI output | `multilineText` |  |
| Verzonden datum | `date` |  |

## E-mail log

Log van verstuurde e-mails gekoppeld aan leads en campagnes.

- Table ID: `tblf8kDAfXW7vr9y6`
- Primary field ID: `fldybBNZuFWI7z38w`
- Records: 0

| Veld | Type | Beschrijving |
| --- | --- | --- |
| E-mail | `email` |  |
| Lead | `singleLineText` |  |
| Campagne | `singleLineText` |  |
| Status | `singleSelect` |  |
| Datum | `date` |  |
| Opmerking | `multilineText` |  |

