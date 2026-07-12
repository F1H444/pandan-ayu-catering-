import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuClient from './MenuClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daftar Menu & Harga Catering',
  description: 'Daftar lengkap harga dan menu Pandan Ayu Catering Sidoarjo. Nasi kotak mulai dari 24rb. Tersedia paket prasmanan, tumpeng, snack box, dan aqiqah.',
  keywords: [
    'harga catering sidoarjo',
    'menu nasi kotak sidoarjo',
    'harga prasmanan sidoarjo',
    'menu catering pernikahan',
    'harga nasi box sidoarjo',
    'katering murah sidoarjo'
  ],
  openGraph: {
    title: 'Daftar Menu & Harga | Pandan Ayu Catering',
    description: 'Cek daftar lengkap harga dan menu catering untuk acaramu di Sidoarjo. Nasi kotak mulai dari 24rb.',
    url: 'https://pandan-ayu-catering.vercel.app/menu',
  },
  alternates: {
    canonical: 'https://pandan-ayu-catering.vercel.app/menu',
  }
};


export const dynamic = 'force-dynamic';
export const revalidate = 0; // Matikan cache agar selalu realtime mengikuti Google Drive
const BASE_DESCRIPTIONS: Record<string, string> = {
  'nasi-kotak': 'HARGA start 24k. Customer bebas pilih menu sesuai budget. Isi menu bisa diatur. Melayani pemesanan dadakan ( H-1 ) 1.000 box sekali kirim.',
};

async function fetchGoogleDriveFolders(apiKey: string, mainFolderId: string) {
  try {
    const query = `'${mainFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`;
    const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&key=${apiKey}&fields=files(id,name,description)&orderBy=name`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      console.error("DRIVE API ERROR:", await res.text());
      return [];
    }
    const data = await res.json();
    return data.files || [];
  } catch (error) {
    console.error('Error fetching Google Drive folders:', error);
    return [];
  }
}

async function fetchImagesInFolder(apiKey: string, folderId: string) {
  try {
    const query = `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`;
    const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&key=${apiKey}&fields=files(id,name)&orderBy=name`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      console.error("DRIVE API IMAGES ERROR:", await res.text());
      return [];
    }
    const data = await res.json();
    
    return (data.files || []).map((file: any) => `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`);
  } catch (error) {
    console.error(`Error fetching images in folder ${folderId}:`, error);
    return [];
  }
}

export default async function MenuPage() {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  const mainFolderId = process.env.GOOGLE_DRIVE_MAIN_FOLDER_ID;

  let categories = [];

  if (apiKey && mainFolderId) {
    // 1. Ambil daftar subfolder dari Main Folder
    const folders = await fetchGoogleDriveFolders(apiKey, mainFolderId);
    console.log("GOOGLE DRIVE FETCH RESULT:", folders);
    
    // 2. Buat kategori secara dinamis dari folder-folder yang ada di Google Drive
    for (let folder of folders) {
      // Buat ID URL-friendly dari nama folder (misal: "Nasi Kotak" -> "nasi-kotak")
      const catId = folder.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      const imageUrls = await fetchImagesInFolder(apiKey, folder.id);
      
      categories.push({
        id: catId,
        title: folder.name,
        desc: folder.description || BASE_DESCRIPTIONS[catId] || '', // Mengambil teks dari field "Description" di Google Drive, atau gunakan teks bawaan jika kosong
        docImage: null,
        brochures: imageUrls
      });
    }
  } else {
    // Tampilan fallback jika env belum disetup
    categories = [
      {
        id: 'setup',
        title: 'Menunggu Konfigurasi Sistem',
        desc: 'Sistem sedang menunggu konfigurasi Google Drive dari admin.',
        docImage: null,
        brochures: []
      }
    ];
  }

  return (
    <>
      <Navbar />
      <MenuClient categories={categories} />
      <Footer />
    </>
  );
}
