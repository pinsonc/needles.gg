/**
 * Blog tag accent colors — same neon family as VGC Resources category chips.
 * Add a new key (lowercase) to register a tag and its color.
 */
export const BLOG_TAG_COLORS: Record<string, string> = {
  announcement: '#ffe600',
  tournament: '#ff6b35',
  locals: '#ff2d95',
  vgc: '#00f0ff',
  smogon: '#c77dff',
  official: '#4d6dff',
  news: '#39ff14',
  personal: '#f472b6',
  guide: '#2dd4bf',
  regionals: '#fbbf24',
  internationals: '#0ea5e9',
  worlds: '#d946ef',
};

/** Display order for filter chips; mirrors known tags above. */
export const BLOG_TAG_ORDER: readonly string[] = Object.freeze(
  Object.keys(BLOG_TAG_COLORS),
);

const DEFAULT_TAG_COLOR = '#8892b0';

export function blogTagColor(tag: string): string {
  return BLOG_TAG_COLORS[tag.toLowerCase()] ?? DEFAULT_TAG_COLOR;
}
