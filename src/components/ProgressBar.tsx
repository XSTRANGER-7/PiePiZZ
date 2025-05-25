import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
  theme: 'light' | 'dark';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color, theme }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default ProgressBar;
