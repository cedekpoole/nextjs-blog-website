import '../globals.css'
import { Montserrat } from '@next/font/google'

const montserrat  = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700']
 })

export const metadata = {
  title: 'CEDEKPOOLE BLOG',
  description: 'A weekly blog about programming, web development, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
