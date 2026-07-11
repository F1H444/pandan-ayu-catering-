'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WA = '6282232172646';

const brochureImages = [
  '/images/menu/pandan ayu catering browsur/1. olahan.jpg',
  '/images/menu/pandan ayu catering browsur/2. olahan.jpg',
  '/images/menu/pandan ayu catering browsur/3. olahan.jpg',
  '/images/menu/pandan ayu catering browsur/4. olahan.jpg',
  '/images/menu/pandan ayu catering browsur/5. paket box.jpg',
  '/images/menu/pandan ayu catering browsur/6. paket.jpg',
];

export default function MenuPage() {
  const handleOrder = () => {
    const msg = [
      '🍃 *Pemesanan Pandan Ayu Catering*',
      '─────────────────────',
      'Halo, saya ingin memesan menu catering. Mohon informasi lebih lanjut.',
      '─────────────────────',
    ].join('\n');
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
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
            <h1 className="mhdr__h1">Brosur Menu Kami</h1>
            <p className="mhdr__sub">
              Cek berbagai pilihan paket dan menu andalan kami di sini. Kalau udah nemu yang pas atau mau tanya-tanya, langsung chat WA aja ya!
            </p>
            <button className="btn btn-primary btn-lg mt-4" onClick={handleOrder}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{marginRight: '8px'}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Tanya / Pesan via WA
            </button>
          </div>
        </header>

        {/* ── Menu Brochures ── */}
        <section className="bsec" aria-label="Brosur menu">
          <div className="container">
            <div className="bgrid">
              {brochureImages.map((src, idx) => (
                <article
                  key={idx}
                  className="bcard"
                  style={{animationDelay:`${Math.min(idx * 50, 500)}ms`}}
                >
                  <div className="bcard__img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Brosur Pandan Ayu Catering ${idx + 1}`} loading="lazy" className="bcard__img" />
                  </div>
                </article>
              ))}
            </div>

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

        /* ── Brochures Section ── */
        .bsec {
          background: var(--c-bg);
          padding: 3rem 0 5rem;
        }

        .bgrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        @media (min-width: 768px) {
          .bgrid { grid-template-columns: 1fr 1fr; }
        }

        .bcard {
          background: var(--c-bg-2);
          border: 1px solid var(--c-border);
          border-radius: var(--r-xl);
          overflow: hidden;
          transition: transform var(--dur-base) var(--ease), box-shadow var(--dur-base);
          animation: fadeUp .45s var(--ease) both;
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
