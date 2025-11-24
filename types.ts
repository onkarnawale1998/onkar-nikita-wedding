export interface WeddingEvent {
  titleEn: string;
  titleMr: string;
  date: string;
  time: string;
  location: string;
  description: string;
  mapUrl: string;
  color: string;
  icon: 'haldi' | 'wedding' | 'music' | 'reception';
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface StoryItem {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface Accommodation {
  name: string;
  distance: string;
  priceRange: string;
  contact: string;
}