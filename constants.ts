import { WeddingEvent, NavigationItem, GalleryImage, StoryItem, Accommodation } from './types';

export const WEDDING_DATE = new Date('2025-12-05T12:30:00');

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Our Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Venue & Stay', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
];

export const EVENTS: WeddingEvent[] = [
  {
    titleEn: 'Haldi Ceremony',
    titleMr: 'हळदी समारंभ 💛',
    date: 'Thursday, 04/12/2025',
    time: '6:00 PM',
    location: 'Sai Silver Oak Lawns, Shirdi',
    description: 'A vibrant evening of colors and blessings. Join us as we apply turmeric paste to the bride and groom, symbolizing purity and glow.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sai+Silver+Oak+Lawns+Shirdi',
    color: 'bg-yellow-50 border-yellow-400',
    icon: 'haldi'
  },
  {
    titleEn: 'Wedding Ceremony',
    titleMr: 'शुभविवाह सोहळा 💒',
    date: 'Friday, 05/12/2025',
    time: '12:30 PM (Muhurat)',
    location: 'Sai Silver Oak Lawns, Shirdi',
    description: 'The auspicious moment when two souls unite. Witness the sacred rituals and bless the couple.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sai+Silver+Oak+Lawns+Shirdi',
    color: 'bg-red-50 border-maroon',
    icon: 'wedding'
  }
];

export const STORY_ITEMS: StoryItem[] = [
  {
    id: 1,
    year: '2023',
    title: 'The First Meeting',
    description: 'Destiny brought us together at a family gathering in Pune. A simple conversation over tea sparked something special.',
    image: 'https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    year: '2024',
    title: 'The "Yes" Moment',
    description: 'On a beautiful evening in Shirdi, with the blessings of Sai Baba, our families met and decided to turn our friendship into a lifelong bond.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    year: '2025',
    title: 'The Beginning of Forever',
    description: 'As we count down the days, we are excited to start this beautiful journey together with your blessings.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'SMP08032.JPG', alt: 'Couple Portrait', category: 'Pre-wedding' },
  { id: 2, src: 'https://images.unsplash.com/photo-1583939411023-147850f3ad4f?auto=format&fit=crop&q=80&w=800', alt: 'Ring Ceremony', category: 'Engagement' },
  { id: 3, src: 'https://images.unsplash.com/photo-1606216838883-8d070b0cc87b?auto=format&fit=crop&q=80&w=800', alt: 'Traditional', category: 'Family' },
  { id: 4, src: 'https://images.unsplash.com/photo-1610178862957-c30c80775df5?auto=format&fit=crop&q=80&w=800', alt: 'Candid Moments', category: 'Candid' },
  { id: 5, src: 'https://images.unsplash.com/photo-1628867332616-e5c986963283?auto=format&fit=crop&q=80&w=800', alt: 'Traditions', category: 'Pre-wedding' },
  { id: 6, src: 'https://images.unsplash.com/photo-1519225460946-7dc31c5ee231?auto=format&fit=crop&q=80&w=800', alt: 'Celebration', category: 'Candid' },
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    name: "Hotel Sai Jashan",
    distance: "500m from venue",
    priceRange: "₹3,000 - ₹5,000",
    contact: "+91 2423 255555"
  },
  {
    name: "Sun-N-Sand Shirdi",
    distance: "1.2 km from venue",
    priceRange: "₹5,000 - ₹8,000",
    contact: "+91 2423 255755"
  },
  {
    name: "St Laurn - The Spiritual Resort",
    distance: "1.5 km from venue",
    priceRange: "₹4,500 - ₹7,000",
    contact: "+91 2423 256311"
  }
];