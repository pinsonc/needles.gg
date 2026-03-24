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
    slug: 'the-first-tournament',
    title: 'What to Expect at your First VGC Tournament',
    date: '2026-03-23',
    summary: 'How to navigate your first official in-person VGC tournament.',
    tags: ['tournament', 'official', 'locals', 'guide', 'personal'],
    content: `
      <p>Last weekend I attended my first League Challenge VGC tournament at <a href="https://www.gaminggiant.com/" target="_blank" rel="noopener noreferrer">Gaming Giant</a> in Fairfax, VA.
      I have been going to them for a while for trading cards and when I found out they did VGC too, I thought
      it would be the perfect opportunity to finally jump in and try it out.</p>
      <h2>A return to form</h2>
      <p><i>You can skip this section if you're only interested in the tournament experience.</i></p>
      <p>I am 28 years old. Over a decade ago, in high school, I considered myself a pretty good singles Smogon player. I made incredibly cringey YouTube videos about it too. It was one of the
      few hobbies I had outside of school extracurriculars and I always felt a genuine sense of pride when I got recognized for it. However, I got busy. My family moved a lot. I lost interest in
      Pokemon after X/Y and didn't return until I was in college in the lead up to Sword/Shield. Since then I've been an avid player of the game and follower of the competitive scene, but never
      a competitor myself.</p>
      <p>After Worlds last year, I decided it was something I wanted to pursue for real. So I attempted to register for the Baltimore Regional but there were no spots. In hindsight, this was probably
      for the best because I would have been stomped and completely discouraged. At this point, though, I didn't really know how to proceed as a competitor. Do I just play some Showdown?
      Is a regional the only place to play? How does it work?</p>
      <p>Early March I found out one of the TCG stores I regularly go to for Magic the Gathering and One Piece was hosting a VGC tournament the next weekend. I decided to go and immediately started
      practicing <a href="https://pokepast.es/afa344d44993ac47" target="_blank" rel="noopener noreferrer">with a team</a> that I could easily build in Pokemon Violet.</p>
      <h2>League Challenge vs Cup</h2>
      <p>I attended a League Challenge. This is a locally-hosted tournament that awards championship points depending on the number of entrants. Play! Pokemon partner stores can host one a month. It
      consists of several rounds of Swiss play with a single-elimination "top cut" after if there are enough entrants. Points are distributed based on the following chart.</p>
      <img src="blog/league-challenge-points.png" alt="League Challenge Points Chart" />
      <p>The "Kicker" is the number of players required to award that placement their points. For example, if there are 10 players, places 1-4 get points.</p>
      <p>The main difference between a League Challenge and a Cup is the amount of Championship Points awarded. Also, each Play! Pokemon partner store can only host one Cup a season (3-month period)
      In practice, this means that Cups tend to be more competitive and have more entrants attempting to get their hands on the most points. Expect to see very competitive, meta teams with people trying to win.</p>
      <img src="blog/league-cup-points.png" alt="League Challenge vs Cup" />
      <p>You may think you are at an advantage if you go to a ton of cups and challenges at a ton of different stores, but there is a safety guard in that called the Best Finish Limit. This means that only your
      top 4 best finishes count towards your total championship points. So if you win 4 Challenges, you don't get any more points for attending more. But it also means you can attempt to improve your record as much
      as you want by going to more tournaments.</p>
      <h2>Before You Arrive</h2>
      <p>Obviously, you should have your team ready to go on your copy of Pokemon Scarlet or Violet. But there are a few other things you should prepare.</p>
      <ul>
        <li>You need to have a Player ID to register. You can see how to get one <a href="https://play.pokemon.com/en-us/resources/documents/player-id-generation-article/" target="_blank" rel="noopener noreferrer">here</a>.</li>
        <li>Familiarize yourself with the <a href="https://www.pokemon.com/static-assets/content-assets/cms2/pdf/play-pokemon/rules/play-pokemon-vg-team-list-2023.pdf" target="_blank" rel="noopener noreferrer">Open Team Sheet</a>.
        You need to fill out both pages with your team. Either at home or at the tournament. You will give one to the tournament organizer when you register/check-in and you will keep one to give to each opponent you face.
        I used this online tool to fill it out: <a href="https://dhsufi.github.io/PokemonTeamListCreator/" target="_blank" rel="noopener noreferrer">Open Team Sheet Generator</a> but be careful, you need the staff sheet
        to match your in-game team stats exactly. So make sure all the stats and levels match exactly what is on your Pokemon summary screen because Showdown will default to level 50. </li>
        <li>You should have your team registered in a Battle Team in your box. That title of the team is also what will go on the team sheet under Battle Team Number / Name.</li>
        <li>Check with the hosting store to see if they require pre-registrations or if it is walk-up only.</li>
      </ul>
      <h2>Playing At the Tournament</h2>
      <p>You will likely be given a table number to sit at. Once you're there, feel free to take out your Switch and get set up. You do not need to be connected to the internet because all battles will use local connection.
      You will search for a Link Battle in the Poke Portal. Agree with your opponent on a code to use, many will just use their table number. One of you will be randomly chosen to pick the ruleset. If it's you, you want to pick
      Official Ruleset 1 (I believe, check with the organizer if it isn't obvious from the descriptions). Once the team preview pops up, you can exchange team sheets with your opponent and start the battle.</p>
      <p>After/during your best of 3 set, you will be given a match slip to fill out that looks like this:</p>
      <img src="blog/match-slip.png" alt="Match Slip" />
      <p>You and your opponent both need to initial the sheet, indicate the winner, and bring it to the tournament organizer.</p>
      <p>Rounds either last 45 minutes or until all matches have concluded. You may end up waiting a bit if your game ends early so try and strike up a conversation with your opponent or spend some time thinking through your last match.
      Match-ups are assigned based on your record. Meaning, if possible, it will try to pair you with someone who has the same amount of wins and losses as you. This may be impossible sometimes as you cannot fight the same opponent twice.</p>
      <p>You will notice a lot of players taking notes. I think it's a generally good practice but there isn't one right way to do it. The only rule is that you need to use a completely fresh piece of paper each game, no referring to
      pre-written notes. So I suggest a ring-bound notebook with a page for each game. To get started, write down stuff you think you will forget. For example, what Pokemon used their Tera, what Pokemon your opponent led with,
      which have been KO'd and which have been switched out. Eventually you will get a feel for what you need to note and you can start to personalize your approach.</p>
      <h2>Top Cut</h2>
      <p>If there are enough entrants, the top 8 players will advance to the top cut. Top cut is a single-elimination tournament with an amount of players depending on the total number of entrants. Rounds are still best of 3, but if you
      lose a set, it's game over. If there are not enough entrants for top cut, prizes will be awarded based on standings, with ties broken by coin toss.</p>
      <h2>After the Tournament</h2>
      <p>Stick around and chat with some other players. They may know about more local tournaments and events that you may not have known about. I found the community to be very friendly so don't be afraid to ask for help finding things to do
      and events to attend or even just asking for team and play advice.</p>
    `,
  },
];
