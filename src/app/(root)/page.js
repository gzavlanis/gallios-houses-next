"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/el');
    }, [router]);

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
            <p style={{ fontFamily: 'sans-serif', color: '#005777' }}>Loading...</p>
        </div>
    );
}