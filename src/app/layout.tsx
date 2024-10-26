'use client'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider 
          clientId="YOUR_CLIENT_ID_HERE"
          activeChain="ethereum"
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  )
}