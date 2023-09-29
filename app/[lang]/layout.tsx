import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { Locale } from "../../i18n-config"

import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lithophany',
  description: 'Lithophany site',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}


export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode
  params: { lang: Locale }
},
) 
{

  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className={inter.className}>

        <div className='bg-slate-300'>

        <Header lang={params.lang} menu={dictionary.Navbar}/>

          {children}

          <Footer />

        </div>
        
      </body>
    </html>
  )
}
