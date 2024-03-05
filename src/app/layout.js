import { Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'

const oswald = Oswald({ subsets: ['cyrillic'], weight: ["400"] })

export const metadata = {
  title: 'Ecommerce Technology',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <div className="bg-gray-800 -z-10 pb-5 w-screen">
          <Header />
        </div>
        {children}
      </body>
    </html>
  )
}
