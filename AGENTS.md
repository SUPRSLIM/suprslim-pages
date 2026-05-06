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

## Security & Agent-Specific Instructions

Never commit `.env.local` or tokens. 

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
