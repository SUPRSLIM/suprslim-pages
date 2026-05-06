# Redactie en privacy

Deze markdowndocumentatie is bedoeld voor projectcontext en appontwikkeling. Het is niet bedoeld als openbare export van alle Airtable-records.

## Bewust niet uitgeschreven

De volgende ruwe records zijn niet opgenomen:

- `Leads`: bevat namen, e-mailadressen, telefoonnummers en berichten.
- `Contracts`: kan contractpartijen, bijlagen, waarden en voorwaarden bevatten.
- `E-mail log`: kan individuele e-mailadressen en verzendstatussen bevatten.

Deze tabellen staan wel in het tabeloverzicht, zodat hun rol in de app duidelijk is.

## Wat wel is opgenomen

Wel opgenomen:

- productvisie;
- app-architectuur;
- contentstrategie;
- weekmenu- en AI-regels;
- horeca-engine regels;
- operationele taken en prioriteiten;
- tabelrollen en modulekaart.

## Geheimen en tokens

Secrets en tokens horen niet in markdown of Git. De bestaande `.env.local` is niet opgenomen in deze documentatie.

Het exportscript kan later gebruikt worden met een geldige Airtable personal access token, maar die token moet lokaal blijven en mag niet worden vastgelegd in documentatie of repo.
