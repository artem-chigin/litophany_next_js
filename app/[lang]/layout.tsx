import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lithophany',
  description: 'Lithophany site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
},
) 
{

  // const lang = params

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-slate-300'>
          <Header />

          {children}

          <Footer />

        </div>
        
      </body>
    </html>
  )
}
