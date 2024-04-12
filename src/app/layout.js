import { Newsreader } from 'next/font/google'
import './globals.css'
import AppProvider from '@/context/AppProvider'

const newsreader = Newsreader({ subsets: ['latin'], weight: ["500"] })

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
      <body className={newsreader.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </ html>
  )
}
