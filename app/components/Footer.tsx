import Link from 'next/link';
import Image from 'next/image';

// Social icon components
function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}
function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.42a8.16 8.16 0 0 0 4.77 1.52V7.5a4.85 4.85 0 0 1-1-.81z"/>
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

const socials = [
  { href: 'https://wa.me/6282232172646', label: 'WhatsApp', icon: <WaIcon />, id: 'footer-wa' },
  { href: 'https://www.instagram.com/pandanayucatering?igsh=MTdjNGN3NGZuZDJjMw==', label: 'Instagram', icon: <IgIcon />, id: 'footer-ig' },
  { href: 'https://www.tiktok.com/@pandanayu6?_r=1&_t=ZS-970XPpIhFqO', label: 'TikTok', icon: <TikTokIcon />, id: 'footer-tt' },
  { href: 'https://www.facebook.com/pandan.ayu.73', label: 'Facebook', icon: <FbIcon />, id: 'footer-fb' },
];

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/menu', label: 'Brosur Menu' },
  { href: '/#tentang', label: 'Tentang Kami' },
  { href: '/#keunggulan', label: 'Kenapa Pilih Kami?' },
  { href: '/#testimoni', label: 'Kata Mereka' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="kontak" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__grid">

          {/* ── Brand ── */}
          <div className="footer__brand">
            <Link href="/" aria-label="Pandan Ayu Catering – Beranda" style={{textDecoration: 'none'}}>
              <div className="logo">
                <Image 
                  src="/logo.png" 
                  alt="Pandan Ayu Catering Logo" 
                  width={46} 
                  height={46} 
                  className="logo__img"
                />
                <div className="logo__text">
                  <span className="logo__name">Pandan Ayu</span>
                  <span className="logo__tag">Catering</span>
                </div>
              </div>
            </Link>

            <p className="footer__desc">
              Bikin acaramu makin berkesan dengan sajian lezat dan pelayanan hangat dari kami. Spesialis catering Sidoarjo sejak 2014.
            </p>

            <div className="footer__socials" aria-label="Ikuti kami di media sosial">
              {socials.map(s => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label={s.label}
                  id={s.id}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigasi ── */}
          <nav aria-label="Footer navigation">
            <p className="footer__col-title">Navigasi</p>
            <ul role="list" className="footer__links">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Kontak ── */}
          <div id="kontak-info">
            <p className="footer__col-title">Hubungi Kami</p>
            <address className="footer__address">
              <div className="footer__contact-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{flexShrink:0, marginTop:'2px'}}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <strong>Kantor:</strong>
                  <span>King Safira A5-12A,<br/>Sidoarjo</span>
                  <strong style={{ marginTop: '0.5rem' }}>Dapur:</strong>
                  <span>Sepande RT 2 RW 1,<br/>Kec. Candi, Kab. Sidoarjo</span>
                </div>
              </div>
              <div className="footer__contact-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink:0, marginTop:'1px'}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="https://wa.me/6282232172646" target="_blank" rel="noopener noreferrer" id="footer-wa-link1">
                    +62 822 3217 2646 (Admin 1)
                  </a>
                  <a href="https://wa.me/62882022927586" target="_blank" rel="noopener noreferrer" id="footer-wa-link2">
                    +62 882 0229 27586 (Admin 2)
                  </a>
                </div>
              </div>
              <div className="footer__contact-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{flexShrink:0}}>
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Setiap Hari · 10.00 – 17.00 WIB</span>
              </div>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <p>© {year} Pandan Ayu Catering · Hak Cipta Dilindungi.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--c-bg-1);
          border-top: 1px solid var(--c-border);
          padding-top: 3.5rem;
        }

        .footer__inner { padding-bottom: 0; }

        .footer__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--c-border);
        }
        @media (min-width: 560px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 900px) {
          .footer__grid { grid-template-columns: 1.8fr 1fr 1.4fr; }
        }

        /* Brand */
        .logo {
          display: flex;
          align-items: center;
          gap: .75rem;
          width: fit-content;
          margin-bottom: 1rem;
        }

        .logo__img {
          object-fit: contain;
          transition: transform 220ms ease;
        }
        .logo:hover .logo__img {
          transform: scale(1.05);
        }

        .logo__text {
          display: flex;
          flex-direction: column;
        }

        .logo__name {
          font-family: var(--ff-display);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--c-text-1);
          line-height: 1;
        }

        .logo__tag {
          font-size: .65rem;
          font-weight: 600;
          color: var(--c-accent);
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .footer__desc {
          font-size: .9rem;
          color: var(--c-text-3);
          line-height: 1.7;
          margin-bottom: 1.25rem;
          max-width: 300px;
        }

        .footer__socials {
          display: flex;
          gap: .5rem;
          flex-wrap: wrap;
        }

        .footer__social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: var(--r-md);
          background: var(--c-bg-3);
          border: 1px solid var(--c-border);
          color: var(--c-text-3);
          transition: background var(--dur-base), color var(--dur-base), border-color var(--dur-base), transform var(--dur-base) var(--ease-spring);
        }
        .footer__social:hover {
          background: var(--c-accent);
          color: #0c0804;
          border-color: var(--c-accent);
          transform: translateY(-3px);
        }

        /* Nav col */
        .footer__col-title {
          font-family: var(--ff-display);
          font-size: .9375rem;
          font-weight: 600;
          color: var(--c-text-1);
          margin-bottom: 1rem;
        }

        .footer__links {
          display: flex;
          flex-direction: column;
          gap: .5rem;
        }

        .footer__link {
          font-size: .9rem;
          color: var(--c-text-3);
          transition: color var(--dur-fast), transform var(--dur-fast);
          display: inline-block;
        }
        .footer__link:hover {
          color: var(--c-accent);
          transform: translateX(4px);
        }

        /* Contact col */
        .footer__address {
          font-style: normal;
          display: flex;
          flex-direction: column;
          gap: .875rem;
        }

        .footer__contact-row {
          display: flex;
          align-items: flex-start;
          gap: .625rem;
          font-size: .9rem;
          color: var(--c-text-3);
          line-height: 1.6;
        }
        .footer__contact-row svg { color: var(--c-accent); }
        .footer__contact-row a {
          color: var(--c-accent);
          font-weight: 600;
          transition: color var(--dur-fast);
        }
        .footer__contact-row a:hover { color: var(--c-accent-h); }

        /* Bottom */
        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: .5rem;
          padding: 1.125rem 0;
        }
        .footer__bottom p {
          font-size: .8rem;
          color: var(--c-text-3);
          margin: 0;
          line-height: 1;
        }
      `}</style>
    </footer>
  );
}
