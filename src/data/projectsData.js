const projectsData = [
  {
    id: 'breaking-news',
    title: 'Breaking News',
    category: 'Nostalgic Interactive Experience',
    cover: require('../assets/breaking-news-gif.gif'),
    tags: ['awards-winning','alt-ctrl', 'pc'],
    video: 'https://player.vimeo.com/video/1058959133?h=278d24c7e5&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1',
    description: "A Nostalgic Chaotic Adventure where smacking the TV not only fixes the picture - but changes reality!\nMy graduation project at Bezalel Academy, winner of the 2024 Bezalel-wide Maizler Award for Excellence in Design.\nBreaking News was developed in two complementary formats - a physical installation featuring a custom-made TV setup and a distributable PC version.",
    websites: [{ title: "Download on itch.io", link: "https://lunaduckstudios.itch.io/breakingnews" }],
    credit: ["Danil Bialo", "Evyatar Cohen", "Tamir Herzberg"],
    press: [
      { title: "Scienmag", link: "https://scienmag.com/celebrating-evyatar-cohen-and-tamir-herzberg-winners-of-the-figgie-award-for-excellence-in-design-at-hebrew-university" },
      { title: "Eurekalert", link: "https://www.eurekalert.org/news-releases/1069654" },
      { title: "Bioengineer", link: "https://bioengineer.org/celebrating-evyatar-cohen-and-tamir-herzberg-winners-of-the-figgie-award-for-excellence-in-design-at-hebrew-university" },
      { title: "Bezalel News", link: "https://www.bezalel.ac.il/en/news/662015" },
    ],
    badges: [
      require('../assets/breaking-news-assets/badges/bezalel-maizler-excellence-in-design-grey.webp'),
      require('../assets/breaking-news-assets/badges/boston-fig-excellence-in-design-grey.webp'),
      require('../assets/breaking-news-assets/badges/gdwc-finalist-best-student-game.webp'),
    ],
    gallery: [
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot1.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/breaking-news-gameplay-gif.gif'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot3.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot4.webp'),
    ]
  },
  {
    id: 'cooper',
    title: 'Cooper',
    category: 'VR Social Interaction Trainer',
    cover: require('../assets/cooper-vr-static.webp'),
    tags: ['vr', 'ai', 'research'],
    description: "A VR experience designed to help people with social anxiety practice interactions in a safe and controlled environment using advanced AI tools.\nThe project is the result of an interdisciplinary collaboration between the computer science and psychology departments at the Hebrew University.\nCooper received a two-year funding grant of $50,000 from the Yissum Research Development Company under the Science Accelerator Fund for further development.",
    websites: [{ title: "View on itch.io", link: "https://captaingradius.itch.io/cooper-vr" },
    { title: "Yissum Press Release", link: "https://www.yissum.co.il/technology/virtual-reality-ai-based-platform-for-enhancing-social-interaction" }],
    credit: ["Evyatar Cohen", "Naor Ladini", "Niv Vaknin", "Yonatan Kratter"],
    gallery: [
      require('../assets/cooper-assets/cooper-gameplay0.webp'),
      require('../assets/cooper-assets/cooper-gameplay1.webp'),
      require('../assets/cooper-assets/cooper-gameplay3.webp'),
      require('../assets/cooper-assets/cooper-gameplay4.webp'),
    ]

  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless-Runner Game',
    cover: require('../assets/vertigo-gif.gif'),
    tags: ['pc'],
    video: "https://player.vimeo.com/video/1059483857?h=b0ea3e7a50&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&background=1&horizontal=1",
    description: "Outmaneuver spiders and hungry plants as you light your way out the dark greenhouse.\nOur challenge was to create a new game by combining two classic games. After reviewing many games we chose to integrate Helicopter and Donkey Kong to our new game — Vertigo.\nIn Vertigo the player has to outmaneuver spiders and hungry plants as he lights up the way out the dark greenhouse.\nThe game creates a sense of lack of orientation , with a desperate attempt to navigate against our instincts, learning a new language of spatial awareness under constant threat. The path is filled with surprises, dangers, and obstacles that heighten the sense of vigilance.\nVertigo was the first game we developed in the joint Bezalel Academy and Hebrew University program, created within a two-week span.\nBuilt using Unity, C# and Git for version control.",
    websites: [{ title: "Download on itch.io", link: "https://guyprimak.itch.io/vertigo" }],
    credit: ["Adi Baron", "Dan Oren", "Evyatar Cohen", "Guy Primak", "Idan Shalom"],
    gallery: [
      require('../assets/vertigo-assets/vertigo-gameplay-1.webp'),
      require('../assets/vertigo-assets/vertigo-gameplay-3.webp'),
      require('../assets/vertigo-assets/vertigo-gameplay-2.webp')
    ]
  },
  {
    id: 'trash-day',
    title: 'Trash Day',
    category: 'Casual Endless-Runner Game',
    cover: require('../assets/trash-day-static.webp'),
    tags: ['mobile'],
    video: "https://player.vimeo.com/video/1059183542?h=2bef0c0d4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&background=1&horizontal=1",
    description: "This project presents a colorful and joyful world where collecting trash becomes a surprisingly satisfying and rewarding experience.\nPlayers navigate an environment filled with unexpected obstacles and dangers, requiring quick thinking and adaptability, turning environmental responsibility into an engaging and interactive challenge.\nThe game introduces a unique mechanic, where swipe & hold controls a 3D magnetic arm, adding a fresh twist to the classic runner formula.\nThis project was created as part of a joint program between Bezalel Academy and the Hebrew University, focusing on mobile-friendly gameplay and optimization.\nBuilt using Unity, Android SDK, C# and Git for version control.",
    websites: [{ title: "Download on itch.io", link: "https://guyprimak.itch.io/trash-day" }],
    credit: ["Evyatar Cohen", "Guy Achiam", "Guy Primak", "Michal Dekel"],
    gallery: [
      require('../assets/trash-day-assets/trash-day-gameplay-1.webp'),
      require('../assets/trash-day-assets/trash-day-gameplay-2.webp')
    ]
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    cover: require('../assets/galaxy-eggs-static.webp'),
    description: "Launched in September 2021, Galaxy Eggs and Galaxy Warriors are two innovative NFT collections developed by (Art)ificial Studios in collaboration with renowned artist Gal Barkan.\nPrior to the Generative AI era, I took part in implementing advanced fine-tuning algorithms on Gal Barkan's original artwork to create a diverse array of one-of-a-kind pieces.\nThe collections feature 9,999 unique eggs and 9,999 distinct warriors, each with its own set of traits, selling at a total volume of more than 16,000 ETH.\nIn October 2022, Justin Lin's Perfect Storm Entertainment announced a joint venture with (Art)ificial Studios on the Galaxy Eggs saga.",
    tags: ['nft', 'generative-art'],
    credit: ["(Art)ificial Studios", "Gal Barkan", "Perfect Storm Entertainment"],
    press: [
      { title: "Article on Deadline Magazine", link: "https://deadline.com/2022/10/justin-lin-perfect-storm-entertainment-artificial-entertainment-galaxy-eggs-1235156787/" }
    ],
    websites: [{ title: "Official Website", link: "https://www.galaxy-eggs.com" },
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
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    category: 'Social Game',
    cover: require('../assets/swipe-to-unlock-static.gif'),
    tags: ['experimental', 'craft'],
    description: "Social game for brave people who have nothing to hide.\nThe custom-made hourglass emphasizes the tension as light seems to close in around you.\nPlaybook:\nPlayers split into two equal teams, sit on opposite sides of the table, and place their personal phones on it while agreeing on any off-limit apps. Each round, one team chooses an opponent's phone and is granted a full minute to peek into it.\nOnce the hourglass runs out, the peeking team shares a fact about its owner - true or false. The opposing team must guess whether the fact is true or false while the hourglass is flipped.\nThe team that wins the round is allowed to reclaim one of its phones. The game ends when one team reclaims all of its phones.",
    credit: ["Evyatar Cohen", "Bella Shmuylovich"],
    gallery: [
      require('../assets/swipe-to-unlock-assets/swipe-to-unlock-gameplay-1.webp')
    ]
  }
];

export default projectsData;