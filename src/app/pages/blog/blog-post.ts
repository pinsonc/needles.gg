import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BLOG_ENTRIES, BlogEntry } from './blog-data';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {
  private route = inject(ActivatedRoute);

  private slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
  );

  readonly entry = computed<BlogEntry | undefined>(() =>
    BLOG_ENTRIES.find((e) => e.slug === this.slug()),
  );
}
