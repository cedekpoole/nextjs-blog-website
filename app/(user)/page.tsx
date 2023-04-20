import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl'>Welcome to the blog</h1>
      <p>bing bong</p>
    </div>
  )
}
