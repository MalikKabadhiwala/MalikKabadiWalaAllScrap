import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import MobileStickyBar from '@/components/MobileStickyBar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Malik Kabadi Wala All Scrap | Doorstep Scrap Buyer in Noida Sector 58',
  description: 'Sell iron, copper, brass, aluminium, paper, cardboard, batteries, and old appliance scrap at highest market rates. 100% digital scale weighing and instant cash or UPI in Bishanpura, Noida Sector 58.',
  keywords: 'Malik Kabadi Wala, scrap buyer Noida, scrap dealer sector 58 noida, Bishanpura scrap dealer, scrap rates noida, online scrap pickup noida, sell iron copper scrap noida, paper scrap buyer noida',
  authors: [{ name: 'Malik Kabadi Wala All Scrap' }],
  metadataBase: new URL('https://malikkabadiwala.com'),
  openGraph: {
    title: 'Malik Kabadi Wala All Scrap | Free Doorstep Scrap Pickup in Noida',
    description: '100% Digital Weighing Scales & Instant Cash Payment. Bishanpura, Sector 58, Noida. Call 9599122595.',
    url: 'https://malikkabadiwala.com',
    siteName: 'Malik Kabadi Wala All Scrap',
    images: [
      {
        url: 'https://malikkabadiwala.com/images/malik-logo.png',
        width: 1024,
        height: 655,
        alt: 'Malik Kabadi Wala All Scrap Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/images/malik-logo.png',
    apple: '/images/malik-logo.png',
  },
};

export default function RootLayout({ children }) {
  // LocalBusiness Schema JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Malik Kabadi Wala All Scrap',
    image: 'https://malikkabadiwala.com/images/malik-logo.png',
    telephone: '+919599122595',
    email: 'am513077@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bishanpura, Sector 58',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201301',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6080',
      longitude: '77.3620',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '21:00',
    },
    priceRange: '₹₹',
    servesCuisine: 'Scrap Buying, Recycling & Doorstep Collection',
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#f0edcc] selection:text-[#023440]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BookingModal />
        <MobileStickyBar />
      </body>
    </html>
  );
}
