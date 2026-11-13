import type { Metadata } from 'next'
import { Instrument_Sans, Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Arcade from '@/components/arcade/Arcade'
import { ArcadeProvider } from '@/context/ArcadeContext'

const serif = Newsreader({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'], axes: ['opsz'] })
const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' })

const description =
  'Declan Javers is a software engineer who works on AI agents. Previously at Zeta Global and Capitol AI. B.S. Computer Science, Northeastern University.'

// Schema.org data so search engines can show who this is without another page load.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Declan Javers',
  url: 'https://declanjavers.com',
  image: 'https://declanjavers.com/images/declan-640.webp',
  jobTitle: 'Software Engineer',
  description,
  email: 'mailto:declanjavers@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Boston', addressRegion: 'MA', addressCountry: 'US' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Northeastern University' },
  knowsAbout: ['AI agents', 'LLM evaluation', 'Model Context Protocol', 'TypeScript', 'Python'],
  sameAs: ['https://www.linkedin.com/in/declan-javers', 'https://github.com/DeclanJavers'],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://declanjavers.com'),
  title: 'Declan Javers',
  description,
  authors: [{ name: 'Declan Javers' }],
  openGraph: {
    title: 'Declan Javers',
    description,
    url: 'https://declanjavers.com',
    siteName: 'Declan Javers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'Declan Javers', description },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/favicon-48.png', sizes: '48x48', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main-content" className="sr-only z-50 bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to main content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <ArcadeProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <Arcade />
        </ArcadeProvider>
        <Analytics />
      </body>
    </html>
  )
}
