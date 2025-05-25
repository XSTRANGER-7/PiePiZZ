import React from 'react';

interface StatusCardProps {
  label: string;
  value: number;
  color: string;
  theme: 'light' | 'dark';
}

const StatusCard: React.FC<StatusCardProps> = ({ label, value, color, theme }) => (
  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
    <div className="flex justify-between items-center mb-4">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
  </div>
);

export default StatusCard;
