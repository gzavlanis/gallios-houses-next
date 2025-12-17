import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fdfbf7', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '4rem', color: '#005777', fontFamily: 'serif', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#333' }}>Page Not Found</h2>
            <p style={{ color: '#666', marginBottom: '40px' }}>The page you are looking for does not exist.</p>
            <Link href="/" style={{ padding: '15px 40px', background: '#005777', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                BACK TO HOME
            </Link>
        </div>
    );
}