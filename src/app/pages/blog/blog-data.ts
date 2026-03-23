export interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

/**
 * Add new blog entries to the top of this array.
 * The `content` field supports basic HTML for formatting.
 */
export const BLOG_ENTRIES: BlogEntry[] = [
  {
    slug: 'welcome',
    title: 'Welcome to the Blog',
    date: '2026-03-23',
    summary: 'The first post on needles.gg — what to expect going forward.',
    tags: ['announcement'],
    content: `
      <p>Welcome to the needles.gg blog! This is where I'll be posting updates,
      tournament recaps, team reports, and general thoughts about competitive Pokémon.</p>
      <p>Stay tuned for more content. If you want to follow along, check out the social
      links on the home page.</p>
    `,
  },
];
