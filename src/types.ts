export type PropertyStatus = 'FOR SALE' | 'FOR RENT' | 'FEATURED' | 'INVESTMENT';

export type PropertyCategory = 
  | 'Residential'
  | 'Commercial'
  | 'Apartment'
  | 'House'
  | 'Plot'
  | 'Office'
  | 'Shop';

export interface Property {
  id: string;
  title: string;
  category: PropertyCategory;
  intent: 'buy' | 'rent';
  location: string;
  city: string;
  price: number;
  priceFormatted: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string; // e.g., "1 Kanal", "10 Marla", "2,450 Sq. Ft."
  statusBadge: PropertyStatus;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  location: string;
  propertyType: string;
  isDemo?: boolean;
}

export interface PropertyFilterState {
  lookingFor: 'all' | 'buy' | 'rent';
  propertyType: string;
  location: string;
  budgetRange: string;
  bedrooms: string;
  searchQuery: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyInterest: string;
  requirement: string;
  budget?: string;
  message: string;
}
