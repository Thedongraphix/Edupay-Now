import React from 'react'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-900 text-white">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export default Layout