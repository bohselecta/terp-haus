import { FlowhubProduct, FlowhubOrder, ApiResponse, Product, OrderStatus, ProductCategory } from '@/types';

export class FlowhubClient {
  private apiKey: string;
  private clientId: string;
  private locationId: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.FLOWHUB_API_KEY || '';
    this.clientId = process.env.FLOWHUB_CLIENT_ID || '';
    this.locationId = process.env.FLOWHUB_LOCATION_ID || '';
    this.baseUrl = process.env.FLOWHUB_API_URL || 'https://api.flowhub.com/v2';

    if (!this.apiKey || !this.clientId || !this.locationId) {
      throw new Error('Missing required Flowhub configuration');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'X-Client-ID': this.clientId,
          'X-Location-ID': this.locationId,
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Flowhub API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Products
  async getProducts(params?: {
    category?: string;
    limit?: number;
    offset?: number;
    search?: string;
  }): Promise<ApiResponse<FlowhubProduct[]>> {
    const queryParams = new URLSearchParams();
    
    if (params?.category) queryParams.append('category', params.category);
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.offset) queryParams.append('offset', params.offset.toString());
    if (params?.search) queryParams.append('search', params.search);

    const endpoint = `/products${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.request<FlowhubProduct[]>(endpoint);
  }

  async getProduct(id: string): Promise<ApiResponse<FlowhubProduct>> {
    return this.request<FlowhubProduct>(`/products/${id}`);
  }

  async getProductCategories(): Promise<ApiResponse<string[]>> {
    return this.request<string[]>('/products/categories');
  }

  // Inventory
  async getInventory(productId?: string): Promise<ApiResponse<{ quantity: number; inStock: boolean }>> {
    const endpoint = productId ? `/inventory/${productId}` : '/inventory';
    return this.request(endpoint);
  }

  async updateInventory(productId: string, quantity: number): Promise<ApiResponse<{ success: boolean }>> {
    return this.request(`/inventory/${productId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  }

  // Orders
  async createOrder(orderData: {
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
    pickupTime?: string;
    notes?: string;
  }): Promise<ApiResponse<FlowhubOrder>> {
    return this.request<FlowhubOrder>('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getOrder(orderId: string): Promise<ApiResponse<FlowhubOrder>> {
    return this.request<FlowhubOrder>(`/orders/${orderId}`);
  }

  async getOrders(params?: {
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<ApiResponse<FlowhubOrder[]>> {
    const queryParams = new URLSearchParams();
    
    if (params?.status) queryParams.append('status', params.status);
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.offset) queryParams.append('offset', params.offset.toString());

    const endpoint = `/orders${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.request<FlowhubOrder[]>(endpoint);
  }

  async updateOrderStatus(orderId: string, status: string): Promise<ApiResponse<FlowhubOrder>> {
    return this.request<FlowhubOrder>(`/orders/${orderId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  // Customers
  async getCustomer(customerId: string): Promise<ApiResponse<{ id: string; firstName: string; lastName: string; email: string; phone: string }>> {
    return this.request(`/customers/${customerId}`);
  }

  async createCustomer(customerData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
  }): Promise<ApiResponse<{ id: string; success: boolean }>> {
    return this.request('/customers', {
      method: 'POST',
      body: JSON.stringify(customerData),
    });
  }

  // Analytics & Reports
  async getSalesReport(params?: {
    startDate?: string;
    endDate?: string;
    category?: string;
  }): Promise<ApiResponse<{ totalSales: number; totalOrders: number; reportData: unknown[] }>> {
    const queryParams = new URLSearchParams();
    
    if (params?.startDate) queryParams.append('startDate', params.startDate);
    if (params?.endDate) queryParams.append('endDate', params.endDate);
    if (params?.category) queryParams.append('category', params.category);

    const endpoint = `/reports/sales${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.request(endpoint);
  }

  // Health Check
  async healthCheck(): Promise<ApiResponse<{ status: string; timestamp: string }>> {
    return this.request('/health');
  }
}

// Singleton instance
let flowhubClient: FlowhubClient | null = null;

export function getFlowhubClient(): FlowhubClient {
  if (!flowhubClient) {
    flowhubClient = new FlowhubClient();
  }
  return flowhubClient;
}

// Utility functions for data transformation
export function transformFlowhubProduct(flowhubProduct: FlowhubProduct): Product {
  return {
    id: flowhubProduct.id,
    name: flowhubProduct.name,
    description: flowhubProduct.description || '',
    category: flowhubProduct.category as ProductCategory,
    price: flowhubProduct.price,
    unit: flowhubProduct.unit,
    thc: flowhubProduct.thc,
    cbd: flowhubProduct.cbd,
    terpenes: flowhubProduct.terpenes || {},
    images: flowhubProduct.images?.map(img => ({
      id: img.id,
      url: img.url,
      alt: img.alt || flowhubProduct.name,
      isPrimary: false,
    })) || [],
    inStock: flowhubProduct.inStock,
    stockQuantity: flowhubProduct.stockQuantity,
    effects: [],
    consumptionMethods: [],
    createdAt: flowhubProduct.createdAt,
    updatedAt: flowhubProduct.updatedAt,
  };
}

export function transformFlowhubOrder(flowhubOrder: FlowhubOrder) {
  return {
    id: flowhubOrder.id,
    orderNumber: flowhubOrder.orderNumber,
    items: flowhubOrder.items.map(item => ({
      productId: item.productId,
      product: {} as Product, // Will be populated separately
      quantity: item.quantity,
      price: item.price,
    })),
    customer: {
      firstName: flowhubOrder.customer.firstName,
      lastName: flowhubOrder.customer.lastName,
      email: flowhubOrder.customer.email,
      phone: flowhubOrder.customer.phone,
      dateOfBirth: flowhubOrder.customer.dateOfBirth,
      isAgeVerified: true,
    },
    status: flowhubOrder.status as OrderStatus,
    total: flowhubOrder.total,
    tax: flowhubOrder.tax,
    createdAt: flowhubOrder.createdAt,
    updatedAt: flowhubOrder.updatedAt,
  };
}
