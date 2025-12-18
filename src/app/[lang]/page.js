import {getDictionary} from "@/dictionaries/get-dictionary";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import HousesSection from '@/components/HousesSection';
import InfoIcons from '@/components/InfoIcons';
import ContactSection from '@/components/ContactSection';
import DiscoverSection from "@/components/DiscoverSection";
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export default async function Home({ params }) {
    const { lang } = await params; // Get the current language (e.g., 'en')
    const dict = await getDictionary(lang);

    return (
        <main style={{ overflowX: 'hidden' }}>
            <Navbar dict={dict} />

            <Hero
                title={dict.home.hero_title}
                subtitle={dict.home.hero_sub}
                dict={dict}
            />

            <section className="section-padding" style={{ paddingBottom: '60px', background: 'white' }}>
                <div className="container text-center">
                    <Reveal>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '30px', color: '#2c3e50', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                            {dict.home.welcome_title} <span style={{ color: '#005777', fontStyle: 'italic' }}>{dict.home.welcome_highlight}</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '1.15rem', lineHeight: '1.8' }}>
                            {dict.home.welcome_text}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- PASS THE LANG PROP HERE --- */}
            <FeaturesSection dict={dict} lang={lang} />

            <HousesSection dict={dict} lang={lang} />

            <DiscoverSection dict={dict} lang={lang} />

            <InfoIcons dict={dict} />

            <ContactSection dict={dict} />
            <Footer dict={dict} />
        </main>
    );
}

// Required for static export
export async function generateStaticParams() {
    return [
        { lang: 'el' }, { lang: 'en' }, { lang: 'fr' }, { lang: 'de' }, { lang: 'it' }
    ];
}