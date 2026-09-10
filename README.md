# Made by CKT Website

This is the website for Made by CKT.

You do **not** need to understand how Astro, TypeScript or the other tools work to make most website changes. For anything more complicated, ask Copilot to help.

## Start the website

Open the project folder in VS Code.

Then open the Terminal:

**Terminal → New Terminal**

Run:

```bash
npm install
npm run dev
```

You should see a local website address, usually:

```text
http://localhost:4321
```

Open that address in your browser.

Keep the Terminal running while you work.

To stop the website, press:

```text
Ctrl + C
```

## Making changes

The easiest way to make changes is to ask Copilot.

For example:

> Change the homepage headline to "We build apps people love to use."

> Change the text in the About section.

> Add an image to the homepage.

> Change the website colours to [describe colours].

> Add a new About page.

> Add a new project to the portfolio.

Copilot should tell you which file it changed and briefly explain what it did.

If you're unsure, just ask:

> Where do I change this?

or:

> How do I change this myself next time?

## Common places to edit

| What you want to change              | Where                                                 |
| ------------------------------------ | ----------------------------------------------------- |
| Site name, URL and basic information | `src/site.config.ts`                                  |
| Homepage                             | `src/pages/index.astro` and `src/components/landing/` |
| Images and other public files        | `public/`                                             |
| Blog posts                           | `src/content/blog/`                                   |
| Portfolio projects                   | `src/content/work/`                                   |
| Header                               | `src/components/Header.astro`                         |
| Footer                               | `src/components/Footer.astro`                         |
| Colours and fonts                    | `src/styles/global.css`                               |

If you aren't sure which file to edit, **ask Copilot rather than guessing**.

## Adding images

Put website images in:

```text
public/images/
```

For example:

```text
public/images/about.jpg
```

Then ask Copilot:

> Add `public/images/about.jpg` to the About section.

Copilot can make the code change needed to display it.

## Checking your changes

While the development server is running, save your changes and refresh the browser.

When you're happy, you can check the production build with:

```bash
npm run build
```

You normally don't need to run this yourself before every change. The website is automatically built and deployed when changes are pushed to GitHub.

## Useful Terminal commands

Start the website:

```bash
npm run dev
```

Build the website:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Stop a running command:

```text
Ctrl + C
```

## If something goes wrong

Don't randomly change files or reinstall things.

Copy the error from the Terminal and ask Copilot:

> I'm getting this error. What does it mean and how do I fix it?

If Copilot suggests a complicated solution, ask:

> Is there a simpler way to do this?

## Project guide

More technical information about the project is kept in:

```text
PROJECT_GUIDE.md
```

This is mainly for Copilot and for understanding how the project is organised.
