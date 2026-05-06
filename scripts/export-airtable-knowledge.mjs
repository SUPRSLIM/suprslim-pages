import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const baseId = process.env.AIRTABLE_BASE_ID || "appe53zLo9AuxXZuc";
const outputDir = path.resolve(
  process.env.AIRTABLE_KNOWLEDGE_OUTPUT || path.join(repoRoot, "docs", "airtable-kennis"),
);
const tablesDir = path.join(outputDir, "tables");

const sensitiveRecordTables = new Set(["Contracts", "Leads", "E-mail log"]);
const redactedFieldNames = new Set(["e-mail", "email", "telefoon", "phone", "document"]);

async function readToken() {
  if (process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN) {
    return process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN;
  }

  const candidates = [
    path.join(repoRoot, ".env.local"),
    path.join(repoRoot, "..", ".env.local"),
  ];

  for (const file of candidates) {
    if (!existsSync(file)) continue;

    const content = await readFile(file, "utf8");
    for (const line of content.split(/\r?\n/)) {
      const match = line.match(/^\s*AIRTABLE_PERSONAL_ACCESS_TOKEN\s*=\s*(.+?)\s*$/);
      if (match) {
        return match[1].replace(/^["']|["']$/g, "");
      }
    }
  }

  throw new Error("AIRTABLE_PERSONAL_ACCESS_TOKEN was not found.");
}

async function airtableGet(url, token) {
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return response.json();
    }

    if (response.status === 429 || response.status >= 500) {
      await new Promise((resolve) => setTimeout(resolve, Math.min(10000, attempt * 2000)));
      continue;
    }

    const text = await response.text();
    throw new Error(`Airtable request failed (${response.status}): ${text}`);
  }

  throw new Error(`Airtable request failed after retries: ${url}`);
}

function slugify(value) {
  const slug = String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "untitled";
}

function markdownCell(value = "") {
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
}

function isEmpty(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

function formatValue(value, recordNameById) {
  if (isEmpty(value)) return "";
  if (typeof value === "boolean") return value ? "ja" : "nee";
  if (typeof value === "number") return String(value);
  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    const items = value
      .map((item) => {
        if (item === null || item === undefined) return "";
        if (typeof item === "string") {
          if (item.startsWith("rec") && recordNameById.has(item)) {
            return `${recordNameById.get(item)} (\`${item}\`)`;
          }
          return item;
        }
        if (typeof item === "object" && item.filename) {
          return [item.filename, item.type, item.size ? `${item.size} bytes` : ""]
            .filter(Boolean)
            .join(" - ");
        }
        if (typeof item === "object" && item.name) {
          return item.name;
        }
        return JSON.stringify(item);
      })
      .filter(Boolean);

    return items.map((item) => `- ${item}`).join("\n");
  }

  if (typeof value === "object" && value.name) {
    return value.name;
  }

  return JSON.stringify(value, null, 2);
}

function shouldRedactField(fieldName) {
  return redactedFieldNames.has(String(fieldName).toLowerCase());
}

function tableFileNames(tables) {
  const used = new Map();
  const result = new Map();

  for (const table of tables) {
    const baseSlug = slugify(table.name);
    const count = used.get(baseSlug) || 0;
    used.set(baseSlug, count + 1);
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
    result.set(table.id, `${slug}.md`);
  }

  return result;
}

function primaryField(table) {
  return table.fields.find((field) => field.id === table.primaryFieldId);
}

function recordTitle(record, table) {
  const field = primaryField(table);
  if (!field) return record.id;
  return record.fields?.[field.name] || record.id;
}

function writeLines(file, lines) {
  return writeFile(file, `${lines.join("\n")}\n`, "utf8");
}

async function fetchAllRecords(table, token) {
  const records = [];
  let offset = "";

  do {
    const url = new URL(`https://api.airtable.com/v0/${baseId}/${table.id}`);
    url.searchParams.set("pageSize", "100");
    if (offset) url.searchParams.set("offset", offset);

    const response = await airtableGet(url.toString(), token);
    records.push(...(response.records || []));
    offset = response.offset || "";
    await new Promise((resolve) => setTimeout(resolve, 250));
  } while (offset);

  return records;
}

function buildContextDoc() {
  return [
    "# App context en bedoeling",
    "",
    "SUPRSLIM is opgezet als een content-, weekmenu- en operatie-engine rond slim koken, gezond eten, soepconcepten, boodschappenlijsten en leadgeneratie. Airtable fungeert als bron van waarheid; Make en AI gebruiken die tabellen om content, weekmenu's, briefings, inkopen en opvolgacties te genereren.",
    "",
    "De huidige repo bevat statische landingspagina's. De Airtable-kennis beschrijft de bredere bedoeling achter die pagina's: doelgroepgerichte SUPRSLIM-content maken, testen en publiceren, met duidelijke kaders voor voedingslogica, budget, merktoon, social content en operationele uitvoering.",
    "",
    "## Hoofdlijnen",
    "",
    "- Product- en ingredientkennis vormt de basis voor menu's, blogs, weeklijsten en pagina's.",
    "- Weekmenu's, slimme weeklijsten en boxen/proefperiodes vertalen die basis naar concrete producten en lead magnets.",
    "- Websitepagina's, blogs, social content, vlogs, e-mailcampagnes en Lizzy performance vormen de marketinglaag.",
    "- Weekmenu kwaliteit, AI Specialisten, AI Output Test, Calorie Check en Boodschappen Validatie vormen de kwaliteitslaag rond AI-output.",
    "- Kirsten weekbriefings, SUPRSLIM Weekritme, acties/automations en inkoopmonitor-tabellen vormen de operationele laag.",
    "- De Horeca Engine-tabellen leggen een tweede domein vast: horeca-concepten, smaakprofielen, QR/Lightspeed upsells, soeprotatie, specials en doorontwikkeling van La Cafetera.",
    "",
    "## Rol van Airtable",
    "",
    "Airtable is niet alleen opslag voor content, maar het werkmodel van de app. De velden leggen vast wat AI moet genereren, wat mensen moeten controleren, welke status iets heeft, welke Make-trigger nodig is en hoe output doorstroomt naar pagina's, campagnes of operationele taken.",
    "",
    "## Belangrijke documentatiebestanden",
    "",
    "- [Producten en ingredienten](tables/producten-en-ingredienten.md)",
    "- [Weekmenu's](tables/weekmenu-s.md)",
    "- [Slimme Weeklijsten](tables/slimme-weeklijsten.md)",
    "- [Weekmenu kwaliteit](tables/weekmenu-kwaliteit.md)",
    "- [AI Specialisten](tables/ai-specialisten.md)",
    "- [SUPRSLIM Weekritme](tables/suprslim-weekritme.md)",
    "- [Project context Horeca Engine](tables/project-context-horeca-engine.md)",
    "- [SUPRSLIM Acties & Automations](tables/suprslim-acties-automations.md)",
  ];
}

function buildPrivacyDoc() {
  return [
    "# Redactie en privacy",
    "",
    "Deze export is bedoeld als projectdocumentatie, niet als volledige datadump.",
    "",
    "Niet uitgeschreven als ruwe records:",
    "",
    "- `Contracts`: kan contractpartijen, bijlagen, waarden en voorwaarden bevatten.",
    "- `Leads`: kan namen, e-mailadressen, telefoonnummers en leadberichten bevatten.",
    "- `E-mail log`: kan individuele e-mailadressen en verzendlogs bevatten.",
    "",
    "Daarnaast worden velden met exacte namen `E-mail`, `Email`, `Telefoon`, `Phone` en `Document` in andere tabellen geredigeerd. Airtable blijft de bron voor persoonsgegevens, contractdetails en operationele logs.",
  ];
}

async function main() {
  const token = await readToken();
  await mkdir(tablesDir, { recursive: true });

  const metadata = await airtableGet(`https://api.airtable.com/v0/meta/bases/${baseId}/tables`, token);
  const tables = metadata.tables || [];
  const recordsByTableId = new Map();

  for (const table of tables) {
    recordsByTableId.set(table.id, await fetchAllRecords(table, token));
  }

  const recordNameById = new Map();
  for (const table of tables) {
    for (const record of recordsByTableId.get(table.id) || []) {
      recordNameById.set(record.id, String(recordTitle(record, table)));
    }
  }

  const fileByTableId = tableFileNames(tables);
  const generatedAt = new Date().toISOString();

  const readme = [
    "# SUPRSLIM Airtable kennis",
    "",
    `Deze documentatieset is gegenereerd uit Airtable-base \`${baseId}\` op ${generatedAt}.`,
    "",
    "Doel: de context, bedoeling, inhoudelijke kaders en operationele kennis van SUPRSLIM vindbaar maken in markdown, naast de statische landingpages in deze repo.",
    "",
    "Gevoelige ruwe records uit `Contracts`, `Leads` en `E-mail log` zijn niet uitgeschreven. Hun schemas en recordaantallen staan wel in de documentatie, zodat de rol van die tabellen duidelijk blijft zonder persoonsgegevens of contractdata in de repo te plaatsen.",
    "",
    "## Startpunten",
    "",
    "- [App context en bedoeling](00-app-context.md)",
    "- [Schema-overzicht](01-schema-overzicht.md)",
    "- [Redactie en privacy](02-redactie-en-privacy.md)",
    "",
    "## Tabellen",
    "",
    "| Tabel | Records | Beschrijving |",
    "| --- | ---: | --- |",
  ];

  const schema = [
    "# Airtable schema-overzicht",
    "",
    `Base: \`Soepslim systeem\` (\`${baseId}\`)`,
    "",
  ];

  for (const table of tables) {
    const records = recordsByTableId.get(table.id) || [];
    const description = table.description || "";
    const fileName = fileByTableId.get(table.id);

    readme.push(`| [${table.name}](tables/${fileName}) | ${records.length} | ${markdownCell(description)} |`);

    schema.push(`## ${table.name}`, "");
    if (description) schema.push(description, "");
    schema.push(`- Table ID: \`${table.id}\``);
    schema.push(`- Primary field ID: \`${table.primaryFieldId}\``);
    schema.push(`- Records: ${records.length}`, "");
    schema.push("| Veld | Type | Beschrijving |", "| --- | --- | --- |");
    for (const field of table.fields || []) {
      schema.push(`| ${field.name} | \`${field.type}\` | ${markdownCell(field.description || "")} |`);
    }
    schema.push("");
  }

  await writeLines(path.join(outputDir, "README.md"), readme);
  await writeLines(path.join(outputDir, "01-schema-overzicht.md"), schema);
  await writeLines(path.join(outputDir, "00-app-context.md"), buildContextDoc());
  await writeLines(path.join(outputDir, "02-redactie-en-privacy.md"), buildPrivacyDoc());

  for (const table of tables) {
    const records = recordsByTableId.get(table.id) || [];
    const primary = primaryField(table);
    const lines = [`# ${table.name}`, ""];

    if (table.description) lines.push(table.description, "");
    lines.push(`- Table ID: \`${table.id}\``);
    lines.push(`- Primary field: ${primary?.name || ""}`);
    lines.push(`- Records: ${records.length}`, "");

    lines.push("## Velden", "");
    lines.push("| Veld | Type | Beschrijving |", "| --- | --- | --- |");
    for (const field of table.fields || []) {
      lines.push(`| ${field.name} | \`${field.type}\` | ${markdownCell(field.description || "")} |`);
    }
    lines.push("");

    lines.push("## Records", "");
    if (sensitiveRecordTables.has(table.name)) {
      lines.push(
        "Ruwe records zijn bewust niet geexporteerd naar markdown, omdat deze tabel waarschijnlijk persoonsgegevens, contractinformatie of e-maillogs bevat. Gebruik Airtable als bron voor de details.",
      );
    } else if (records.length === 0) {
      lines.push("Geen records gevonden.");
    } else {
      for (const record of records) {
        lines.push(`### ${recordTitle(record, table)}`, "");
        lines.push(`- Record ID: \`${record.id}\``);

        for (const field of table.fields || []) {
          if (!Object.hasOwn(record.fields || {}, field.name)) continue;

          if (shouldRedactField(field.name)) {
            lines.push(`- ${field.name}: \`[geredigeerd]\``);
            continue;
          }

          const valueText = formatValue(record.fields[field.name], recordNameById);
          if (!valueText) continue;

          if (valueText.includes("\n") || valueText.length > 120) {
            lines.push("", `#### ${field.name}`, "", valueText);
          } else {
            lines.push(`- ${field.name}: ${valueText}`);
          }
        }

        lines.push("");
      }
    }

    await writeLines(path.join(tablesDir, fileByTableId.get(table.id)), lines);
  }

  console.log(`Exported ${tables.length} tables to ${outputDir}`);
}

await main();
