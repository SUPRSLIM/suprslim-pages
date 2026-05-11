# SUPRSLIM Brand Guide

Dit document beschrijft de visuele identiteit en merkrichtlijnen van SUPRSLIM. Het dient als referentie voor designbeslissingen, contentcreatie en toekomstige uitbreidingen van het platform.

## 🎨 Kleurenpalet: "Vitality & Warmth"

Het palet combineert gezondheid (groen) met culinaire passie (oranje) op een moderne, tech-georiënteerde basis.

| Kleur | HEX | Rol | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Obsidian Green** | `#040d08` | Achtergrond / Basis | `bg-[#040d08]` |
| **Emerald Mint** | `#10b981` | Gezondheid / Icons / Koppen | `text-emerald-500` |
| **Vibrant Orange** | `#f97316` | Actie / Knoppen / Energie | `bg-orange-600` |
| **Slate White** | `#f8fafc` | Primaire Tekst | `text-slate-100` |
| **Muted Slate** | `#94a3b8` | Secundaire Tekst / Borders | `text-slate-400` |

### Achtergrond Stijl
Gebruik radiale gradiënten op de achtergrond voor diepte:
```css
background-image: 
  radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, rgba(249, 115, 22, 0.05) 0%, transparent 50%);
```

---

## 🖋️ Typografie

*   **Lettertype**: `Outfit` (Google Fonts)
*   **Hoofdkoppen (H1)**: Extrabold, `tracking-tight`, `leading-[1.1]`. Grootte: `text-5xl` tot `text-8xl`.
*   **Subkoppen (H2/H3)**: Bold, wit of emerald.
*   **Body Tekst**: Medium gewicht, `text-slate-400`, goede regelafstand (`leading-relaxed`).

---

## 🖼️ Beeldtaal & Fotografie

De fotografie van SUPRSLIM moet aanvoelen als een "high-end lifestyle magazine".

*   **Stijl**: Minimalistisch, georganiseerd, licht en luchtig.
*   **Belichting**: Natuurlijk daglicht, zachte schaduwen.
*   **Compositie**: Overhead shots (knolling) of close-ups met beperkte scherptediepte.
*   **Onderwerpen**: Verse groenten, moderne keukens, strakke planning (notitieboekjes).

### Logo
Het logo bestaat uit een minimalistische soepkom met een geïntegreerde 'S'.
*   **Hoofdkleur**: Emerald / Zilver.
*   **Lettermerk**: SUPRS**LIM** (waarbij LIM in Emerald is).

---

## 📱 UI Componenten

*   **Border Radius**: Extreem rond voor een vriendelijke, moderne look (`rounded-[2.5rem]` of `rounded-[3rem]`).
*   **Glassmorphism**: Gebruik `backdrop-blur-md` in combinatie met een transparante achtergrond voor nav-bars en overlays.
*   **Hover States**: Altijd subtiele interactie (schaalvergroting `scale-105` of kleurverandering naar emerald/orange).

---

## 🤖 GEO & SEO Richtlijnen

*   **Tone of Voice**: Direct, deskundig, behulpzaam en praktisch. Geen "marketing fluff", maar concrete antwoorden.
*   **Structuur**: Gebruik altijd semantische HTML (`article`, `section`, `header`) en Schema.org JSON-LD om AI-engines (GEO) te helpen de content te begrijpen.
