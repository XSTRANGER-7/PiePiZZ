import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
 
import Dashboard from './pages/Dashboard';
import PizzaOrders from './pages/PizzaOrders';
import Revenue from './pages/Revenue';
import Sidebar from './pages/Sidebar';
import Header from './components/Header';
import Login from './pages/Login';
// import LandingPage from './components/LandingPage';
import HelpPage from './pages/HelpPage'; 
import Spotlight from './pages/Spotlight';
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [error, setError] = useState<string | null>(null); 


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
 
    document.documentElement.classList.toggle('dark', theme === 'dark');

    return () => unsubscribe();
  }, [theme]);

  const handleLogin = async () => {
    try {
      setError(null); 
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Error signing in with Google", error);
      if (error.code === 'auth/popup-blocked') {
        setError('The login popup was blocked by your browser. Please allow popups for this site and try again.');
      } else {
        setError('An error occurred during sign in. Please try again.');
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'}`}>
        {user ? (
          <div className="flex h-screen overflow-hidden">
            <Sidebar theme={theme} />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header user={user} theme={theme} toggleTheme={toggleTheme} /> 
              <main className="flex-1 overflow-y-auto p-4">
                <Routes>
                  <Route path="/" element={<Dashboard user={user} theme={theme} />} />
                  <Route path="/orders" element={<PizzaOrders theme={theme} />} />
                  <Route path="/revenue" element={<Revenue theme={theme} />} />
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/join" element={<Spotlight />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
          </div>
        ) : (
          <>
            <Login onLogin={handleLogin} theme={theme} toggleTheme={toggleTheme} /> 
            {/* <LandingPage/> */}
            
            {error && (
              <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-red-900 text-white' : 'bg-red-100 text-red-900'
              }`}>
                <p className="text-sm">{error}</p>
              </div>
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;