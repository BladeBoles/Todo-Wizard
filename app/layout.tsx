import type { Metadata } from 'next'
import { medieval } from './ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Todo Wizard',
  description: 'Your todos will magically disappear.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${medieval.className} antialiased`}>{children}</body>
    </html>
  )
}
