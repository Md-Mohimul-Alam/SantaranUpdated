
export interface ExhibitionTour {
  date: string;
  time: string;
  guide: string;
}

export interface ExhibitionEvent {
  name: string;
  date: string;
  time: string;
}

export interface ExhibitionItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  image: string;
  description: string;
  curator: string;
  artists: string[];
  additionalImages: string[];
  tags: string[];
  category?: string;
  openingHours?: string;
  ticketPrice?: string;
  upcomingTours?: ExhibitionTour[];
  liveEvents?: ExhibitionEvent[];
  featured?: boolean;
}

export interface ExhibitionCategory {
  category: string;
  items: ExhibitionItem[];
}
