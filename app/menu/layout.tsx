import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu Catering – Nasi Box & Sambal Sidoarjo',
  description:
    'Daftar menu lengkap Pandan Ayu Catering: Nasi Putih, Nasi Uduk, Nasi Kuning, Nasi Liwet, Sambal Terasi, Sambal Geprek, Sambal Matah, dan masih banyak lagi. Pesan via WhatsApp!',
  keywords: [
    'menu nasi box sidoarjo',
    'menu catering sidoarjo',
    'nasi uduk catering',
    'nasi kuning catering',
    'sambal geprek catering',
    'catering nasi kotak sidoarjo',
    'harga nasi box sidoarjo',
  ],
  openGraph: {
    title: 'Menu Pandan Ayu Catering – Nasi Box & Sambal Sidoarjo',
    description:
      '20+ menu nasi box autentik Jawa. Nasi Putih, Nasi Liwet, Sambal Terasi, Sambal Geprek, dan banyak lagi. Pesan via WhatsApp!',
    url: 'https://pandanayucatering.vercel.app/menu',
  },
  alternates: {
    canonical: 'https://pandanayucatering.vercel.app/menu',
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
