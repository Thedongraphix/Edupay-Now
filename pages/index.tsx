import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import { SiLitecoin, SiRipple } from 'react-icons/si';

interface Circle {
  id: number;
  cx: string;
  cy: string;
  r: number;
  duration: number;
}

interface CryptoIcon {
  id: number;
  Icon: React.ElementType;
  color: string;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
}

const Home = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [cryptoIcons, setCryptoIcons] = useState<CryptoIcon[]>([]);

  useEffect(() => {
    const newCircles = Array(20).fill(0).map((_, i) => ({
      id: i,
      cx: Math.random() * 100 + '%',
      cy: Math.random() * 100 + '%',
      r: Math.random() * 10 + 5,
      duration: Math.random() * 10 + 10,
    }));
    setCircles(newCircles);

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
      left: Math.random() * 80 + 10 + '%', // Increased padding from center
      top: Math.random() * 80 + 10 + '%',  // Increased padding from center
      size: Math.random() * 30 + 30,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
    }));
    setCryptoIcons(newCryptoIcons);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 18 -8" result="goo" />
            </filter>
          </defs>
          <g filter="url(#goo)">
            {circles.map((circle) => (
              <circle
                key={circle.id}
                className="opacity-20"
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
                fill="#4299E1"
              >
                <animate
                  attributeName="cy"
                  from="110%"
                  to="-10%"
                  dur={`${circle.duration}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        </svg>
      </div>

      {/* Floating crypto icons */}
      {cryptoIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute opacity-50" // Reduced opacity to enhance readability
          style={{
            left: icon.left,
            top: icon.top,
            fontSize: `${icon.size}px`,
            color: icon.color,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <icon.Icon />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="max-w-4xl w-full space-y-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 sm:text-6xl md:text-7xl"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Edupay
          </motion.h1>
          <motion.h2
            className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-blue-400">Crypto</span> Meets <span className="text-green-400">Education</span>
          </motion.h2>
          <motion.p
            className="mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl md:mt-5 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Revolutionizing School Payments with Blockchain Technology
          </motion.p>
        </div>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/register" passHref>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Future of Education Finance
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-400 text-lg">
            {/*footer */}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
