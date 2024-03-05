import { Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({ subsets: ['cyrillic'], weight: ["400"] })

export const metadata = {
  title: 'Ecommerce Technology',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
