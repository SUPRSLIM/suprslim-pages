import Airtable from 'airtable';

const baseId = process.env.AIRTABLE_BASE_ID || "appe53zLo9AuxXZuc";

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
}).base(baseId);

/**
 * Fetch the latest featured week menu
 */
export async function getFeaturedWeekmenu() {
  try {
    const records = await airtable('Slimme Weeklijsten').select({
      maxRecords: 1,
      filterByFormula: "{Status} = 'Gereed'",
      // Sort by the primary field or just take the first one if created field is missing
    }).firstPage();
    
    const record = records[0];
    if (!record) return null;

    return {
      id: record.id,
      name: record.get('Weeklijst titel'),
      goal: record.get('Doelgroep') || 'Gezond & Licht',
      kcal: record.get('kcal per dag') || '1500', // Note: Check if this field exists, fallback provided
      bespaartips: record.get('Bespaartips'),
    };
  } catch (error) {
    console.error('Airtable Error [getFeaturedWeekmenu]:', error.message || error);
    return null;
  }
}

/**
 * Fetch lead magnets or tips
 */
export async function getBespaartips() {
  try {
    // We'll fetch the bespaartips from the featured weekmenu instead of a separate table
    const menu = await getFeaturedWeekmenu();
    if (menu && menu.bespaartips) {
      // Split the tips if they are in a list format, or just return as one
      return [{
        id: 'featured',
        title: 'Weektip',
        desc: menu.bespaartips,
        icon: '💡'
      }];
    }
    return [];
  } catch (error) {
    console.error('Airtable Error [getBespaartips]:', error.message || error);
    return [];
  }
}

/**
 * Fetch specific AI/Quality rules for brand consistency
 */
export async function getQualityRules() {
  try {
    const records = await airtable('AI Regels SUPRSLIM').select().all();
    
    return records.map(record => ({
      id: record.id,
      rule: record.get('Regel') || record.get('Titel'),
      description: record.get('Toelichting') || record.get('Inhoud'),
    }));
  } catch (error) {
    console.error('Airtable Error [getQualityRules]:', error.message || error);
    return [];
  }
}

/**
 * Fetch social content tasks for the dashboard
 */
export async function getSocialContent() {
  try {
    const records = await airtable('ACTIEVE - Social Content').select({
      sort: [{ field: 'Titel', direction: 'asc' }]
    }).all();
    
    return records.map(record => ({
      id: record.id,
      title: record.get('Titel'),
      platform: record.get('Platform'),
      hook: record.get('Hook'),
      caption: record.get('Caption'),
      script: record.get('Script'),
      status: record.get('Status'),
      feedback: record.get('AI Feedback') || 'Geen feedback beschikbaar voor deze opdracht.',
    }));
  } catch (error) {
    console.error('Airtable Error [getSocialContent]:', error.message || error);
    return [];
  }
}

export default airtable;
