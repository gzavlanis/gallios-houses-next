import { NextResponse } from 'next/server';
import { getBlockedDates } from '@/lib/availability';
import { saveToCache } from '@/lib/json-db';

const HOUSE_1_ICALS = [
    'PASTE_YOUR_LINKS_HERE',
];

const HOUSE_2_ICALS = [
    'PASTE_YOUR_LINKS_HERE',
];

// Prevents caching of this route itself
export const dynamic = 'force-dynamic';
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    if (key !== 'MY_SUPER_SECRET_PASSWORD_123') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        console.log("Cron Job: Starting Calendar Sync...");
        const [house1, house2] = await Promise.all([
            getBlockedDates(HOUSE_1_ICALS),
            getBlockedDates(HOUSE_2_ICALS)
        ]);

        const data = {
            house1,
            house2,
            lastUpdated: new Date().toISOString()
        };

        await saveToCache(data);
        console.log("Cron Job: Sync Complete.");
        return NextResponse.json({ success: true, timestamp: data.lastUpdated });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Sync Failed' }, { status: 500 });
    }
}