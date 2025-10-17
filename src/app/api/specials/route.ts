import { NextRequest, NextResponse } from 'next/server';
import specials from '@/data/specials.json';

// Simple in-memory store for specials (resets on deployment)
// TODO: Replace with Neon database for persistent storage
let inMemory = specials;

export async function GET() {
  return NextResponse.json(inMemory.items ?? []);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Expect { items: [{ title, price, note, category }...] }
    inMemory = body;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
