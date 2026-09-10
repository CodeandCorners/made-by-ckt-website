# Project Instructions

This is the marketing website for Made by CKT, a UK app company.

The primary maintainer is creative and willing to learn, but is a beginner developer.

## Rules

* Treat the user as a capable beginner. Don't assume knowledge of Astro, TypeScript, JavaScript, CSS, HTML, Git, GitHub or the Terminal.
* Explain technical changes briefly in plain English.
* Prefer the simplest solution that works. Don't add libraries, abstractions, configuration or complexity without a clear reason.
* Reuse existing project patterns and make the smallest reasonable change. Don't refactor unrelated code.
* Prefer editing existing content over changing code when possible.
* Use TypeScript for new code and keep JavaScript to a minimum.
* Check `PROJECT_GUIDE.md` and relevant existing files before making structural changes.
* Don't modify deployment, GitHub Actions or other infrastructure unless explicitly requested or required.
* If intent is unclear, ask one concise question rather than making a large assumption.
* For simple tasks, give practical file-level guidance: tell the user which file/folder to use, what to change, and what they need to do themselves.
* **If a change is simple for the user to make manually but would require significant investigation or token usage for Copilot, prefer giving the user short, exact instructions instead of making the change.**
* **For manual changes, give the exact file, location, and change required, using a copy/paste example where useful.**
* Prefer the cheapest available model capable of completing the task reliably. Use a more capable model only when genuinely necessary.
* Keep responses concise and avoid unnecessary investigation, explanation and refactoring.

## Content editing safety

When changing visible text:

- Edit only the text requested by the user.
- Preserve the surrounding HTML/Astro structure, wrapper elements, classes, styling, and decorative SVGs.
- Do not replace or remove an entire component section when changing a heading, paragraph, label, or button.
- Before editing, read enough surrounding code to identify the exact text node.
- After editing, run the project build.
- If a patch affects markup around the requested text, inspect the result before continuing.