import React, { useState } from 'react';
import { FaEthereum, FaBitcoin, FaCreditCard, FaWallet } from 'react-icons/fa';

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

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Payment Amount
          </label>
          <div className="flex">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="rounded-l-md border-r-0 focus:ring-blue-500 focus:border-blue-500 block w-1/4 sm:text-sm border-gray-300"
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
              className="rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-3/4 sm:text-sm border-gray-300"
              placeholder="Enter amount"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Payment Method
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Credit Card', 'PayPal', 'Ethereum', 'Bitcoin'].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setPaymentMethod(method)}
                className={`flex items-center justify-center p-4 border rounded-md ${
                  paymentMethod === method
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {method === 'Ethereum' && <FaEthereum className="mr-2" />}
                {method === 'Bitcoin' && <FaBitcoin className="mr-2" />}
                {method === 'Credit Card' && <FaCreditCard className="mr-2" />}
                {method === 'PayPal' && <FaWallet className="mr-2" />}
                {method}
              </button>
            ))}
          </div>
        </div>

        {(paymentMethod === 'Ethereum' || paymentMethod === 'Bitcoin') && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Connect Your Wallet</h3>
            {walletConnected ? (
              <p className="text-green-600">Wallet connected successfully!</p>
            ) : (
              <button
                type="button"
                onClick={connectWallet}
                className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Connect Wallet
              </button>
            )}
          </div>
        )}

        {paymentMethod === 'Credit Card' && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;