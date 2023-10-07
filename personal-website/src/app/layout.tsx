import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import {ContextProvider as LoadingScreenContextProvider} from '@/context/loading_screen';

export const metadata: Metadata = {
  title: 'Zeki Can EKŞİ',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreenContextProvider>
            {children}
        </LoadingScreenContextProvider>
      </body>
    </html>
  )
}
