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
  title: 'Haizad Sudirman | Full Stack Developer',
  description: 'Full Stack Developer from Malaysia specializing in Laravel, Vue 3, MySQL, and scalable web applications. Building elegant solutions for complex problems.',
  keywords: ['Full Stack Developer', 'Laravel', 'Vue 3', 'MySQL', 'Malaysia', 'Web Development',],
  authors: [{ name: 'Mohammad Haizad' }],
  creator: 'Mohamad Haizad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mohammad Haizad | Full Stack Developer',
    description: 'Full Stack Developer from Malaysia specializing in Laravel, Vue 3, PostgreSQL, and scalable web applications.',
    siteName: 'Mohammad Haizad Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Haizad | Full Stack Developer',
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
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
