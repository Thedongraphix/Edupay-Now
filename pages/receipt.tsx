import React from 'react';
import Receipt from '@/components/Receipt/Receipt';

interface ReceiptData {
  amountPaid: number;
  transactionId: string;
  date: string;
  paymentMethod: string;
  studentName: string;
  studentId: string;
}

const ReceiptPage = ({ receiptData }: { receiptData: ReceiptData }) => {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Edupay</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
            Dashboard
          </button>
        </div>
      </nav>
      <main className="container mx-auto mt-8 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Payment Successful</h2>
            <p className="text-green-600 mt-2">Your payment has been processed successfully.</p>
          </div>
          <Receipt receiptData={receiptData} />
        </div>
      </main>
    </div>
  );
};

export default ReceiptPage;