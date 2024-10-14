import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaEnvelope, FaPhone, FaComments, FaBook } from 'react-icons/fa';

interface TabProps {
  icon: React.ReactElement;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab: React.FC<TabProps> = ({ icon, label, isActive, onClick }) => {
  const tabVariants = {
    active: { backgroundColor: '#3B82F6', color: '#ffffff' },
    inactive: { backgroundColor: '#1F2937', color: '#9CA3AF' }
  };

  return (
    <motion.button
      className="flex-1 py-4 px-6 focus:outline-none flex items-center justify-center"
      variants={tabVariants}
      animate={isActive ? 'active' : 'inactive'}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {React.cloneElement(icon, { className: "inline-block mr-2" })}
      {label}
    </motion.button>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => (
  <motion.div
    className="bg-gray-700 bg-opacity-50 p-4 rounded-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <h3 className="font-semibold text-blue-300">{question}</h3>
    <p className="mt-2 text-gray-300">{answer}</p>
  </motion.div>
);

export const ContactForm: React.FC = () => (
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
);

export const LiveChatButton: React.FC = () => (
  <motion.button
    className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaComments className="inline-block mr-2" />
    Start Chat
  </motion.button>
);

interface KnowledgeBaseItemProps {
  title: string;
  index: number;
}

export const KnowledgeBaseItem: React.FC<KnowledgeBaseItemProps> = ({ title, index }) => (
  <motion.li
    className="bg-gray-700 bg-opacity-50 p-3 rounded-lg hover:bg-gray-600 transition duration-300"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <a href="#" className="flex items-center text-blue-300 hover:text-blue-200">
      <FaBook className="mr-2" />
      {title}
    </a>
  </motion.li>
);