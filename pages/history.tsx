import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFileDownload, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const PaymentHistoryPage = () => {
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');

  const payments = [
    { id: 1, date: '2023-06-01', description: 'Tuition Fee', amount: 1500, status: 'Completed' },
    { id: 2, date: '2023-05-15', description: 'Library Fee', amount: 50, status: 'Completed' },
    { id: 3, date: '2023-05-01', description: 'Lab Fee', amount: 100, status: 'Pending' },
    { id: 4, date: '2023-04-15', description: 'Exam Fee', amount: 200, status: 'Completed' },
    { id: 5, date: '2023-04-01', description: 'Tuition Fee', amount: 1500, status: 'Completed' },
  ];

  const filteredPayments = payments
    .filter(payment => 
      payment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Payment History
      </motion.h1>

      <div className="max-w-6xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search payments..."
                className="pl-10 pr-4 py-2 bg-gray-700 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <motion.button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            >
              {sortOrder === 'asc' ? <FaSortAmountUp className="mr-2" /> : <FaSortAmountDown className="mr-2" />}
              Sort by Date
            </motion.button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700 bg-opacity-50">
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment, index) => (
                  <motion.tr
                    key={payment.id}
                    className="border-b border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-4 py-2">{payment.date}</td>
                    <td className="px-4 py-2">{payment.description}</td>
                    <td className="px-4 py-2">${payment.amount.toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        payment.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <motion.button
                        className="text-blue-400 hover:text-blue-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaFileDownload />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;