'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const testimonials = [
  { name: "John Doe", role: "Student", text: "Edupay made paying my tuition fees so much easier!" },
  { name: "Jane Smith", role: "University Admin", text: "We&apos;ve seen a significant increase in on-time payments since implementing Edupay." },
  { name: "Mike Johnson", role: "Parent", text: "I love the transparency and security Edupay provides for my child&apos;s education payments." },
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4">&quot;{testimonial.text}&quot;</p>
            <div className="flex items-center">
              <div className="bg-blue-400 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <User className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
