import { Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import AppProvider from '@/components/AppProvider'

const oswald = Oswald({ subsets: ['cyrillic'], weight: ["400"] })

export const metadata = {
  title: 'Ecommerce Technology',
  description: '',
  icons: {
    icon: ["favicon.ico?v=4"],
    apple: ["apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <AppProvider>
          <div className="bg-gray-800 -z-10 pb-5 w-full overflow-hidden">
            <Header />
          </div>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
