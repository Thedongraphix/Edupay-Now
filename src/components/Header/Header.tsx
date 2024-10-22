'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { User, ChevronDown, Menu } from 'lucide-react'

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            Edupay
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
            <Link href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link>
            <Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-haspopup="true"
                aria-expanded={isProfileOpen}
              >
                <User size={16} />
                <span>Profile</span>
                <ChevronDown size={16} className={`transform transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1"
                  >
                    <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-blue-600 transition-colors">Dashboard</Link>
                    <Link href="/payment" className="block px-4 py-2 text-sm hover:bg-blue-600 transition-colors">Make Payment</Link>
                    <Link href="/support" className="block px-4 py-2 text-sm hover:bg-blue-600 transition-colors">Support</Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-blue-600 transition-colors">Settings</Link>
                    <Link href="/logout" className="block px-4 py-2 text-sm hover:bg-blue-600 transition-colors">Logout</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800"
          >
            <nav className="flex flex-col p-4 space-y-2">
              <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
              <Link href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
              <Link href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link>
              <Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
              <Link href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
              <Link href="/payment" className="hover:text-blue-400 transition-colors">Make Payment</Link>
              <Link href="/support" className="hover:text-blue-400 transition-colors">Support</Link>
              <Link href="/settings" className="hover:text-blue-400 transition-colors">Settings</Link>
              <Link href="/logout" className="hover:text-blue-400 transition-colors">Logout</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header