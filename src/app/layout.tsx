import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StoreProvider } from '@/components/providers/StoreProvider'
import { ToasterProvider } from '@/components/providers/ToasterProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[var(--secondary-color)] text-[var(--text-color)]">

        <StoreProvider>
          <AuthProvider>      
            <ToasterProvider position="bottom-right">  

              <Header />
              <div className="container mx-auto py-6">
                {children}
              </div>   
              <Footer />

            </ToasterProvider>              
          </AuthProvider> 
        </StoreProvider>
      
                 
      </body>
    </html>
  )
}
