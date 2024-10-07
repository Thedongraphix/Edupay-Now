import React from 'react';
import type { ReactNode } from 'react'; // Add this line
import Layout from '@/components/Layout/Layout';
import { FaWallet, FaCalendarAlt, FaChartLine, FaCreditCard, FaHistory } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
// ... rest of your code ...
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
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Edupay</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            icon={<FaWallet className="text-blue-500" />}
            title="Current Balance"
            value="$2,000.00"
          />
          <DashboardCard
            icon={<FaCalendarAlt className="text-green-500" />}
            title="Next Payment Due"
            value="June 30, 2023"
          />
          <DashboardCard
            icon={<FaChartLine className="text-purple-500" />}
            title="Total Paid This Year"
            value="$5,750.00"
          />
          <DashboardCard
            icon={<FaCreditCard className="text-red-500" />}
            title="Outstanding Balance"
            value="$250.00"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Balance Overview</h2>
              <Line data={balanceData} />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium text-gray-800">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                    <p className="font-semibold text-gray-800">${transaction.amount.toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                View All Transactions
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickActionButton
              icon={<FaCreditCard className="mr-2" />}
              text="Make a Payment"
            />
            <QuickActionButton
              icon={<FaHistory className="mr-2" />}
              text="View Payment History"
            />
            <QuickActionButton
              icon={<FaWallet className="mr-2" />}
              text="Update Payment Method"
            />
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
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="mr-4 text-3xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

interface QuickActionButtonProps {
  icon: React.ReactNode;
  text: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, text }) => (
  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-md transition duration-300">
    {icon}
    {text}
  </button>
);

export default DashboardPage;