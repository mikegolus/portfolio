import type { Metadata } from 'next'
import { Header } from '@/components/header/header'
import { Footer } from '@/components/footer/footer'
import { App } from '@/components/app/app'
import { Cursor } from '@/components/cursor/cursor'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mike Golus',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Golus',
  },
  description:
    'I like to work with passionate people to build great products. Over the years, I have built products with JavaScript, TypeScript, HTML/CSS, React, Next.js, .NET, Elixir, and Phoenix.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          <Header />
          <main>{children}</main>
          <Footer />
        </App>
        <Cursor />
        <Analytics />
      </body>
    </html>
  )
}
