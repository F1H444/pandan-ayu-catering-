import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "./PrintButton";
import Year from "./Year";
import "./slides.css";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Company profile Pandan Ayu Catering, katering keluarga dari Sidoarjo. Nasi kotak, prasmanan, tumpeng, dan paket hajatan. Siap dicetak atau diunduh sebagai PDF.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://www.pandanayucatering.biz.id/company-profile",
  },
};

const WA_MAIN =
  "https://wa.me/6282232172646?text=Halo%20Pandan%20Ayu%20Catering%2C%20saya%20ingin%20konsultasi%20catering.";

const WA_2 = "https://wa.me/62882022927586";

const SITE = "www.pandanayucatering.biz.id";

const StarIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ── Kepala slide ── */
function Head({ label }: { label: string }) {
  return (
    <header className="cp-head">
      <div className="cp-head__brand">
        <Image src="/logo.png" alt="Logo Pandan Ayu Catering" width={40} height={40} />
        <span className="cp-head__name">
          Pandan Ayu
          <br />
          Catering
        </span>
      </div>
      <span className="cp-head__label">{label}</span>
    </header>
  );
}

/* ── Kaki slide ── */
function Foot({ page }: { page: string }) {
  return (
    <footer className="cp-foot">
      <span>
        <b>Pandan Ayu Catering</b> &nbsp; {SITE}
      </span>
      <span className="cp-foot__page">{page}</span>
    </footer>
  );
}

function Title({ sub, children }: { sub: string; children: React.ReactNode }) {
  return (
    <>
      <span className="cp-bar" aria-hidden="true" />
      <p className="cp-sub">{sub}</p>
      <h2 className="cp-title">{children}</h2>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   01 · SAMPUL
═══════════════════════════════════════════════════════ */
function SlideCover() {
  return (
    <section className="cp-slide" aria-label="Sampul">
      <div className="cp-cover">
        <div className="cp-cover__left">
          <div className="cp-cover__brand">
            <Image src="/logo.png" alt="Logo Pandan Ayu Catering" width={60} height={60} />
            <b>
              Pandan Ayu Catering
              <small>Sidoarjo</small>
            </b>
          </div>

          <span className="cp-cover__kicker">
            Company Profile <Year separator={false} />
          </span>

          <h1 className="cp-cover__title">
            Masakan Jawa untuk <span>Acara yang Kamu Sayang</span>
          </h1>

          <p className="cp-cover__tagline">
            Kami katering keluarga dari Sepande, Sidoarjo. Sejak 2018 kami bantu
            hajatan, pernikahan, rapat kantor, sampai syukuran. Bumbunya kami ulek
            sendiri, bukan instan. Makanan selalu datang sebelum acara dimulai.
          </p>

          <div className="cp-cover__meta">
            <span>
              WhatsApp <b>0822-3217-2646</b>
            </span>
            <span>
              <b>{SITE}</b>
            </span>
            <span>Sepande, Kec. Candi, Kab. Sidoarjo</span>
          </div>
        </div>

        <div className="cp-cover__right">
          <Image
            src="/hero.jpg"
            alt="Sajian Pandan Ayu Catering"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <div className="cp-cover__facts">
        <div>
          <strong>500+</strong>
          <span>Acara Terlayani</span>
        </div>
        <div>
          <strong>8</strong>
          <span>Tahun Berjalan</span>
        </div>
        <div>
          <strong>20+</strong>
          <span>Pilihan Menu</span>
        </div>
        <div>
          <strong>1.000</strong>
          <span>Box Sekali Kirim</span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   02 · DAFTAR ISI
═══════════════════════════════════════════════════════ */
function SlideContents() {
  const left = [
    { t: "Tentang Kami", d: "Cerita singkat usaha keluarga kami, dari dapur rumah sampai dipercaya instansi." },
    { t: "Visi, Misi & Nilai", d: "Prinsip yang kami pegang setiap hari, bukan sekadar tulisan di dinding." },
    { t: "Layanan & Menu", d: "Delapan pilihan paket, dari nasi kotak sampai prasmanan." },
    { t: "Kenapa Memilih Kami", d: "Enam alasan pelanggan kami memesan lagi." },
  ];
  const right = [
    { t: "Standar & Alur Produksi", d: "Cara kami menjaga rasa, kebersihan, dan ketepatan waktu." },
    { t: "Cara Pesan & Ketentuan", d: "Urutan pemesanan dan hal-hal yang perlu kamu tahu." },
    { t: "Kata Pelanggan", d: "Ulasan apa adanya dari pelanggan di Google Maps." },
    { t: "Hubungi Kami", d: "Nomor telepon, alamat dapur, jam buka, dan media sosial." },
  ];

  return (
    <section className="cp-slide" aria-label="Daftar Isi">
      <div className="cp-inner">
        <Head label="Daftar Isi" />
        <div className="cp-main">
          <Title sub="Halaman demi halaman">Isi Buku Ini</Title>

          <div className="cp-cols cp-cols--55" style={{ flex: 1 }}>
            <div className="cp-list cp-list--spread">
              {left.map((it, i) => (
                <div key={it.t} className="cp-item">
                  <span className="cp-item__n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="cp-item__t">{it.t}</p>
                    <p className="cp-item__d">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cp-list cp-list--spread">
              {right.map((it, i) => (
                <div key={it.t} className="cp-item">
                  <span className="cp-item__n">{String(i + 5).padStart(2, "0")}</span>
                  <div>
                    <p className="cp-item__t">{it.t}</p>
                    <p className="cp-item__d">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cp-quote cp-quote--sand">
            <p>
              Yang kami jaga bukan cuma rasa masakannya, tapi juga supaya kamu
              tenang menunggu hari acara.
            </p>
            <span>Pandan Ayu Catering</span>
          </div>
        </div>
        <Foot page="02" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   03 · TENTANG KAMI
═══════════════════════════════════════════════════════ */
function SlideAbout() {
  return (
    <section className="cp-slide" aria-label="Tentang Kami">
      <div className="cp-inner">
        <Head label="Tentang Kami" />
        <div className="cp-main">
          <div className="cp-cols cp-cols--64" style={{ flex: 1 }}>
            <div>
              <Title sub="Cerita kami">Tentang Kami</Title>

              <p className="cp-p">
                Pandan Ayu mulai dari dapur rumah di Sepande, Kecamatan Candi,
                Sidoarjo. Awalnya kami masak untuk acara keluarga sendiri. Tetangga
                ikut memesan, lalu tetangga dari tetangga. Lama-lama pesanannya tidak
                lagi muat di dapur rumah.
              </p>
              <p className="cp-p">
                Sekarang sudah delapan tahun kami jalan. Acara yang kami tangani
                ratusan, dari arisan RT dan makan siang kantor sampai acara resmi di
                Pendopo Bupati Sidoarjo. Beberapa instansi pemerintah juga jadi
                pelanggan tetap kami.
              </p>
              <p className="cp-p">
                Yang tidak berubah cuma satu: cara kami masak. Bumbu tetap diulek
                sendiri, santan tetap diperas sendiri, dan kami tetap menolak bumbu
                instan. Owner kami chef bersertifikat nasional dan anggota ICA.
              </p>

              <div className="cp-quote" style={{ marginTop: "1.1em" }}>
                <p>
                  Masakan enak tidak bisa diburu-buru. Bumbu butuh waktu, api kecil,
                  dan tangan yang sabar.
                </p>
                <span>Pendiri Pandan Ayu Catering</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <div className="cp-photo" style={{ position: "relative", flex: 1, minHeight: "11em" }}>
                <Image
                  src="/hero.jpg"
                  alt="Dapur dan sajian Pandan Ayu"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className="cp-photo__cap">Dapur kami di Sepande, Candi</span>
              </div>

              <table className="cp-info">
                <tbody>
                  <tr>
                    <th>Berdiri</th>
                    <td>2018, Sidoarjo</td>
                  </tr>
                  <tr>
                    <th>Dapur</th>
                    <td>Sepande RT 2 RW 1, Kec. Candi</td>
                  </tr>
                  <tr>
                    <th>Kantor</th>
                    <td>King Safira A5-12A, Sidoarjo</td>
                  </tr>
                  <tr>
                    <th>Spesialisasi</th>
                    <td>Masakan Jawa dan nusantara</td>
                  </tr>
                  <tr>
                    <th>Wilayah</th>
                    <td>Sidoarjo dan sekitarnya</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Foot page="03" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   04 · VISI, MISI & NILAI
═══════════════════════════════════════════════════════ */
function SlideVision() {
  const misi = [
    { t: "Rasa yang sama setiap kali", d: "Resep kami catat rapi. Pesanan 20 box dan 1.000 box rasanya tidak beda." },
    { t: "Belanja segar tiap pagi", d: "Kami ke pasar setiap hari, jadi tidak ada bahan yang menginap lama." },
    { t: "Halal dan bersih", d: "Semua bahan halal. Dapur dan peralatan kami jaga kebersihannya." },
    { t: "Datang lebih awal", d: "Jadwal kami hitung mundur dari jam acaramu, bukan dari jam kami siap." },
    { t: "Harga jelas sejak awal", d: "Rincian menu dan biaya ditulis di penawaran. Tidak ada tagihan mendadak." },
  ];

  return (
    <section className="cp-slide" aria-label="Visi, Misi, dan Nilai">
      <div className="cp-inner">
        <Head label="Visi, Misi & Nilai" />
        <div className="cp-main">
          <Title sub="Arah dan prinsip">Visi, Misi & Nilai</Title>

          <div className="cp-cols cp-cols--46" style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <div className="cp-quote" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ marginTop: 0, marginBottom: "0.6em" }}>Visi Kami</span>
                <p style={{ fontSize: "1.05em" }}>
                  Jadi katering keluarga yang paling dipercaya di Sidoarjo. Tempat
                  orang tenang menitipkan acaranya, dan tamu pulang membawa cerita
                  tentang makanannya.
                </p>
              </div>

              <table className="cp-info">
                <tbody>
                  <tr>
                    <th>Jujur</th>
                    <td>
                      Harga dan isi menu dijelaskan apa adanya.
                      <small>Tidak ada biaya yang muncul di belakang.</small>
                    </td>
                  </tr>
                  <tr>
                    <th>Rapi</th>
                    <td>
                      Kemasan higienis, meja prasmanan tertata.
                      <small>Petugas kami datang dengan penampilan bersih.</small>
                    </td>
                  </tr>
                  <tr>
                    <th>Tepat waktu</th>
                    <td>
                      Makanan siap sebelum acara mulai.
                      <small>Delapan tahun, belum pernah kami telat.</small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cp-list">
              {misi.map((m, i) => (
                <div key={m.t} className="cp-item">
                  <span className="cp-item__n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="cp-item__t">{m.t}</p>
                    <p className="cp-item__d">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Foot page="04" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   05 · LAYANAN & MENU
═══════════════════════════════════════════════════════ */
function SlideServices() {
  const left = [
    { t: "Nasi Kotak", s: "Mulai Rp 24.000", d: "Paling sering dipesan. Isinya bisa disusun sesuai budget: nasi, lauk utama, sayur, dan sambal. Pesan dadakan H-1 juga masih bisa, sampai 1.000 box sekali kirim." },
    { t: "Prasmanan", s: "Hajatan dan acara kantor", d: "Kami bawa meja, peralatan, dan petugas yang menjaga makanan tetap rapi sampai acara selesai." },
    { t: "Tumpeng", s: "Syukuran dan selamatan", d: "Bisa nasi kuning atau nasi putih, dengan hiasan tradisional yang tetap rapi sampai tujuan." },
    { t: "Paket Wedding", s: "Untuk resepsi", d: "Menunya bisa dicoba dulu sebelum hari H, jadi kamu tidak menebak-nebak rasanya." },
  ];
  const right = [
    { t: "Paket Aqiqah", s: "Sesuai syariat", d: "Olahan kambing atau sapi. Tersedia dalam bentuk nasi kotak, tumpeng, atau prasmanan." },
    { t: "Snack Box", s: "Rapat, arisan, pengajian", d: "Kue dan jajanan dalam kemasan rapi, mudah dibagikan ke banyak orang." },
    { t: "Paket Tradisional", s: "Masakan kampung", d: "Gubugan, pondokan, dan lauk khas yang jarang ditemukan di katering lain." },
    { t: "Simple Box", s: "Cepat dan hemat", d: "Untuk kebutuhan mendadak. Porsinya pas dan rasanya tetap kami jaga." },
  ];

  return (
    <section className="cp-slide" aria-label="Layanan dan Menu">
      <div className="cp-inner">
        <Head label="Layanan & Menu" />
        <div className="cp-main">
          <Title sub="Delapan pilihan">Layanan & Menu</Title>

          <div className="cp-cols cp-cols--55" style={{ flex: 1 }}>
            <div className="cp-list cp-list--spread">
              {left.map((it, i) => (
                <div key={it.t} className="cp-item">
                  <span className="cp-item__n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="cp-item__t">
                      {it.t}
                      <small>{it.s}</small>
                    </p>
                    <p className="cp-item__d">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cp-list cp-list--spread">
              {right.map((it, i) => (
                <div key={it.t} className="cp-item">
                  <span className="cp-item__n">{String(i + 5).padStart(2, "0")}</span>
                  <div>
                    <p className="cp-item__t">
                      {it.t}
                      <small>{it.s}</small>
                    </p>
                    <p className="cp-item__d">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="cp-note">
            <strong>Catatan:</strong> menu bisa diubah sesuai permintaan. Kalau yang
            kamu cari tidak ada di daftar ini, tanya saja ke admin. Foto asli
            sajiannya bisa dilihat di {SITE}.
          </p>
        </div>
        <Foot page="05" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   06 · KENAPA MEMILIH KAMI
═══════════════════════════════════════════════════════ */
function SlideWhyUs() {
  const cards = [
    { t: "Bahan Segar Tiap Hari", d: "Tim belanja kami ke pasar setiap pagi. Tidak ada bahan yang disimpan berhari-hari di kulkas." },
    { t: "Chef Bersertifikat", d: "Owner kami chef bersertifikat nasional dan anggota ICA. Rasanya terukur, bukan kira-kira." },
    { t: "Halal dan Higienis", d: "Semua bahan halal. Peralatan dicuci setiap selesai dipakai, dan area masak dipisah dari area cuci." },
    { t: "Tidak Pernah Telat", d: "Delapan tahun berjalan, belum ada acara yang tertunda karena makanan kami." },
    { t: "Harga Apa Adanya", d: "Semua rincian kami tulis di penawaran. Tidak ada biaya tambahan yang muncul belakangan." },
    { t: "Admin Cepat Balas", d: "Chat kami setiap hari jam 08.00 sampai 16.00. Mau tanya menu atau minta hitungan budget, silakan." },
  ];

  return (
    <section className="cp-slide" aria-label="Kenapa Memilih Kami">
      <div className="cp-inner">
        <Head label="Keunggulan" />
        <div className="cp-main">
          <Title sub="Alasan pelanggan kembali">Kenapa Memilih Kami</Title>

          <div className="cp-cards" style={{ flex: 1 }}>
            {cards.map((c) => (
              <div key={c.t} className="cp-card">
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </div>

          <div className="cp-quote">
            <p>
              Yang paling membanggakan bukan jumlah acara, tapi pelanggan yang
              memesan lagi untuk acara berikutnya.
            </p>
            <span>Tim Pandan Ayu</span>
          </div>
        </div>
        <Foot page="06" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   07 · STANDAR & ALUR PRODUKSI
═══════════════════════════════════════════════════════ */
function SlideStandards() {
  const steps = [
    { n: "05.00", t: "Belanja Pasar", d: "Dua orang tim berangkat ke pasar. Daging, sayur, dan bumbu dipilih satu per satu." },
    { n: "06.30", t: "Sortir & Cuci", d: "Bahan ditimbang sesuai takaran resep. Yang sudah tidak bagus, kami kembalikan." },
    { n: "08.00", t: "Masak per Menu", d: "Dapur masak per kelompok menu supaya tidak tercampur. Bumbu dihaluskan sendiri." },
    { n: "15.00", t: "Packing", d: "Makanan dikemas di kotak higienis dan diatur sesuai rute pengiriman." },
    { n: "H-0", t: "Kirim Lebih Awal", d: "Kami berangkat dengan waktu cadangan, supaya makanan sudah di lokasi sebelum tamu datang." },
  ];

  return (
    <section className="cp-slide" aria-label="Standar dan Alur Produksi">
      <div className="cp-inner">
        <Head label="Standar Dapur" />
        <div className="cp-main">
          <div className="cp-cols cp-cols--46" style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Title sub="Cara kami bekerja">Standar & Alur Produksi</Title>
              <p className="cp-p">
                Rasa yang enak tidak muncul tiba-tiba. Ada urutan kerja yang kami
                ikuti setiap hari, dari belanja sampai makanan naik ke meja tamu.
                Semua tahap punya penanggung jawab dan jamnya sendiri.
              </p>
              <p className="cp-p">
                Pesanan kecil dan pesanan besar dikerjakan dengan urutan yang sama.
                Bedanya cuma jumlah panci dan jumlah orang yang turun tangan.
              </p>
              <p className="cp-p">
                Dapurnya dipegang tim tetap yang sudah bertahun-tahun bekerja
                bersama. Jadi kalau pesanan datang mendadak, kami sudah tahu siapa
                mengerjakan bagian apa.
              </p>

              <div className="cp-quote cp-quote--sand" style={{ marginTop: "auto", paddingTop: "1em" }}>
                <p style={{ fontSize: "0.86em" }}>
                  Kapasitas dapur kami sampai 1.000 box sekali kirim. Pesanan reguler
                  dan pesanan dadakan masuk antrean terpisah, jadi dua-duanya tetap
                  jalan tanpa saling menunggu.
                </p>
                <span>Catatan dapur</span>
              </div>
            </div>

            <div className="cp-list cp-list--wide cp-list--spread">
              {steps.map((s) => (
                <div key={s.t} className="cp-item">
                  <span className="cp-item__n">{s.n}</span>
                  <div>
                    <p className="cp-item__t">{s.t}</p>
                    <p className="cp-item__d">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cp-cards" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="cp-card">
              <h4>Takaran Tetap</h4>
              <p>Bumbu ditimbang sesuai resep. Tidak ada masakan yang dikira-kira.</p>
            </div>
            <div className="cp-card">
              <h4>Suhu Dijaga</h4>
              <p>Makanan yang harus panas tetap panas saat tiba di lokasi acara.</p>
            </div>
            <div className="cp-card">
              <h4>Hitung Ulang</h4>
              <p>Sebelum berangkat, jumlah pesanan dicek ulang satu per satu.</p>
            </div>
          </div>
        </div>
        <Foot page="07" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   08 · CARA PESAN & KETENTUAN
═══════════════════════════════════════════════════════ */
function SlideHowToOrder() {
  const steps = [
    { n: "01", t: "Chat Admin", d: "Kirim pesan ke 0822-3217-2646. Sebutkan tanggal acara, lokasi, perkiraan jumlah tamu, dan budgetmu." },
    { n: "02", t: "Kami Susun Menu", d: "Admin buatkan pilihan menu lengkap dengan harganya. Kalau belum cocok, minta ganti saja. Konsultasi tidak dipungut biaya." },
    { n: "03", t: "Konfirmasi", d: "Setelah menu dan harga sepakat, kami minta DP. Baru setelah itu jadwal masakmu masuk antrean dapur." },
    { n: "04", t: "Hari H", d: "Pesanan sampai sebelum acara dimulai. Setelah diterima, kami kirim konfirmasi ke kamu." },
  ];

  return (
    <section className="cp-slide" aria-label="Cara Pesan dan Ketentuan">
      <div className="cp-inner">
        <Head label="Cara Pesan" />
        <div className="cp-main">
          <Title sub="Empat langkah">Cara Pesan & Ketentuan</Title>

          <div className="cp-steps">
            {steps.map((s) => (
              <div key={s.t} className="cp-step">
                <span className="cp-step__n">{s.n}</span>
                <strong>{s.t}</strong>
                <p>{s.d}</p>
              </div>
            ))}
          </div>

          <div className="cp-cols cp-cols--64" style={{ flex: 1 }}>
            <table className="cp-info">
              <tbody>
                <tr>
                  <th>Pesanan reguler</th>
                  <td>Minimal H-3 sebelum acara</td>
                </tr>
                <tr>
                  <th>Pesanan dadakan</th>
                  <td>Nasi kotak bisa H-1, maksimal 1.000 box</td>
                </tr>
                <tr>
                  <th>Ubah jumlah porsi</th>
                  <td>Diterima sampai H-1 sore</td>
                </tr>
                <tr>
                  <th>DP</th>
                  <td>
                    50% untuk pesanan di atas 100 porsi
                    <small>Sisanya bisa dibayar saat pengiriman.</small>
                  </td>
                </tr>
                <tr>
                  <th>Pembatalan</th>
                  <td>Kalau produksi sudah jalan, biaya bahan dibebankan</td>
                </tr>
              </tbody>
            </table>

            <div className="cp-quote" style={{ alignSelf: "start" }}>
              <p style={{ fontSize: "0.88em" }}>
                Belum yakin mau berapa porsi? Kirim perkiraan kasarnya dulu saja.
                Admin kami biasa bantu menghitung kebutuhan per tamu.
              </p>
              <span>Admin Pandan Ayu</span>
            </div>
          </div>
        </div>
        <Foot page="08" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   09 · KATA PELANGGAN
═══════════════════════════════════════════════════════ */
function SlideReviews() {
  const reviews = [
    { name: "Riska Amelia", event: "Pernikahan, Sidoarjo", text: "Enak banget! Nasi dan lauknya bikin tamu keluarga pada bilang enak semua. Pelayanan juga ramah dan tepat waktu." },
    { name: "Wahyu Tri Santoso", event: "Hajatan, Candi", text: "Pesan nasi box untuk acara keluarga, porsinya cukup dan rasanya mantap. Sambalnya juara. Adminnya fast respon dan makanan datang tepat waktu." },
    { name: "Dewi Kusumawati", event: "Arisan, Sepande", text: "Sudah langganan di sini. Menu lengkap dan rasanya tidak pernah mengecewakan. Sambal petisnya khas Jawa banget. Packaging selalu rapi." },
    { name: "Agus Firmansyah", event: "Makan siang kantor", text: "Sudah berlangganan untuk makan siang karyawan. Harganya terjangkau untuk kualitas yang diberikan, dan variasi menunya banyak." },
  ];

  return (
    <section className="cp-slide" aria-label="Kata Pelanggan">
      <div className="cp-inner">
        <Head label="Kata Pelanggan" />
        <div className="cp-main">
          <Title sub="Ulasan asli">Kata Pelanggan</Title>

          <div className="cp-reviews" style={{ flex: 1 }}>
            {reviews.map((r) => (
              <article key={r.name} className="cp-review">
                <div className="cp-review__stars" aria-label="5 dari 5 bintang">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{StarIcon}</span>
                  ))}
                </div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="cp-review__who">
                  <b>{r.name}</b>
                  <span>{r.event}</span>
                  <span className="cp-review__src">Google Maps</span>
                </div>
              </article>
            ))}
          </div>

          <p className="cp-note">
            <strong>Catatan:</strong> ulasan di atas kami salin apa adanya dari Google
            Maps. Tidak kami edit dan tidak kami minta. Kalau mau membaca lebih
            banyak, cari &ldquo;Pandan Ayu Catering&rdquo; di Google Maps.
          </p>
        </div>
        <Foot page="09" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   10 · HUBUNGI KAMI
═══════════════════════════════════════════════════════ */
function SlideContact() {
  return (
    <section className="cp-slide" aria-label="Hubungi Kami">
      <div className="cp-inner">
        <Head label="Kontak" />
        <div className="cp-main">
          <Title sub="Mari bicara">Hubungi Kami</Title>

          <div className="cp-cols cp-cols--64" style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="cp-p">
                Kalau masih bingung mau menu apa, ceritakan saja acaramu. Tanggalnya,
                lokasi, jumlah tamu, dan budget yang kamu siapkan. Kami bantu susun
                menunya sampai kamu merasa cocok.
              </p>

              <table className="cp-info" style={{ marginTop: "1em" }}>
                <tbody>
                  <tr>
                    <th>WhatsApp</th>
                    <td>
                      <a href={WA_MAIN} target="_blank" rel="noopener noreferrer">0822-3217-2646</a> (Admin 1)
                      <small>
                        <a href={WA_2} target="_blank" rel="noopener noreferrer">0882-0229-27586</a> (Admin 2)
                      </small>
                    </td>
                  </tr>
                  <tr>
                    <th>Jam Buka</th>
                    <td>Setiap hari, 08.00 sampai 16.00 WIB</td>
                  </tr>
                  <tr>
                    <th>Kantor</th>
                    <td>
                      King Safira A5-12A, Sidoarjo
                      <small>Dapur: Sepande RT 2 RW 1, Kec. Candi, Kab. Sidoarjo</small>
                    </td>
                  </tr>
                  <tr>
                    <th>Website</th>
                    <td>
                      <a href="https://www.pandanayucatering.biz.id" target="_blank" rel="noopener noreferrer">{SITE}</a>
                      <small>Katalog menu dan foto sajian</small>
                    </td>
                  </tr>
                  <tr>
                    <th>Media Sosial</th>
                    <td>
                      @pandanayucatering
                      <small>Instagram, TikTok, dan Facebook</small>
                    </td>
                  </tr>
                  <tr>
                    <th>Area Layanan</th>
                    <td>Sidoarjo dan sekitarnya</td>
                  </tr>
                </tbody>
              </table>

              <div className="cp-quote cp-quote--sand" style={{ marginTop: "auto" }}>
                <p style={{ fontSize: "0.84em" }}>
                  Acaramu di luar Sidoarjo? Tanya dulu saja. Untuk pesanan besar,
                  kami sering berangkat ke luar kota.
                </p>
                <span>Catatan admin</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <div className="cp-cta" style={{ flex: 1, justifyContent: "center" }}>
                <h3>
                  Mau acaramu berkesan <span>tanpa ribet?</span>
                </h3>
                <p>
                  Konsultasinya gratis dan responnya cepat. Pesanan dadakan juga
                  kami terima.
                </p>
                <a className="cp-wa" href={WA_MAIN} target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.009-.571-.012-.916 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.017 1.01-3.8-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Chat Admin
                </a>
                <div className="cp-cta__nums">
                  <span>
                    <b>Admin 1:</b> 0822-3217-2646
                  </span>
                  <span>
                    <b>Admin 2:</b> 0882-0229-27586
                  </span>
                </div>
              </div>

              <div className="cp-photo" style={{ position: "relative", height: "9em" }}>
                <Image src="/hero.jpg" alt="Sajian Pandan Ayu" fill style={{ objectFit: "cover" }} />
                <span className="cp-photo__cap">Terima kasih sudah membaca</span>
              </div>
            </div>
          </div>
        </div>
        <Foot page="10" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════ */
export default function CompanyProfilePage() {
  return (
    <div className="cp-root">
      <PrintButton />
      <div className="cp-deck">
        <SlideCover />
        <SlideContents />
        <SlideAbout />
        <SlideVision />
        <SlideServices />
        <SlideWhyUs />
        <SlideStandards />
        <SlideHowToOrder />
        <SlideReviews />
        <SlideContact />
      </div>
    </div>
  );
}
