# Repository Guidelines

## Project Structure & Module Organization

This repository contains static SUPRSLIM landing pages and supporting project documentation. Published HTML files live in the repository root: `index.html`, `drukke-gezinnen.html`, `drukke-mensen.html`, and `test2.html`. The GitHub Actions workflow for generating pages is in `.github/workflows/generate.yml`.

Project context from Airtable is documented in `docs/airtable-kennis/`. Utility scripts live in `scripts/`, currently including `export-airtable-knowledge.mjs`. There is no `src/`, `tests/`, or shared assets directory yet; keep new static pages at the root unless the structure is deliberately changed.

## Build, Test, and Development Commands

There is no package install or build step for the static pages.

- Open `index.html` or a target landing page directly in a browser for quick preview.
- `python -m http.server 8000`: optional local preview server at `http://localhost:8000/`.
- `node scripts/export-airtable-knowledge.mjs`: refresh Airtable markdown docs when a valid local `AIRTABLE_PERSONAL_ACCESS_TOKEN` is available.
- Run the GitHub workflow manually from Actions > Generate Landing Page to create a new doelgroep page.

## Coding Style & Naming Conventions

Use plain HTML, inline CSS, and minimal JavaScript only when needed. Match the existing style: two-space indentation, semantic sections, Arial-based typography, and concise Dutch copy. Generated page filenames should be lowercase and hyphen-separated, for example `drukke-gezinnen.html`.

Preserve UTF-8 Dutch text. Do not change form actions, data mappings, Airtable IDs, or workflow behavior unless the task explicitly requires it.

## Testing Guidelines

There is no automated test suite. Before submitting page changes, manually check desktop and mobile widths. Verify forms render correctly, required fields work, links go to intentional targets, and Dutch characters display correctly. For docs/script changes, run the relevant command if credentials and network access are available.

## Commit & Pull Request Guidelines

Recent commits use short Dutch summaries such as `Nieuwe SUPRSLIM landingspagina` and `Update generate.yml`. Continue using concise, imperative commit messages that describe the changed page, workflow, or documentation.

Pull requests should include a brief description, affected files/pages, screenshots for visible changes, and notes about workflow, form, Airtable, or documentation changes. Link related issues when available.

## Security & Agent-Specific Instructions

Never commit `.env.local`, Airtable tokens, lead data, contract details, or e-mail logs. Keep edits narrowly scoped and avoid introducing dependencies unless they clearly reduce maintenance cost.
