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
        <div style={{ width: '900px' }}>
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'w-[400px] h-[80px] text-lg mt-[100px]',
            }}
          />
        </div>
        {children}
      </body>
    </html>
  )
}
