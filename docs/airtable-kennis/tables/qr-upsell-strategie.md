# QR upsell strategie

Strategie voor QR ordering en Lightspeed upsells per dagdeel. Doel: sneller bestellen, hogere bonwaarde en slimme combinaties vanuit de huidige kaart.

- Table ID: `tblAsjEHoHh4H1R2O`
- Primary field: Moment
- Records: 8

## Velden

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

## Records

### Lunch QR - maak compleet

- Record ID: `recB0pUrCQMFhNjvG`
- Moment: Lunch QR - maak compleet
- Gast intentie: Gast bestelt broodje, salade of 12-uurtje en staat open voor een kleine aanvulling.
- Huidig aanbod: Broodjes 12-13, salades 15-17, soep 7, papas fritas 8, plancha brood 7.

#### Upsell voorstel

Toon na keuze automatisch: + soep, + papas fritas, + brood met dip, + koffie/fris. Gebruik dit vooral bij broodjes en 12-uurtje.
- QR triggertekst: Maak je lunch compleet

#### Lightspeed actie

Maak modifiergroep/upsellgroep bij broodjes, salades en 12-uurtje. Zet soep, papas fritas en plancha brood als aanbevolen extra’s.
- Marge logica: Stuurt op margeproducten: soep, aardappel, brood, dips en dranken. Geen dure vis/gamba als standaard upsell.
- Prioriteit: Hoog

### Na 14:00 - glas wijn + klein warm hapje

- Record ID: `recDKC75iwMDeS0Jz`
- Moment: Na 14:00 - glas wijn + klein warm hapje
- Gast intentie: Gast bestelt wijn maar krijgt nog onvoldoende snackpairing aangeboden.

#### Huidig aanbod

Glas wit en rosé draaien sterk. Warme hapjes zoals albondigas, calamares en croquetas zijn aanwezig maar kunnen beter gekoppeld worden.
- Upsell voorstel: Bij glas wit, rosé of rood een suggestie tonen: albondigas, calamares of croqueta als klein warm hapje.
- QR triggertekst: Maak je glas wijn Spaans compleet met een warm hapje erbij.
- Lightspeed actie: Koppel wijn per glas aan upsellgroep 'Warm hapje erbij' met maximaal 3 keuzes. Niet te veel opties tonen.
- Marge logica: Wijn heeft goede omzet. Snackpairing verhoogt bonwaarde en versterkt gastrobar-gevoel zonder complexiteit.
- Prioriteit: Hoog

### Dessert/koffie na lunch - koffie na

- Record ID: `recEMZbAQOvXK2RHi`
- Moment: Dessert/koffie na lunch - koffie na
- Gast intentie: Gast rondt lunch af en kan met subtiele trigger nog koffie of iets zoets nemen.
- Huidig aanbod: Koffievolume is extreem sterk. Taart draait goed, maar wordt nog onvoldoende als lunchafsluiter gestuurd.
- Upsell voorstel: Na lunchgerechten QR-suggestie tonen: koffie na of koffie + klein zoet.
- QR triggertekst: Nog een koffie na? Sluit je lunch lekker af.
- Lightspeed actie: Bij 12-uurtjes, broodjes en salades een after-order suggestie of productgroep 'Koffie na' tonen.
- Marge logica: Gebruikt het sterkste product van de zaak om lunchbonwaarde te verhogen.
- Prioriteit: Middel

### Lunch - broodje + soep van de week

- Record ID: `recPzAPmkffkZuU0Z`
- Moment: Lunch - broodje + soep van de week
- Gast intentie: Gast kiest lunchgerecht en staat open voor een kleine warme toevoeging, vooral bij broodjes en 12-uurtjes.

#### Huidig aanbod

Sterke lunchbasis: Spaans 12-uurtje vis/vlees, pollo, salmon, atún, manchego, serranoham/manchego. Soep draait nu laag maar heeft potentie.
- Upsell voorstel: Bied soep als kleine lunch-upgrade aan bij broodjes en 12-uurtjes. Maximaal 1 soep tegelijk zichtbaar.
- QR triggertekst: Lekker erbij: kleine soep van de week bij je lunch.

#### Lightspeed actie

Maak lunchmodifier 'Soep erbij' zichtbaar bij broodjes, salades en 12-uurtjes. Alleen tussen lunchuren tonen indien mogelijk.
- Marge logica: Soep gebruikt producthergebruik en verhoogt bonwaarde. Past bij SuprSlim zonder concept te overheersen.
- Prioriteit: Hoog

### Ochtend - koffie + pastel/taart

- Record ID: `recbgBHSAPwprlHmP`
- Moment: Ochtend - koffie + pastel/taart
- Gast intentie: Gast komt voor koffie, korte pauze of eerste afspraak. Lage drempel, snel beslissen.

#### Huidig aanbod

Sterke koffieverkoop: cappuccino, lungo, latte macchiato, thee. Bestaande zoete items zoals pastel de nata, apple cake, bananenbrood en cakes.

#### Upsell voorstel

Toon bij koffie automatisch een kleine zoete upgrade: pastel de nata, apple cake of bananenbrood. Niet pushy, wel zichtbaar als 'maak je koffiemoment compleet'.
- QR triggertekst: Maak je koffiemoment compleet met iets zoets erbij.

#### Lightspeed actie

Koppel koffieproducten in Lightspeed aan modifier/upsellgroep 'Iets lekkers erbij' met 3 opties: pastel de nata, apple cake, bananenbrood.
- Marge logica: Hoge frequentie op koffie. Kleine bijverkoop verhoogt bonwaarde zonder extra keukenbelasting.
- Prioriteit: Hoog

### Na 14:00 - Estrella + croqueta

- Record ID: `recfVQpjAKpQPbT1w`
- Moment: Na 14:00 - Estrella + croqueta
- Gast intentie: Gast blijft hangen voor borrel, maar heeft een simpele eerste trigger nodig om iets te eten bij drank.
- Huidig aanbod: Estrella Damm verkoopt goed, croquetas staan al op kaart maar volumes zijn laag tot middelmatig.
- Upsell voorstel: Maak een laagdrempelige Spaanse borrelcombi: Estrella + croqueta naar keuze.
- QR triggertekst: Spaans borrelmoment: Estrella + croqueta.
- Lightspeed actie: Maak combi-product of upsellregel bij Estrella: voeg croqueta toe. Test na 14:00 als QR-suggestie.
- Marge logica: Hergebruik bestaande items. Geen extra mise-en-place, wel hogere bonwaarde en meer borrelgedrag.
- Prioriteit: Hoog

### Borrel - plancha + fles/kan suggestie

- Record ID: `recjklB7fMl49cZst`
- Moment: Borrel - plancha + fles/kan suggestie
- Gast intentie: Groepjes willen delen, maar moeten gestuurd worden naar een logisch borrelmoment met drank erbij.

#### Huidig aanbod

Plancha la Cafetera, plancha tostade, plancha caliente en brood zijn aanwezig. Wijn per fles, sangria kan en Agua de Valencia kan bestaan al.

#### Upsell voorstel

Bij plancha automatisch een drankvoorstel tonen: fles wijn, kan sangria of Agua de Valencia afhankelijk van moment/groep.
- QR triggertekst: Samen delen? Maak je plancha compleet met een fles wijn of kan sangria.
- Lightspeed actie: Koppel plancha-items aan upsellgroep 'Voor erbij' met fles wit/rosé/rood, kan sangria en Agua de Valencia kan.
- Marge logica: Sharing verhoogt gemiddelde bon. Bestaande kaartitems worden gecombineerd zonder keukencomplexiteit.
- Prioriteit: Middel

### Borrel QR - margemakers eerst

- Record ID: `recz5yAqMRfaj9kg9`
- Moment: Borrel QR - margemakers eerst
- Gast intentie: Gast wil delen, drinken en snel iets erbij kiezen vanaf 14:00.
- Huidig aanbod: Plancha brood 7, papas fritas 8, croquetas 8, albondigas 8, planken 18-24, drank/spritz/wijn.

#### Upsell voorstel

Zet Plancha brood, Papas Fritas en croquetas chorizo/vega bovenaan. Bied bij planken extra brood/dip en drankje/fles upgrade aan.
- QR triggertekst: Lekker erbij voor bij de borrel

#### Lightspeed actie

Orden QR categorie borrel op marge: brood/dips, papas fritas, croquetas standaard, daarna planken en premium items. Gamba niet standaard pushen; alleen als upgrade/keuze.

#### Marge logica

Brood, dip, aardappel en standaard croquetas zijn marge- en snelheidsproducten. Planken sturen op omzet, maar samenstelling moet gecontroleerd blijven.
- Prioriteit: Hoog

