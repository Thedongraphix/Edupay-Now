import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaGraduationCap, FaChalkboardTeacher, FaRocket, FaLightbulb, FaUser, FaCaretDown, FaCheckCircle, FaQuestionCircle, FaStar } from 'react-icons/fa';
import { SiLitecoin, SiRipple } from 'react-icons/si';

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const features = [
    { icon: FaBitcoin, title: "Crypto Payments", description: "Pay tuition fees using popular cryptocurrencies" },
    { icon: FaGraduationCap, title: "Education Focus", description: "Tailored for educational institutions and students" },
    { icon: FaCheckCircle, title: "Secure Transactions", description: "State-of-the-art blockchain security for all payments" },
    { icon: FaRocket, title: "Fast Processing", description: "Quick and efficient payment processing" },
  ];

  const steps = [
    { title: "Sign Up", description: "Create your Edupay account" },
    { title: "Link Wallet", description: "Connect your crypto wallet" },
    { title: "Choose Institution", description: "Select your school or university" },
    { title: "Make Payment", description: "Pay your fees in your preferred cryptocurrency" },
  ];

  const testimonials = [
    { name: "John Doe", role: "Student", text: "Edupay made paying my tuition fees so much easier!" },
    { name: "Jane Smith", role: "University Admin", text: "We've seen a significant increase in on-time payments since implementing Edupay." },
    { name: "Mike Johnson", role: "Parent", text: "I love the transparency and security Edupay provides for my child's education payments." },
  ];

  const faqs = [
    { question: "What cryptocurrencies does Edupay support?", answer: "Edupay currently supports Bitcoin, Ethereum, Litecoin, and Ripple." },
    { question: "How long do transactions take to process?", answer: "Most transactions are processed within 15-30 minutes, depending on the cryptocurrency network." },
    { question: "Is Edupay available internationally?", answer: "Yes, Edupay can be used by educational institutions and students worldwide." },
    { question: "How secure is Edupay?", answer: "Edupay uses advanced blockchain technology and follows strict security protocols to ensure all transactions are secure." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Edupay
            </a>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" legacyBehavior><a className="hover:text-blue-400">Features</a></Link>
            <Link href="#how-it-works" legacyBehavior><a className="hover:text-blue-400">How It Works</a></Link>
            <Link href="#testimonials" legacyBehavior><a className="hover:text-blue-400">Testimonials</a></Link>
            <Link href="#faq" legacyBehavior><a className="hover:text-blue-400">FAQ</a></Link>
          </nav>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2 text-sm focus:outline-none"
            >
              <FaUser />
              <span className="hidden sm:inline">Profile</span>
              <FaCaretDown className={`transform transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1"
                >
                  <Link href="/dashboard" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-blue-600">Dashboard</a>
                  </Link>
                  <Link href="/payments" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-blue-600">Payments</a>
                  </Link>
                  <Link href="/settings" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-blue-600">Settings</a>
                  </Link>
                  <Link href="/logout" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-blue-600">Logout</a>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Edupay</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revolutionizing education payments with blockchain technology
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/register" passHref legacyBehavior>
              <motion.a
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </Link>
            <Link href="#how-it-works" passHref legacyBehavior>
              <motion.a
                className="bg-transparent border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Edupay?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="text-4xl text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Edupay Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg p-6 text-center mb-6 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-400 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FaUser className="text-white" />
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

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-gray-700 rounded-lg focus:outline-none"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <FaCaretDown className={`transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} />
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your education payments?</h2>
          <p className="text-xl mb-8">Join Edupay today and experience the future of tuition transactions.</p>
          <Link href="/register" passHref legacyBehavior>
            <motion.a
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up Now
            </motion.a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Edupay</h3>
              <p className="text-gray-400">Revolutionizing education payments with blockchain technology.</p>
            
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#features" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Features</a></Link></li>
                <li><Link href="#how-it-works" legacyBehavior><a className="text-gray-400 hover:text-blue-400">How It Works</a></Link></li>
                <li><Link href="#testimonials" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Testimonials</a></Link></li>
                <li><Link href="#faq" legacyBehavior><a className="text-gray-400 hover:text-blue-400">FAQ</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Terms of Service</a></Link></li>
                <li><Link href="/privacy" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Privacy Policy</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="#" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Twitter</a></Link></li>
                <li><Link href="#" legacyBehavior><a className="text-gray-400 hover:text-blue-400">LinkedIn</a></Link></li>
                <li><Link href="#" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Facebook</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2023 Edupay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;