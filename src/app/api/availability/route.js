import { NextResponse } from 'next/server';
import { readFromCache } from '@/lib/json-db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    const data = await readFromCache();
    return NextResponse.json(data);
}