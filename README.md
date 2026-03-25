# Cursor workshop

**What this is:** One folder with everything for our hands-on **Cursor** workshop—a small website you will change during the sessions, step by step, with help from the facilitator.

**What you need to know:** You do not need to be a programmer. Follow the steps below; if something fails, ask for help and we will fix it together.

## What is Cursor?

**Cursor** is a code editor (similar to VS Code) with built-in AI. You open this project in Cursor, describe what you want in everyday language, and apply suggestions when you choose to—nothing changes on your computer until you save.

## Before you start (one-time)

Ask a helper if you are unsure. You need:

1. **This folder on your computer** — your facilitator will show how (for example with Git, GitHub Desktop, or a ZIP download).
2. **Node.js** — a free program that runs the practice website. [Download Node.js (LTS)](https://nodejs.org/) if you do not already have it.

Helpers who need to check installations can use [setup.md](setup.md).

## Run the practice website

Open a terminal in **this project’s root folder** (the same folder as `package.json`), then run:

```bash
npm install
```

Then:

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. When you save a file, the page usually updates on its own.

**Day to day:** after the first `npm install`, you normally only run **`npm run dev`** when you work on the project.

---

## Optional: for curious folks

| | |
|--|--|
| **Next.js** | Powers the website (pages and local server). |
| **React** | Builds the user interface. |
| **TypeScript** | JavaScript with clearer structure. |
| **Tailwind CSS** | Styling via short class names in the code. |

Other commands some people use later:

| Command | Meaning in plain terms |
|---------|-------------------------|
| `npm run build` | Prepare a “final” version of the site. |
| `npm run start` | View that final version on your machine (after `build`). |
| `npm run lint` | Check the code for common issues. |

**Where things live:** the main page is **`app/page.tsx`**; shared styling is **`app/globals.css`**.

**Learn more:** [Next.js docs](https://nextjs.org/docs) · [Cursor docs](https://cursor.com/docs)
