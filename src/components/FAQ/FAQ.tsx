'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs  = [
  { question: "What cryptocurrencies does Edupay support?", answer: "Edupay currently supports Bitcoin, Ethereum, Litecoin, and Ripple." },
  { question: "How long do transactions take to process?", answer: "Most transactions are processed within 15-30 minutes, depending on the cryptocurrency network." },
  { question: "Is Edupay available internationally?", answer: "Yes, Edupay can be used by educational institutions and students worldwide." },
  { question: "How secure is Edupay?", answer: "Edupay uses advanced blockchain technology and follows strict security protocols to ensure all transactions are secure." },
]

const FAQ: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                aria-expanded={activeAccordion === index}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown className={`transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-600 p-4 rounded-b-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ