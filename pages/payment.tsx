// pages/payment.tsx
import Payment from '@/components/Payment/Payment';

const PaymentPage = () => {
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
        <h2 className="text-3xl font-bold mb-8">Make a Payment</h2>
        <Payment />
      </main>
    </div>
  );
};

export default PaymentPage;