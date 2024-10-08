import React from 'react';
import { FaDollarSign, FaCalendarAlt, FaIdCard, FaCreditCard, FaUser, FaDownload, FaArrowLeft } from 'react-icons/fa';

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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
        <h2 className="text-3xl font-bold">Payment Receipt</h2>
        <p className="text-blue-100">Thank you for your payment</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReceiptItem
              icon={<FaDollarSign className="text-blue-500" />}
              label="Amount Paid"
              value={receiptData?.amountPaid?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) ?? 'N/A'}
            />
            <ReceiptItem
              icon={<FaCalendarAlt className="text-blue-500" />}
              label="Date"
              value={receiptData?.date ?? 'N/A'}
            />
            <ReceiptItem
              icon={<FaIdCard className="text-blue-500" />}
              label="Transaction ID"
              value={receiptData?.transactionId ?? 'N/A'}
            />
            <ReceiptItem
              icon={<FaCreditCard className="text-blue-500" />}
              label="Payment Method"
              value={receiptData?.paymentMethod ?? 'N/A'}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReceiptItem
              icon={<FaUser className="text-blue-500" />}
              label="Student Name"
              value={receiptData?.studentName ?? 'N/A'}
            />
            <ReceiptItem
              icon={<FaIdCard className="text-blue-500" />}
              label="Student ID"
              value={receiptData?.studentId ?? 'N/A'}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <button className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300">
          <FaArrowLeft className="mr-2" />
          Back to Dashboard
        </button>
        <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300">
          <FaDownload className="mr-2" />
          Download Receipt
        </button>
      </div>
    </div>
  );
};

const ReceiptItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default Receipt;