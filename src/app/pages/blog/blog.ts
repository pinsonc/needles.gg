import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_ENTRIES, BlogEntry } from './blog-data';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly entries: BlogEntry[] = BLOG_ENTRIES;
}
