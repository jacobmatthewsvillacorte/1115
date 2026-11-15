export type Photo = {
  src: string;
  alt: string;
  caption: string;
  rotate: string;
};

export type Activity = {
  id: string;
  name: string;
  location: string;
  concept: string;
  description: string;
  image: string;
  activities: string[];
  bookingUrl?: string;
};

export type TimelineEntry = {
  date: string;
  title: string;
  detail: string;
};

export const config = {
  herName: 'Janeille',
  yourName: 'Jacob',
  monthsaryDate: 'Nov 15',
  relationshipStartDate: '2025-04-15',
  letter: `Happy monthsary, baby.

I know today didn't go exactly as I originally planned. I was really looking forward to taking you ice skating, and I imagined all the moments we'd have together.

But more than anything, I want you to know that it's never really about where we go or what we do.

It's about being with you.

Even if our plans change, even if we end up doing something simple, even if all we do is sit beside each other and laugh about random things, I'd still choose that day with you.

I love discovering new things with you, making memories, trying things for the first time, and having those quiet moments that become our favorite memories.

I hope today reminds you how loved, appreciated, and special you are to me.

Here's to another month of us, and to all the adventures we haven't experienced yet.

I love you. Happy monthsary, my favorite person. ♡`,
  photos: [
    { src: '/images/her_laugh.jpeg', alt: 'Janeille smiling and laughing', caption: 'That natural laugh I love.', rotate: '-2deg' },
    { src: '/images/uslookingdumb.jpeg', alt: 'A funny photo of us together', caption: 'Us being completely unserious.', rotate: '2.5deg' },
    { src: '/images/ussmilinglikethetwocats.jpeg', alt: 'A playful photo of us together', caption: 'Two silly faces.', rotate: '-1deg' },
    { src: '/images/picjah1.png', alt: 'A favorite portrait memory', caption: 'You make every frame feel warmer.', rotate: '-1.5deg' },
  ] satisfies Photo[],
  loveNotes: [
    'You make ordinary days feel special.',
    'I love the way you smile.',
    "I'm always happy when I'm with you.",
    'You are my favorite person to make memories with.',
    'I hope you know how much I appreciate you.',
    'I would still choose you, even on the most ordinary days.',
  ],
  timeline: [
    { date: 'The night we made it official', title: 'I asked you to be my girlfriend', detail: 'On a mountain with the city glowing below us, I asked you to be mine. The view was beautiful, but you were still my favorite part of it.' },
    { date: 'Since then', title: 'The city lights got competition', detail: 'Every laugh, silly photo, random plan, and ordinary day gave me another reason to be grateful that you said yes.' },
    { date: 'Today', title: 'Still my favorite yes', detail: 'Another month of choosing each other—and still absolutely no regrets about making you my favorite person to annoy.' },
  ] satisfies TimelineEntry[],
  music: {
    filename: 'ang-wakas.mp3',
    label: 'Libu-Libong Buwan Uuwian',
    // Paste a hosted MP3 URL here to use the same approach as the anniversary site.
    // Leave empty to use public/music/ang-wakas.mp3 instead.
    url: 'https://res.cloudinary.com/dpkcv1sne/video/upload/v1794723572/Libu-Libong_Buwan_Uuwian_-_Kyle_Raphael_Official_Music_Video_f3mgjt.mp3',
  },
  notifications: {
    formspreeEndpoint: 'https://formspree.io/f/mkjrjwvy',
  },
};

export const activities: Activity[] = [
  {
    id: 'bakespace',
    name: 'BAKESPACE PH',
    location: 'Banawa, Cebu City',
    concept: 'A DIY baking experience',
    description: "Let's make something sweet together. We might not be professional bakers, but I think whatever we make will be special because we made it together.",
    image: '/images/activity-baking.svg',
    activities: ['Baking desserts', 'Decorating baked creations', 'Experimenting with flavors'],
  },
  {
    id: 'teamocafe',
    name: "TE'AMO CAFÉ",
    location: 'Juana Osmeña Street, Cebu City',
    concept: 'A creative café date',
    description: "Let's turn something simple into a masterpiece. And even if our creations look funny, at least we made them together.",
    image: '/images/activity-cafe.svg',
    activities: ['Cake painting', 'Decorating desserts', 'DIY flower arrangement'],
  },
  {
    id: 'making-space',
    name: 'CEBU MAKING SPACE',
    location: 'Mango Square, Cebu City',
    concept: 'A pottery and ceramics experience',
    description: "Let's make something that we can keep. Something that reminds us of this chapter of our story.",
    image: '/images/activity-pottery.svg',
    activities: ['Hand-building pottery', 'Creating matching mugs', 'Ceramic painting'],
  },
  {
    id: 'bake-hub',
    name: 'THE BAKE HUB BY WYTHLAE',
    location: 'Minglanilla, Cebu',
    concept: 'A guided baking experience',
    description: "Let's learn something new together and make something sweet that we can enjoy afterward.",
    image: '/images/activity-cake.svg',
    activities: ['Bento cake baking', 'Cupcake baking', 'Cake decorating'],
  },
];
