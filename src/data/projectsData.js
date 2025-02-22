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
    gifImage: require('../assets/breaking-news-gif.gif'),
    tags: ['alt-ctrl', 'arduino', 'pc'],
    video: 'https://player.vimeo.com/video/1058959133?h=278d24c7e5&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1',
    description: [
      { text: "A Nostalgic Chaotic Adventure where smacking the TV not only fixes the picture - but changes reality!" },
      { text: "My graduation project at Bezalel Academy, winner of the 2024 Bezalel-wide Maizler Award for Excellence in Design." },
      { text: "Breaking News was developed in two complementary formats - a physical installation featuring a custom-made TV setup and a distributable PC version." },
    ],
    websites: [{ title: "Download on itch.io", link: "https://captain-gradius.itch.io/breaking-news" }],
    credit: ["Danil Bialo", "Evyatar Cohen", "Tamir Herzberg"],
    press: [
      { title: "Article on Scienmag", link: "https://scienmag.com/celebrating-evyatar-cohen-and-tamir-herzberg-winners-of-the-figgie-award-for-excellence-in-design-at-hebrew-university" },
      { title: "Article on Eurakalert", link: "https://www.eurekalert.org/news-releases/1069654" },
      { title: "Article on Bioengineer", link: "https://bioengineer.org/celebrating-evyatar-cohen-and-tamir-herzberg-winners-of-the-figgie-award-for-excellence-in-design-at-hebrew-university" },
      { title: "Article on Bezalel Academy", link: "https://www.bezalel.ac.il/en/news/662015" },
    ],
    badges: [
      require('../assets/breaking-news-assets/badges/boston-fig-excellence-in-design.png'),
      require('../assets/breaking-news-assets/badges/bezalel-maizler-excellence-in-design.png'),
    ],
    /* take screenshots from src\assets\breaking-news-assets\gameplay-screenshots\BreakingNewsScreenshot1.png 1-6 */
    images: [
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot1.png'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot3.png'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot4.png'),
      require('../assets/breaking-news-assets/gameplay-screenshots/BreakingNewsScreenshot5.png')
    ]
  },
  {
    id: 'cooper',
    title: 'Cooper',
    category: 'VR Social Interaction Trainer',
    gifImage: require('../assets/cooper-vr-static.png'),
    description: 'Practice social interactions in a safe environment using VR and AI',
    tags: ['vr', 'ai', 'research'],
  },
  {
    id: 'trash-day',
    title: 'Trash Day',
    category: 'Casual Endless-Runner Game',
    gifImage: require('../assets/trash-day-static.png'),
    // multiline description
    description: ``,
    gallery: [
      // require('../assets/trash-day-1.png'),
      // require('../assets/trash-day-2.png'),
      // require('../assets/trash-day-3.png'),
    ],
    tags: ['mobile']
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless-Runner Game',
    gifImage: require('../assets/vertigo-gif1.gif'),
    description: 'Outmaneuver spiders and hungry plants as you light your way out the dark greenhouse',
    tags: ['pc']
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    gifImage: require('../assets/galaxy-eggs-static.png'),
    description: 'Sold out collection of 10,000 3D fully rendered universes by Gal Barkan',
    tags: ['nft', 'art']
  },
  {
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    category: 'Social Game',
    gifImage: require('../assets/swipe-to-unlock-static.png'),
    description: 'Social Game for brave people who got nothing to hide',
    tags: ['party-game']
  }
];

export default projectsData;