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
  budget: string;
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
  monthsaryDate: 'April 15',
  relationshipStartDate: '2025-04-15',
  letter: `Happy monthsary, baby.

I know today didn't go exactly as I originally planned. I was really looking forward to taking you ice skating, and I imagined all the little moments we'd have together.

But more than anything, I want you to know that it's never really about where we go or what we do.

It's about being with you.

Even if our plans change, even if we end up doing something simple, even if all we do is sit beside each other and laugh about random things, I'd still choose that day with you.

I love discovering new things with you, making memories, trying things for the first time, and having those little moments that become our favorite memories.

I hope today reminds you how loved, appreciated, and special you are to me.

Here's to another month of us, and to all the adventures we haven't experienced yet.

I love you. Happy monthsary, my favorite person. ♡`,
  photos: [
    { src: '/images/her_laugh.jpeg', alt: 'Janeille smiling and laughing', caption: 'That natural laugh I love.', rotate: '-2deg' },
    { src: '/images/uslookingdumb.jpeg', alt: 'A funny photo of us together', caption: 'Us being completely unserious.', rotate: '2.5deg' },
    { src: '/images/ussmilinglikethetwocats.jpeg', alt: 'A playful photo of us together', caption: 'Two silly little faces.', rotate: '-1deg' },
    { src: '/images/picjah1.jpg', alt: 'A favorite memory together', caption: 'A little moment I want to keep.', rotate: '3deg' },
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
    { date: 'Add your date', title: 'The day we met', detail: 'Tell the story of where your little story began.' },
    { date: 'Add your date', title: 'Our first date', detail: 'Add the place, the feeling, or the tiny detail you still remember.' },
    { date: 'Add your date', title: 'Our favorite memory', detail: 'Write down a memory you both want to keep close.' },
    { date: 'Add your date', title: 'Our first monthsary', detail: 'Add the date and what made it feel like yours.' },
    { date: 'Today', title: 'Another month of us', detail: 'Still choosing each other, one soft day at a time.' },
  ] satisfies TimelineEntry[],
  music: {
    filename: 'ang-wakas.mp3',
    label: 'Ang Wakas',
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
    budget: '₱___ per person (estimate)',
    activities: ['Baking desserts', 'Decorating baked creations', 'Experimenting with flavors'],
  },
  {
    id: 'teamocafe',
    name: "TE'AMO CAFÉ",
    location: 'Juana Osmeña Street, Cebu City',
    concept: 'A creative café date',
    description: "Let's turn something simple into a little masterpiece. And even if our creations look funny, at least we made them together.",
    image: '/images/activity-cafe.svg',
    budget: '₱___ per person (estimate)',
    activities: ['Cake painting', 'Decorating desserts', 'DIY flower arrangement'],
  },
  {
    id: 'making-space',
    name: 'CEBU MAKING SPACE',
    location: 'Mango Square, Cebu City',
    concept: 'A pottery and ceramics experience',
    description: "Let's make something that we can keep. Something that reminds us of this little chapter of our story.",
    image: '/images/activity-pottery.svg',
    budget: '₱___ per person (estimate)',
    activities: ['Hand-building pottery', 'Creating matching mugs', 'Ceramic painting'],
  },
  {
    id: 'bake-hub',
    name: 'THE BAKE HUB BY WYTHLAE',
    location: 'Minglanilla, Cebu',
    concept: 'A guided baking experience',
    description: "Let's learn something new together and make something sweet that we can enjoy afterward.",
    image: '/images/activity-cake.svg',
    budget: '₱___ per person (estimate)',
    activities: ['Bento cake baking', 'Cupcake baking', 'Cake decorating'],
  },
];
