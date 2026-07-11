'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/',             label: 'Beranda' },
  { href: '/#tentang',     label: 'Tentang Kami' },
  { href: '/#keunggulan',  label: 'Keunggulan' },
  { href: '/#testimoni',   label: 'Kata Mereka' },
  { href: '/menu',         label: 'Brosur Menu' },
  { href: '/#kontak',      label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [mounted, setMounted]   = useState(false);
  const [activeId, setActiveId] = useState('');
  const pathname                = usePathname();

  useEffect(() => setMounted(true), []);

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* close drawer on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Scrollspy */
  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && (activeId === '' || activeId === 'hero');
    if (href.startsWith('/#')) return pathname === '/' && activeId === href.replace('/#', '');
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ─── Navbar ─── */}
      <header
        className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}
        role="banner"
      >
        <div className="nav__inner">

          {/* Logo */}
          <Link href="/" aria-label="Pandan Ayu Catering – Beranda" style={{textDecoration: 'none'}}>
            <div className="logo">
              <Image 
                src="/logo.png" 
                alt="Pandan Ayu Catering Logo" 
                width={42} 
                height={42} 
                className="logo__img"
                priority
              />
              <div className="logo__text">
                <span className="logo__name">Pandan Ayu</span>
                <span className="logo__tag">Catering</span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="nav__links" aria-label="Navigasi utama">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={isActive(href) ? 'active' : ''}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + burger */}
          <div className="nav__right">
            <a
              href="https://wa.me/6282232172646?text=Halo%20Pandan%20Ayu%20Catering%2C%20saya%20mau%20tanya-tanya%20soal%20menu%20nih."
              target="_blank"
              rel="noopener noreferrer"
              className="nav__cta"
              id="nav-cta"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              <span>Pesan Sekarang</span>
            </a>

            {/* Hamburger */}
            <button
              className={`burger${open ? ' burger--open' : ''}`}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              id="hamburger"
            >
              <span className="burger__bar" />
              <span className="burger__bar" />
              <span className="burger__bar" />
            </button>
          </div>
        </div>

        {/* ─── Mobile Drawer ─── */}
        <div
          className={`drawer${open ? ' drawer--open' : ''}${mounted ? ' drawer--mounted' : ''}`}
          id="mobile-drawer"
          aria-hidden={!open}
        >
          <nav aria-label="Menu mobile">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`drawer__link${isActive(href) ? ' drawer__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="drawer__footer">
            <a
              href="https://wa.me/6282232172646?text=Halo%20Pandan%20Ayu%20Catering%2C%20saya%20mau%20tanya-tanya%20soal%20menu%20nih."
              target="_blank"
              rel="noopener noreferrer"
              className="drawer__cta"
              id="mobile-cta"
              onClick={() => setOpen(false)}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <style jsx>{`
        /* ════════════════════════════════
           NAVBAR
        ════════════════════════════════ */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: var(--nav-h);
          transition:
            background-color 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        /* Transparent at top */
        .nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(12, 8, 4, 0);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          border-bottom: 1px solid transparent;
          transition:
            background-color 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
          pointer-events: none;
        }

        /* Solid when scrolled */
        .nav--scrolled::before {
          background: rgba(12, 8, 4, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-color: rgba(160, 100, 30, 0.15);
          box-shadow: 0 1px 24px rgba(0, 0, 0, 0.5);
        }

        /* ── Inner layout ── */
        .nav__inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        @media (min-width: 1200px) {
          .nav__inner { padding: 0 2.5rem; gap: 2rem; }
        }

        /* ── Logo ── */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
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
          line-height: 1;
          gap: 2px;
        }
        .logo__name {
          font-family: var(--ff-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--c-text-1);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }
        .logo__tag {
          font-family: var(--ff-body);
          font-size: 0.57rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--c-accent);
          white-space: nowrap;
        }

        /* ── Desktop nav links ── */
        .nav__links {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }
        @media (min-width: 992px) {
          .nav__links { display: flex; }
        }

        .nav__links > :global(a) {
          position: relative;
          padding: 0.45rem 0.85rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--c-text-3);
          text-decoration: none;
          border-radius: 100px;
          transition: color 200ms ease, background-color 200ms ease;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }
        .nav__links > :global(a:hover) {
          color: var(--c-text-1);
          background-color: rgba(255,255,255,0.06);
        }
        .nav__links > :global(a.active) {
          color: var(--c-text-1);
          background-color: rgba(230,124,30,0.12);
        }

        /* ── Right side ── */
        .nav__right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        /* CTA button */
        .nav__cta {
          display: none;
          align-items: center;
          gap: 7px;
          padding: 0.5rem 1.125rem;
          background: var(--c-accent);
          color: #0c0804;
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 700;
          border-radius: 100px;
          text-decoration: none;
          white-space: nowrap;
          transition:
            background 180ms ease,
            transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 220ms ease;
          box-shadow: 0 4px 18px rgba(230, 124, 30, 0.25);
        }
        @media (min-width: 992px) {
          .nav__cta { display: flex; }
        }
        .nav__cta:hover {
          background: var(--c-orange-7);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(230, 124, 30, 0.38);
        }
        .nav__cta:active {
          transform: translateY(0) scale(0.97);
        }

        /* ── Burger ── */
        .burger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          gap: 5px;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(160, 100, 30, 0.15);
          transition: background 180ms ease, border-color 180ms ease;
          flex-shrink: 0;
        }
        @media (min-width: 992px) {
          .burger { display: none; }
        }
        .burger:hover {
          background: rgba(230, 124, 30, 0.1);
          border-color: rgba(230, 124, 30, 0.3);
        }

        .burger__bar {
          display: block;
          height: 1.5px;
          background: var(--c-text-1);
          border-radius: 2px;
          transform-origin: right center;
          transition: transform 260ms ease, opacity 260ms ease, width 260ms ease;
        }
        .burger__bar:nth-child(1) { width: 18px; }
        .burger__bar:nth-child(2) { width: 12px; }
        .burger__bar:nth-child(3) { width: 18px; }

        .burger--open .burger__bar:nth-child(1) {
          width: 18px;
          transform: translateY(6.5px) rotate(-45deg);
        }
        .burger--open .burger__bar:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .burger--open .burger__bar:nth-child(3) {
          width: 18px;
          transform: translateY(-6.5px) rotate(45deg);
        }

        /* ── Mobile Drawer ── */
        .drawer {
          position: fixed;
          top: var(--nav-h);
          left: 0;
          right: 0;
          background: rgba(17, 14, 8, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(160, 100, 30, 0.15);
          padding: 1rem 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
          transform: translateY(-4px);
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }
        .drawer--mounted {
          transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 280ms ease;
        }
        .drawer--open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .drawer nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(160, 100, 30, 0.12);
        }

        .drawer__link {
          display: flex;
          align-items: center;
          padding: 0.7rem 0.875rem;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--c-text-3);
          text-decoration: none;
          border-radius: 8px;
          transition: background 160ms ease, color 160ms ease;
        }
        .drawer__link:hover,
        .drawer__link--active {
          background: rgba(230, 124, 30, 0.08);
          color: var(--c-text-1);
        }
        .drawer__link--active {
          color: var(--c-accent);
        }

        .drawer__footer {}

        .drawer__cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 0.75rem 1.25rem;
          background: var(--c-accent);
          color: #0c0804;
          font-family: var(--ff-body);
          font-size: 0.9375rem;
          font-weight: 700;
          border-radius: 10px;
          text-decoration: none;
          transition: background 180ms ease;
        }
        .drawer__cta:hover {
          background: var(--c-orange-7);
        }

        /* ── Backdrop ── */
        .nav-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          z-index: 999;
          animation: fadeIn 200ms ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
