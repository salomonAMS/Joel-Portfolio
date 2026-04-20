import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joël Cameroun | Vidéaste Professionnel',
  description: 'Portfolio professionnel de Joël Cameroun. Spécialiste en production vidéo, montage cinématique et contenu digital créatif pour marques et influenceurs.',
  keywords: 'vidéaste, production vidéo, montage, cinéma, création contenu, portfolio, Cameroun',
  authors: [{ name: 'Joël Cameroun' }],
  creator: 'Joël Cameroun',
  publisher: 'Joël Cameroun',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CM',
    url: 'https://joel-cameroun.com',
    siteName: 'Joël Cameroun - Vidéaste',
    title: 'Joël Cameroun | Vidéaste Professionnel',
    description: 'Portfolio professionnel showcasing cinematic video production and creative content creation.',
    images: [
      {
        url: 'https://joel-cameroun.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joël Cameroun Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joël Cameroun | Vidéaste Professionnel',
    description: 'Portfolio professionnel de production vidéo et création contenu digital.',
    images: ['https://joel-cameroun.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://joel-cameroun.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
