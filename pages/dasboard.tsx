// components/Dashboard.tsx
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [fees, setFees] = useState({ amountDue: 0, dueDate: '' });

  useEffect(() => {
    // Fetch fee structure from backend
    setFees({ amountDue: 1000, dueDate: '2024-12-31' });
  }, []);

  return (
    <div className="dashboard">
      <h2>Outstanding Balance: {fees.amountDue} USD</h2>
      <p>Due Date: {fees.dueDate}</p>
    </div>
  );
};

export default Dashboard;
