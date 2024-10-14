import React from 'react';
import { motion } from 'framer-motion';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

interface SettingsTabProps {
  icon: React.ReactElement;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({ icon, label, isActive, onClick }) => {
  const tabVariants = {
    active: { backgroundColor: '#3B82F6', color: '#ffffff' },
    inactive: { backgroundColor: '#1F2937', color: '#9CA3AF' }
  };

  return (
    <motion.button
      className="flex-1 py-4 px-6 focus:outline-none flex items-center justify-center"
      variants={tabVariants}
      animate={isActive ? 'active' : 'inactive'}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {React.cloneElement(icon, { className: "inline-block mr-2" })}
      {label}
    </motion.button>
  );
};

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  name: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, id, type, name }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">{label}</label>
    <input type={type} id={id} name={name} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
  </div>
);

interface TextAreaFieldProps {
  label: string;
  id: string;
  name: string;
  rows: number;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, name, rows }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">{label}</label>
    <textarea id={id} name={name} rows={rows} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
  </div>
);

interface ToggleProps {
  label: string;
  isOn: boolean;
  onToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ label, isOn, onToggle }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <motion.button
      className="text-2xl"
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isOn ? <FaToggleOn className="text-blue-500" /> : <FaToggleOff className="text-gray-500" />}
    </motion.button>
  </div>
);

interface SelectFieldProps {
  label: string;
  id: string;
  name: string;
  options: string[];
}

export const SelectField: React.FC<SelectFieldProps> = ({ label, id, name, options }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">{label}</label>
    <select id={id} name={name} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  </div>
);

interface SaveButtonProps {
  label: string;
}

export const SaveButton: React.FC<SaveButtonProps> = ({ label }) => (
  <motion.button
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);