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
  readonly categories: ResourceCategory[] = [
    {
      title: 'Teambuilding & Practice',
      resources: [
        {
          name: 'Pokémon Showdown',
          url: 'https://play.pokemonshowdown.com',
          description: 'Battle simulator for testing teams online.',
        },
        {
          name: 'PokéPaste',
          url: 'https://pokepast.es',
          description: 'Share and browse Pokémon team pastes.',
        },
      ],
    },
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
        }
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
      title: 'Community & Learning',
      resources: [
        {
          name: 'r/VGC',
          url: 'https://www.reddit.com/r/VGC/',
          description: 'Reddit community for VGC discussion and advice.',
        },
        {
          name: 'Smogon VGC Forum',
          url: 'https://www.smogon.com/forums/forums/vgc.Pokemon-doubles/',
          description: 'In-depth discussion and metagame analysis.',
        },
        {
          name: 'U.S. Pokemon Association Discord',
          url: 'https://discord.com/invite/smU4msuvYT',
          description: 'Find a local VGC community and get help with your team.',
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
        {
          name: 'Pikalytics',
          url: 'https://pikalytics.com',
          description: 'Usage stats, common spreads, and metagame trends.',
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
