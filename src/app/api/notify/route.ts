import { NextResponse } from 'next/server';

export async function POST() {
  // TODO: call Klaviyo / SpringBig with your campaign payload
  // keep this endpoint so admin actions can trigger notifications later
  return NextResponse.json({ ok: true });
}
