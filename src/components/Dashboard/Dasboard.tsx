import React, { useEffect, useState } from 'react';
import { FaWallet, FaCalendarAlt, FaHistory, FaCreditCard } from 'react-icons/fa';

const Dashboard = () => {
  const [fees, setFees] = useState({ amountDue: 0, dueDate: '' });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch fee structure from backend
    setFees({ amountDue: 1000, dueDate: '2024-12-31' });
    // Fetch recent transactions
    setTransactions([
      { id: 1, date: '2023-05-01', amount: 500, description: 'Tuition Fee' },
      { id: 2, date: '2023-04-15', amount: 100, description: 'Library Fee' },
      { id: 3, date: '2023-03-30', amount: 200, description: 'Lab Fee' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Edupay</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
            Logout
          </button>
        </div>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold mb-8">Welcome, Student!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaWallet className="text-blue-600 text-2xl mr-2" />
              <h3 className="text-xl font-semibold">Outstanding Balance</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">${fees.amountDue.toFixed(2)}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-blue-600 text-2xl mr-2" />
              <h3 className="text-xl font-semibold">Due Date</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">{fees.dueDate}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaHistory className="text-blue-600 text-2xl mr-2" />
              <h3 className="text-xl font-semibold">Last Payment</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">
              ${transactions[0]?.amount.toFixed(2) || '0.00'}
            </p>
            <p className="text-sm text-gray-600">{transactions[0]?.date || 'N/A'}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaCreditCard className="text-blue-600 text-2xl mr-2" />
              <h3 className="text-xl font-semibold">Make a Payment</h3>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
              Pay Now
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Date</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="p-3">{transaction.date}</td>
                    <td className="p-3">{transaction.description}</td>
                    <td className="p-3">${transaction.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;