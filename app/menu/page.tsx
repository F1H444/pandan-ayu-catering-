'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WA = '6282232172646';

const MENU_CATEGORIES = [
  {
    id: 'nasi-kotak',
    title: 'Nasi Kotak',
    docImage: null, // Siapkan tempat untuk foto dokumentasi nanti
    brochures: [
      '/images/menu/nasi kotak/1. olahan.jpg',
      '/images/menu/nasi kotak/2. olahan.jpg',
      '/images/menu/nasi kotak/3. olahan.jpg',
      '/images/menu/nasi kotak/4. olahan.jpg',
      '/images/menu/nasi kotak/5. paket box.jpg',
      '/images/menu/nasi kotak/6. paket.jpg',
    ]
  },
  {
    id: 'tumpeng',
    title: 'Tumpeng',
    docImage: null,
    brochures: [] // Menunggu foto dari pemilik
  },
  {
    id: 'snack-box',
    title: 'Snack Box',
    docImage: null,
    brochures: [] // Menunggu foto dari pemilik
  },
  {
    id: 'aqiqah',
    title: 'Aqiqah',
    docImage: null,
    brochures: [
      '/images/menu/aqiqah/aqiqah.jpeg',
    ]
  },
  {
    id: 'prasmanan',
    title: 'Prasmanan Rumah & Kantor',
    docImage: null,
    brochures: [
      '/images/menu/prasmanan rumah & kantor/prasmanan 1.jpeg',
      '/images/menu/prasmanan rumah & kantor/prasmanan 2.jpeg',
      '/images/menu/prasmanan rumah & kantor/prasmanan 3.jpeg',
    ]
  },
  {
    id: 'wedding',
    title: 'Paket Wedding',
    docImage: null,
    brochures: [
      '/images/menu/wedding/wedding 1.jpeg',
      '/images/menu/wedding/wedding 2.jpeg',
      '/images/menu/wedding/wedding 3.jpeg',
    ]
  },
  {
    id: 'gubugan',
    title: 'Gubugan',
    docImage: null,
    brochures: [
      '/images/menu/gubugan/gubugan.jpeg',
    ]
  },
];

export default function MenuPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOrder = () => {
    const msg = [
      '🍃 *Pemesanan Pandan Ayu Catering*',
      '─────────────────────',
      'Halo, saya ingin memesan menu catering. Mohon informasi lebih lanjut.',
      '─────────────────────',
    ].join('\n');
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Untuk mengimbangi navbar yang fixed
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── Page Header ── */}
        <header className="mhdr">
          <div className="container mhdr__inner">
            <nav aria-label="Breadcrumb">
              <ol className="bread" role="list">
                <li><a href="/">Beranda</a></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Menu</li>
              </ol>
            </nav>
            <span className="sec-label" style={{animationDelay:'0ms'}}>Pilihan Lengkap</span>
            <h1 className="mhdr__h1">Katalog Menu Kami</h1>
            <p className="mhdr__sub">
              Jelajahi berbagai pilihan paket dan menu andalan kami berdasarkan kategori. Kalau udah nemu yang pas atau mau tanya-tanya, langsung chat WA aja ya!
            </p>
            <button className="btn btn-primary btn-lg mt-4" onClick={handleOrder}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{marginRight: '8px'}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Tanya / Pesan via WA
            </button>
          </div>
        </header>

        {/* ── Quick Navigation ── */}
        <section className="qnav">
          <div className="container">
            <div className="qnav__hint">Geser untuk kategori lainnya 👉</div>
            <div className="qnav__list">
              {MENU_CATEGORIES.map(cat => (
                <a 
                  key={`nav-${cat.id}`} 
                  href={`#${cat.id}`} 
                  className="qnav__item"
                  onClick={(e) => handleScroll(e, cat.id)}
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Categories Sections ── */}
        <section className="cats">
          <div className="container">
            {MENU_CATEGORIES.map((cat, idx) => {
              if (cat.brochures.length === 0 && !cat.docImage) return null; // Sembunyikan kategori yang kosong
              
              return (
                <div key={cat.id} id={cat.id} className="cats__group">
                  <h2 className="cats__title">{cat.title}</h2>
                  
                  {/* Dokumentasi Cover - Kosong untuk saat ini tapi disiapkan */}
                  {cat.docImage && (
                    <div className="cats__doc">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cat.docImage} alt={`Dokumentasi ${cat.title}`} className="cats__doc-img" loading="lazy" />
                    </div>
                  )}

                  {/* Brosur Images */}
                  {cat.brochures.length > 0 && (
                    <div className="bgrid">
                      {cat.brochures.map((src, bIdx) => (
                        <article key={bIdx} className="bcard" onClick={() => setSelectedImage(src)}>
                          <div className="bcard__img-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={src} alt={`Brosur ${cat.title} ${bIdx + 1}`} loading="lazy" className="bcard__img" />
                            <div className="bcard__zoom-hint">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                              </svg>
                              <span>Perbesar</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Image Lightbox Modal ── */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
            <button className="lightbox__close" aria-label="Tutup gambar">×</button>
            <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedImage} alt="Perbesar Gambar Brosur" className="lightbox__img" />
            </div>
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <section className="container" style={{ marginBottom: '5rem' }}>
          <div className="bcta">
            <h2 className="bcta__title">Udah Nemu Menu Favoritmu?</h2>
            <p className="bcta__desc">Jangan ragu buat konsultasiin pilihanmu. Yuk ngobrol santai bareng admin di WhatsApp!</p>
            <button className="btn btn-primary btn-lg" onClick={handleOrder}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{marginRight: '8px'}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Tanya / Pesan via WA
            </button>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        /* ── Header ── */
        .mhdr {
          background: var(--c-bg-1);
          border-bottom: 1px solid var(--c-border);
          padding-top: calc(var(--nav-h) + 2.5rem);
          padding-bottom: 2.5rem;
        }
        .mhdr__inner { position: relative; display: flex; flex-direction: column; align-items: flex-start; }

        .bread {
          display: flex;
          align-items: center;
          gap: .5rem;
          margin-bottom: 1.25rem;
        }
        .bread li { font-size: .8125rem; color: var(--c-text-3); }
        .bread a  { transition: color var(--dur-fast); }
        .bread a:hover { color: var(--c-accent); }

        .mhdr__h1 {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 800;
          letter-spacing: -.03em;
          margin: .5rem 0 .875rem;
          animation: fadeUp .5s var(--ease) both;
        }
        .mhdr__sub {
          font-size: 1rem;
          color: var(--c-text-3);
          max-width: 600px;
          margin: 0 0 1.5rem 0;
          animation: fadeUp .5s var(--ease) .1s both;
        }
        
        .mt-4 { margin-top: 1rem; }

        /* ── Quick Navigation ── */
        .qnav {
          padding: 1rem 0 1.25rem;
          position: sticky;
          top: var(--nav-h);
          z-index: 10;
          border-bottom: 1px solid var(--c-border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(12, 8, 4, 0.85); /* Matches var(--c-bg) which is #0c0804 */
        }
        .qnav__hint {
          display: block;
          font-size: 0.75rem;
          color: var(--c-accent);
          margin-bottom: 0.5rem;
          font-weight: 500;
          animation: fadeUp 0.5s var(--ease) both;
        }
        @media (min-width: 768px) {
          .qnav__hint { display: none; }
          .qnav { padding: 1.5rem 0; }
        }
        
        .qnav__list {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 8px; /* space for elegant scrollbar */
        }
        
        /* Elegant Scrollbar */
        .qnav__list::-webkit-scrollbar { 
          height: 4px;
        }
        .qnav__list::-webkit-scrollbar-track { 
          background: rgba(255, 255, 255, 0.05); 
          border-radius: 10px;
        }
        .qnav__list::-webkit-scrollbar-thumb { 
          background: var(--c-accent); 
          border-radius: 10px;
        }
        .qnav__list::-webkit-scrollbar-thumb:hover { 
          background: var(--c-orange-7); 
        }
        
        .qnav__item {
          padding: 0.5rem 1rem;
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
          border-radius: 100px;
          color: var(--c-text-2);
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          transition: all var(--dur-fast);
          text-decoration: none;
        }
        .qnav__item:hover {
          background: var(--c-accent);
          color: #fff;
          border-color: var(--c-accent);
        }

        /* ── Categories Sections ── */
        .cats {
          background: var(--c-bg);
          padding: 3rem 0 2rem;
        }
        .cats__group {
          margin-bottom: 5rem;
          scroll-margin-top: calc(var(--nav-h) + 80px); /* For smooth scrolling offset */
        }
        .cats__title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--c-text-1);
          margin-bottom: 2rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--c-border);
          display: inline-block;
        }
        
        /* ── Documentation Cover ── */
        .cats__doc {
          width: 100%;
          margin-bottom: 2rem;
          border-radius: var(--r-xl);
          overflow: hidden;
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
        }
        .cats__doc-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          max-height: 500px; /* Limit height so it doesn't take up the whole screen on desktop */
        }

        /* ── Brochures Grid (Masonry Style) ── */
        .bgrid {
          column-count: 1;
          column-gap: 2rem;
          width: 100%;
        }
        
        @media (min-width: 640px) {
          .bgrid { column-count: 2; }
        }

        /* Dihapus kolom 3 agar gambar di desktop tidak terlalu kecil */

        .bcard {
          break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 2rem;
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
          border-radius: var(--r-xl);
          overflow: hidden;
          transition: transform var(--dur-base) var(--ease), box-shadow var(--dur-base);
          display: inline-block;
          width: 100%;
          cursor: zoom-in;
        }
        
        .bcard:hover {
          transform: translateY(-5px);
          box-shadow: var(--sh-xl);
        }

        .bcard__img-wrap {
          position: relative;
          width: 100%;
          display: flex;
        }
        
        .bcard__img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .bcard__zoom-hint {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #fff;
          opacity: 0;
          transition: opacity var(--dur-base) var(--ease);
        }
        .bcard__zoom-hint span {
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.05em;
        }
        .bcard:hover .bcard__zoom-hint {
          opacity: 1;
        }
        
        /* ── Lightbox Modal ── */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.2s ease-out forwards;
          cursor: zoom-out;
        }
        .lightbox__close {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          font-size: 2.5rem;
          line-height: 1;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10000;
        }
        .lightbox__close:hover {
          background: var(--c-accent);
          color: #000;
          border-color: var(--c-accent);
          transform: scale(1.1);
        }
        .lightbox__content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          cursor: default;
        }
        .lightbox__img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.8);
          animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        /* ── Bottom CTA ── */
        .bcta {
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
          border-radius: var(--r-xl);
          padding: 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .bcta__title {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--c-text-1);
          margin: 0;
        }
        
        .bcta__desc {
          font-size: 1rem;
          color: var(--c-text-3);
          margin: 0;
          max-width: 500px;
        }
      `}</style>
    </>
  );
}
