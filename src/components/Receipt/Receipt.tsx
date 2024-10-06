import React from 'react';
import { FaDollarSign, FaCalendarAlt, FaIdCard, FaCreditCard, FaUser } from 'react-icons/fa';

interface ReceiptData {
  amountPaid: number;
  transactionId: string;
  date: string;
  paymentMethod: string;
  studentName: string;
  studentId: string;
}

const Receipt = ({ receiptData }: { receiptData: ReceiptData }) => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaDollarSign className="text-blue-500 mr-2" />
            <span className="text-gray-600">Amount Paid:</span>
            <span className="ml-2 font-semibold">
              ${typeof receiptData.amountPaid === 'number' ? receiptData.amountPaid.toFixed(2) : '0.00'}
            </span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-blue-500 mr-2" />
            <span className="text-gray-600">Date:</span>
            <span className="ml-2 font-semibold">{receiptData.date}</span>
          </div>
          <div className="flex items-center">
            <FaIdCard className="text-blue-500 mr-2" />
            <span className="text-gray-600">Transaction ID:</span>
            <span className="ml-2 font-semibold">{receiptData.transactionId}</span>
          </div>
          <div className="flex items-center">
            <FaCreditCard className="text-blue-500 mr-2" />
            <span className="text-gray-600">Payment Method:</span>
            <span className="ml-2 font-semibold">{receiptData.paymentMethod}</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaUser className="text-blue-500 mr-2" />
            <span className="text-gray-600">Student Name:</span>
            <span className="ml-2 font-semibold">{receiptData.studentName}</span>
          </div>
          <div className="flex items-center">
            <FaIdCard className="text-blue-500 mr-2" />
            <span className="text-gray-600">Student ID:</span>
            <span className="ml-2 font-semibold">{receiptData.studentId}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300 mr-4">
          Download Receipt
        </button>
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition duration-300">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Receipt;