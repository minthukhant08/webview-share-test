import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='pt-10 flex flex-row' >
          <div className='p-1'>
          <Link href={'/react-share'}>react share</Link>
          </div>
          <div className='p-1'>
          <Link href={'/react-web-share'}>react web share</Link>
          </div>
          <div className='p-1'>
          <Link href={'/share-on-social'}>share-on-social</Link>
          </div>
        </div>
        <div className='flex w-full justify-center items-center h-screen' >{children}</div>
      </body>
    </html>
  )
}
