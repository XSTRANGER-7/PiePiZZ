// import React from 'react';
// import bgImage from '../img/bg-img.webp'; // Make sure to save the uploaded image here

// const LandingPage: React.FC = () => {
//   return (
//     <div
//       className="h-screen w-full flex items-center justify-center text-white text-center relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Transparent overlay for dark effect */}
//       <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />

//       {/* Main Content */}
//       <div className="relative z-10 px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to SliceZone</h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-8">
//           Your destination for delicious pizza experiences. Crafted for true pizza lovers.
//         </p>
//         <button className="px-6 py-3 bg-red-500 hover:bg-red-600 transition-all rounded-md text-lg font-semibold">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;












// import React from 'react';
// import bgImage from '../img/bg-img.webp'; // Ensure this image exists in src/img

// const LandingPage: React.FC = () => {
//   return (
//     <div
//       className="h-screen w-full flex items-center justify-center text-white text-center relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Darker overlay for strong dark mode feel */}
//       <div className="absolute inset-0 bg-black bg-opacity-90 z-0" />

//       {/* Content */}
//       <div className="relative z-10 px-6">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PiePiZZ Dashboard</h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-10">
//           Crafted for real pizza lovers. Discover. Enjoy. Repeat.
//         </p>
//         <button
//           className="px-6 py-3 bg-[#111] border border-gray-400 hover:border-white hover:text-white transition-all rounded-lg text-lg font-semibold"
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;












// import React from 'react';
// import bgImage from '../img/bg-img.webp'; // Ensure this image exists in src/img
// import logo from '../img/pizza.png'; // Add your logo image in src/img folder

// const LandingPage: React.FC = () => {
//   return (
//     <div
//       className="h-screen w-full flex flex-col relative overflow-hidden text-white"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Darker overlay for strong dark mode feel */}
//       <div className="absolute inset-0 bg-black bg-opacity-90 z-0" />

//       {/* Navbar */}
//       <nav className="relative z-10 flex justify-between items-center px-6 py-4">
//         {/* Left: Logo + Name */}
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="PiePiZZ Logo" className="h-8 w-8 object-contain filter invert" />
//           <span className="text-2xl font-bold select-none">PiePiZZ</span>
//         </div>

//         {/* Right: Login Button */}
//         <button
//           className="bg-white text-black px-4 md:px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
//         >
//           Login
//         </button>
//       </nav>

//       {/* Content */}
//       <div className="flex-grow flex items-center justify-center px-6 relative z-10 text-center">
//         <div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PiePiZZ Dashboard</h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-10">
//             Crafted for real pizza lovers. Discover. Enjoy. Repeat.
//           </p>
//           <button
//             className="px-6 py-3 bg-[#111] border border-gray-400 hover:border-white hover:text-white transition-all rounded-lg text-lg font-semibold"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;








// import React, { useState } from 'react';
// import bgImage from '../img/bg-img.webp';
// import logo from '../img/pizza.png';
// import Login from './Login'; // Make sure you have this component

// const LandingPage: React.FC = () => {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <div
//       className="h-screen w-full flex flex-col relative overflow-hidden text-white"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-90 z-0" />

//       {/* Navbar */}
//       <nav className="relative z-10 flex justify-between items-center px-6 py-4">
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="PiePiZZ Logo" className="h-8 w-8 object-contain" />
//           <span className="text-2xl font-bold select-none">PiePiZZ</span>
//         </div>
//         <button
//           className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
//           onClick={() => setShowLogin(true)}
//         >
//           Login
//         </button>
//       </nav>

//       {/* Content */}
//       <div className="flex-grow flex items-center justify-center px-6 relative z-10 text-center">
//         {!showLogin ? (
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PiePiZZ Dashboard</h1>
//             <p className="text-lg md:text-xl text-gray-300 mb-10">
//               Crafted for real pizza lovers. Discover. Enjoy. Repeat.
//             </p>
//             <button
//               className="px-6 py-3 bg-[#111] border border-gray-400 hover:border-white hover:text-white transition-all rounded-lg text-lg font-semibold"
//               onClick={() => setShowLogin(true)}
//             >
//               Get Started
//             </button>
//           </div>
//         ) : (
//           <Login />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

















// import React, { useState } from 'react';
// import bgImage from '../img/bg-img.webp';
// import logo from '../img/pizza.png';
// import Login from './Login';

// const LandingPage: React.FC = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [theme, setTheme] = useState<'light' | 'dark'>('dark');

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
//   };

//   const handleLogin = () => {
//     // handle login logic here
//     alert('Logged in!');
//   };

//   return (
//     <div
//       className={`h-screen w-full flex flex-col relative overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-black'}`}
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Dark overlay */}
//       <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-90' : 'bg-white bg-opacity-90'} z-0`} />

//       {/* Navbar */}
//       <nav className="relative z-10 flex justify-between items-center px-6 py-4">
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="PiePiZZ Logo" className="h-8 w-8 object-contain" />
//           <span className="text-2xl font-bold select-none">PiePiZZ</span>
//         </div>
//         <button
//           className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
//           onClick={() => setShowLogin(true)}
//         >
//           Login
//         </button>
//       </nav>

//       {/* Content */}
//       <div className="flex-grow flex items-center justify-center px-6 relative z-10 text-center">
//         {!showLogin ? (
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PiePiZZ Dashboard</h1>
//             <p className="text-lg md:text-xl text-gray-300 mb-10">
//               Crafted for real pizza lovers. Discover. Enjoy. Repeat.
//             </p>
//             <button
//               className="px-6 py-3 bg-[#111] border border-gray-400 hover:border-white hover:text-white transition-all rounded-lg text-lg font-semibold"
//               onClick={() => setShowLogin(true)}
//             >
//               Get Started
//             </button>
//           </div>
//         ) : (
//           <Login onLogin={handleLogin} theme={theme} toggleTheme={toggleTheme} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

















// import React, { useState } from 'react';
// import bgImage from '../img/bg-img.webp';
// import logo from '../img/pizza.png';
// import Login from './Login';

// const LandingPage: React.FC = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // default to dark

//   const handleLogin = () => {
//     console.log("Login Clicked");
//     // You can handle further login logic here
//   };

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <div
//       className={`h-screen w-full flex flex-col relative overflow-hidden ${
//         theme === 'dark' ? 'text-white' : 'text-black'
//       }`}
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-90' : 'bg-white bg-opacity-80'} z-0`} />

//       {/* Navbar */}
//       <nav className="relative z-10 flex justify-between items-center px-6 py-4">
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="PiePiZZ Logo" className="h-8 w-8 object-contain" />
//           <span className="text-2xl font-bold select-none">PiePiZZ</span>
//         </div>
//         {!showLogin && (
//           <button
//             className={`px-4 py-2 rounded-lg font-semibold transition ${
//               theme === 'dark'
//                 ? 'bg-white text-black hover:bg-gray-200'
//                 : 'bg-black text-white hover:bg-gray-900'
//             }`}
//             onClick={() => setShowLogin(true)}
//           >
//             Login
//           </button>
//         )}
//       </nav>

//       {/* Main Content */}
//       <div className="flex-grow flex items-center justify-center px-6 relative z-10 text-center">
//         {!showLogin ? (
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PiePiZZ Dashboard</h1>
//             <p className={`text-lg md:text-xl mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//               Crafted for real pizza lovers. Discover. Enjoy. Repeat.
//             </p>
//             <button
//               className="px-6 py-3 bg-[#111] border border-gray-400 hover:border-white hover:text-white transition-all rounded-lg text-lg font-semibold"
//               onClick={() => setShowLogin(true)}
//             >
//               Get Started
//             </button>
//           </div>
//         ) : (
//           <Login onLogin={handleLogin} theme={theme} toggleTheme={toggleTheme} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;








import React, { useState } from 'react';
import bgImage from '../img/bg-img.webp';
import logo from '../img/pizza.png';
import Login from './Login';

const LandingPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // default to dark

  const handleLogin = () => {
    console.log('Login Clicked');
    // Additional login logic here
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`h-screen w-full flex flex-col relative overflow-hidden ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`absolute inset-0 z-0 ${
          theme === 'dark' ? 'bg-black bg-opacity-90' : 'bg-white bg-opacity-80'
        }`}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="PiePiZZ Logo" className="h-8 w-8 object-contain invert" />
          <span className="text-2xl font-bold select-none">PiePiZZ</span>
        </div>
        {!showLogin && (
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              theme === 'dark'
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-900'
            }`}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-6 relative z-10 text-center">
        {!showLogin ? (
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PiePiZZ Dashboard</h1>
            <p
              className={`text-lg md:text-xl mb-10 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Crafted for real pizza lovers. Discover. Enjoy. Repeat.
            </p>
            <button
              className="px-6 py-3 bg-[#111] border border-gray-400 hover:border-white hover:text-white transition-all rounded-lg text-lg font-semibold"
              onClick={() => setShowLogin(true)}
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="w-full max-w-md animate-fade-in">
            {/* <Login onLogin={handleLogin} theme={theme} toggleTheme={toggleTheme} /> */}
            <Login onLogin={handleLogin} theme={theme} toggleTheme={toggleTheme} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
