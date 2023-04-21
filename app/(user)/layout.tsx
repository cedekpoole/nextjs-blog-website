import '../globals.css'
import Header from '@/components/Header'
import { Montserrat } from '@next/font/google'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const montserrat  = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700']
 })

export const metadata = {
  title: 'CEDEKPOOLE BLOG',
  description: 'A weekly blog about programming, web development, and more.',
  icons: {
    icon: {
      url: "/favicon.svg",
      type: "image/svg",
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.className} bg-slate-100`}>
      <body>
        <Header />
        <Banner />
        {children}
        <Footer />
        </body>
    </html>
  )
}
