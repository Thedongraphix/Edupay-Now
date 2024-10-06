import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Edupay
          </h1>
          <h2 className="mt-3 text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">
            Crypto School Payment System
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            Securely manage your school payments with cryptocurrency
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/register" className="inline-block">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;