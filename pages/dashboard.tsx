import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWallet, FaCalendarAlt, FaChartLine, FaCreditCard, FaHistory, FaCog, FaGraduationCap, FaBook, FaLaptop } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark that the component has mounted (client-side)
  }, []);

  const balanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Balance',
        data: [1000, 1500, 1300, 1700, 1600, 2000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const transactions = [
    { id: 1, date: '2023-06-01', description: 'Tuition Fee', amount: 1500, icon: <FaGraduationCap /> },
    { id: 2, date: '2023-05-15', description: 'Library Fee', amount: 50, icon: <FaBook /> },
    { id: 3, date: '2023-05-01', description: 'Lab Fee', amount: 100, icon: <FaLaptop /> },
    { id: 4, date: '2023-04-15', description: 'Exam Fee', amount: 200, icon: <FaGraduationCap /> },
  ];

  if (!isClient) {
    return null; // Don't render anything on the server, return null until mounted on the client
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Edupay Dashboard
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DashboardCard
            icon={<FaWallet className="text-blue-400" />}
            title="Current Balance"
            value="$2,000.00"
          />
          <DashboardCard
            icon={<FaCalendarAlt className="text-green-400" />}
            title="Next Payment Due"
            value="June 30, 2023"
          />
          <DashboardCard
            icon={<FaChartLine className="text-purple-400" />}
            title="Total Paid This Year"
            value="$5,750.00"
          />
          <DashboardCard
            icon={<FaCreditCard className="text-red-400" />}
            title="Outstanding Balance"
            value="$250.00"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Balance Overview</h2>
              <Line 
                data={balanceData} 
                options={{
                  responsive: true,
                  scales: {
                    x: {
                      grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                      },
                      ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    },
                    y: {
                      grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                      },
                      ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      labels: {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    },
                  },
                }}
              />
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <motion.div 
                    key={transaction.id} 
                    className="flex justify-between items-center border-b border-gray-700 pb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-2xl text-blue-400">{transaction.icon}</div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-gray-400">{transaction.date}</p>
                      </div>
                    </div>
                    <p className="font-semibold">${transaction.amount.toFixed(2)}</p>
                  </motion.div>
                ))}
              </div>
              <Link href="/transactions" passHref>
                <motion.a 
                  className="mt-4 block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Transactions
                </motion.a>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/payment" passHref>
              <motion.a>
                <QuickActionButton
                  icon={<FaCreditCard className="mr-2" />}
                  text="Make a Payment"
                />
              </motion.a>
            </Link>
            <Link href="/payment-history" passHref>
              <motion.a>
                <QuickActionButton
                  icon={<FaHistory className="mr-2" />}
                  text="View Payment History"
                />
              </motion.a>
            </Link>
            <Link href="/settings" passHref>
              <motion.a>
                <QuickActionButton
                  icon={<FaCog className="mr-2" />}
                  text="Account Settings"
                />
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, value }) => (
  <motion.div 
    className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 flex items-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="mr-4 text-3xl">{icon}</div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </motion.div>
);

interface QuickActionButtonProps {
  icon: React.ReactNode;
  text: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, text }) => (
  <motion.button
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-blue-700 transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    {text}
  </motion.button>
);

export default DashboardPage;
