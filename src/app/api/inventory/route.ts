import { NextRequest, NextResponse } from 'next/server';
import { getFlowhubClient } from '@/lib/flowhub/client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');
    
    const flowhubClient = getFlowhubClient();
    
    // Get inventory from Flowhub
    const response = await flowhubClient.getInventory(productId || undefined);
    
    if (!response.success) {
      return NextResponse.json(
        { success: false, error: response.error },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: response.data,
    });
    
  } catch (error) {
    console.error('Inventory API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inventory' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, quantity } = body;
    
    if (!productId || quantity === undefined) {
      return NextResponse.json(
        { success: false, error: 'Product ID and quantity are required' },
        { status: 400 }
      );
    }
    
    const flowhubClient = getFlowhubClient();
    
    // Update inventory in Flowhub
    const response = await flowhubClient.updateInventory(productId, quantity);
    
    if (!response.success) {
      return NextResponse.json(
        { success: false, error: response.error },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: response.data,
    });
    
  } catch (error) {
    console.error('Inventory Update API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update inventory' },
      { status: 500 }
    );
  }
}

// Revalidate every minute for real-time inventory
export const revalidate = 60;
