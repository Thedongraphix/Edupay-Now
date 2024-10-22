'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bitcoin, GraduationCap, ShieldCheck, Zap } from 'lucide-react'

const features = [
  { icon: Bitcoin, title: "Crypto Payments", description: "Pay tuition fees using popular cryptocurrencies" },
  { icon: GraduationCap, title: "Education Focus", description: "Tailored for educational institutions and students" },
  { icon: ShieldCheck, title: "Secure Transactions", description: "State-of-the-art blockchain security for all payments" },
  { icon: Zap, title: "Fast Processing", description: "Quick and efficient payment processing" },
]

const Features: React.FC = () => (
  <section id="features" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Edupay?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <feature.icon className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Features