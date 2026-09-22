export interface Shop {
  id: string;
  name: string;
  category: 'Fashion' | 'Electronics' | 'Dining' | 'Services' | 'Entertainment';
  logoUrl: string;
  heroImageUrl: string;
  videoUrl: string;
  description: string;
  floor: string;
  shopNumber: string;
  hours: string;
  tags: string[];
  gallery: { type: 'image' | 'video'; url: string }[];
}
