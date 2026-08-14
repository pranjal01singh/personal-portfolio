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
  themeColor: '#090a0c',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
