import './globals.css'
import { Outfit } from 'next/font/google'

const outift = Outfit({ subsets: ['latin'], weight: ['400','500', '600']})

export const metadata = {
  title: 'Movie AI',
  description: 'A page recommendation movie ai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outift.className}>{children}</body>
    </html>
  )
}
