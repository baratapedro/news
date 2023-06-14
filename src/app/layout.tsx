import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portal de Notícias',
  description: 'Seu portal de notícias para se manter sempre atualizado',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-[1100px] w-full mx-auto space-y-5 mt-[68px] flex flex-col min-h-[calc(100vh-68px)]">
          {children}
        </main>
      </body>
    </html>
  )
}
