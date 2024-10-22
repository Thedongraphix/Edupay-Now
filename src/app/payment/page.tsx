'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCreditCard, FaPaypal, FaBitcoin, FaEthereum, FaWallet, FaLock, FaHistory, FaQuestionCircle } from 'react-icons/fa';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [walletConnected, setWalletConnected] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', { paymentMethod, amount, currency });
    setShowReceipt(true);
  };

  const connectWallet = () => {
    setWalletConnected(true);
  };

  const paymentMethods = [
    { id: 'credit-card', name: 'Credit Card', icon: FaCreditCard, color: 'from-red-500 to-red-600' },
    { id: 'paypal', name: 'PayPal', icon: FaPaypal, color: 'from-blue-500 to-blue-600' },
    { id: 'bitcoin', name: 'Bitcoin', icon: FaBitcoin, color: 'from-yellow-500 to-yellow-600' },
    { id: 'ethereum', name: 'Ethereum', icon: FaEthereum, color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-4xl w-full relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <FaLock className="mr-2 text-green-400" />
          Secure Payment
        </h2>
        <AnimatePresence>
          {!showReceipt ? (
            <motion.form
              key="payment-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <label htmlFor="amount" className="block text-sm font-medium text-white mb-1">
                    Payment Amount
                  </label>
                  <div className="flex">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="rounded-l-md border-r-0 focus:ring-blue-300 focus:border-blue-300 block w-1/3 sm:text-sm border-gray-600 bg-gray-700 text-white"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="rounded-r-md focus:ring-blue-300 focus:border-blue-300 block w-2/3 sm:text-sm border-gray-600 bg-gray-700 text-white"
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium text-white mb-1">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {paymentMethods.map((method) => (
                      <motion.button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative overflow-hidden rounded-lg transition-colors duration-300 ${
                          paymentMethod === method.id
                            ? 'ring-2 ring-white ring-opacity-60'
                            : ''
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-75`}></div>
                        <div className="relative z-10 flex flex-col items-center justify-center p-4 space-y-2">
                          <method.icon className="text-2xl text-white" />
                          <span className="text-xs font-medium text-white">{method.name}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {(paymentMethod === 'bitcoin' || paymentMethod === 'ethereum') && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">Connect Your Wallet</h3>
                  {walletConnected ? (
                    <p className="text-green-300">Wallet connected successfully!</p>
                  ) : (
                    <motion.button
                      type="button"
                      onClick={connectWallet}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                    >
                      <FaWallet className="inline-block mr-2" />
                      Connect Wallet
                    </motion.button>
                  )}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Complete Payment
              </motion.button>

              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <a href="#" className="hover:text-white transition duration-300 flex items-center">
                  <FaHistory className="mr-1" /> Payment History
                </a>
                <a href="#" className="hover:text-white transition duration-300 flex items-center">
                  <FaQuestionCircle className="mr-1" /> Need Help?
                </a>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="receipt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Payment Successful!</h3>
              <p className="mb-2">Amount: {amount} {currency}</p>
              <p className="mb-2">Payment Method: {paymentMethod}</p>
              <p className="mb-4">Transaction ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <motion.button
                onClick={() => setShowReceipt(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
              >
                Make Another Payment
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Payment;