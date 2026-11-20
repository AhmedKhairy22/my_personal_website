# Project notes for AI agents

Personal website built with Astro and Tailwind CSS v4.

- Pages are in `src/pages/`, components in `src/components/`, the shared layout in `src/layouts/BaseLayout.astro`.
- Site info, links, interests and tools live in `src/data/site.ts`. Projects live in `src/data/projects.ts`.
- Blog posts are Markdown files in `src/content/blog/`, defined in `src/content.config.ts`.
- Colors are theme variables in `src/styles/global.css` (bg-paper, text-ink, text-muted, border-line, text-accent, etc.). Use these instead of raw Tailwind colors so light and dark mode both work.
- Dark mode is the default. Don't add emojis.
- Run `npm run build` to check for errors.