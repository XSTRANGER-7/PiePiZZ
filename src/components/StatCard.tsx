import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  theme: 'light' | 'dark';
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, theme }) => (
  <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg flex items-center space-x-4`}>
    <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>{icon}</div>
    <div>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default StatCard;
