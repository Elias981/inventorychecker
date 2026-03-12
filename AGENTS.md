# Agent Context

This project uses Supabase.

## Environment Variables

The project expects these keys to exist in `.env`:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_URL=
POSTGRES_DATABASE=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_PRISMA_URL=
POSTGRES_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
SUPABASE_ANON_KEY=
SUPABASE_JWT_SECRET=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_URL=
```

## CSS Conventions

When adding CSS, order the properties within each class or ID selector in alphabetical order.

## Naming Conventions

If you need to name something, use the BEM convention: `Block__element-modifier`.
Block is an object in your website that describes its purpose.
Element is an object inside a block.
Block and element are the shape; the modifier is the style.
The modifier represents appearance, state, or behavior.
You can add mixes if necessary. A mix is when you apply two different BEM classes (from different blocks) to the same HTML element.

## CSS Architecture

When using CSS, use ITCSS (Inverted Triangle CSS). Organize files from "Generic" to "Specific."

Order:
- Settings/Tools: Colors and mixins.
- Generic/Base: Resetting margins, setting base fonts.
- Elements: Styling raw `<a>` or `<h1>` tags.
- Objects: Layout structures (grids, wrappers).
- Components (BEM): This is where your `.card__title--large` lives.

This is the best order to import your stylesheets. Notice that the last you import can override the previous ones. This is good as whenever we work with very specific things we want to be able to handle it without issues of overwritten rules. Avoid using `!important`.

1. Does the same CSS file work for the other page?
Yes. When the user clicks a link and goes from "Home" to "About," the browser usually doesn't re-download the CSS. It sees it already has `main.css` in its cache and just uses it again.

2. Does the CSS have names of objects that don't appear on the first page?
Yes. Your `main.css` might contain the code for a `.product-gallery` (which only exists on the Shop page) and a `.contact-form` (which only exists on the Contact page).

If you are using Tailwind, you do not need to worry about managing Tailwind files. Use React components to separate the code and Tailwind classes. This procedure allows you to request the CSS as needed.

If you use Tailwind, set a theme so your project has a set of colors to use. Example:

```css
@theme {
  --color-brand: #3b82f6; /* Your 'Settings' layer */
}
```

I am using Tailwind CSS v4 with a CSS-first configuration.

Do not use a `tailwind.config.js` file. All theme configurations must happen in `app/globals.css` inside the `@theme` block.

When I ask for new colors, spacing, or fonts, update the `@theme` block using CSS variables (e.g., `--color-brand`, `--spacing-vibe`).

Use semantic naming (e.g., `primary`, `surface`, `border`) rather than descriptive naming (e.g., `blue-500`) so I can change the vibe easily later.

Ensure that any new theme variables are mapped to my `:root` CSS variables so that Dark Mode (which I have set up via `prefers-color-scheme`) continues to work automatically.
