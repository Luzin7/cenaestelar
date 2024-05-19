import GetAuthState from '@components/Auth/GetAuthState'
import '@styles/globals.css'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from 'src/components/Footer/Footer'
import Header from 'src/components/Header'
import { cn } from 'src/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Cena Estelar',
  description: 'Reviews duvidosas. Tem vezes que não.',
}

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ToastContainer
          position="top-right"
          autoClose={2500}
          newestOnTop
          closeOnClick
          theme="dark"
        />
        <Header />
        <GetAuthState>{children}</GetAuthState>
        <Footer />
      </body>
    </html>
  )
}
