import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSortAmountDown, FaSortAmountUp, FaFileDownload } from 'react-icons/fa';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search payments..."
      className="pl-10 pr-4 py-2 bg-gray-700 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
);

interface SortButtonProps {
  sortOrder: 'asc' | 'desc';
  onClick: () => void;
}

export const SortButton: React.FC<SortButtonProps> = ({ sortOrder, onClick }) => (
  <motion.button
    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {sortOrder === 'asc' ? <FaSortAmountUp className="mr-2" /> : <FaSortAmountDown className="mr-2" />}
    Sort by Date
  </motion.button>
);

interface TableHeaderProps {
  headers: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
  <thead>
    <tr className="bg-gray-700 bg-opacity-50">
      {headers.map((header, index) => (
        <th key={index} className="px-4 py-2 text-left">{header}</th>
      ))}
    </tr>
  </thead>
);

interface Payment {
  id: number;
  date: string;
  description: string;
  amount: number;
  status: string;
}

interface TableRowProps {
  payment: Payment;
  index: number;
}

export const TableRow: React.FC<TableRowProps> = ({ payment, index }) => (
  <motion.tr
    key={payment.id}
    className="border-b border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <td className="px-4 py-2">{payment.date}</td>
    <td className="px-4 py-2">{payment.description}</td>
    <td className="px-4 py-2">${payment.amount.toFixed(2)}</td>
    <td className="px-4 py-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        payment.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
      }`}>
        {payment.status}
      </span>
    </td>
    <td className="px-4 py-2">
      <motion.button
        className="text-blue-400 hover:text-blue-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaFileDownload />
      </motion.button>
    </td>
  </motion.tr>
);