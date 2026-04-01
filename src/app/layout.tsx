import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://the-annex-restaurant-redesign.vercel.app"),
  title: {
    default: "The ANNEX Restaurant & Lounge | Lake in the Hills, IL",
    template: "%s | The ANNEX Restaurant & Lounge",
  },
  description:
    "Upscale casual dining featuring American, Greek & Mediterranean cuisine in Lake in the Hills, IL. Made from scratch, crafted with care. OpenTable 4.8★ rated.",
  keywords: [
    "restaurant",
    "Lake in the Hills",
    "Greek food",
    "Mediterranean cuisine",
    "fine dining",
    "cocktails",
    "The ANNEX",
    "American restaurant",
    "Illinois restaurant",
  ],
  openGraph: {
    title: "The ANNEX Restaurant & Lounge",
    description:
      "American, Greek & Mediterranean cuisine — upscale casual dining in Lake in the Hills, IL. 4.8★ on OpenTable.",
    url: "https://the-annex-restaurant-redesign.vercel.app",
    siteName: "The ANNEX Restaurant & Lounge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The ANNEX Restaurant & Lounge — 4.8★ Rated",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The ANNEX Restaurant & Lounge",
    description:
      "Upscale casual dining — American, Greek & Mediterranean cuisine in Lake in the Hills, IL.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The ANNEX Restaurant & Lounge",
  image: "https://the-annex-restaurant-redesign.vercel.app/og-image.png",
  url: "https://the-annex-restaurant-redesign.vercel.app",
  telephone: "+1-224-333-0035",
  email: "info@annexrestaurant.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2104 W Algonquin Rd",
    addressLocality: "Lake in the Hills",
    addressRegion: "IL",
    postalCode: "60156",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.1858,
    longitude: -88.3578,
  },
  servesCuisine: ["American", "Greek", "Mediterranean"],
  priceRange: "$31–$50",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "10:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "00:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "129",
    bestRating: "5",
  },
  acceptsReservations: "True",
  hasMenu: "https://the-annex-restaurant-redesign.vercel.app/menu",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Full Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Dining", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy-950 text-cream-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
