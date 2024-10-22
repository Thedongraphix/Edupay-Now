import React from 'react'
import Link from 'next/link'

const CTA: React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your education payments?</h2>
      <p className="text-xl mb-8">Join Edupay today and experience the future of tuition transactions.</p>
      <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300">
        Sign Up Now
      </Link>
    </div>
  </section>
)

export default CTA