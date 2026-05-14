import OpenAI from 'openai';
import airtable from './airtable';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Haalt alle actieve regels op uit de Rules Engine
 */
async function getCentralRules() {
  const records = await airtable('Project Context SUPRSLIM').select({
    filterByFormula: "{Status} = 'Actief'",
    sort: [{ field: 'Prioriteit', direction: 'desc' }]
  }).all();

  return records.map(r => `${r.get('Context naam')}: ${r.get('Inhoud')}`).join('\n');
}

/**
 * Genereert een volledig weekmenu op basis van de centrale regels
 */
export async function generateWeekMenu(targetGroup = 'Gezin') {
  const rules = await getCentralRules();

  const systemPrompt = `
    Je bent de SUPRSLIM AI Content Manager. Jouw doel is 90% automatisering van hoogwaardige weekmenu's.
    Werk strikt volgens de volgende centrale regels:
    
    ${rules}
    
    OUTPUT FORMAT: Je MOET antwoorden in strikt JSON formaat zodat het systeem dit direct kan verwerken.
    JSON Structuur:
    {
      "titel": "Naam van de weeklijst",
      "ontbijt": "Beschrijving",
      "lunch": "Beschrijving",
      "avondeten": "Beschrijving",
      "snacks": "Beschrijving",
      "prepmaaltijden": "Instructies",
      "boodschappenlijst": "Lijst gecategoriseerd per supermarkt-afdeling",
      "bespaartips": "Specifieke tips voor dit menu"
    }
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: `Genereer een nieuw weekmenu voor de doelgroep: ${targetGroup}.` }
    ],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content);
}
