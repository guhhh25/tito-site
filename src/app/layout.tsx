import './globals.css'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
}
