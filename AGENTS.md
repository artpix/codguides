## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Icons

Use only [Lucide](https://lucide.dev/icons/) for UI icons. Import named icon components from `@lucide/astro`; do not use icon fonts, Unicode symbols, emoji, custom SVG icons, or other icon libraries. Brand logos and illustrations are separate assets.

Render icons as inline SVG with no client hydration. Use `currentColor`, a stroke width of 2, and sizes of 16, 20, or 24 px as appropriate. Mark decorative icons with `aria-hidden="true"`; give icon-only controls an accessible text label.
