import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { FaWallet, FaCalendarAlt, FaChartLine, FaCreditCard, FaHistory, FaCog } from 'react-icons/fa';
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
    { id: 1, date: '2023-06-01', description: 'Tuition Fee', amount: 1500 },
    { id: 2, date: '2023-05-15', description: 'Library Fee', amount: 50 },
    { id: 3, date: '2023-05-01', description: 'Lab Fee', amount: 100 },
    { id: 4, date: '2023-04-15', description: 'Exam Fee', amount: 200 },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Edupay Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Balance Overview</h2>
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
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-gray-400">{transaction.date}</p>
                      </div>
                      <p className="font-semibold">${transaction.amount.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <Link href="/transactions">
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    View All Transactions
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/payment">
                <QuickActionButton
                  icon={<FaCreditCard className="mr-2" />}
                  text="Make a Payment"
                />
              </Link>
              <Link href="/payment-history">
                <QuickActionButton
                  icon={<FaHistory className="mr-2" />}
                  text="View Payment History"
                />
              </Link>
              <Link href="/settings">
                <QuickActionButton
                  icon={<FaCog className="mr-2" />}
                  text="Account Settings"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, value }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center">
    <div className="mr-4 text-3xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

interface QuickActionButtonProps {
  icon: React.ReactNode;
  text: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, text }) => (
  <button className="flex items-center justify-center w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300">
    {icon}
    {text}
  </button>
);

export default DashboardPage;