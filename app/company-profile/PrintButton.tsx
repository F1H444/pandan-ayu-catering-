"use client";

import { useState } from "react";

export default function PrintButton() {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");

  /* Unduh semua slide jadi satu file PDF A4 mendatar */
  async function downloadPdf() {
    if (busy) return;
    setBusy(true);
    setProgress("Menyiapkan...");

    const html = document.documentElement;
    const body = document.body;
    const prevScroll = html.style.scrollBehavior;

    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas-pro"),
      ]);

      const slides = Array.from(document.querySelectorAll<HTMLElement>(".cp-slide"));
      if (slides.length === 0) throw new Error("Slide tidak ditemukan");

      html.style.scrollBehavior = "auto";
      body.classList.add("cp-exporting");
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 60));

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
        compress: true,
      });
      const pageW = 297;
      const pageH = 210;

      for (let i = 0; i < slides.length; i++) {
        setProgress(`Merender halaman ${i + 1} dari ${slides.length}...`);

        const canvas = await html2canvas(slides[i], {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
        });

        const imgH = (canvas.height / canvas.width) * pageW;
        const data = canvas.toDataURL("image/jpeg", 0.92);

        if (i > 0) pdf.addPage([pageW, pageH], "landscape");
        pdf.addImage(data, "JPEG", 0, 0, pageW, Math.min(imgH, pageH), `slide-${i}`, "FAST");
      }

      pdf.save("Company-Profile-Pandan-Ayu-Catering.pdf");
      setProgress("");
    } catch (err) {
      console.error("Gagal membuat PDF:", err);
      alert("Maaf, PDF-nya gagal dibuat. Coba pakai tombol Cetak lalu pilih Save as PDF.");
      setProgress("");
    } finally {
      body.classList.remove("cp-exporting");
      html.style.scrollBehavior = prevScroll;
      setBusy(false);
    }
  }

  return (
    <div className="cp-toolbar" role="banner">
      <div className="cp-toolbar__inner">
        <div className="cp-toolbar__title">
          <strong>Company Profile Pandan Ayu Catering</strong>
          <span>
            10 halaman, ukuran A4 mendatar
            {progress ? ` | ${progress}` : " | siap dicetak atau disimpan jadi PDF"}
          </span>
        </div>

        <div className="cp-toolbar__tips" aria-label="Pengaturan cetak">
          <span className="cp-toolbar__tip">
            Kertas <b>A4</b>
          </span>
          <span className="cp-toolbar__tip">
            Posisi <b>Landscape</b>
          </span>
          <span className="cp-toolbar__tip">
            Margin <b>None</b>
          </span>
          <span className="cp-toolbar__tip">
            Nyalakan <b>Background graphics</b>
          </span>
        </div>

        <div className="cp-toolbar__actions">
          <a className="cp-link" href="/">
            Kembali ke Website
          </a>
          <button
            type="button"
            className="cp-btn cp-btn--accent"
            onClick={downloadPdf}
            disabled={busy}
          >
            {busy ? (
              <span className="cp-spinner" aria-hidden="true" />
            ) : (
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            )}
            {busy ? "Membuat PDF" : "Download PDF"}
          </button>
          <button
            type="button"
            className="cp-btn cp-btn--ghost"
            onClick={() => window.print()}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Cetak
          </button>
        </div>
      </div>
    </div>
  );
}
