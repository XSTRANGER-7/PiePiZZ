
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PieChart, Settings, ChevronDown, ChevronUp, Pizza, HelpCircle } from 'lucide-react';

interface SidebarProps {
  theme: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ theme }) => {
  const location = useLocation();
  const [showSettings, setShowSettings] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const baseText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  return (
    <div className={`w-64 h-screen flex-shrink-0 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg hidden md:block`}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <Pizza className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              PiePiZZ
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-auto">
          <Link
            to="/"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/')
                ? 'bg-purple-600 text-white'
                : `${baseText} ${hoverBg}`
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/orders"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/orders')
                ? 'bg-purple-600 text-white'
                : `${baseText} ${hoverBg}`
            }`}
          >
            <PieChart className="h-5 w-5" />
            <span>Pizza Orders</span>
          </Link>

          <Link
  to="/join"
  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
    isActive('/join')
      ? 'bg-purple-600 text-white'
      : `${baseText} ${hoverBg}`
  }`}
>
  <span className="h-5 w-5">🎉</span>
  <span>Join Us</span>
</Link>

          <div className={`px-4 py-2 text-xs uppercase font-semibold ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
            System
          </div>

          {/* Settings with dropdown */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${baseText} ${hoverBg}`}
          >
            <span className="flex items-center space-x-3">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </span>
            {showSettings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showSettings && (
            <div className="pl-10 space-y-2 text-sm text-gray-500">
              <Link to="/settings/profile" className="block hover:text-purple-500">Profile Settings</Link>
              <Link to="/settings/notifications" className="block hover:text-purple-500">Notifications</Link>
              <Link to="/settings/privacy" className="block hover:text-purple-500">Privacy & Security</Link>
            </div>
          )}

          {/* Help & Support now links to a page */}
          <Link
            to="/help"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${baseText} ${hoverBg}`}
          >
            <HelpCircle className="h-5 w-5" />
            <span>Help & Support</span>
          </Link>
        </nav>

        {/* Footer */}
        <div className={`p-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
          <p>PiePiZZ Dashboard</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
