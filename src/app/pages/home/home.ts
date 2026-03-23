import { Component } from '@angular/core';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly socials: SocialLink[] = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@needlesonline',
      icon: 'youtube',
      color: '#ff0000',
    },
    {
      name: 'Twitch',
      url: 'https://twitch.tv/needlesonline',
      icon: 'twitch',
      color: '#9146ff',
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/needles.gg',
      icon: 'bluesky',
      color: '#0085ff',
    },
    {
      name: 'Tumblr',
      url: 'https://www.tumblr.com/needlesonline?source=share',
      icon: 'tumblr',
      color: '#35465c',
    },
  ];
}
