import { Component } from '@angular/core';

interface ResourceLink {
  name: string;
  url: string;
  description: string;
}

interface ResourceCategory {
  title: string;
  resources: ResourceLink[];
}

@Component({
  selector: 'app-vgc-resources',
  templateUrl: './vgc-resources.html',
  styleUrl: './vgc-resources.scss',
})
export class VgcResources {
  private readonly neonPalette = [
    '#00f0ff', // cyan
    '#ff2d95', // pink
    '#39ff14', // green
    '#ffe600', // yellow
    '#4d6dff', // blue
    '#ff6b35', // orange
    '#c77dff', // lavender
  ];

  categoryColor(index: number): string {
    return this.neonPalette[index % this.neonPalette.length];
  }

  categoryId(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  scrollTo(title: string): void {
    document.getElementById(this.categoryId(title))?.scrollIntoView({ behavior: 'smooth' });
  }

  readonly categories: ResourceCategory[] = [
    {
      title: 'Team Repositories',
      resources: [
        {
          name: 'VGCPastes Repository',
          url: 'https://docs.google.com/spreadsheets/d/1axlwmzPA49rYkqXh7zHvAtSP-TKbM0ijGYBPRflLSWw/edit?gid=736919171#gid=736919171',
          description: 'Huge repository of VGC teams for all regulations.',
        },
        {
          name: 'Victory Road Repository',
          url: 'https://victoryroad.pro/sv-rental-teams/',
          description: 'Repository for the current regulation with links to previous ones.',
        },
        {
          name: 'PokéPaste',
          url: 'https://pokepast.es',
          description: 'Share and browse Pokémon team pastes.',
        },
      ],
    },
    {
      title: 'Damage Calculators',
      resources: [
        {
          name: 'Pokémon Damage Calculator',
          url: 'https://calc.pokemonshowdown.com',
          description: 'The Showdown damage calc — base standard but can default to Singles sets.',
        },
        {
          name: 'Alex Collins\' NCP VGC Damage Calculator',
          url: 'https://nerd-of-now.github.io/NCP-VGC-Damage-Calculator/',
          description: 'A fork of the Showdown damage calc with focus on VGC sets.',
        },
        {
          name: 'Showdex Damage Calculator',
          url: 'https://chromewebstore.google.com/detail/showdex/dabpnahpcemkfbgfbmegmncjllieilai',
          description: 'A Showdown damage calc Chrome extension that syncs with the current game state.',
        }
      ],
    },
    {
      title: 'Smogon Resources',
      resources: [
        {
          name: 'Pokémon Showdown',
          url: 'https://play.pokemonshowdown.com',
          description: 'The premiere destination for teambuilding, practice, and occasional tournament play.',
        },
        {
          name: 'Smogon Forums',
          url: 'https://www.smogon.com/forums/forums/video-game-championships.513/',
          description: 'Discuss different formats, talk team building, and browse meta discussions.',
        },
        {
          name: 'Smogon Strategy Dex',
          url: 'https://www.smogon.com/dex/sv/pokemon/',
          description: 'List of most Pokémon and their recommended sets for given formats.',
        }
      ],
    },
    {
      title: 'Community',
      resources: [
        {
          name: 'r/VGC',
          url: 'https://www.reddit.com/r/VGC/',
          description: 'Reddit community for VGC discussion and advice.',
        },
        {
          name: 'U.S. Pokemon Association',
          url: 'https://www.usvgc.com/',
          description: 'Find a local VGC community and participate in events.',
        }
      ],
    },
    {
      title: 'Data & Reference',
      resources: [
        {
          name: 'Bulbapedia',
          url: 'https://bulbapedia.bulbagarden.net',
          description: 'Comprehensive Pokémon encyclopedia.',
        },
        {
          name: 'Serebii',
          url: 'https://serebii.net',
          description: 'Pokémon news, data, and game info.',
        },
        {
          name: 'Pikalytics',
          url: 'https://pikalytics.com',
          description: 'Usage stats, common spreads, and metagame trends.',
        },
      ],
    },
    {
      title: 'Unofficial Tournaments',
      resources: [
        {
          name: 'Victory Road ',
          url: 'https://victoryroad.pro/2026-season-calendar/',
          description: 'List of all official and VR-hosted Tournaments.',
        },
        {
          name: 'Limitless TCG',
          url: 'https://play.limitlesstcg.com/tournaments/?game=VGC',
          description: 'Grassroots Pokémon tournaments on Showdown and Cartridge.',
        },
      ],
    },
    {
      title: 'Official Resources and Tournaments',
      resources: [
        {
          name: 'Play! Pokémon Event Finder',
          url: 'https://events.pokemon.com/EventLocator/',
          description: 'Find upcoming official VGC tournaments and events.',
        },
        {
          name: 'Regionals Schedule',
          url: 'https://championships.pokemon.com/en-us/about/pokemon-regional-and-special-championships',
          description: 'Schedule of upcoming Regionals tournaments.',
        },
        {
          name: 'International Championships Schedule',
          url: 'https://championships.pokemon.com/en-us/about/international-championships',
          description: 'Schedule of upcoming International Championships tournaments.',
        },
        {
          name: 'Latest In-Game News',
          url: 'https://sv-news.pokemon.co.jp/en/list',
          description: 'Latest news from the in-game news section. Mostly format updates, GCs, and events',
        },
        {
          name: 'How Championship Points Work',
          url: 'https://championships.pokemon.com/en-gb/about/?pillar=vgc#championship-points',
          description: 'Learn how Pokémon Championship Points work and how to earn them.',
        },
        {
          name: 'Pokémon on Twitch',
          url: 'https://www.twitch.tv/pokemon',
          description: 'Rewatch former major tournaments and events.',
        },
        {
          name: 'Major Event Registration on RK9',
          url: 'https://rk9.gg/tournaments',
          description: 'Get signed up for regionals and international championships.',
        }
      ],
    },
  ];
}
