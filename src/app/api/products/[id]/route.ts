import { NextRequest, NextResponse } from 'next/server';
import { getFlowhubClient, transformFlowhubProduct } from '@/lib/flowhub/client';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Product ID is required' },
        { status: 400 }
      );
    }
    
    const flowhubClient = getFlowhubClient();
    
    // Get product from Flowhub
    const response = await flowhubClient.getProduct(id);
    
    if (!response.success) {
      return NextResponse.json(
        { success: false, error: response.error },
        { status: 500 }
      );
    }
    
    if (!response.data) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }
    
    // Transform Flowhub product to our Product type
    const product = transformFlowhubProduct(response.data);
    
    return NextResponse.json({
      success: true,
      data: product,
    });
    
  } catch (error) {
    console.error('Product API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// Revalidate every 5 minutes
export const revalidate = 300;
