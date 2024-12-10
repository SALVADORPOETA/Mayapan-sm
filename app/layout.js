import { Cinzel, EB_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { AuthContextProvider } from './context/AuthContext'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const cinzel = Cinzel({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cinzel',
})

const ebGaramond = EB_Garamond({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-eb-garamond',
})

export const metadata = {
  title: 'Mayapan',
  description: 'Web Site about the Mayan culture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}
