import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'calendar-cache.json');

export async function saveToCache(data) {
    try {
        await fs.writeFile(DB_PATH, JSON.stringify(data), 'utf-8');
        return true;
    } catch (e) {
        console.error("Save Error:", e);
        return false;
    }
}

export async function readFromCache() {
    try {
        const file = await fs.readFile(DB_PATH, 'utf-8');
        return JSON.parse(file);
    } catch (e) {
        // If file doesn't exist yet, return empty structure
        return { house1: [], house2: [], lastUpdated: null };
    }
}