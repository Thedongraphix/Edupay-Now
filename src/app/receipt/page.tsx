'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDollarSign, FaCalendarAlt, FaIdCard, FaCreditCard, FaUser, FaDownload, FaArrowLeft, FaHome, FaWallet, FaHistory, FaQuestionCircle } from 'react-icons/fa'
import Link from 'next/link'

interface ReceiptData {
  amountPaid: number
  transactionId: string
  date: string
  paymentMethod: string
  studentName: string
  studentId: string
}

export default function ReceiptPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null)

  useEffect(() => {
    setIsMounted(true)
    // Simulate fetching receipt data
    const fetchReceiptData = async () => {
      // In a real application, you would fetch this data from an API
      const data: ReceiptData = {
        amountPaid: 2400,
        transactionId: 'TXN-12345-ABCDE',
        date: '3rd Oct. 2024',
        paymentMethod: 'Coinbase',
        studentName: 'Chris Lee',
        studentId: 'STU-1234'
      }
      setReceiptData(data)
    }
    fetchReceiptData()
  }, [])

  if (!isMounted || !receiptData) {
    return null // Prevent rendering on the server or while loading
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <Receipt receiptData={receiptData} />
      </motion.div>
    </div>
  )
}

const NavBar = () => (
  <nav className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg mb-8 p-4">
    <ul className="flex justify-between items-center">
      <NavButton href="/" icon={<FaHome />} label="Home" />
      <NavButton href="/dashboard" icon={<FaWallet />} label="Dashboard" />
      <NavButton href="/payment-history" icon={<FaHistory />} label="History" />
      <NavButton href="/support" icon={<FaQuestionCircle />} label="Support" />
    </ul>
  </nav>
)

const NavButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <li>
    <Link href={href} passHref>
      <motion.a
        whileHover={{ scale: 1.05, color: "#3B82F6" }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center text-gray-300 hover:text-blue-400 transition duration-300"
      >
        {icon}
        <span className="text-xs mt-1">{label}</span>
      </motion.a>
    </Link>
  </li>
)

const Receipt = ({ receiptData }: { receiptData: ReceiptData }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg overflow-hidden border border-blue-500"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative overflow-hidden">
        <motion.h2 
          className="text-3xl font-bold mb-2"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Payment Receipt
        </motion.h2>
        <p className="text-blue-200">Thank you for your payment</p>
      </div>
      <div className="p-6 space-y-6">
        <ReceiptSection title="Payment Details">
          <ReceiptItem
            icon={<FaDollarSign className="text-blue-400" />}
            label="Amount Paid"
            value={receiptData.amountPaid.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          />
          <ReceiptItem
            icon={<FaCalendarAlt className="text-blue-400" />}
            label="Date"
            value={receiptData.date}
          />
          <ReceiptItem
            icon={<FaIdCard className="text-blue-400" />}
            label="Transaction ID"
            value={receiptData.transactionId}
          />
          <ReceiptItem
            icon={<FaCreditCard className="text-blue-400" />}
            label="Payment Method"
            value={receiptData.paymentMethod}
          />
        </ReceiptSection>
        <ReceiptSection title="Student Information">
          <ReceiptItem
            icon={<FaUser className="text-blue-400" />}
            label="Student Name"
            value={receiptData.studentName}
          />
          <ReceiptItem
            icon={<FaIdCard className="text-blue-400" />}
            label="Student ID"
            value={receiptData.studentId}
          />
        </ReceiptSection>
      </div>
      <div className="bg-gray-700 bg-opacity-30 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <Link href="/dashboard" passHref>
          <motion.a
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-gray-300 hover:text-white transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Dashboard
          </motion.a>
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          <FaDownload className="mr-2" />
          Download Receipt
        </motion.button>
      </div>
    </motion.div>
  )
}

const ReceiptSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-b border-gray-600 pb-6">
    <h3 className="text-xl font-semibold text-blue-300 mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
)

const ReceiptItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-3 bg-gray-700 bg-opacity-30 p-3 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-blue-500/20"
  >
    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-semibold text-white">{value}</p>
    </div>
  </motion.div>
)