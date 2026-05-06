# Boodschappen Validatie

Simpele testtabel om AI-boodschappenlijsten snel te beoordelen op compleetheid, betaalbaarheid, logische hoeveelheden en praktische uitvoerbaarheid.

- Table ID: `tbldVsoRYIA6fOYiP`
- Primary field: Validatie titel
- Records: 0

## Velden

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

## Records

Geen records gevonden.
