import React from 'react';
import Link from 'next/link';
import Payment from '@/components/Payment/Payment';
import { FaWallet, FaChartLine, FaQuestionCircle, FaHistory } from 'react-icons/fa';
import { SiBitcoin, SiEthereum, SiLitecoin } from 'react-icons/si';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 font-poppins text-white">
      <nav className="bg-gray-800 bg-opacity-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer flex items-center">
              <SiBitcoin className="mr-2 text-yellow-500" />
              Edupay
            </span>
          </Link>
          <div className="space-x-4">
            <Link href="/dashboard">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
                Dashboard
              </span>
            </Link>
            <Link href="/payment-history">
              <span className="bg-gray-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition duration-300 cursor-pointer">
                Payment History
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Make a Payment</h2>
          <p className="text-gray-300">Complete your payment securely using your preferred cryptocurrency.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Payment />
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Tuition Fee</span>
                  <span className="font-semibold">$1,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Library Fee</span>
                  <span className="font-semibold">$50.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Technology Fee</span>
                  <span className="font-semibold">$100.00</span>
                </div>
                <div className="border-t border-gray-600 pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$1,150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Accepted Cryptocurrencies</h3>
              <div className="flex justify-around text-4xl">
                <SiBitcoin className="text-yellow-500" />
                <SiEthereum className="text-blue-400" />
                <SiLitecoin className="text-gray-400" />
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">If you have any questions or issues with your payment, please don't hesitate to contact our support team.</p>
              <Link href="/support">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  <FaQuestionCircle className="mr-2" />
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;