'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaBell, FaWallet, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabVariants = {
    active: { backgroundColor: '#3B82F6', color: '#ffffff' },
    inactive: { backgroundColor: '#1F2937', color: '#9CA3AF' }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Account Settings
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          {['profile', 'security', 'notifications', 'payment'].map((tab) => (
            <motion.button
              key={tab}
              className="flex-1 py-4 px-6 focus:outline-none"
              variants={tabVariants}
              animate={activeTab === tab ? 'active' : 'inactive'}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === 'profile' && <FaUser className="inline-block mr-2" />}
              {tab === 'security' && <FaLock className="inline-block mr-2" />}
              {tab === 'notifications' && <FaBell className="inline-block mr-2" />}
              {tab === 'payment' && <FaWallet className="inline-block mr-2" />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="p-6"
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'profile' && <ProfileSettings />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'notifications' && <NotificationSettings />}
          {activeTab === 'payment' && <PaymentSettings />}
        </motion.div>
      </div>
    </div>
  );
};

const ProfileSettings = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
      <input type="text" id="name" name="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
      <input type="email" id="email" name="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div>
      <label htmlFor="bio" className="block text-sm font-medium text-gray-300">Bio</label>
      <textarea id="bio" name="bio" rows={3} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
    </div>
    <motion.button
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Save Changes
    </motion.button>
  </div>
);

const SecuritySettings = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>
    <div>
      <label htmlFor="current-password" className="block text-sm font-medium text-gray-300">Current Password</label>
      <input type="password" id="current-password" name="current-password" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div>
      <label htmlFor="new-password" className="block text-sm font-medium text-gray-300">New Password</label>
      <input type="password" id="new-password" name="new-password" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div>
      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">Confirm New Password</label>
      <input type="password" id="confirm-password" name="confirm-password" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <motion.button
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Update Password
    
    </motion.button>
  </div>
);

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
      <div className="flex items-center justify-between">
        <span>Email Notifications</span>
        <motion.button
          className="text-2xl"
          onClick={() => setEmailNotifications(!emailNotifications)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {emailNotifications ? <FaToggleOn className="text-blue-500" /> : <FaToggleOff className="text-gray-500" />}
        </motion.button>
      </div>
      <div className="flex items-center justify-between">
        <span>Push Notifications</span>
        <motion.button
          className="text-2xl"
          onClick={() => setPushNotifications(!pushNotifications)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {pushNotifications ? <FaToggleOn className="text-blue-500" /> : <FaToggleOff className="text-gray-500" />}
        </motion.button>
      </div>
    </div>
  );
};

const PaymentSettings = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold mb-4">Payment Settings</h2>
    <div>
      <label htmlFor="default-currency" className="block text-sm font-medium text-gray-300">Default Currency</label>
      <select id="default-currency" name="default-currency" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>BTC</option>
        <option>ETH</option>
      </select>
    </div>
    <div>
      <label htmlFor="wallet-address" className="block text-sm font-medium text-gray-300">Wallet Address</label>
      <input type="text" id="wallet-address" name="wallet-address" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <motion.button
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Save Payment Settings
    </motion.button>
  </div>
);

export default SettingsPage;