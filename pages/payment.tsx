import React from 'react';
import Link from 'next/link';
import Payment from '@/components/Payment/Payment';
import { FaWallet, FaChartLine } from 'react-icons/fa';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer">Edupay</span>
          </Link>
          <Link href="/dashboard">
            <span className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-300 cursor-pointer">
              Dashboard
            </span>
          </Link>
        </div>
      </nav>
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Make a Payment</h2>
          <p className="text-gray-600">Complete your payment securely using your preferred method.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Payment />
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuition Fee</span>
                  <span className="font-semibold">$1,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Library Fee</span>
                  <span className="font-semibold">$50.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Technology Fee</span>
                  <span className="font-semibold">$100.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$1,150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">If you have any questions or issues with your payment, please don't hesitate to contact our support team.</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;