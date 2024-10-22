'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
    <div className="container mx-auto px-4 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="text-blue-400">Edupay</span>
      </motion.h1>
      <motion.p
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Revolutionizing education payments with blockchain technology. Secure, fast, and convenient transactions for students and institutions.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/register" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
          Register Now
        </Link>
        <Link href="#how-it-works" className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300">
          Learn More
        </Link>
      </motion.div>
    </div>
  </section>
)

export default Hero