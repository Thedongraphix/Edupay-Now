import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaGraduationCap, FaChalkboardTeacher, FaRocket, FaLightbulb, FaUser, FaCaretDown } from 'react-icons/fa';
import { SiLitecoin, SiRipple } from 'react-icons/si';

interface CryptoIcon {
  id: number;
  Icon: React.ElementType;
  color: string;
  initialPosition: { x: number; y: number };
}

const Home = () => {
  const [cryptoIcons, setCryptoIcons] = useState<CryptoIcon[]>([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const icons = [
      { Icon: FaBitcoin, color: '#f7931a' },
      { Icon: FaEthereum, color: '#627eea' },
      { Icon: SiLitecoin, color: '#bfbbbb' },
      { Icon: SiRipple, color: '#0085c0' },
      { Icon: FaGraduationCap, color: '#4CAF50' },
      { Icon: FaChalkboardTeacher, color: '#FF9800' },
    ];

    const newCryptoIcons = Array(10).fill(0).map((_, i) => ({
      id: i,
      Icon: icons[i % icons.length].Icon,
      color: icons[i % icons.length].color,
      initialPosition: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
    }));
    setCryptoIcons(newCryptoIcons);

    controls.start(i => ({
      x: [0, window.innerWidth],
      y: [0, window.innerHeight],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20 + i * 2,
          ease: "linear",
        },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 15 + i * 2,
          ease: "linear",
        },
      },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Profile Section */}
      <div className="absolute top-4 right-4 z-20">
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full px-4 py-2 text-white focus:outline-none"
          >
            <FaUser />
            <span className="hidden sm:inline">Profile</span>
            <FaCaretDown className={`transform transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md shadow-lg py-1">
              <Link href="/dashboard" legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-600">Dashboard</a>
              </Link>
              <Link href="/payments" legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-600">Payments</a>
              </Link>
              <Link href="/settings" legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-600">Settings</a>
              </Link>
              <Link href="/logout" legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-600">Logout</a>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMjAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzM4YmRmODIwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0D4KPC9zdmc+')] opacity-20"></div>
      </div>

      {/* Floating crypto icons */}
      {cryptoIcons.map((icon, index) => (
        <motion.div
          key={icon.id}
          className="absolute text-lg sm:text-xl"
          style={{
            color: icon.color,
          }}
          initial={icon.initialPosition}
          custom={index}
          animate={controls}
        >
          <icon.Icon />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="max-w-4xl w-full space-y-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Edupay
          </motion.h1>
          <motion.h2
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-blue-400">Crypto</span> Meets <span className="text-green-400">Education</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Revolutionizing School Payments with Blockchain Technology
          </motion.p>
        </div>
        <motion.div
          className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/register" passHref>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="mr-2" />
              Join Now
            </motion.button>
          </Link>
          <Link href="/learn-more" passHref>
            <motion.button
              className="bg-transparent border-2 border-blue-400 text-blue-400 font-bold py-2 px-4 rounded-full text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLightbulb className="mr-2" />
              Learn More
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Secure • Transparent • Efficient
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;