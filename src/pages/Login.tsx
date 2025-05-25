import React from 'react';
import { Pizza, Moon, Sun } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, theme, toggleTheme }) => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
      
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 px-6 py-4 flex items-center justify-between z-50 bg-opacity-60 backdrop-blur-md 
        shadow-md border-b 
        border-gray-200 dark:border-gray-900 
        bg-white dark:bg-gray-950">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Pizza className="h-6 w-6 text-purple-500" />
          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            PiePiZZ
          </span>
        </div>

        {/* Theme Toggle */}
        <button
          className={`p-2 rounded-full transition-colors ${
            theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-600'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className={`w-full max-w-md p-8 mt-32 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
            <div className={`relative p-4 rounded-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
              <Pizza className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            PiePiZZ Dashboard
          </h1>
          <p className={`mt-2 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Sign in to access your dashboard
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onLogin}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-white hover:bg-gray-100 text-gray-800 font-medium border border-gray-300 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="mt-8">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
            <h3 className="text-lg font-medium mb-2">Sales & Orders Statistics</h3>
            <ul className="space-y-2">
              {[
                'Real-time order tracking',
                'Order Management',
                'Online Order Integration',
                'Notification Center',
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className={`mt-8 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
        &copy; 2025 PiePiZZ Dashboard. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
