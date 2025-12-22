import nodeIcal from 'node-ical';
import { addDays, format } from 'date-fns';

export async function getBlockedDates(urls) {
    let blockedDates = new Set();

    const fetchPromises = urls.map(async (url) => {
        try {
            const freshUrl = `${url}&_t=${new Date().getTime()}`;
            const res = await fetch(freshUrl, {
                next: { revalidate: 300 }
            });

            if (!res.ok) throw new Error(`Failed to fetch`);

            const text = await res.text();
            const data = await nodeIcal.async.parseICS(text);

            Object.values(data).forEach((event) => {
                if (event.type === 'VEVENT') {
                    const start = new Date(event.start);
                    const end = new Date(event.end);

                    let current = start;
                    while (current < end) {
                        blockedDates.add(format(current, 'yyyy-MM-dd'));
                        current = addDays(current, 1);
                    }
                }
            });
        } catch (error) {
            console.error("Calendar Error:", error);
        }
    });

    await Promise.all(fetchPromises);
    return Array.from(blockedDates);
}