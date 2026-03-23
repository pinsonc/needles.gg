import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Blog } from './pages/blog/blog';
import { BlogPost } from './pages/blog/blog-post';
import { VgcResources } from './pages/vgc-resources/vgc-resources';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  { path: 'blog/:slug', component: BlogPost },
  { path: 'vgc-resources', component: VgcResources },
  { path: '**', redirectTo: '' },
];
