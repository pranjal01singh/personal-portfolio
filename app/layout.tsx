import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pranjal Singh — Full Stack & Gen AI Developer',
  description: 'Portfolio of Pranjal Singh, a Full Stack Developer and Gen AI enthusiast building thoughtful digital products.',
  keywords: ['Pranjal Singh', 'Full Stack Developer', 'Generative AI', 'Web Development', 'Portfolio'],
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/pranjal.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pranjal.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/pranjal.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/pranjal.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0000',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
