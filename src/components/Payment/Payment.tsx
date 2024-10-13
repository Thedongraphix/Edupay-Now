import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaPaypal, FaBitcoin, FaEthereum, FaWallet } from 'react-icons/fa';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [walletConnected, setWalletConnected] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', { paymentMethod, amount, currency });
    // Handle payment logic here
  };

  const connectWallet = () => {
    // Implement wallet connection logic here
    setWalletConnected(true);
  };

  const paymentMethods = [
    { id: 'credit-card', name: 'Credit Card', icon: FaCreditCard, color: 'bg-red-500' },
    { id: 'paypal', name: 'PayPal', icon: FaPaypal, color: 'bg-blue-500' },
    { id: 'bitcoin', name: 'Bitcoin', icon: FaBitcoin, color: 'bg-yellow-500' },
    { id: 'ethereum', name: 'Ethereum', icon: FaEthereum, color: 'bg-purple-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl p-8 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Make a Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <div className="w-1/2">
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
          <div className="w-1/2">
            <label className="block text-sm font-medium text-white mb-1">
              Select Payment Method
            </label>
            <div className="flex space-x-2">
              {paymentMethods.map((method) => (
                <motion.button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 relative overflow-hidden rounded-lg transition-colors duration-300 ${
                    paymentMethod === method.id
                      ? 'ring-2 ring-white ring-opacity-60'
                      : ''
                  }`}
                >
                  <div className={`absolute inset-0 ${method.color} opacity-75`}></div>
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
      </form>
    </motion.div>
  );
};

export default Payment;