'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: "Sign Up", description: "Create your Edupay account" },
  { title: "Link Wallet", description: "Connect your crypto wallet" },
  { title: "Choose Institution", description: "Select your school or university" },
  { title: "Make Payment", description: "Pay your fees in your preferred cryptocurrency" },
]

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">How Edupay Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg p-6 text-center mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">{index + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default HowItWorks