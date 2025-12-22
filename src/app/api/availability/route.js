import { NextResponse } from 'next/server';
import { getBlockedDates } from '@/lib/availability';

// --- YOUR ICAL LINKS HERE ---
const HOUSE_1_ICALS = [
    'https://www.airbnb.com/calendar/ical/YOUR_AIRBNB_ID_1.ics?s=...',
    'https://admin.booking.com/hotel/hoteladmin/ical.html?t=...',
];

const HOUSE_2_ICALS = [
    'https://www.airbnb.com/calendar/ical/YOUR_AIRBNB_ID_2.ics?s=...',
    'https://admin.booking.com/hotel/hoteladmin/ical.html?t=...'
];

// This forces the API to be dynamic (Live)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const [house1, house2] = await Promise.all([
            getBlockedDates(HOUSE_1_ICALS),
            getBlockedDates(HOUSE_2_ICALS)
        ]);

        return NextResponse.json({
            house1,
            house2,
            lastUpdated: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to sync calendars' }, { status: 500 });
    }
}