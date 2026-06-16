import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Haizad Sudirman | Full Stack Developer',
    template: '%s | Haizad Sudirman',
  },
  description: 'Full Stack Developer from Malaysia specializing in Laravel, Vue 3, MySQL, and scalable web applications. Building elegant solutions for complex problems.',
  keywords: ['Full Stack Developer', 'Laravel', 'Vue 3', 'MySQL', 'Malaysia', 'Web Development', 'Next.js', 'React', 'Tailwind CSS'],
  authors: [{ name: 'Haizad Sudirman' }],
  creator: 'Haizad Sudirman',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hyezedd.com',
    title: 'Haizad Sudirman | Full Stack Developer',
    description: 'Full Stack Developer from Malaysia specializing in Laravel, Vue 3, PostgreSQL, and scalable web applications.',
    siteName: 'Haizad Sudirman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haizad Sudirman | Full Stack Developer',
    description: 'Full Stack Developer from Malaysia specializing in Laravel, Vue 3, PostgreSQL, and scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Haizad Sudirman",
    "url": "https://hyezedd.com",
    "jobTitle": "Full Stack Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kuala Lumpur",
      "addressCountry": "Malaysia"
    },
    "email": "izathaizad@gmail.com",
    "sameAs": [
      "https://github.com/HyeZedd",
      "https://linkedin.com/in/mohammad-haizad-sudirman-111b4516b"
    ],
    "knowsAbout": ["Laravel", "Vue 3", "MySQL", "PostgreSQL", "Next.js", "React", "Web Development"]
  }

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
