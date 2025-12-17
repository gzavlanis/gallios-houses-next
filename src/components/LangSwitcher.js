"use client";
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Icon from './Icons';

export default function LangSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = pathname?.split('/')[1] || 'el';

    const languages = [
        { code: 'el', label: 'EL', icon: 'flag_el' },
        { code: 'en', label: 'EN', icon: 'flag_en' },
        { code: 'fr', label: 'FR', icon: 'flag_fr' },
        { code: 'de', label: 'DE', icon: 'flag_de' },
        { code: 'it', label: 'IT', icon: 'flag_it' },
    ];

    const handleSwitch = (newLang) => {
        if (!pathname) return;
        const segments = pathname.split('/');
        segments[1] = newLang; // Replace 'el' with 'en', etc.
        router.push(segments.join('/'));
        setIsOpen(false);
    };

    const currentFlag = languages.find(l => l.code === currentLang)?.icon || 'globe';

    return (
        // "onMouseLeave" is now on the wrapper, which includes the invisible padding bridge
        <div
            className="lang-wrapper"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
        >
            <button
                className="lang-btn"
                aria-label="Select Language"
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '30px',
                    padding: '5px 12px 5px 8px', // Extra left padding for icon
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s'
                }}
            >
                {/* Current Language Flag */}
                <Icon name={currentFlag} size={22} style={{ borderRadius: '50%' }} />

                <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: 'currentColor',
                    letterSpacing: '0.5px'
                }}>
          {currentLang.toUpperCase()}
        </span>

                <Icon name="chevronDown" size={12} color="currentColor" />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`lang-menu ${isOpen ? 'open' : ''}`}
                style={{
                    position: 'absolute',
                    top: '100%', // Attach directly to bottom of button
                    right: 0,
                    paddingTop: '10px', // THE INVISIBLE BRIDGE: Prevents mouse from "falling" into the gap
                    visibility: isOpen ? 'visible' : 'hidden',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.2s ease',
                    zIndex: 1100
                }}
            >
                <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    minWidth: '140px',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    {languages.map((l) => (
                        <button
                            key={l.code}
                            onClick={() => handleSwitch(l.code)}
                            className="lang-item"
                            style={{
                                background: currentLang === l.code ? '#f0f7fa' : 'transparent',
                                border: 'none',
                                padding: '10px 15px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                width: '100%',
                                transition: 'background 0.2s'
                            }}
                        >
                            <Icon name={l.icon} size={20} />
                            <span style={{
                                fontSize: '13px',
                                fontWeight: '600',
                                color: currentLang === l.code ? '#005777' : '#555'
                            }}>
                {l.label}
              </span>
                            {currentLang === l.code && (
                                <span style={{ marginLeft: 'auto', width: '6px', height: '6px', background: '#005777', borderRadius: '50%' }}></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}