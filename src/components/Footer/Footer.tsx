import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => (
  <footer className="bg-gray-900 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Edupay</h3>
          <p className="text-gray-400">Revolutionizing education payments with blockchain technology.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</Link></li>
            <li><Link href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">How It Works</Link></li>
            <li><Link href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">Testimonials</Link></li>
            <li><Link href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">&copy; 2023 Edupay. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer