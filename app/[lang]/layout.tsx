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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'hy' }]
}


export default function RootLayout({
  children, params
}: {
  children: React.ReactNode
  params: { lang: string }
},
) 
{

  const locale = params.lang

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className='bg-slate-300'>
          <Header lang={locale}/>

          {children}

          <Footer />

        </div>
        
      </body>
    </html>
  )
}
