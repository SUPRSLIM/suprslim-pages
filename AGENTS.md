# Repository Guidelines

## Project Structure & Module Organization

This repository contains the SUPRSLIM Next.js application (App Router) and supporting project documentation.
- `app/`: Next.js App Router source code.
- `docs/airtable-kennis/`: Project context from Airtable (auto-generated).
- `scripts/`: Utility scripts, including `export-airtable-knowledge.mjs`.
- `legacy-pages/`: Original static HTML landing pages.

## Build, Test, and Development Commands

- `npm run dev`: Start the local development server at `http://localhost:3000`.
- `npm run build`: Build the production bundle.
- `node scripts/export-airtable-knowledge.mjs`: Refresh Airtable markdown docs.

## Coding Style & Naming Conventions

Use Next.js App Router conventions.
- Components should be functional and use Tailwind CSS for styling.
- Use `lib/` for shared utilities (e.g., Airtable client).
- Preserve UTF-8 Dutch text.

## Testing Guidelines

Before submitting changes, manually verify pages on desktop and mobile. Ensure Airtable data is fetched correctly and forms write back as intended.

## Commit & Pull Request Guidelines

Use short Dutch summaries for commits (e.g., `Update weekmenu component`).

## Phase 1 Launch Rules

1.  **Airtable is Sovereign**: All dynamic content (Blogs, Weeklijsten, Tips, Leads) must flow through Airtable. Hardcoding is only for permanent UI structural elements.
2.  **The "Lizzy" Persona**: All copy must be vibrant, practical, and empathetic. Avoid technical jargon; focus on "mentale rust" and "slim besparen".
3.  **Kirsten Quality Control**: Before adding new features or content logic, verify if they align with the core values: Health, Budget, and Simplicity.
4.  **Safety First**: Ensure the medical and tax disclaimers are always visible in the global footer.

## Security & Agent-Specific Instructions

Never commit `.env.local` or tokens. 

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
