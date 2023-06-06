import './globals.css'
// eslint-disable-next-line camelcase
import { Inconsolata, Montserrat, Space_Mono } from 'next/font/google'


const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inconsolata',
})


export const metadata = {
  title: 'devChallenges - 404 Not Found',
  description: 'Creating a 404 not found page following the design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${montserrat.variable} ${inconsolata.variable} bg-white font-sans text-gray-800`}>{children}</body>
    </html >
  )
}
