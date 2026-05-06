import Airtable from 'airtable';

const baseId = process.env.AIRTABLE_BASE_ID || "appe53zLo9AuxXZuc";

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
}).base(baseId);

export default airtable;
