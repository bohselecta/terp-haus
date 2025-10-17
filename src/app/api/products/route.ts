import { NextRequest, NextResponse } from 'next/server';
import { getFlowhubClient, transformFlowhubProduct } from '@/lib/flowhub/client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters
    const category = searchParams.get('category') || undefined;
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search') || undefined;
    
    const flowhubClient = getFlowhubClient();
    
    // Get products from Flowhub
    const response = await flowhubClient.getProducts({
      category,
      limit,
      offset,
      search,
    });
    
    if (!response.success) {
      return NextResponse.json(
        { success: false, error: response.error },
        { status: 500 }
      );
    }
    
    // Transform Flowhub products to our Product type
    const products = response.data?.map(transformFlowhubProduct) || [];
    
    return NextResponse.json({
      success: true,
      data: products,
      pagination: {
        page: Math.floor(offset / limit) + 1,
        limit,
        total: products.length,
        totalPages: Math.ceil(products.length / limit),
      },
    });
    
  } catch (error) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// Revalidate every 5 minutes
export const revalidate = 300;
