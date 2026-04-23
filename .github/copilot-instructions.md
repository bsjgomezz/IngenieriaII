# Copilot instructions for IngenieriaII

Purpose: Provide repository-specific guidance for future Copilot sessions.

---

Build, test, and lint commands

- This is a small static client-side site (HTML/CSS/JS). There are no build, test, or lint scripts in the repository.
- To preview locally: open index.html in a browser (double-click or serve the folder with a static file server).
- If the contributor adds Node tooling later, look for package.json for npm scripts (e.g., npm test, npm run lint). There are currently no single-test commands to run.

---

High-level architecture

- Client-only static website. Single-page entry: index.html.
- Assets live under IMG/ (images). There are placeholder directories expected for JS and CSS (commonly js/ and ccs/ in this repo snapshot) but none contain code yet.
- Layout and styling rely on Bootstrap delivered via CDN. No server-side code, routing, or back-end dependencies.

---

Key conventions and repository-specific patterns

- Bootstrap via CDN (CSS and JS) — modify the index.html head to change versions.
- Image assets stored in IMG/ and referenced relative to index.html (e.g., IMG/Club_Atlético_River_Plate_logo.svg.png).
- If adding JavaScript or styles, place files under js/ and ccs/ respectively and reference with relative paths from index.html.
- Be mindful of HTML syntax: index.html currently contains an invalid nested script src attribute — check the <head> script/link tags if editing.
- Keep index.html as the canonical entrypoint; other pages or SPA routing should still reference static asset folders.

---

Other AI assistant configs

- No CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, or similar files were found. If any are added, include a short summary here to help Copilot adapt to repo policies.

---

Where to look next (for Copilot sessions)

- README.md for project description and tech stack.
- index.html for the exact markup, dependencies, and asset references.
- IMG/ for existing image assets.

---

If you plan to add automated checks

- Recommend adding a package.json and basic scripts (lint/test) or a simple static server for local development (e.g., serve or http-server). Document those scripts here when added so Copilot can suggest commands.

---

Contact / maintainers

- No explicit CONTRIBUTING.md or maintainers info found. If you add a CONTRIBUTING.md, include a short excerpt here describing local setup commands and test commands.

---

Notes for Copilot sessions

- Assume a static client-only site by default. If new files (package.json, build scripts, CI configs) appear, re-evaluate the Build/Test section and update this file.

## Recomendaciones
- Cada vez que ingreses un nuevo código, inserta un comentario en español que explique las etiquetas utilizadas
- los ejemplos y el contenido en general necesito que esten en español