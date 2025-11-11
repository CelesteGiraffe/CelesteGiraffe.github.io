# `portfolioItems.js`

This file is the single source of truth for every project that appears across the portfolio. Each object describes a project, the tags it matches, and the assets it needs.

## Object Shape

```js
{
  title: "Tierlist Maker",
  tags: ["HTML", "CSS", "JavaScript"],
  description: "Short blurb shown on cards.",
  longDescription: `HTML string for detail modals or rich text sections.`,
  image: "/assets/images/TierListMaker.png",
  link: "https://github.com/CelesteGiraffe/Tierlist",
  date: "2023-10-24",
  genre: "tool",
  languagesUsed: { HTML: 35, CSS: 10 },
  effort: 4
}
```

Required fields: `title`, `tags`, `description`, `longDescription`, `image`, `link`, `date`, `genre`. Optional fields (`languagesUsed`, `effort`) are used for progress bars or stats when present.

## Writing Tips
- Keep `description` to one or two sentences since it appears on every card.
- Use HTML inside `longDescription` for paragraphs and lists. Avoid scripts or inline styles.
- When linking to local demos, use root-relative paths like `/Tierlist/pre-loader.html`.
- Dates are strings so they can be parsed via `new Date(date)`. Use `YYYY-MM-DD`.

## Adding New Projects
1. Import any needed screenshots into `assets/images`.
2. Append the new object to the array (ordering does not matter because lists are sorted by date and relevance).
3. Include all relevant tags so role pages and filters catch the project.
4. Test the role pages and custom filter after saving to ensure the new entry renders correctly.

## Common Mistakes
- Leaving a trailing comma inside the `tags` array will create an empty string and break the filter counts.
- Forgetting to update image paths after renaming files leads to placeholders on cards.
- Using `target="_blank"` inside descriptions is discouraged; links should open in the same tab unless they go to GitHub or external sites.

Treat this file like a content database: accurate tags and clean descriptions make the rest of the site feel smart.
