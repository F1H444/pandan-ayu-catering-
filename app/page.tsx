'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ── Scroll reveal hook ── */
function useReveal(rootMargin = '0px 0px -20px 0px') {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          e.target.querySelectorAll<HTMLElement>('.reveal, .reveal-scale')
            .forEach(c => c.classList.add('visible'));
          io.unobserve(e.target);
        });
      },
      { threshold: 0.04, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ══════════════════════════════════════
   HERO SECTION
══════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="container hero__inner">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__badge hero-anim">
            <span className="badge-dot" aria-hidden="true" />
            Spesialis Catering Sidoarjo & Sekitarnya
          </div>

          <h1 className="hero__h1 hero-anim">
            Sajian Istimewa<br />
            <em>untuk Hari Bahagiamu</em>
          </h1>

          <p className="hero__sub hero-anim">
            Bikin acaramu makin berkesan dengan hidangan khas Jawa Timur dari Pandan Ayu. Rasanya juara, porsinya pas, dan pastinya bikin tamu ketagihan!
          </p>

          <div className="hero__cta hero-anim">
            <Link href="/menu" className="btn btn-primary btn-lg" id="hero-menu-btn">
              Lihat Pilihan Menu
            </Link>
            <a
              href="https://wa.me/6282232172646?text=Halo%20Pandan%20Ayu%20Catering%2C%20saya%20ingin%20konsultasi%20catering."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
              id="hero-wa-btn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Tanya-Tanya Dulu via WA
            </a>
          </div>

          <div className="hero__stats hero-anim">
            {[
              { n: '500+', l: 'Acara Terlayani' },
              { n: '10+',  l: 'Tahun Pengalaman' },
              { n: '20+',  l: 'Pilihan Menu' },
            ].map(s => (
              <div key={s.l} className="hero__stat">
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__image-wrapper hero-anim">
          <div 
            className="hero__image"
            style={{ 
              backgroundImage: 'url(/hero.jpg)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              border: 'none' 
            }}
          >
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100svh;
          display: flex;
          align-items: center;
          background: var(--c-bg);
          padding-top: var(--nav-h);
        }

        .hero__inner { width: 100%; }

        .hero__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 960px) {
          .hero__grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        .hero__content {
          max-width: 620px;
        }

        .hero__image-wrapper {
          width: 100%;
          height: 100%;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero__image {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: var(--r-xl);
          background: var(--c-bg-2);
          border: 1px dashed var(--c-border-2);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 960px) {
          .hero__image { aspect-ratio: 1/1; }
        }

        /* Hero Entry Animations */
        .hero-anim {
          animation: heroFadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Badge */
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          font-size: .75rem;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--c-text-3);
          border: 1px solid var(--c-border-2);
          border-radius: var(--r-full);
          padding: .35rem .875rem;
          margin-bottom: 1.5rem;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--c-accent);
          flex-shrink: 0;
          animation: glowPulse 2s ease-in-out infinite;
        }

        /* Heading */
        .hero__h1 {
          font-size: clamp(2.25rem, 5.5vw, 4.25rem);
          font-weight: 800;
          letter-spacing: -.035em;
          line-height: 1.08;
          margin-bottom: 1.375rem;
          color: var(--c-text-1);
        }
        .hero__h1 em {
          font-style: italic;
          color: var(--c-accent);
        }

        .hero__sub {
          font-size: clamp(.9375rem, 1.8vw, 1.0625rem);
          line-height: 1.8;
          color: var(--c-text-2);
          max-width: 560px;
          margin-bottom: 2.25rem;
        }

        .hero__cta {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin-bottom: 3rem;
        }

        /* Stats */
        .hero__stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--c-border);
        }
        .hero__stat {
          display: flex;
          flex-direction: column;
          gap: .2rem;
        }
        .hero__stat strong {
          font-family: var(--ff-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--c-text-1);
          letter-spacing: -.025em;
          line-height: 1;
        }
        .hero__stat span {
          font-size: .8125rem;
          color: var(--c-text-3);
          font-weight: 500;
        }

        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(230,124,30,0); }
          50%      { box-shadow: 0 0 8px 2px rgba(230,124,30,.35); }
        }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════
   ABOUT SECTION
══════════════════════════════════════ */
function About() {
  const ref = useReveal();

  const cards = [
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2v1c0 6.8-5.3 12.3-12 12.8z" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Bahan Selalu Fresh',   
      d: 'Kami cuma pakai bahan-bahan segar pilihan langsung dari pasar lokal tiap harinya.' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V22H6Z" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Koki Berpengalaman',  
      d: 'Tangan-tangan ahli yang paham betul rahasia kelezatan masakan asli Jawa Timur.' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: '100% Halal & Bersih',       
      d: 'Kebersihan dapur selalu terjaga dan pastinya pakai bahan yang halal.' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2M14 17a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM20 17a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Dijamin On-Time', 
      d: 'Nggak perlu deg-degan nunggu makanan datang telat, kami pasti datang tepat waktu!' 
    },
  ];

  return (
    <section className="about" id="tentang" aria-labelledby="about-h2" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="about__layout">

          {/* Text */}
          <div className="about__text">
            <span className="sec-label reveal">Kenalan Yuk!</span>
            <h2 id="about-h2" className="reveal d1">
              Dimasak Penuh Cinta,<br/>Disajikan<br/>Sepenuh Hati
            </h2>
            <p className="reveal d2">
              Di Pandan Ayu Catering, kami percaya bahwa makanan enak bisa bikin suasana acara jadi lebih hangat dan bahagia. Itulah kenapa kami selalu totalitas meracik bumbu khas Jawa Timur andalan kami.
            </p>
            <p className="reveal d3">
              Dari dapur kami di Sepande, Sidoarjo, kami siap nemenin momen pentingmu—mulai dari kumpul keluarga, tasyakuran, sampai resepsi pernikahan impianmu.
            </p>
            <Link href="/menu" className="btn btn-primary reveal d4" style={{width:'fit-content', marginTop:'1.5rem'}} id="about-menu-btn">
              Intip Menu Kami
            </Link>
          </div>

          {/* Value cards */}
          <div className="about__cards">
            {cards.map((c, i) => (
              <div key={c.t} className={`about__card reveal-scale d${i + 1}`}>
                <span className="about__card-icon" aria-hidden="true">{c.icon}</span>
                <strong className="about__card-title">{c.t}</strong>
                <p className="about__card-desc">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 0;
          background: var(--c-bg-1);
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
        }

        .about__layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .about__layout { grid-template-columns: 1fr 1fr; }
        }

        .about__text h2 { margin-bottom: 1.125rem; }
        .about__text p  { margin-bottom: .875rem; }

        .about__cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .about__card {
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
          border-radius: var(--r-lg);
          padding: 1.375rem 1.25rem;
          transition: border-color var(--dur-base), transform var(--dur-base);
        }
        .about__card:hover {
          border-color: var(--c-border-2);
          transform: translateY(-3px);
        }

        .about__card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: rgba(230, 124, 30, 0.1);
          color: var(--c-accent);
          margin-bottom: .875rem;
        }
        .about__card-title {
          display: block;
          font-size: .9375rem;
          font-weight: 600;
          color: var(--c-text-1);
          margin-bottom: .375rem;
        }
        .about__card-desc {
          font-size: .8375rem;
          color: var(--c-text-3);
          line-height: 1.65;
          margin: 0;
        }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════
   WHY US SECTION
══════════════════════════════════════ */
function WhyUs() {
  const ref = useReveal();

  const items = [
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Harga Jujur & Jelas',      
      d: 'Nggak ada biaya dadakan. Semua harga yang kamu lihat, itu yang dibayar.' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: '100% Halal Terjamin',        
      d: 'Semua bahan dan cara masak kami sesuai syariat. InsyaAllah berkah.' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 2v4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 2v4" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 10h5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 17.5 16 16.25V14" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="16" r="6" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Pesan Gampang Banget',   
      d: 'Tinggal chat WA, bisa pesan untuk acara dadakan (minimal H-3).' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Layanan Ramah',      
      d: 'Admin kami siap diajak diskusi buat nyesuain budget dan menu impianmu.' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 17h16" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 17c0-4.42 3.58-8 8-8s8 3.58 8 8" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9V6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="4.5" r="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Pilihan Menu Banyak',         
      d: 'Mau nasi kotak, tumpeng, atau prasmanan? Banyak banget pilihannya!' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Sudah Terpercaya',     
      d: 'Udah ratusan acara sukses bareng kami. Sekarang giliran acaramu!' 
    },
  ];

  return (
    <section className="whyus" id="keunggulan" aria-labelledby="whyus-h2" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="whyus__head text-center reveal">
          <span className="sec-label">Kenapa Pilih Kami?</span>
          <h2 id="whyus-h2" className="reveal d1">Bikin Acaramu Makin Tenang</h2>
          <p className="whyus__lead reveal d2">Fokus aja ke acaramu, urusan perut tamu biar kami yang tangani. Kami siap kasih yang terbaik biar kamu makin tenang!</p>
        </div>

        <div className="whyus__grid">
          {items.map((it, i) => (
            <div key={it.t} className={`whyus__card reveal-scale d${Math.min(i + 1, 6)}`}>
              <span className="whyus__icon" aria-hidden="true">{it.icon}</span>
              <strong className="whyus__title">{it.t}</strong>
              <p className="whyus__desc">{it.d}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .whyus {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 0;
          background: var(--c-bg);
        }

        .whyus__head {
          max-width: 560px;
          margin: 0 auto 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .text-center { text-align: center; }

        .whyus__lead {
          font-size: .9375rem;
          color: var(--c-text-3);
          line-height: 1.75;
          margin: 0;
          margin-top: .75rem;
        }

        .whyus__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 560px) { .whyus__grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 960px) { .whyus__grid { grid-template-columns: repeat(3, 1fr); } }

        .whyus__card {
          padding: 1.625rem 1.375rem;
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
          border-radius: var(--r-lg);
          transition: border-color var(--dur-base), transform var(--dur-base), box-shadow var(--dur-base);
        }
        .whyus__card:hover {
          border-color: var(--c-orange-4);
          transform: translateY(-4px);
          box-shadow: var(--sh-md);
        }

        .whyus__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(230, 124, 30, 0.1);
          color: var(--c-accent);
          margin-bottom: 1rem;
        }
        .whyus__title {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: var(--c-text-1);
          margin-bottom: .5rem;
        }
        .whyus__desc {
          font-size: .875rem;
          color: var(--c-text-3);
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════
   MENU PREVIEW
══════════════════════════════════════ */
function MenuPreview() {
  const ref = useReveal();

  const cats = [
    { 
      emoji: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 13a10 10 0 0 1-20 0" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 13h20" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 8v-3" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9V4" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 8v-3" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Olahan Nasi Spesial',   
      d: 'Mulai dari Nasi Uduk gurih sampai Nasi Liwet sedap, semua ada!', n: 10 
    },
    { 
      emoji: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
      t: 'Sambal Khas Jatim', 
      d: 'Pilihan sambal mantap yang pedasnya bikin nagih banget!', n: 10 
    },
  ];

  return (
    <section className="mpreview" id="menu" aria-labelledby="mpreview-h2" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="mpreview__head reveal">
          <div>
            <span className="sec-label">Intip Menu</span>
            <h2 id="mpreview-h2" className="reveal d1">Bikin Ngiler, Kan?</h2>
            <p className="reveal d2" style={{maxWidth:'520px', marginTop:'.625rem'}}>
              Banyak pilihan menu nikmat yang bisa kamu sesuaikan sama kebutuhan acara dan budget kamu.
            </p>
          </div>
          <Link href="/menu" className="btn btn-outline mpreview__head-btn reveal" id="mpreview-top-btn">
            Lihat Daftar Menu Lengkap →
          </Link>
        </div>

        <div className="mpreview__cards">
          {cats.map((c, i) => (
            <div key={c.t} className={`mpreview__card reveal-scale d${i + 1}`}>
              <span className="mpreview__cat-emoji" aria-hidden="true">{c.emoji}</span>
              <div className="mpreview__card-body">
                <div className="mpreview__count">{c.n} Pilihan</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
              <Link href="/menu" className="btn btn-primary mpreview__card-btn" id={`mpreview-btn-${i}`}>
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .mpreview {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 0;
          background: var(--c-bg-1);
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
        }

        .mpreview__head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .mpreview__head-btn { flex-shrink: 0; align-self: flex-end; }

        .mpreview__cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .mpreview__cards { grid-template-columns: 1fr 1fr; }
        }

        .mpreview__card {
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
          border-radius: var(--r-xl);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color var(--dur-base), transform var(--dur-base), box-shadow var(--dur-base);
        }
        .mpreview__card:hover {
          border-color: var(--c-orange-5);
          transform: translateY(-5px);
          box-shadow: var(--sh-acc);
        }

        .mpreview__cat-emoji {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(230, 124, 30, 0.1);
          color: var(--c-accent);
          flex-shrink: 0;
          animation: float 3s ease-in-out infinite;
        }
        .mpreview__card:nth-child(2) .mpreview__cat-emoji { animation-delay: 1s; }

        .mpreview__card-body { flex: 1; }
        .mpreview__count {
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .1em;
          color: var(--c-accent);
          text-transform: uppercase;
          margin-bottom: .375rem;
        }
        .mpreview__card-body h3 {
          font-size: 1.375rem;
          margin-bottom: .5rem;
        }
        .mpreview__card-body p {
          font-size: .875rem;
          color: var(--c-text-3);
          line-height: 1.7;
          margin: 0;
        }

        .mpreview__card-btn {
          width: 100%;
          justify-content: center;
          border-radius: var(--r-md);
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════
   TESTIMONIALS — dari Google Maps
══════════════════════════════════════ */
function Testimonials() {
  const ref = useReveal();

  // Testimoni autentik dari pelanggan Pandan Ayu Catering
  const reviews = [
    {
      name: 'Riska Amelia',
      event: 'Pernikahan · Sidoarjo',
      rating: 5,
      avatar: 'R',
      text: 'Enak banget! Nasi dan lauknya bikin tamu keluarga pada bilang enak semua. Pelayanan juga ramah dan tepat waktu. Highly recommended buat yang mau cari catering pernikahan di Sidoarjo!',
      via: 'Google Maps',
    },
    {
      name: 'Wahyu Tri Santoso',
      event: 'Hajatan · Candi, Sidoarjo',
      rating: 5,
      avatar: 'W',
      text: 'Pesan nasi box untuk acara keluarga, porsinya cukup dan rasanya mantap. Sambalnya the best! Admin-nya fast respond, komunikatif, dan makanannya dikirim tepat waktu. Pasti order lagi.',
      via: 'Google Maps',
    },
    {
      name: 'Dewi Kusumawati',
      event: 'Arisan · Sepande',
      rating: 5,
      avatar: 'D',
      text: 'Sudah langganan di sini. Menu lengkap, rasa tidak pernah mengecewakan. Sambal petisnya khas Jawa Timur banget. Pengiriman selalu on time dan packaging rapi.',
      via: 'Google Maps',
    },
    {
      name: 'Agus Firmansyah',
      event: 'Makan Siang Kantor',
      rating: 5,
      avatar: 'A',
      text: 'Sudah berlangganan untuk makan siang karyawan. Harga sangat terjangkau untuk kualitas yang diberikan. Variasi menu banyak jadi karyawan tidak bosan. Recommended!',
      via: 'Google Maps',
    },
  ];

  return (
    <section className="testi" id="testimoni" aria-labelledby="testi-h2" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="testi__head text-center reveal">
          <span className="sec-label">Kata Mereka</span>
          <h2 id="testi-h2" className="reveal d1">Apa Kata Pelanggan Kami?</h2>
          <p className="reveal d2" style={{maxWidth:'460px', margin:'0 auto', marginTop:'.625rem', fontSize:'.9rem', color:'var(--c-text-3)'}}>
            Alhamdulillah, banyak yang puas! Ini cerita jujur dari mereka yang udah cobain Pandan Ayu Catering.
          </p>
        </div>

        <div className="testi__grid">
          {reviews.map((r, i) => (
            <article key={r.name} className={`testi__card reveal d${Math.min(i + 1, 5)}`} aria-label={`Testimoni dari ${r.name}`}>
              {/* Stars */}
              <div className="testi__stars" aria-label={`${r.rating} bintang`}>
                {Array.from({length: 5}).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill={si < r.rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testi__text">
                <p>&ldquo;{r.text}&rdquo;</p>
              </blockquote>

              {/* Author */}
              <footer className="testi__author">
                <div className="testi__avatar" aria-hidden="true">{r.avatar}</div>
                <div className="testi__meta">
                  <strong>{r.name}</strong>
                  <span>{r.event}</span>
                </div>
                <div className="testi__source" aria-label={`Sumber: ${r.via}`} title={r.via}>
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testi {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 0;
          background: var(--c-bg-2);
          border-top: 1px solid var(--c-border);
        }

        .testi__head {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2.75rem;
        }

        .testi__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 580px) { .testi__grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .testi__grid { grid-template-columns: repeat(4, 1fr); } }

        .testi__card {
          background: var(--c-bg-1);
          border: 1px solid var(--c-border);
          border-radius: var(--r-lg);
          padding: 1.375rem;
          display: flex;
          flex-direction: column;
          gap: .875rem;
          transition: border-color var(--dur-base), transform var(--dur-base);
        }
        .testi__card:hover {
          border-color: var(--c-border-2);
          transform: translateY(-4px);
        }

        .testi__stars {
          display: flex;
          gap: 2px;
          color: var(--c-orange-7);
        }

        .testi__text {
          flex: 1;
          border: none;
          padding: 0;
          margin: 0;
        }
        .testi__text p {
          font-size: .875rem;
          color: var(--c-text-2);
          line-height: 1.75;
          margin: 0;
        }

        .testi__author {
          display: flex;
          align-items: center;
          gap: .625rem;
          padding-top: .875rem;
          border-top: 1px solid var(--c-border);
        }

        .testi__avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(230,124,30,.12);
          border: 1px solid rgba(230,124,30,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--ff-display);
          font-size: .9375rem;
          font-weight: 700;
          color: var(--c-accent);
          flex-shrink: 0;
        }

        .testi__meta {
          flex: 1;
          min-width: 0;
        }
        .testi__meta strong {
          display: block;
          font-size: .875rem;
          font-weight: 600;
          color: var(--c-text-1);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .testi__meta span {
          display: block;
          font-size: .75rem;
          color: var(--c-text-3);
          margin-top: 1px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .testi__source {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: .6875rem;
          color: var(--c-text-3);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════
   CTA SECTION
══════════════════════════════════════ */
function CTA() {
  const ref = useReveal();

  return (
    <section className="cta" id="kontak" aria-labelledby="cta-h2" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="cta__box reveal">
          <div className="cta__text">
            <h2 id="cta-h2" className="reveal d1">Siap Buat Acara Anda<br/><em>Tak Terlupakan?</em></h2>
            <p className="reveal d2">Hubungi kami sekarang untuk konsultasi gratis. Admin kami siap membantu merencanakan menu terbaik untuk acara Anda.</p>
          </div>
          <div className="cta__actions reveal d3">
            <a
              href="https://wa.me/6282232172646?text=Halo%20Pandan%20Ayu%20Catering%2C%20saya%20ingin%20memesan%20catering."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="cta-wa-btn"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
            </a>
            <Link href="/menu" className="btn btn-outline btn-lg" id="cta-menu-btn">
              Lihat Menu Dulu
            </Link>
          </div>
          <p className="cta__note reveal d4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{display:'inline', verticalAlign:'middle', marginRight:'5px'}}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            <a href="https://wa.me/6282232172646" target="_blank" rel="noopener noreferrer" id="cta-phone-link">+62 822 3217 2646</a>
            {' '}· Buka 07.00 – 21.00 WIB setiap hari
          </p>
        </div>
      </div>

      <style jsx>{`
        .cta {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 0;
          background: var(--c-bg-1);
          border-top: 1px solid var(--c-border);
        }

        .cta__box {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .cta__text { width: 100%; }
        .cta__text h2 {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          margin-bottom: .875rem;
        }
        .cta__text h2 em {
          font-style: italic;
          color: var(--c-accent);
        }
        .cta__text p {
          font-size: 1rem;
          color: var(--c-text-3);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          justify-content: center;
        }

        .cta__note {
          font-size: .8375rem;
          color: var(--c-text-3);
          margin: 0;
          text-align: center;
        }
        .cta__note a {
          color: var(--c-accent);
          font-weight: 600;
          transition: color var(--dur-fast);
        }
        .cta__note a:hover { color: var(--c-accent-h); }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════
   PAGE
══════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <WhyUs />
        <MenuPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
