import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import StyledJsxRegistry from "./registry";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "block",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "block",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pandan-ayu-catering.vercel.app"),
  title: {
    default: "Pandan Ayu Catering – Catering Nasi Box & Prasmanan Sidoarjo",
    template: "%s | Pandan Ayu Catering",
  },
  description:
    "Pandan Ayu Catering menyediakan nasi box, nasi kotak, dan prasmanan dengan cita rasa autentik Jawa. Melayani acara pernikahan, hajatan, arisan, dan kantor di Sidoarjo dan sekitarnya. Pesan langsung via WhatsApp!",
  keywords: [
    "catering sidoarjo",
    "catering sidoarjo murah",
    "catering sidoarjo enak",
    "nasi box sidoarjo",
    "nasi kotak sidoarjo",
    "catering pernikahan sidoarjo",
    "prasmanan sidoarjo",
    "catering murah sidoarjo",
    "catering candi sidoarjo",
    "pandan ayu catering",
    "catering jawa timur",
    "catering hajatan sidoarjo",
    "pesan nasi kotak sidoarjo",
    "rekomendasi catering sidoarjo",
    "catering harian sidoarjo",
    "catering enak di sidoarjo",
    "tumpeng sidoarjo",
    "catering tumpeng sidoarjo",
    "aqiqah sidoarjo",
    "snack box sidoarjo",
    "catering khitanan sidoarjo"
  ],
  authors: [{ name: "Pandan Ayu Catering" }],
  creator: "Pandan Ayu Catering",
  publisher: "Pandan Ayu Catering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SITE_VERIFICATION_CODE", // Bisa diganti nanti
    yandex: "ADD_YOUR_YANDEX_VERIFICATION_CODE", // Bisa diganti nanti
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pandan-ayu-catering.vercel.app",
    siteName: "Pandan Ayu Catering",
    title: "Pandan Ayu Catering – Catering Nasi Box & Prasmanan Sidoarjo",
    description:
      "Catering autentik Jawa untuk acara pernikahan, hajatan, dan kantor di Sidoarjo. Harga bersahabat, rasa nikmat. Pesan via WhatsApp!",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pandan Ayu Catering - Nasi Box & Prasmanan Sidoarjo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandan Ayu Catering – Catering Nasi Box Sidoarjo",
    description:
      "Catering autentik Jawa untuk hajatan & acara di Sidoarjo. Pesan via WhatsApp!",
    images: ["/hero.jpg"],
  },
  alternates: {
    canonical: "https://pandan-ayu-catering.vercel.app",
  },
  category: "food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Pandan Ayu Catering",
    image: "https://pandan-ayu-catering.vercel.app/hero.jpg",
    description:
      "Catering nasi box, nasi kotak, dan prasmanan autentik Jawa di Sidoarjo. Harga bersahabat, rasa nikmat dan higienis.",
    url: "https://pandan-ayu-catering.vercel.app",
    telephone: "+6282232172646",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Sepande, Krajan, Sepande",
      addressLocality: "Kec. Candi",
      addressRegion: "Kabupaten Sidoarjo",
      postalCode: "61271",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.4478,
      longitude: 112.7376,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "17:00",
    },
    servesCuisine: ["Indonesian", "Javanese"],
    priceRange: "$$",
    hasMenu: "https://pandan-ayu-catering.vercel.app/menu",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6282232172646",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
  };

  return (
    <html
      lang="id"
      className={`${lora.variable} ${outfit.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
