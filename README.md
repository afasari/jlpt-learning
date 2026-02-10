# JLPT Learning Hub

Comprehensive resource for mastering Japanese from N5 to N1. Built with Astro and Tailwind CSS.

## Features

- **Home Page**: Overview and quick navigation to all sections
- **Level Pages**: N5, N4, N3, N2, N1 (currently N4 is fully implemented)
  - Vocabulary with example sentences
  - Kanji with readings and compounds
  - Grammar with detailed explanations
  - Study tips
- **Roadmap**: Structured study plans and learning paths
- **Resources**: Curated collection of books, websites, Anki decks, and tools
- **Cheatsheets**: Quick reference guides (Hiragana, Katakana, Particles, Verbs, Numbers)
- **Tips**: Comprehensive study strategies for all JLPT sections

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Content Structure

Content is stored in `src/content/` using Astro Content Collections:

- `vocabulary/` - Vocabulary words organized by JLPT level
- `kanji/` - Kanji characters organized by JLPT level
- `grammar/` - Grammar points organized by JLPT level
- `tips/` - Study tips and strategies
- `books/` - Recommended textbooks
- `websites/` - Online resources
- `anki-decks/` - Anki flashcard decks
- `tools/` - Study tools and apps
- `cheatsheets/` - Quick reference materials

## Adding Content

### Adding Vocabulary

Create a new file in `src/content/vocabulary/[level]/word.md`:

```yaml
---
title: 本
reading: ほん
meaning: book
level: n4
jlpt_order: 1
example_sentence: 本を読むのは好きです。
example_reading: ほんをよむのはすきです。
example_meaning: I like reading books.
---

Additional description (optional).
```

### Adding Kanji

Create a new file in `src/content/kanji/[level]/character.md`:

```yaml
---
title: 学
onyomi: ガク
kunyomi: まな.ぶ
meaning: learn, study
level: n4
stroke_count: 8
jlpt_order: 1
compounds:
  - word: 学生
    reading: がくせい
    meaning: student
---
```

### Adding Grammar

Create a new file in `src/content/grammar/[level]/pattern.md`:

```yaml
---
title: ～てみる (te miru)
level: n4
category: Tense/Aspect
difficulty: beginner
jlpt_order: 1
---

## Meaning
"Try doing [X]"

## Usage
Verb-te form + みる

## Examples
- Example sentence
```

### Adding Resources

Create a new file in `src/content/books/book.md`:

```yaml
---
title: Genki I & II
author: Eri Banno
publisher: The Japan Times
year: 2011
levels: ["n5", "n4"]
category: Textbook
rating: 5
link: https://genki.japantimes.co.jp/
---

Description of the book.
```

## Deployment

The site is static and can be deployed to:

### GitHub Pages (Recommended)

**Automatic Deployment via GitHub Actions:**

1. Push your code to GitHub repository
2. Go to **Settings** → **Pages** in your GitHub repo
3. Set **Source** to **GitHub Actions**
4. Push to `main` branch - it will automatically deploy!

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the site automatically on every push to `main`
- Deploy to GitHub Pages
- Your site will be available at: `https://[username].github.io/jlpt-learning/`

**Note**: Update the `site` and `base` URLs in `astro.config.mjs` if your repository name differs.

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
```

Then push the `dist/` folder to your `gh-pages` branch.

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/`

### Vercel

1. Connect your repository to Vercel
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist/`

## Project Structure

```
jlpt-learning/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── cards/
│   │       ├── VocabCard.astro
│   │       ├── KanjiCard.astro
│   │       ├── GrammarCard.astro
│   │       └── ResourceCard.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── vocabulary/
│   │   ├── kanji/
│   │   ├── grammar/
│   │   ├── tips/
│   │   ├── books/
│   │   ├── websites/
│   │   ├── anki-decks/
│   │   ├── tools/
│   │   └── cheatsheets/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── roadmap.astro
│   │   ├── resources.astro
│   │   ├── cheatsheets.astro
│   │   ├── tips.astro
│   │   └── n4/
│   ├── styles/
│   │   └── global.css
├── public/
├── dist/
└── package.json
```

## Contributing

To add more content or improve the site:

1. Fork the repository
2. Create a new branch for your feature
3. Add content files to the appropriate `src/content/` directory
4. Test your changes with `npm run dev`
5. Submit a pull request

## License

MIT
