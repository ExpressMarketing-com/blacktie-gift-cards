import Top from '@/components/Top'
import './globals.css'


import { Oswald } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer1 from '@/components/Footer'
import Head from 'next/head'
const ostwald = Oswald({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})


export default function RootLayout({ children }) {
  return (
    <html lang='en' >
      <Head>
      <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet" async />
      </Head>
      <body>
        <Top />

        <Navbar />
        {children}
        <Footer1 />
        
      </body>
    </html>
  )
}
