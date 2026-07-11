'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { MenuItem } from '../menu/page';

const WA = '6282232172646';

function sanitize(s: string) {
  return s
    .replace(/[<>'"&]/g, c => ({'<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;','&':'&amp;'}[c] ?? c))
    .trim().slice(0, 500);
}

export default function OrderModal({ item, onClose }: { item: MenuItem | null; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', qty: '10', date: '', address: '', notes: '' });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!item) return;
    setForm({ name: '', qty: '10', date: '', address: '', notes: '' });
    setErrs({});
    setTimeout(() => nameRef.current?.focus(), 80);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && ref.current) {
        const els = ref.current.querySelectorAll<HTMLElement>('button,[href],input,textarea,[tabindex]:not([tabindex="-1"])');
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [item, onClose]);

  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Nama minimal 2 karakter';
    const qty = parseInt(form.qty);
    if (isNaN(qty) || qty < 1) e.qty = 'Minimal 1 porsi';
    else if (qty > 10000) e.qty = 'Maksimal 10.000 porsi';
    if (!form.date) e.date = 'Tanggal wajib diisi';
    else { const d = new Date(form.date); const t = new Date(); t.setHours(0,0,0,0); if (d < t) e.date = 'Tanggal tidak boleh lampau'; }
    if (!form.address.trim()) e.address = 'Alamat wajib diisi';
    return e;
  }, [form]);

  const submit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrs(errs); return; }
    setLoading(true);
    const d = new Date(form.date).toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
    const msg = [
      '🍃 *Pemesanan Pandan Ayu Catering*',
      '─────────────────────',
      `📋 *Menu:* ${item?.emoji} ${item?.name}`,
      `👤 *Nama:* ${sanitize(form.name)}`,
      `🍽️ *Jumlah:* ${parseInt(form.qty)} porsi`,
      `📅 *Tanggal:* ${d}`,
      `📍 *Alamat:* ${sanitize(form.address)}`,
      form.notes ? `📝 *Catatan:* ${sanitize(form.notes)}` : '',
      '─────────────────────',
      'Mohon konfirmasi ketersediaan dan harga. Terima kasih 🙏',
    ].filter(Boolean).join('\n');
    setTimeout(() => {
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
      setLoading(false);
      onClose();
    }, 500);
  }, [form, item, validate, onClose]);

  const change = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errs[name]) setErrs(p => ({ ...p, [name]: '' }));
  }, [errs]);

  const today = new Date().toISOString().split('T')[0];
  if (!item) return null;

  return (
    <div
      className="ov"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal" ref={ref}>
        {/* Head */}
        <div className="modal__head">
          <div className="modal__item">
            <span className="modal__emoji" aria-hidden="true">{item.emoji}</span>
            <div>
              <p className="modal__lbl">Memesan:</p>
              <h2 id="modal-title" className="modal__name">{item.name}</h2>
            </div>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Tutup" id="modal-close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="modal__divider" />

        {/* Form */}
        <form onSubmit={submit} className="modal__form" noValidate>
          {/* Name */}
          <div className={`fg${errs.name ? ' fg--err' : ''}`}>
            <label htmlFor="f-name" className="flbl">Nama Pemesan <span aria-hidden="true" className="freq">*</span></label>
            <input ref={nameRef} id="f-name" name="name" type="text" className="finp" placeholder="Nama lengkap Anda" value={form.name} onChange={change} maxLength={100} autoComplete="name" required aria-required="true" aria-invalid={!!errs.name} aria-describedby={errs.name ? 'e-name' : undefined}/>
            {errs.name && <p id="e-name" className="ferr" role="alert">{errs.name}</p>}
          </div>

          {/* Qty */}
          <div className={`fg${errs.qty ? ' fg--err' : ''}`}>
            <label htmlFor="f-qty" className="flbl">Jumlah Porsi <span aria-hidden="true" className="freq">*</span></label>
            <input id="f-qty" name="qty" type="number" className="finp" placeholder="Contoh: 50" value={form.qty} onChange={change} min="1" max="10000" required aria-required="true" aria-invalid={!!errs.qty} aria-describedby={errs.qty ? 'e-qty' : undefined}/>
            {errs.qty && <p id="e-qty" className="ferr" role="alert">{errs.qty}</p>}
          </div>

          {/* Date */}
          <div className={`fg${errs.date ? ' fg--err' : ''}`}>
            <label htmlFor="f-date" className="flbl">Tanggal Acara <span aria-hidden="true" className="freq">*</span></label>
            <input id="f-date" name="date" type="date" className="finp" value={form.date} onChange={change} min={today} required aria-required="true" aria-invalid={!!errs.date} aria-describedby={errs.date ? 'e-date' : undefined}/>
            {errs.date && <p id="e-date" className="ferr" role="alert">{errs.date}</p>}
          </div>

          {/* Address */}
          <div className={`fg${errs.address ? ' fg--err' : ''}`}>
            <label htmlFor="f-addr" className="flbl">Alamat Pengiriman <span aria-hidden="true" className="freq">*</span></label>
            <input id="f-addr" name="address" type="text" className="finp" placeholder="Alamat lengkap tujuan" value={form.address} onChange={change} maxLength={300} required aria-required="true" aria-invalid={!!errs.address} aria-describedby={errs.address ? 'e-addr' : undefined}/>
            {errs.address && <p id="e-addr" className="ferr" role="alert">{errs.address}</p>}
          </div>

          {/* Notes */}
          <div className="fg">
            <label htmlFor="f-notes" className="flbl">
              Catatan <span className="fopt">(opsional)</span>
            </label>
            <textarea id="f-notes" name="notes" className="finp ftxt" placeholder="Alergi, permintaan khusus, dll..." value={form.notes} onChange={change} maxLength={500} rows={3} aria-describedby="f-hint"/>
            <p id="f-hint" className="fhint">{form.notes.length}/500</p>
          </div>

          {/* Notice */}
          <div className="fnotice" role="note">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Anda akan diarahkan ke WhatsApp. Admin kami akan mengkonfirmasi pesanan dan harga segera.
          </div>

          {/* Submit */}
          <button type="submit" className={`btn btn-primary btn-lg fsub${loading ? ' fsub--load' : ''}`} id="modal-submit" disabled={loading} aria-busy={loading}>
            {loading ? (
              <><span className="spin" aria-hidden="true"/>Membuka WhatsApp...</>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Pesan via WhatsApp
              </>
            )}
          </button>
        </form>
      </div>

      <style jsx>{`
        .ov {
          position: fixed; inset: 0;
          background: rgba(0,0,0,.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: fadeIn .2s ease;
        }
        .modal {
          background: var(--c-bg-2);
          border: 1px solid var(--c-border-2);
          border-radius: var(--r-xl);
          width: 100%;
          max-width: 500px;
          max-height: 90svh;
          overflow-y: auto;
          animation: modalIn .32s var(--ease-spring);
          box-shadow: var(--sh-xl);
        }

        /* Head */
        .modal__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.375rem;
        }
        .modal__item { display: flex; align-items: center; gap: .875rem; }
        .modal__emoji { font-size: 2.25rem; line-height: 1; }
        .modal__lbl {
          font-size: .7rem;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--c-text-3);
          margin-bottom: 2px;
        }
        .modal__name {
          font-family: var(--ff-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--c-text-1);
          margin: 0;
        }
        .modal__close {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px;
          border-radius: var(--r-md);
          background: var(--c-bg-3);
          border: 1px solid var(--c-border);
          color: var(--c-text-3);
          flex-shrink: 0;
          transition: background var(--dur-fast), color var(--dur-fast), border-color var(--dur-fast);
          cursor: pointer;
        }
        .modal__close:hover {
          background: rgba(230,124,30,.12);
          color: var(--c-accent);
          border-color: rgba(230,124,30,.28);
        }
        .modal__divider { height: 1px; background: var(--c-border); }

        /* Form */
        .modal__form {
          padding: 1.375rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Field group */
        .fg { display: flex; flex-direction: column; gap: .3rem; }

        .flbl {
          font-size: .8125rem;
          font-weight: 600;
          color: var(--c-text-2);
        }
        .freq { color: var(--c-accent); }
        .fopt { font-weight: 400; color: var(--c-text-3); font-size: .75rem; }

        .finp {
          background: var(--c-bg-1);
          border: 1.5px solid var(--c-border-2);
          border-radius: var(--r-md);
          padding: .6875rem .875rem;
          font-size: .9rem;
          color: var(--c-text-1);
          width: 100%;
          outline: none;
          -webkit-appearance: none;
          transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
        }
        .finp::placeholder { color: var(--c-text-3); opacity: .7; }
        .finp:focus {
          border-color: var(--c-accent);
          box-shadow: 0 0 0 3px rgba(230,124,30,.14);
        }
        .fg--err .finp { border-color: #d05050; }
        .fg--err .finp:focus { box-shadow: 0 0 0 3px rgba(208,80,80,.15); }

        .ftxt { resize: vertical; min-height: 76px; }
        input[type="date"] { color-scheme: dark; }

        .ferr {
          font-size: .75rem;
          color: #e08080;
          margin: 0;
        }
        .fhint {
          font-size: .7rem;
          color: var(--c-text-3);
          text-align: right;
          margin: 0;
        }

        /* Notice */
        .fnotice {
          display: flex;
          align-items: flex-start;
          gap: .5rem;
          padding: .875rem;
          background: rgba(230,124,30,.07);
          border: 1px solid rgba(230,124,30,.18);
          border-radius: var(--r-md);
          font-size: .8rem;
          color: var(--c-text-3);
          line-height: 1.55;
        }
        .fnotice svg { flex-shrink:0; margin-top:1px; color: var(--c-accent); }

        /* Submit */
        .fsub {
          width: 100%;
          justify-content: center;
          border-radius: var(--r-md);
        }
        .fsub--load { opacity: .75; cursor: not-allowed; }

        .spin {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(12,8,4,.3);
          border-top-color: #0c0804;
          border-radius: 50%;
          animation: spinSlow .7s linear infinite;
        }
      `}</style>
    </div>
  );
}
