"use client";
import { useRef } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';
import { useScroll, useTransform, motion } from 'framer-motion';

// 1. Define GoldBar outside (Centered version)
const GoldBar = () => (
    <div style={{
        width: '60px',
        height: '3px',
        background: '#cba135',
        margin: '0 auto 30px' // Centers it horizontally
    }}></div>
);

export default function DiscoverSection({ dict, lang }) {
    const currentLang = lang || 'el';
    const t = dict?.home?.features || {};

    // Parallax Logic for the Watermark
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Move the watermark slightly vertically based on scroll
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={ref} className="discover-geo-section" style={{ overflow: 'hidden' }}>

            {/* Animated Background Elements */}
            <div className="geo-shape-circle shape-gold-ring animate-spin-slow"></div>
            <div className="geo-shape-circle shape-white-blob animate-float"></div>

            {/* Parallax Watermark */}
            <motion.h1 style={{ y }} className="geo-watermark">
                LOUTRA
            </motion.h1>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <Reveal>
          <span style={{
              display: 'block',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '15px'
          }}>
            {t.culture_sub || "AUTHENTIC CRETE"}
          </span>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontFamily: 'var(--font-heading)',
                        margin: '0 0 20px', // Reduced margin slightly to fit bar
                        lineHeight: '1.1'
                    }}>
                        Discover Loutra Village
                    </h2>

                    {/* GOLD BAR ADDED HERE */}
                    <GoldBar />

                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                        fontSize: '1.2rem',
                        opacity: 0.9,
                        lineHeight: '1.8',
                        fontWeight: '300'
                    }}>
                        {t.culture_text}
                    </p>

                    {/* FIXED LINK */}
                    <Link href={`/${currentLang}/location`} className="btn-outline-white">
                        {t.explore || "EXPLORE"}
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}