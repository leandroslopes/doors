import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Montly Doors',
  description: 'Montly Doors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
