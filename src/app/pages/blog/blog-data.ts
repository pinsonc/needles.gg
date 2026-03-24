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
    slug: 'how-to-prepare-an-open-team-sheet',
    title: 'How to Prepare an Open Team Sheet',
    date: '2026-03-24',
    summary: 'Everything you need to know about Open Team Sheets.',
    tags: ['official', 'guide', 'team-building'],
    content: `
      <p>When I was prepping for my first tournament, I knew Open Team Sheets existed but I wasn’t sure how they worked exactly. All I had to go on was <a href="https://www.pokemon.com/static-assets/content-assets/cms2/pdf/play-pokemon/rules/play-pokemon-vg-team-list-2023.pdf" target="_blank" rel="noopener noreferrer">the PDF from the official website</a>. I tried Googling around but it was hard to find a real example.
      So here I’m going to give a quick “Idiot’s Guide” I wish I had to refer to when I was prepping my own sheet. It's pretty straightforward, but given mistakes have penalties, I thought it would be good to have a step-by-step guide.</p>
      <h2>What is an Open Team Sheet?</h2>
      <p>The current competitive format uses “Open Team Sheets” and has since Scarlet and Violet released. These are documents that detail your team that your opponent will have access to during your match. This provides some crucial information such
      as movesets, tera types, and movesets that you can use to make informed decisions during the match. Only the tournament organizer will know your exact stat spreads in order to check for invalid Pokemon sets.</p>
      <p>Note that an error in your Open Team Sheet can lead to tournament infractions as minor as a warning to as severe as a game loss.</p>
      <h2>How to Prepare an Open Team Sheet</h2>
      <h3>Player Information</h3>
      <p><b>Player Name:</b> Your name.</p>
      <ul><li>This should probably match what is on your Play! Pokemon Trainer Profile.</li></ul>
      <p><b>Trainer Name In Game:</b> Your name in Pokemon Scarlet or Violet.</p>
      <ul><li>If you are coming back to the game for the first time in a while and are unsure, you can check your Trainer Profile in game. In this case the name would be “Serebii”.</li></ul>
      <img src="blog/profile1.jpg" alt="Trainer Profile as it appears in game" />
      <p><small>Source: <a href="https://www.serebii.net/scarletviolet/profile.shtml" target="_blank" rel="noopener noreferrer">https://www.serebii.net/scarletviolet/profile.shtml</a></small></p>
      <p><b>Battle Team Number / Name:</b> You need to have your team registered as a “Battle Team” in the Box in game. You put the name of the team as it appears in game in this space.</p>
      <ul><li>For example, in this screenshot, the Battle Team Number / Name would be “Team 1”.</li></ul>
      <img src="blog/battle-team.jpg" alt="Battle Team in game" />
      <p><small>Source: <a href="https://www.thegamer.com/pokemon-scarlet-violet-multiplayer-features-poke-portal-explained-guide/" target="_blank" rel="noopener noreferrer">https://www.thegamer.com/pokemon-scarlet-violet-multiplayer-features-poke-portal-explained-guide/</a></small></p>
      <p><b>Switch Profile Name:</b> The name associated with your Switch profile.</p>
      <ul><li>On the Switch home menu, you can click your icon on the top left to double-check if you are unsure.</li></ul>
      <p><b>Age Division:</b> The age division you are in.</p>
      <ul><li>Age Divisions are determined based on the year you were born. The current guidelines can be found here as of March 24, 2026: <a href="https://www.pokemon.com/us/pokemon-news/age-divisions-in-2025-official-competitions" target="_blank" rel="noopener noreferrer">https://www.pokemon.com/us/pokemon-news/age-divisions-in-2025-official-competitions</a>.
      Always check this if you think you may be on the cusp between two divisions one year. But in general, the age divisions are:
        <ul>
          <li>Junior (born up to 12 years before the year of the current tournament season, but at least 6 before)</li>
          <li>Senior (born 13 to 16 years before the year of the current tournament season)</li>
          <li>Masters (born 17 or more years before the year of the current tournament season)</li>
        </ul>
      </li></ul>
      <p><b>Player ID</b><p>
      <ul><li>This is your Play! Pokemon Player ID. If you don’t have one, you can see how to get one here: <a href="https://play.pokemon.com/en-us/resources/documents/player-id-generation-article/" target="_blank" rel="noopener noreferrer">https://play.pokemon.com/en-us/resources/documents/player-id-generation-article/</a>.
      Otherwise, you will be able to find it by logging into your trainer account: <a href="https://www.pokemon.com/us/pokemon-trainer-club/login" target="_blank" rel="noopener noreferrer">https://www.pokemon.com/us/pokemon-trainer-club/login</a>. Make sure this is correct because it is how you will earn Championship Points.</li></ul>
      <p><b>Date of Birth:</b> The date of your birth.</p>
      <h2>Filling Out Your Team</h2>
      <p>You will need to fill out your team’s information twice. The main difference is that the staff sheet requires comprehensive information about your team and your identity, and your opponent sheet requires far less. Namely the in-game level and exact stats of each Pokemon. This is where I will introduce the online tool for making your team sheet: 
      <a href="https://dhsufi.github.io/PokemonTeamListCreator/" target="_blank" rel="noopener noreferrer">https://dhsufi.github.io/PokemonTeamListCreator/</a>. This is a great tool that will fill everything out automatically. But you need to be careful. There’s a reason I didn’t link it first.</p>
      <p>If you have been testing your team on Showdown, it will default all Pokemon to level 50 with perfectly spread IVs (i.e. 31 in every stat except where 0 would be advantageous such as on Attack on Special Attackers or on Speed in Trick Room teams). If your in-game team differs in either way, your Pokemon Paste export from Showdown will be inaccurate.
      So make sure you make the appropriate edits to your Pokemon in Showdown before exporting them to the tool. After doing so, I still recommend going Pokemon-by-Pokemon and making sure that each stat is exactly right.</p>
      <img src="blog/pokemon-stats-screen.avif" alt="Pokemon Stats Screen" />
      <p><small>Source: <a href="https://www.thegamer.com/pokemon-scarlet-violet-complete-stats-and-natures-guide/ target="_blank" rel="noopener noreferrer">https://www.thegamer.com/pokemon-scarlet-violet-complete-stats-and-natures-guide/</a></small></p>
      <p>The second sheet is the one you will give to your opponent when team preview starts. In this one, you don’t need to give stats or levels.</p>
      <h2>Example</h2>
      <p>This is the (anonymized) Team Sheet I filled out for the last Reg F tournament I went to so you can see exactly what a fully filled out one looks like. (Please note that I am not 56 years old)</p>
      <img src="blog/staff-sheet-example.png" alt="Staff Sheet Example" />
      <img src="blog/opponent-team-sheet.png" alt="Opponent Sheet Example" />
      <p>If you enjoyed this guide, follow me on <a href="https://bsky.app/profile/needles.gg" target="_blank" rel="noopener noreferrer">Bluesky</a> where I post about new blog posts, <a href="https://www.youtube.com/@needlesonline" target="_blank" rel="noopener noreferrer">YouTube videos</a>, and updates to the <a href="https://needles.gg/vgc-resources" target="_blank" rel="noopener noreferrer">VGC Resources</a> section of the site.</p>
    `,
  },
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
      <p>You may think you are at an advantage if you go to a ton of cups and challenges at a ton of different stores, but there is a safety guard for that called the Best Finish Limit. This means that only your
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
