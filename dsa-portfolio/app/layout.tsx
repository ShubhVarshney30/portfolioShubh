import './globals.css'
import '../styles/skills-animations.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shubh Varshney - DSA Expert Portfolio',
  description: 'Showcasing expertise in Data Structures and Algorithms, with a focus on Java programming.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

