// components/Payment/Payment.tsx
import React, { useState } from 'react';
import { FaEthereum, FaBitcoin, FaCreditCard } from 'react-icons/fa';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment logic here
    console.log('Payment submitted:', { paymentMethod, amount });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Payment Amount (USD)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Payment Method
          </label>
          <div className="grid grid-cols-1 gap-4">
            {['Ethereum', 'Bitcoin', 'Credit Card'].map((method) => (
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
                {method}
              </button>
            ))}
          </div>
        </div>

        {paymentMethod && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
            {paymentMethod === 'Ethereum' && (
              <p className="text-sm text-gray-600">
                Send ETH to: 0x1234567890123456789012345678901234567890
              </p>
            )}
            {paymentMethod === 'Bitcoin' && (
              <p className="text-sm text-gray-600">
                Send BTC to: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
              </p>
            )}
            {paymentMethod === 'Credit Card' && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}
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