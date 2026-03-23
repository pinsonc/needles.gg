import { afterNextRender, Component, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private router = inject(Router);
  private bgVideo = viewChild<ElementRef<HTMLVideoElement>>('bgVideo');
  private videoInitialized = signal(false);

  private isBlogPost = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => /^\/blog\/.+/.test((e as NavigationEnd).urlAfterRedirects)),
    ),
    { initialValue: false },
  );

  constructor() {
    afterNextRender(() => {
      const video = this.bgVideo()?.nativeElement;
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
        this.videoInitialized.set(true);
      }
    });

    effect(() => {
      const blogPost = this.isBlogPost();
      if (!this.videoInitialized()) return;
      const video = this.bgVideo()?.nativeElement;
      if (!video) return;
      if (blogPost) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    });
  }
}
