# Project context Horeca Engine

Centrale projectlaag voor SuprSlim Horeca Engine. Gebruik deze tabel als vaste contextbron voor nieuwe chats, besluiten, uitgangspunten, werkwijze en promptblokken.

- Table ID: `tblJP4XUsoU2BjLlq`
- Primary field: Context naam
- Records: 16

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Context naam | `singleLineText` |  |
| Type | `singleSelect` |  |
| Inhoud | `multilineText` |  |
| Gebruik in nieuwe chat | `checkbox` |  |
| Status | `singleSelect` |  |

## Records

### App-logica: voorstel en bevestiging door ondernemer

- Record ID: `rec1X13ERzxmhcZuK`
- Context naam: App-logica: voorstel en bevestiging door ondernemer
- Type: Besluit

#### Inhoud

De Horeca Engine app moet na het inladen van website, Meta profiel, menu en foto's niet alleen informatie verzamelen, maar actief voorstellen doen.

Werkwijze:
1. App analyseert bronnen.
2. App doet een voorstel voor het zaakprofiel.
3. App legt kort uit waarom dit logisch lijkt.
4. Ondernemer bevestigt, past aan of wijst af.
5. Alleen bevestigde onderdelen worden definitief vastgelegd in Airtable.

Voorbeeld La Cafetera:
De app kan voorstellen: 'Wij zien La Cafetera als een Spaanse gastrobar.'
Daarna kan de app toevoegen: 'Mediterraans lijkt ook logisch als extra richting, omdat dit meer vrijheid geeft voor specials en aansluit bij kaart, sfeer of socials.'

De ondernemer krijgt dan keuzes zoals:
- Klopt: Spaans
- Voeg toe: Mediterraans
- Niet passend
- Zelf aanpassen

Productregel:
AI mag aannames doen, maar moet ze altijd tonen als voorstel. De ondernemer bevestigt. Dit houdt de app simpel en voorkomt dat de ondernemer alles zelf moet bedenken.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Lightspeed & QR-inrichting La Cafetera

- Record ID: `rec3XiQWac9ns5xPn`
- Context naam: Lightspeed & QR-inrichting La Cafetera
- Type: Werkwijze

#### Inhoud

Doel van deze aparte chat:
Het uitwerken van een volledig plan voor Lightspeed- en QR-inrichting voor La Cafetera, zodat bestellen sneller wordt, de bonwaarde stijgt en specials/soep slim kunnen worden verkocht zonder opdringerig te worden.

Werk vanuit deze uitgangspunten:
- La Cafetera is een Spaanse lunch/borrelzaak die doorgroeit naar een Spaans-mediterraanse gastrobar.
- Spaans blijft de basis, mediterraans geeft vrijheid.
- Geen fine dining.
- Geen ingewikkelde keuken.
- Geen losse ideeën zonder uitvoeringslogica.
- Huidige kaart is de nulmeting en basis.
- Specials, events en soeprotatie moeten logisch terugkomen in Lightspeed.
- SuprSlim-soep blijft subtiel: alleen lunch, soep van de week en specials.
- Geen soep in de ochtend.
- Geen soep als borrelpush.
- Maximaal 1–2 soepen tegelijk.
- Alles moet passen bij marge, eenvoud, hergebruik, beperkte kok-capaciteit en HANOS-proof inkoop.

Onderzoek en werk uit:
1. Welke onderdelen van Lightspeed automatisch of semi-automatisch ingericht kunnen worden met hulp van ChatGPT.
2. Wat ChatGPT kan voorbereiden: categorieën, productnamen, omschrijvingen, modifiers, upsells, combo’s, QR-volgorde en tijdelijke specials.
3. Wat waarschijnlijk handmatig in Lightspeed moet gebeuren.
4. Of er een export/import-, API- of kassakoppelingsroute mogelijk is.
5. Hoe de menustructuur per dagdeel moet worden ingericht:
   - ochtend: koffie, taart, ontbijtachtige combinaties
   - lunch: broodjes, lunchcombo’s, soep erbij
   - na 14:00: borrel, planken, drankjes, kleine gerechten
6. Welke upsells logisch zijn per productgroep.
7. Hoe tijdelijke Cafetera Specials van 2–4 weken zichtbaar worden in QR/Lightspeed.
8. Hoe de soep van de week commercieel maar subtiel wordt aangeboden.
9. Welke concrete invoertabel nodig is voor Lightspeed.

Maak uiteindelijk:
- Een Lightspeed-structuurplan
- Een QR-menulogica
- Een upsellmatrix
- Een product/modifier-template
- Een werkwijze voor maandelijkse updates
- Een lijst met punten die in Airtable vastgelegd moeten worden

Belangrijk:
Deze chat hoort bij het totaalplan SuprSlim Horeca Engine – La Cafetera. ChatGPT is de werkplaats; Airtable is de bron van waarheid. Alles wat definitief wordt, moet worden vastgelegd in Airtable. De praktische uitwerking komt daarna vooral in de tabel QR upsell strategie.
- Gebruik in nieuwe chat: ja
- Status: Actief

### La Cafetera margemakers en QR-stuurregels

- Record ID: `recJpd8JoCf5D3gAF`
- Context naam: La Cafetera margemakers en QR-stuurregels
- Type: Besluit

#### Inhoud

Besluit: La Cafetera stuurt voortaan niet alleen op gerechten, maar op productrollen en margemakers. Margemakers zijn producten met hoge marge, lage keukenbelasting en/of hoge upsellwaarde. Voorlopige kern-margemakers op huidige kaart: Papas Fritas, Plancha brood, soep van de dag/tomatensoep, koffie + zoet, croquetas chorizo/vega en brood/dips. Middengroep: broodjes, albondigas, planken. Niet actief pushen wegens lagere marge of hogere kost/minder controle: gamba, zalm, burrata. QR/Lightspeed moet margemakers zichtbaar maken via volgorde, combi’s en upsellstappen. Harde regels: elk item moet een rol hebben; QR toont vooral margemakers en upsell-dragers; 12-uurtje wordt opgebouwd uit soep + strak broodje + goedkope vullende component, geen dure standaard gamba/vis; lage marge + hoge moeite wordt niet gepusht; nieuwe specials moeten minimaal middel marge en lage/middel moeite hebben.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Correctie SuprSlim soep inzet horeca

- Record ID: `recKtainVlxQjekxv`
- Context naam: Correctie SuprSlim soep inzet horeca
- Type: Besluit

#### Inhoud

Correctie op eerdere soepstrategie: SuprSlim soep moet aanwezig zijn, maar subtiel en commercieel logisch. Niet in de ochtend en niet als borrelmaatregel. Soep wordt ingezet binnen lunch, specials en als soep/soepen van de week. Doel: soep verkopen zonder het Spaanse/mediterrane gastrobar-profiel te domineren. Praktische inzet: 1 vaste soep van de week of maximaal 2 soepen, gekoppeld aan specials en eventproducten. Bijvoorbeeld geroosterde paprika-tomatensoep als lunchspecial of als combinatie met broodje/flatbread. Geen overkill, geen soep overal.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Productidee: Horeca Engine ondernemers-app met zelfinvoer

- Record ID: `recSzlHIMkR2zXaDh`
- Context naam: Productidee: Horeca Engine ondernemers-app met zelfinvoer
- Type: Besluit

#### Inhoud

Nieuw strategisch uitgangspunt: de SuprSlim Horeca Engine moet andersom denken. Niet starten vanuit losse AI-adviezen, maar vanuit een simpele app waarin de horecaondernemer zelf alle basisgegevens over zijn/haar zaak invoert.

Belangrijke verduidelijking bij 'Wie ben ik?': dit gaat niet om de persoon achter de onderneming, maar om de identiteit van de horecazaak.

De app moet de ondernemer helpen om simpel te formuleren:
- Wat is mijn zaak?
- Waar sta ik voor?
- Wat voor sfeer en beleving wil ik neerzetten?
- Wie is mijn gast/doelgroep?
- Wat verkoop ik nu?
- Waar ben ik goed in?
- Waar loop ik op vast?
- Waar wil ik commercieel en conceptueel naartoe?
- Welke keuken-capaciteit, apparatuur en leveranciers heb ik?
- Welke problemen moeten opgelost worden: marge, kaart, snelheid, personeel, upsell, beleving, herhaalbezoek, zichtbaarheid?

Kernidee:
- De ondernemer laadt zelf de gegevens in over de zaak: identiteit, concept, huidige kaart, doelen, problemen, capaciteit, leveranciers en commerciële focus.
- De app vertaalt die input naar een helder advies: profiel, strategie, verbeterpunten, kaartkansen, specials, upsells, soeprol en concrete acties.
- De app moet simpel voelen: ondernemers-intake -> zaakprofiel -> analyse -> advies -> actieplan -> vastleggen in Airtable.
- Airtable blijft de bron van waarheid; de app wordt de invoer- en advieslaag voor ondernemers.

Waarom belangrijk:
Dit maakt de Horeca Engine schaalbaar. In plaats van dat ChatGPT telkens handmatig context moet ophalen, bouwt de ondernemer zelf een compleet bedrijfsprofiel op. Daarna kan AI gerichter adviseren op marge, eenvoud, concept, keukenhaalbaarheid, hergebruik, QR/Lightspeed en subtiele SuprSlim-verkoop.

Voor La Cafetera betekent dit: de huidige aanpak wordt de blauwdruk voor een breder product. De app moet ondernemers helpen om vanuit hun eigen nulmeting naar een concreet horeca-advies te gaan, zonder fine dining, zonder ingewikkelde keuken en zonder random ideeën.
- Gebruik in nieuwe chat: ja
- Status: Actief

### App-regel: geen dubbele vragen na scan

- Record ID: `recWLvSBQ1RMXqV7O`
- Context naam: App-regel: geen dubbele vragen na scan
- Type: Besluit

#### Inhoud

De Horeca Engine app moet na het scannen van website, menukaart, foto's en social profielen niet opnieuw vragen naar informatie die al redelijk betrouwbaar af te leiden is.

Belangrijke regel:
Wat de app zelf kan herkennen, wordt als voorstel getoond. De ondernemer hoeft alleen te bevestigen of te corrigeren.

Niet opnieuw vragen als de app het kan afleiden:
- type zaak
- basisconcept
- menucategorieen
- zichtbare verkoopprijzen
- prijsniveau
- sfeer en stijl
- dagdelen die op de kaart zichtbaar zijn
- mogelijke productrollen zoals lunch item, borrel item, side, premium item of sharing item
- zichtbare hergebruikproducten

Wel vragen of laten bevestigen:
- klopt dit profiel?
- welke items lopen goed volgens jou?
- welke items kosten veel tijd?
- welke items wil je absoluut behouden?
- welke dagdelen wil je laten groeien?
- welke producten worden vaak samen besteld?
- welke keukenbeperkingen zijn er?
- welke richting wil je op?

UX-regel:
De app start met voorgestelde antwoorden. De ondernemer ziet per onderdeel: 'Dit denken wij'. Daarna kiest hij: klopt, aanpassen, niet passend of toevoegen.

Doel:
De app voelt snel en slim. De ondernemer hoeft niet alles zelf in te vullen, maar alleen de analyse te controleren en aan te vullen waar menselijke praktijkkennis nodig is.
- Gebruik in nieuwe chat: ja
- Status: Actief

### App-flow: bron-inname voor horeca scan

- Record ID: `recXdVhE2o9TMWkrg`
- Context naam: App-flow: bron-inname voor horeca scan
- Type: Besluit

#### Inhoud

De Horeca Engine app moet starten met bron-inname. De ondernemer hoeft niet direct een lange vragenlijst in te vullen.

Eerste scherm vraagt om:
- website adres
- Meta profiel zoals Instagram en Facebook
- Google bedrijfsprofiel indien aanwezig
- online menukaart of PDF menukaart
- foto's van zaak, gerechten, kaart en sfeer
- eventueel Lightspeed of QR informatie later

Doel: de app maakt eerst zelf een basisanalyse. Daarna toont de app aannames over type zaak, menu, sfeer, doelgroep, prijsniveau, dagdelen en kansen. De ondernemer hoeft vooral te bevestigen, corrigeren en aanvullen.

Productregel: website, Meta profiel, menu en foto's eerst. Vragenlijst pas daarna, alleen voor ontbrekende informatie zoals ambitie, problemen, keuken-capaciteit, leverancier en gewenste richting.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Vaste denkregel: engine-scan bij elk nieuw horeca-idee

- Record ID: `recelIEmbuaSxbNu5`
- Context naam: Vaste denkregel: engine-scan bij elk nieuw horeca-idee
- Type: Werkwijze

#### Inhoud

Bij elk nieuw horeca-idee wordt standaard niet alleen gekeken of het past bij La Cafetera of de specifieke klant, maar ook voor welke SuprSlim/Horeca Engine(s) het idee relevant kan zijn.

Vaste vraag bij ieder idee:
1. Voor welke bestaande engine werkt dit?
2. Kan hier een nieuwe engine, module, template of prompt uit ontstaan?
3. Is het restaurant-specifiek of schaalbaar naar andere horecazaken?
4. Hoe passen we het toe zonder extra operationele complexiteit?
5. Hoe raakt dit marge, keukenhaalbaarheid, inkoop, personeel, QR/Lightspeed en gastpsychologie?

Belangrijke toepassing:
- Niet alleen denken: is dit goed voor dit restaurant?
- Altijd ook denken: welke SuprSlim Engine kunnen we hiermee slimmer maken?

Voorbeeld uit deze chat:
Multilingual Menu Psychology Engine: één operationele menukaart, maar meerdere psychologische presentaties per taal/doelgroep. Geen andere gerechten per taal, maar andere volgorde, framing, tekst, suggesties en upsells voor bijvoorbeeld Nederlandse, Engelse en Duitse gasten.

Deze regel moet gelden voor toekomstige ideeën rond menu, events, specials, QR, Lightspeed, soeprotatie, communicatie, kaartontwikkeling en horeca-conceptontwikkeling.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Eerste plan Horeca Engine app: scan en bevestigingsflow

- Record ID: `recj8CsCoFtb9ufzU`
- Context naam: Eerste plan Horeca Engine app: scan en bevestigingsflow
- Type: Besluit

#### Inhoud

Eerste plan voor de Horeca Engine app.

Doel: horecaondernemers snel en simpel laten starten zonder lange intake. De app vraagt eerst om bestaande bronnen en maakt daarna zelf een voorstel.

Startinput:
- website adres
- Meta profiel: Instagram en Facebook
- Google bedrijfsprofiel indien aanwezig
- online menu of PDF menukaart
- foto's van zaak, gerechten, kaart en sfeer
- later eventueel Lightspeed en QR informatie

Hoofdflow:
1. Ondernemer voert bronnen in.
2. App scant website, menu, social profielen en foto's.
3. App doet voorstellen voor het zaakprofiel.
4. App toont per voorstel kort waarom dit logisch lijkt.
5. Ondernemer bevestigt, past aan of wijst af.
6. App stelt alleen nog ontbrekende vragen.
7. App maakt advies en actieplan.
8. Bevestigde onderdelen worden vastgelegd in Airtable.

Voorbeeld La Cafetera:
De app stelt voor: Spaanse gastrobar.
De app stelt als mogelijke verbreding voor: Spaans-mediterraans.
Reden: Spaanse basis blijft herkenbaar, mediterraans geeft meer vrijheid voor specials, seizoenen, borrel en kaartontwikkeling.
Ondernemer kiest: klopt, voeg toe, aanpassen of niet passend.

Productregel:
AI mag aannames doen, maar nooit als definitieve waarheid. Alles wordt eerst voorstel met reden. De ondernemer bevestigt. Pas daarna wordt het definitief opgeslagen.

Belofte:
Upload je website en menukaart. De app laat zien wat voor zaak je bent, waar kansen liggen en welke stappen logisch zijn voor omzet, marge, beleving, specials, upsells en subtiele SuprSlim inzet.
- Gebruik in nieuwe chat: ja
- Status: Actief

### SuprSlim soep-doel als kern van Horeca Engine

- Record ID: `recjlMDQzh2MQUrH9`
- Context naam: SuprSlim soep-doel als kern van Horeca Engine
- Type: Besluit

#### Inhoud

SuprSlim moet altijd onderdeel zijn van de horeca-aanpak. De Horeca Engine is niet alleen bedoeld om events, specials en upsells te bouwen, maar ook om structureel soep te verkopen. Soep moet in elk horeca-concept terugkomen als margeproduct, lunch-upgrade, QR-upsell en doorvertaling van eventproducten. Voor La Cafetera betekent dit: Spaans/mediterraanse soepvarianten die passen bij de huidige kaart en inspiratie, zoals geroosterde paprika-tomatensoep, courgette-feta soep, linzen-harira stijl, pompoen-chorizo soep of tomaat-basilicum soep. Soep wordt gekoppeld aan koffie/lunch/borrel momenten en Lightspeed/QR-upsells.
- Gebruik in nieuwe chat: ja
- Status: Actief

### UX-model Horeca Engine: voorstellen laten bevestigen

- Record ID: `recruLOlqTpkVH3mo`
- Context naam: UX-model Horeca Engine: voorstellen laten bevestigen
- Type: Besluit

#### Inhoud

De Horeca Engine app werkt met een vaste bevestigingsflow. Na het inladen van website, Meta profiel, menukaart en foto's doet AI voorstellen. De ondernemer hoeft vooral te bevestigen, aan te passen of af te wijzen.

Vaste structuur per onderdeel:
1. AI voorstel
2. Korte reden waarom dit voorstel logisch lijkt
3. Keuzes voor ondernemer: klopt, toevoegen, aanpassen, niet passend
4. Alleen bevestigde onderdelen worden definitief opgeslagen in Airtable

Voorbeeld La Cafetera:
Voorstel: Spaanse gastrobar.
Aanvulling: mediterraans toevoegen als logische verbreding.
Reden: Spaanse basis blijft herkenbaar, mediterraans geeft meer vrijheid voor specials, seizoenen, borrel en kaartontwikkeling.

De app moet dit model toepassen op concept, doelgroep, sfeer, kaartcategorieen, dagdelen, problemen, kansen, specials, upsells en soeprol.
- Gebruik in nieuwe chat: ja
- Status: Actief

### App UX: vraagblok 1-7 automatisch invullen en laten bevestigen

- Record ID: `rectJ7ErFaV7B44C2`
- Context naam: App UX: vraagblok 1-7 automatisch invullen en laten bevestigen
- Type: Besluit

#### Inhoud

De eerste 7 vraagblokken van de Horeca Engine app moeten niet als klassieke vragenlijst worden getoond. Alles wat de app uit website, menukaart, foto's en social profielen kan afleiden, wordt vooraf ingevuld als voorstel.

Vraagblok 1 t/m 7:
1. Type zaak
2. Concept en positionering
3. Menu-categorieen
4. Prijzen en prijsniveau
5. Productrollen
6. Dagdelen
7. Hergebruik en marge-kansen

Wat de app zelf invult:
- type zaak en basisconcept
- zichtbare kaartcategorieen
- verkoopprijzen en prijsrange
- mogelijke productrollen zoals lunch item, borrel item, side, klassieker, premium item, sharing item of marge-kans
- zichtbare dagdelen zoals ochtend, lunch, borrel en avond
- producten of ingredienten die vaker lijken terug te komen
- sfeer en positionering uit site, foto's en socials

Wat de ondernemer doet:
- bevestigen of het klopt
- corrigeren wat niet klopt
- aanvullen wat ontbreekt
- aangeven wat goed loopt, veel tijd kost, moet blijven of mag verdwijnen
- aangeven welk dagdeel moet groeien

UX-regel:
Niet vragen wat al zichtbaar is. Toon eerst: 'Dit denken wij'. Daarna knoppen: klopt, aanpassen, niet passend, toevoegen.

Doel:
De app voelt snel en slim. De ondernemer hoeft niet alles zelf te bedenken of in te vullen. De app doet het voorwerk; de ondernemer gebruikt praktijkkennis om het profiel goed te keuren.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Productvisie Horeca Engine: marge en upsell ondernemer

- Record ID: `recu4Yc7MGKkPfn9w`
- Context naam: Productvisie Horeca Engine: marge en upsell ondernemer
- Type: Besluit

#### Inhoud

De Horeca Engine app helpt een horecaondernemer om meer marge uit de bestaande kaart te halen, vooral via slimme upsell en betere combinaties.

Breder doel:
De app moet niet alleen advies geven over gerechten, maar de ondernemer helpen om zijn hele kaart commercieler, eenvoudiger en winstgevender te maken.

Wat de app kan doen:
- Kaart scannen en marge-kansen vinden.
- Logische upsells voorstellen per dagdeel.
- Combinaties maken van bestaande producten.
- Producten herkennen die vaker kunnen terugkomen.
- Items aanwijzen die te weinig opleveren of te veel keukendruk geven.
- Lunch, borrel, koffie en specials slimmer koppelen.
- QR en Lightspeed voorstellen maken voor extra verkoopmomenten.
- Specials ontwikkelen die eerst getest worden en daarna tijdelijk op de kaart komen.
- Soep subtiel inzetten waar passend, vooral lunch of weeksoep.
- Ondernemer laten bevestigen welke voorstellen kloppen.

Belofte:
Upload je website en menukaart. De app laat zien waar omzet, marge en beleving blijven liggen, en maakt concrete upsell-acties die passen bij jouw zaak, kaart en keuken.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Product Summary Analyse La Cafetera maart-april 2026

- Record ID: `recv9JdVr63VRvLDA`
- Context naam: Product Summary Analyse La Cafetera maart-april 2026
- Type: Analyse

#### Inhoud

PRODUCT SUMMARY REPORT LA CAFETERA
Periode: 1 maart 2026 09:00 t/m 1 mei 2026 09:00
Rapport gegenereerd: 2 mei 2026 23:24
Totale omzet: €89.616,15
Totale korting: €0,00

KERNINZICHT
La Cafetera draait een gezonde omzetbasis, maar de huidige omzetmix laat zien dat de zaak nu vooral functioneert als koffiezaak + lunchzaak + lichte borrellocatie. De ambitie richting Spaans-mediterraanse gastrobar vraagt vooral om hogere bonwaarde na lunch, sterkere borrelstructuur, scherpere specials en betere QR/Lightspeed-upsells.

BELANGRIJKSTE OMZETDRAGERS
1. Cappuccino: 3.528 stuks / €13.272,60
2. Lungo: 1.445 stuks / €4.659,00
3. Latte Macchiato: 785 stuks / €3.659,50
4. Spaans 12-uurtje vis: 210 stuks / €3.150,00
5. Glas wit: 487 stuks / €2.775,90
6. Pollo: 167 stuks / €2.171,00
7. Thee: 677 stuks / €2.166,40
8. Spaans 12-uurtje vlees: 136 stuks / €2.040,00
9. Salmon: 143 stuks / €1.869,50
10. De Atún: 152 stuks / €1.831,00

CONCLUSIE UIT DATA
- Koffie is het fundament van de omzet en moet commercieel beter worden benut met koffie + taart / koffie + pastel / koffie + mini-dessert combinaties.
- Lunch is sterk, vooral 12-uurtjes en broodjes. Dit is de basis voor soep-upsell en dagdeelcombinaties.
- Borrel draait nog relatief licht. Bier, cocktails, spritz, borrelhapjes en planken laten zien dat gasten nog onvoldoende worden gestuurd om na 14:00 langer te blijven en meer te besteden.
- Specials staan wel in de data, maar zijn te generiek geregistreerd als “La Cafetera - Special” met meerdere prijzen. Daardoor is de performance niet scherp genoeg te beoordelen.
- Soep is onderbenut maar moet subtiel blijven: tomatensoep en soep van de dag samen ongeveer €600 omzet over 2 maanden. Kans is 2-3x groei, maar alleen via lunch, specials en soep van de week. Geen ochtendsoep en geen borrelpush.
- Taart/dessert draait goed, maar moet strakker gekoppeld worden aan koffie-upsells en margecheck.

STRATEGISCH OORDEEL
La Cafetera heeft geen omzetprobleem, maar laat geld liggen per gast. Groei moet niet komen uit complexere keuken of grotere kaart, maar uit:
1. hogere bonwaarde per dagdeel,
2. betere QR/Lightspeed-sturing,
3. heldere Cafetera Specials,
4. events als testmomenten,
5. subtiele SuprSlim-soepverkoop via lunch/specials.

ACTIEADVIES
1. QR upsell na 14:00 activeren met borrelbundels.
2. Drie logische borrelbundels maken: Estrella + croqueta, glas wijn + klein hapje, Spritz moment.
3. Specials structureren naar maximaal 3-5 tijdelijke Cafetera Specials, 2-4 weken zichtbaar.
4. Maandelijkse speciale avond gebruiken als testmoment voor nieuwe gerechten.
5. Beste eventgerechten laten doorstromen naar specials en daarna eventueel vaste kaart.
6. Koffie + taart / pastel / mini-dessert combo’s in QR en Lightspeed zetten.
7. Soep reduceren naar maximaal 1 duidelijke optie tegelijk, gekoppeld aan lunch of special.
8. Borrelkaart simpeler en verleidelijker maken, zonder fine dining of complexe keuken.
9. Wijn sterker koppelen aan snack/pairing.
10. Taartassortiment opschonen op marge, rotatie en koffiekoppeling.

DIRECTE QR/LIGHTSPEED KANSEN
Ochtend:
- Koffie + pastel de nata
- Cappuccino + cake
- Latte/Chai + zoet item

Lunch:
- 12-uurtje + soep klein
- Broodje + soep van de week
- Salade + glas water / koffie na

Na 14:00:
- Estrella + croqueta
- Glas wijn + albondigas/calamares/croqueta
- Spritz + klein zout hapje
- Plancha + fles/glas wijn suggestie

SUPRSLIM-ROL
Soep blijft bijverdienmodel, geen hoofdconcept. Maximaal 1-2 soepen tegelijk. Alleen lunch, specials en soep van de week. Soep koppelen aan seizoenen, producthergebruik en specials. Geen ochtendsoep en geen borrelsoep.

HORECA ENGINE VERTALING
Huidige kaart = nulmeting. Vanuit deze data moeten vervolgacties worden vastgelegd in:
- QR upsell strategie
- Lightspeed QR taken Cafetera
- Doorontwikkel matrix Cafetera
- Events & Maandconcepten
- Horeca specials / Gerechten & Specials
- Soeprotatie Horeca

SAMENVATTING IN 1 ZIN
La Cafetera draait goed, maar kan met kleine slimme ingrepen in QR, specials, borrelmomenten, koffie-combi’s en subtiele soepverkoop meer omzet per gast halen zonder de keuken complexer te maken.
- Gebruik in nieuwe chat: ja
- Status: Actief

### App-inzicht: lichte data gebruiken zonder financiële cijfers

- Record ID: `recw4QzHHOF1QOHxJ`
- Context naam: App-inzicht: lichte data gebruiken zonder financiële cijfers
- Type: Besluit

#### Inhoud

Les uit La Cafetera voor de Horeca Engine app: de app hoeft niet direct om omzet, inkoopprijs, brutomarge of financiële rapportages te vragen om waarde te leveren.

De app kan al sterke marge- en upsellvoorstellen doen met lichte, laagdrempelige data:
- menukaart met verkoopprijzen
- productcategorieen
- dagdelen: ochtend, lunch, middag, borrel, avond
- productrollen: hardloper, marge-maker, premium item, side, klassieker, probleemitem
- ondernemer-inschatting: loopt goed, loopt matig, kost veel tijd, moet blijven, mag weg
- keukenhaalbaarheid: simpel, gemiddeld, lastig
- hergebruik van ingredienten of producten
- bestaande systemen: QR, Lightspeed, online menu
- foto's/socials voor sfeer en positionering

De app moet dus eerst vragen om makkelijke signalen in plaats van harde financiele cijfers. Voorbeelden:
- Welke items lopen volgens jou goed?
- Welke items kosten veel tijd?
- Welke items wil je behouden?
- Welke items worden vaak samen besteld?
- Welke producten gebruik je in meerdere gerechten?
- Welke dagdelen wil je laten groeien?
- Welke categorie voelt onderbenut?

Productregel:
Begin met menu, prijzen, dagdelen, productrollen en ondernemer-bevestiging. Vraag pas later om financiele cijfers als de ondernemer meer diepgang wil.

Waarom belangrijk:
Dit houdt de app laagdrempelig. Veel horecaondernemers hebben geen zin of tijd om meteen financiële cijfers aan te leveren. De app moet eerst snel waarde tonen met zichtbare kaartdata en simpele keuzes.
- Gebruik in nieuwe chat: ja
- Status: Actief

### Besluit ingrediëntenlimieten La Cafetera

- Record ID: `recyJtlfgq5o3atUN`
- Context naam: Besluit ingrediëntenlimieten La Cafetera
- Type: Besluit

#### Inhoud

Vaste regel voor menuontwikkeling La Cafetera:

1. Maximaal 5 ingrediënten per gerecht.
- Drager telt mee als component wanneer deze bepalend is voor het gerecht, zoals brood, tostada of wrap.
- Sauzen, toppings en garnituren tellen mee als ingrediënt/component.
- Alleen basiskeukenzaken zoals olie, zout en peper tellen niet mee.

2. Maximaal 30-35 actieve ingrediënten op de totale kaart.
- Richtwaarde: 30 ingrediënten.
- Absolute bovengrens: 35 actieve ingrediënten.
- Elk nieuw ingrediënt moet minimaal 2-3 toepassingen hebben op kaart, specials, lunch, borrel of soep.
- Komt er een nieuw ingrediënt bij, dan moet er iets anders uit of moet het ingrediënt aantoonbaar meerdere rollen krijgen.

3. Huidige nulmeting op basis van menukaartfoto's:
- La Cafetera zit naar schatting nu op circa 55-70 actieve ingrediënten.
- Doel is terugbrengen naar circa 30-35 door sauzen, single-use snacks en losse toppings te reduceren.

4. Toepassing op brood/tostada/wrap-strategie:
- Drager-variatie mag alleen als dezelfde topping/bouwsteen wordt gebruikt.
- Broodje, tostada en wrap mogen niet leiden tot extra ingrediënten of extra mise en place.
- Variatie zit in vorm, portie, presentatie en prijslogica, niet in extra componenten.

Deze regel is verplicht bij alle toekomstige gerechten, specials, events, QR-upsells en kaartdoorontwikkeling.
- Gebruik in nieuwe chat: ja
- Status: Actief

