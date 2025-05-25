import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { Menu, X, Bell, Sun, Moon, LogOut } from 'lucide-react';
import { getAuth, signOut } from 'firebase/auth';

interface HeaderProps {
  user: User;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  const auth = getAuth();
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setNotificationMessage('Successfully signed out');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error("Error signing out", error);
      setNotificationMessage('Error signing out');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <header className={`${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-md relative`}>
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Title - visible on mobile */}
        <div className="md:hidden flex items-center">
          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            PiePiZZ
          </span>
        </div>
         
        <div className="ml-auto flex items-center gap-4">

          <button 
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
           
          <div className="relative">
            <button 
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
             
            {isNotificationsOpen && (
              <div 
                className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 z-50 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="px-4 py-2 border-b border-gray-600">
                  <p className="text-sm font-medium">Notifications</p>
                </div>
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className={`px-4 py-3 hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} cursor-pointer`}
                  >
                    <div className="flex items-start">
                      <div className={`h-8 w-8 rounded-full ${getRandomColor()} flex items-center justify-center text-white font-bold`}>
                        {String.fromCharCode(64 + i)}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium">New order received</p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          Order #{Math.floor(Math.random() * 1000)} has been placed
                        </p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                          {Math.floor(Math.random() * 60)} minutes ago
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="px-4 py-2 text-center">
                  <button className="text-sm text-purple-500 hover:text-purple-400">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
           
            {/* {console.log(user.photoURL)} */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <img 
                src={user.photoURL || 'https://via.placeholder.com/150'} 
                alt="Profile" 
                className="h-8 w-8 rounded-full border-2 border-purple-500"
              />
              <span className="hidden md:block text-sm font-medium">{user.displayName}</span>
            </button>
             
            {isProfileMenuOpen && (
              <div 
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="px-4 py-2 text-sm border-b border-gray-600">
                  <p className="font-medium">{user.displayName}</p>
                  <p className={`text-xs truncate ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {user.email}
                  </p>
                </div>
                <button 
                  className={`flex items-center space-x-2 w-full text-left px-4 py-2 text-sm ${
                    theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                  }`}
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' 
                  ? 'bg-purple-600 text-white' 
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Dashboard
            </a>
            <a 
              href="/orders"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/orders' 
                  ? 'bg-purple-600 text-white' 
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Pizza Orders
            </a>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {showNotification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <p className="text-sm">{notificationMessage}</p>
        </div>
      )}
    </header>
  );
};

// Helper function
const getRandomColor = () => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
    'bg-pink-500', 'bg-yellow-500', 'bg-red-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Header;