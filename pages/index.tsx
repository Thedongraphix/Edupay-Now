import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/index.module.css';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
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
  Icon: React.ReactNode;
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
    ];

    const newCryptoIcons = Array(8).fill(0).map((_, i) => ({
      id: i,
      Icon: React.createElement(icons[i % icons.length].Icon),
      color: icons[i % icons.length].color,
      left: Math.random() * 90 + 5 + '%',
      top: Math.random() * 90 + 5 + '%',
      size: Math.random() * 20 + 20,
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
                className={styles.dot}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
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
        <div
          key={icon.id}
          className={`${styles.floatingIcon} absolute`}
          style={{
            left: icon.left,
            top: icon.top,
            fontSize: `${icon.size}px`,
            color: icon.color,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          {icon.Icon}
        </div>
      ))}

      {/* Content */}
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Edupay
          </h1>
          <h2 className="mt-3 text-3xl font-bold text-blue-400 sm:text-4xl md:text-5xl">
            Crypto School Payment System
          </h2>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            Securely manage your school payments with cryptocurrency
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/register" className="inline-block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;