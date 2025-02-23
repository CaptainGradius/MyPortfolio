/*
{
      id: 'template',
      title: 'Template Project',
      category: 'Category',
      gifImage: require('../assets/template-gif.gif'),
      tags: ['tag1', 'tag2'],
      description: 'Description of the project',
      video : 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      oneliner: 'One liner description of the project',
      images: [],
      badges: [
        'Badge 1',
        'Badge 2',
        'Badge 3',
      ],
      press: [
        { title: "Press 1", link: "https://example.com" },
        { title: "Press 2", link: "https://example.com" },
      ],
      collaborators: [
        'Collaborator 1',
        'Collaborator 2',
        'Collaborator 3',
      ]
}
*/


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
      require('../assets/breaking-news-assets/badges/bezalel-maizler-excellence-in-design.webp'),
      require('../assets/breaking-news-assets/badges/boston-fig-excellence-in-design.webp'),
    ],
    gallery: [
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot1.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot3.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot4.webp'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot5.webp')
    ]
  },
  {
    id: 'cooper',
    title: 'Cooper',
    category: 'VR Social Interaction Trainer',
    cover: require('../assets/cooper-vr-static.webp'),
    tags: ['vr', 'ai', 'research'],
    description: [
      { text: 'A VR experience designed to help people with social anxiety practice social interactions in a safe and controlled environment using advanced AI tools.' },
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
    id: 'trash-day',
    title: 'Trash Day',
    category: 'Casual Endless-Runner Game',
    cover: require('../assets/trash-day-static.webp'),
    tags: ['mobile'],
    // multiline description
    description: [
      { text: 'A casual endless-runner mobile game where you play as a truck driver collecting trash cans and avoiding obstacles.' },
      { text: 'Trash Day was developed in Unity as part of a joint project between Bezalel Academy and the Hebrew University.' },
    ],
    websites: [{ title: "Download on itch.io", link: "https://guyprimak.itch.io/trash-day" }],
    credit: ["Evyatar Cohen", "Guy Achiam", "Guy Primak", "Michal Dekel"],
    gallery: [
      "https://player.vimeo.com/video/1059183542?h=2bef0c0d4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&background=1&horizontal=1",
      require('../assets/trash-day-assets/trash-day-logo.webp'),
      require('../assets/trash-day-assets/trash-day-gameplay-1.webp'),
      require('../assets/trash-day-assets/trash-day-gameplay-2.webp')
    ]
  },






  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless-Runner Game',
    cover: require('../assets/vertigo-gif1.gif'),
    description: 'Outmaneuver spiders and hungry plants as you light your way out the dark greenhouse',
    tags: ['pc']
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    cover: require('../assets/galaxy-eggs-static.webp'),
    description: 'Sold out collection of 10,000 3D fully rendered universes by Gal Barkan',
    tags: ['nft', 'art']
  },
  {
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    category: 'Social Game',
    cover: require('../assets/swipe-to-unlock-static.webp'),
    description: 'Social Game for brave people who got nothing to hide',
    tags: ['party-game', 'craft']
  }
];

export default projectsData;