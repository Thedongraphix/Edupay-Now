'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaEnvelope, FaPhone, FaComments, FaBook } from 'react-icons/fa';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('faq');

  const tabVariants = {
    active: { backgroundColor: '#3B82F6', color: '#ffffff' },
    inactive: { backgroundColor: '#1F2937', color: '#9CA3AF' }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Support Center
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          {['faq', 'contact', 'live-chat', 'knowledge-base'].map((tab) => (
            <motion.button
              key={tab}
              className="flex-1 py-4 px-6 focus:outline-none"
              variants={tabVariants}
              animate={activeTab === tab ? 'active' : 'inactive'}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === 'faq' && <FaQuestionCircle className="inline-block mr-2" />}
              {tab === 'contact' && <FaEnvelope className="inline-block mr-2" />}
              {tab === 'live-chat' && <FaComments className="inline-block mr-2" />}
              {tab === 'knowledge-base' && <FaBook className="inline-block mr-2" />}
              {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="p-6"
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'faq' && <FAQContent />}
          {activeTab === 'contact' && <ContactContent />}
          {activeTab === 'live-chat' && <LiveChatContent />}
          {activeTab === 'knowledge-base' && <KnowledgeBaseContent />}
        </motion.div>
      </div>
    </div>
  );
};

const FAQContent = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
    {[
      { q: "How do I make a payment?", a: "You can make a payment through your dashboard using various payment methods including credit card and cryptocurrencies." },
      { q: "What cryptocurrencies do you accept?", a: "We currently accept Bitcoin, Ethereum, and Litecoin for payments." },
      { q: "How long does it take for my payment to be processed?", a: "Crypto payments are usually processed within 1-2 hours. Traditional payment methods may take 1-3 business days." },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="bg-gray-700 bg-opacity-50 p-4 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <h3 className="font-semibold text-blue-300">{item.q}</h3>
        <p className="mt-2 text-gray-300">{item.a}</p>
      </motion.div>
    ))}
  </div>
);

const ContactContent = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
      </div>
      <motion.button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </form>
  </div>
);

const LiveChatContent = () => (
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
    <p className="mb-4">Our support team is ready to assist you.</p>
    <motion.button
      className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaComments className="inline-block mr-2" />
      Start Chat
    </motion.button>
  </div>
);

const KnowledgeBaseContent = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Knowledge Base</h2>
    <ul className="space-y-2">
      {[
        "Getting Started with Edupay",
        "Understanding Cryptocurrency Payments",
        "Troubleshooting Payment Issues",
        "Account Security Best Practices",
        "Edupay API Documentation"
      ].map((item, index) => (
        <motion.li
          key={index}
          className="bg-gray-700 bg-opacity-50 p-3 rounded-lg hover:bg-gray-600 transition duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <a href="#" className="flex items-center text-blue-300 hover:text-blue-200">
            <FaBook className="mr-2" />
            {item}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
);

export default SupportPage;