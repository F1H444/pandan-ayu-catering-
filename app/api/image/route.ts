import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  // Keamanan: Validasi ketat ID file Google Drive (Hanya alphanumeric, dash, dan underscore).
  // Ini untuk mencegah serangan manipulasi URL (SSRF/Injection).
  if (!id || !/^[a-zA-Z0-9_-]+$/.test(id)) {
    return new Response('Invalid file ID', { status: 400 });
  }

  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  if (!apiKey) {
    return new Response('API Key not configured', { status: 500 });
  }

  try {
    // Gunakan endpoint thumbnail Google Drive yang lebih stabil dan anti-captcha dibandingkan API resmi
    const url = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
    
    // Fetch di server-side (Node.js) akan otomatis mengikuti redirect ke CDN Google
    // lalu kita stream langsung hasilnya ke client agar aman dari masalah cookie/CORS di browser.
    // 'force-cache' membuat server Next.js menyimpan gambar ini di harddisk server secara permanen, sehingga loadingnya secepat kilat!
    const res = await fetch(url, { cache: 'force-cache' });

    if (!res.ok) {
      console.error('Failed to fetch image from Google Drive thumbnail endpoint:', await res.text());
      return new Response('Failed to fetch image', { status: res.status });
    }

    // Ambil headers dari respons Google Drive (terutama Content-Type seperti image/jpeg)
    const headers = new Headers();
    const contentType = res.headers.get('content-type');
    if (contentType) {
      headers.set('Content-Type', contentType);
    }
    
    // Setel cache yang sangat lama agar browser tidak perlu download ulang setiap saat
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    // Kembalikan stream gambar langsung ke browser
    return new Response(res.body, {
      status: res.status,
      headers
    });
  } catch (err) {
    console.error('Error proxying image:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
