// Core Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  subcategory?: string;
  price: number;
  unit: string;
  thc?: number;
  cbd?: number;
  terpenes: TerpeneProfile;
  images: ProductImage[];
  inStock: boolean;
  stockQuantity?: number;
  effects?: string[];
  consumptionMethods?: ConsumptionMethod[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface TerpeneProfile {
  limonene?: number;
  myrcene?: number;
  pinene?: number;
  linalool?: number;
  caryophyllene?: number;
  humulene?: number;
  terpinolene?: number;
  ocimene?: number;
  [key: string]: number | undefined;
}

export type ProductCategory = 
  | 'flower'
  | 'concentrates'
  | 'edibles'
  | 'topicals'
  | 'accessories'
  | 'vape'
  | 'pre-rolls';

export type ConsumptionMethod = 
  | 'smoking'
  | 'vaping'
  | 'edible'
  | 'topical'
  | 'tincture'
  | 'concentrate';

// Cart Types
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Order Types
export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  customer: CustomerInfo;
  status: OrderStatus;
  total: number;
  tax: number;
  pickupTime?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  isAgeVerified: boolean;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'ready'
  | 'picked-up'
  | 'cancelled';

// Flowhub Integration Types
export interface FlowhubProduct {
  id: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  unit: string;
  thc?: number;
  cbd?: number;
  terpenes?: Record<string, number>;
  images?: Array<{
    id: string;
    url: string;
    alt?: string;
  }>;
  inStock: boolean;
  stockQuantity?: number;
  createdAt: string;
  updatedAt: string;
}

export interface FlowhubOrder {
  id: string;
  orderNumber: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
  };
  status: string;
  total: number;
  tax: number;
  createdAt: string;
  updatedAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Filter Types
export interface ProductFilters {
  category?: ProductCategory;
  subcategory?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  thcRange?: {
    min: number;
    max: number;
  };
  cbdRange?: {
    min: number;
    max: number;
  };
  effects?: string[];
  consumptionMethods?: ConsumptionMethod[];
  inStock?: boolean;
  search?: string;
}

// Component Props Types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ProductCardProps extends ComponentProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export interface ProductGridProps extends ComponentProps {
  products: Product[];
  loading?: boolean;
  onAddToCart?: (product: Product) => void;
}

export interface TerpeneProfileProps extends ComponentProps {
  terpenes: TerpeneProfile;
  size?: 'sm' | 'md' | 'lg';
}

// Environment Variables
export interface EnvironmentVariables {
  FLOWHUB_API_KEY: string;
  FLOWHUB_CLIENT_ID: string;
  FLOWHUB_LOCATION_ID: string;
  FLOWHUB_API_URL: string;
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_DISPENSARY_NAME: string;
  NEXT_PUBLIC_LOCATION: string;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
