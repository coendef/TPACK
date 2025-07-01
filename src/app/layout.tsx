import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TPACK Model - Interactieve Leeromgeving',
  description: 'Een interactieve app om het TPACK-model te leren voor pabo studenten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-50 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}