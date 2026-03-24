import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_ENTRIES, BlogEntry } from './blog-data';
import { BLOG_TAG_ORDER, blogTagColor } from './blog-tags';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly entries: BlogEntry[] = BLOG_ENTRIES;
  readonly filterTags = BLOG_TAG_ORDER;
  readonly tagColor = blogTagColor;

  readonly selectedTag = signal<string | null>(null);

  readonly filteredEntries = computed(() => {
    const tag = this.selectedTag();
    if (!tag) return this.entries;
    return this.entries.filter((e) =>
      e.tags.some((t) => t.toLowerCase() === tag),
    );
  });
}
