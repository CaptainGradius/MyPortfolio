const projectsData = [
  {
    id: 'breaking-news',
    title: 'Breaking News',
    category: 'Nostalgic Interactive Experience',
    cover: require('../assets/breaking-news-gif.gif'),
    tags: ['alt-ctrl', 'arduino', 'pc'],
    video: 'https://player.vimeo.com/video/1058959133?h=278d24c7e5&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1',
    description: [
      { text: "A Nostalgic Chaotic Adventure where smacking the TV not only fixes the picture - but changes reality!" },
      { text: "My graduation project at Bezalel Academy, winner of the 2024 Bezalel-wide Maizler Award for Excellence in Design." },
      { text: "Breaking News was developed in two complementary formats - a physical installation featuring a custom-made TV setup and a distributable PC version." },
    ],
    websites: [{ title: "Download on itch.io", link: "https://lunaduckstudios.itch.io/breakingnews" }],
    credit: ["Danil Bialo", "Evyatar Cohen", "Tamir Herzberg"],
    press: [
      { title: "Article on Scienmag", link: "https://scienmag.com/celebrating-evyatar-cohen-and-tamir-herzberg-winners-of-the-figgie-award-for-excellence-in-design-at-hebrew-university" },
      { title: "Article on Eurakalert", link: "https://www.eurekalert.org/news-releases/1069654" },
      { title: "Article on Bioengineer", link: "https://bioengineer.org/celebrating-evyatar-cohen-and-tamir-herzberg-winners-of-the-figgie-award-for-excellence-in-design-at-hebrew-university" },
      { title: "Article on Bezalel Academy", link: "https://www.bezalel.ac.il/en/news/662015" },
    ],
    badges: [
      require('../assets/breaking-news-assets/badges/bezalel-maizler-excellence-in-design-grey.webp'),
      require('../assets/breaking-news-assets/badges/boston-fig-excellence-in-design-grey.webp'),
      require('../assets/breaking-news-assets/badges/gdwc-finalist-best-student-game.webp'),
    ],
    gallery: [
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot1.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot3.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot4.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot5.webp')
    ]
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless-Runner Game',
    cover: require('../assets/vertigo-gif.gif'),
    tags: ['pc'],
    video: "https://player.vimeo.com/video/1059483857?h=b0ea3e7a50&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&background=1&horizontal=1",
    description: [
      {text: 'Outmaneuver spiders and hungry plants as you light your way out the dark greenhouse.'},
      {text: 'Vertigo is set in a dark and dangerous atmosphere, where two retro games meet — Helicopter and Donkey Kong.'},
      {text: 'This project was made as part of a joint program between Bezalel Academy and the Hebrew University'}
    ],
    websites: [{ title: "Download on itch.io", link: "https://guyprimak.itch.io/vertigo" }],
    credit: ["Adi Baron", "Dan Oren", "Evyatar Cohen", "Guy Primak", "Idan Shalom"],
    gallery: [
      require('../assets/vertigo-assets/vertigo-gameplay-1.webp'),
      require('../assets/vertigo-assets/vertigo-gameplay-3.webp'),
      require('../assets/vertigo-assets/vertigo-gameplay-2.webp')
    ]
  },

  {
    id: 'cooper',
    title: 'Cooper',
    category: 'VR Social Interaction Trainer',
    cover: require('../assets/cooper-vr-static.webp'),
    tags: ['vr', 'ai', 'research'],
    description: [
      { text: 'A VR experience designed to help people with social anxiety practice interactions in a safe and controlled environment using advanced AI tools.' },
      { text: 'The project is the result of an interdisciplinary collaboration between the computer science and psychology departments at the Hebrew University.' },
      { text: 'Cooper received a two-year funding grant of $50,000 from the Yissum Research Development Company under the Science Accelerator Fund for further development.' }
    ],
    websites: [{ title: "View on itch.io", link: "https://captaingradius.itch.io/cooper-vr"},
      { title: "Yissum Press Release", link: "https://www.yissum.co.il/technology/virtual-reality-ai-based-platform-for-enhancing-social-interaction" }],
    credit: ["Evyatar Cohen", "Naor Ladini", "Niv Vaknin"],
    gallery: [
      require('../assets/cooper-assets/cooper-gameplay0.webp'),
      require('../assets/cooper-assets/cooper-gameplay1.webp'),
      require('../assets/cooper-assets/cooper-gameplay3.webp'),
      require('../assets/cooper-assets/cooper-gameplay4.webp'),
    ]

  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    cover: require('../assets/galaxy-eggs-static.webp'),
    description:
      [
        { "text": "Launched on Septamber 2021, Galaxy Eggs and Galaxy Warriors are two innovative NFT collections developed by (Art)ificial Studios in collaboration with renowned artist Gal Barkan." },
        { "text": "Prior to the GenAI era, I took part in implementing advanced fine-tuning algorithms on Gal Barkan's original artwork to create a diverse array of one-of-a-kind pieces." },
        { "text": "The collections feature 9,999 unique eggs and 9,999 distinct warriors, each with its own set of traits, selling at a total volume of more than 16,000 ETH."},
        { "text": "In October 2022, Justin Lin's Perfect Storm Entertainment announced a joint venture with (Art)ificial Studios on the Galaxy Eggs saga." }
      ],
    tags: ['nft', 'art'],
    credit: ["(Art)ificial Studios", "Gal Barkan", "Perfect Storm Entertainment"],
    press: [
      { title: "Article on Deadline Magazine", link: "https://deadline.com/2022/10/justin-lin-perfect-storm-entertainment-artificial-entertainment-galaxy-eggs-1235156787/" }
    ],
    websites: [{title: "Website", link: "https://www.galaxy-eggs.com"},
      { title: "Galaxy Eggs on OpenSea", link: "https://opensea.io/collection/galaxyeggs9999" },
      { title: "Galaxy Warriors on OpenSea", link: "https://opensea.io/collection/galaxy-warriors-9999" }
    ],

    gallery: [
      require('../assets/galaxy-eggs-assets/galaxy-eggs-6.webp'),
      require('../assets/galaxy-eggs-assets/galaxy-eggs-7.webp'),
      require('../assets/galaxy-eggs-assets/galaxy-eggs-4.webp'),
      require('../assets/galaxy-eggs-assets/galaxy-eggs-5.webp'),
      require('../assets/galaxy-eggs-assets/galaxy-eggs-saga-cover.webp'),
    ]
  },
  {
    id: 'trash-day',
    title: 'Trash Day',
    category: 'Casual Endless-Runner Game',
    cover: require('../assets/trash-day-static.webp'),
    tags: ['mobile'],
    video: "https://player.vimeo.com/video/1059183542?h=2bef0c0d4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&background=1&horizontal=1",
    // multiline description
    description: [
      { text: 'A casual endless-runner mobile game where you play as a truck driver collecting trash cans and avoiding obstacles.' },
      { text: 'Trash Day was developed in Unity as part of a joint program between Bezalel Academy and the Hebrew University.' },
    ],
    websites: [{ title: "Download on itch.io", link: "https://guyprimak.itch.io/trash-day" }],
    credit: ["Evyatar Cohen", "Guy Achiam", "Guy Primak", "Michal Dekel"],
    gallery: [
      require('../assets/trash-day-assets/trash-day-gameplay-1.webp'),
      require('../assets/trash-day-assets/trash-day-gameplay-2.webp')
    ]
  },
  {
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    category: 'Social Game',
    cover: require('../assets/swipe-to-unlock-static.webp'),
    tags: ['social-game', 'craft'],
    description: 
    [
      { text: "Social game for brave people who have nothing to hide."},
      { text: "The custom-made hourglass emphasizes the tension as light seems to close in around you."},
      { title: "Playbook"},
      { text: "Players split into two equal teams, sit on opposite sides of the table, and place their personal phones on it while agreeing on any off-limit apps. Each round, one team chooses an opponent's phone and is granted a full minute to peek into it." },
      { text: "Once the hourglass runs out, the peeking team shares a fact about its owner - true or false. The opposing team must guess whether the fact is true or false while the hourglass is flipped." },
      { text: "The team that wins the round is allowed to reclaim one of its phones. The game ends when one team reclaims all of its phones." }
    ],
    credit: ["Evyatar Cohen", "Bella Shmuylovich"],
    gallery: [
      require('../assets/swipe-to-unlock-assets/swipe-to-unlock-gameplay-1.webp')
    ]
  }
];

export default projectsData;