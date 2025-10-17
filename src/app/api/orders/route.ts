import { NextRequest, NextResponse } from 'next/server';
import { getFlowhubClient, transformFlowhubOrder } from '@/lib/flowhub/client';
import { CartItem } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, customer, pickupTime, notes } = body;
    
    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Items are required' },
        { status: 400 }
      );
    }
    
    if (!customer || !customer.firstName || !customer.lastName || !customer.email || !customer.phone || !customer.dateOfBirth) {
      return NextResponse.json(
        { success: false, error: 'Customer information is required' },
        { status: 400 }
      );
    }
    
    // Validate age (must be 21+)
    const birthDate = new Date(customer.dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    if (age < 21) {
      return NextResponse.json(
        { success: false, error: 'Customer must be 21 or older' },
        { status: 400 }
      );
    }
    
    const flowhubClient = getFlowhubClient();
    
    // Transform cart items to Flowhub format
    const flowhubItems = items.map((item: CartItem) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));
    
    // Create order in Flowhub
    const response = await flowhubClient.createOrder({
      items: flowhubItems,
      customer: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        dateOfBirth: customer.dateOfBirth,
      },
      pickupTime,
      notes,
    });
    
    if (!response.success) {
      return NextResponse.json(
        { success: false, error: response.error },
        { status: 500 }
      );
    }
    
    // Transform Flowhub order to our Order type
    const order = transformFlowhubOrder(response.data!);
    
    return NextResponse.json({
      success: true,
      data: order,
    });
    
  } catch (error) {
    console.error('Order Creation API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const flowhubClient = getFlowhubClient();
    
    if (orderId) {
      // Get single order
      const response = await flowhubClient.getOrder(orderId);
      
      if (!response.success) {
        return NextResponse.json(
          { success: false, error: response.error },
          { status: 500 }
        );
      }
      
      if (!response.data) {
        return NextResponse.json(
          { success: false, error: 'Order not found' },
          { status: 404 }
        );
      }
      
      const order = transformFlowhubOrder(response.data);
      
      return NextResponse.json({
        success: true,
        data: order,
      });
    } else {
      // Get multiple orders
      const response = await flowhubClient.getOrders({
        status: status || undefined,
        limit,
        offset,
      });
      
      if (!response.success) {
        return NextResponse.json(
          { success: false, error: response.error },
          { status: 500 }
        );
      }
      
      const orders = response.data?.map(transformFlowhubOrder) || [];
      
      return NextResponse.json({
        success: true,
        data: orders,
        pagination: {
          page: Math.floor(offset / limit) + 1,
          limit,
          total: orders.length,
          totalPages: Math.ceil(orders.length / limit),
        },
      });
    }
    
  } catch (error) {
    console.error('Order API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, status } = body;
    
    if (!orderId || !status) {
      return NextResponse.json(
        { success: false, error: 'Order ID and status are required' },
        { status: 400 }
      );
    }
    
    const flowhubClient = getFlowhubClient();
    
    // Update order status in Flowhub
    const response = await flowhubClient.updateOrderStatus(orderId, status);
    
    if (!response.success) {
      return NextResponse.json(
        { success: false, error: response.error },
        { status: 500 }
      );
    }
    
    const order = transformFlowhubOrder(response.data!);
    
    return NextResponse.json({
      success: true,
      data: order,
    });
    
  } catch (error) {
    console.error('Order Update API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update order' },
      { status: 500 }
    );
  }
}
