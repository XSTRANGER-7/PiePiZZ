// import React, { useState } from 'react';
// import { User } from 'firebase/auth';
// import { Cpu, Database, Globe, Layers } from 'lucide-react';
// import orderData from '../data/orders.json';

// interface DashboardProps {
//   user: User;
//   theme: 'light' | 'dark';
// }

// const Dashboard: React.FC<DashboardProps> = ({ user, theme }) => {
//   const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

//   return (
//     <div className="container mx-auto">
//       <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg mb-8`}>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <img
//               src={user.photoURL || 'https://via.placeholder.com/150'}
//               alt="Profile"
//               className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-purple-500"
//             />
//             <div className="absolute -bottom-1 -right-1 bg-green-400 p-1 rounded-full border-2 border-gray-800"></div>
//           </div>
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//               Hello, {user.displayName}!
//             </h1>
//             <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to Dashboard</p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <StatCard icon={<Globe className="h-8 w-8 text-blue-500" />} title="Network Status" value="Connected" theme={theme} />
//         <StatCard icon={<Database className="h-8 w-8 text-green-500" />} title="Orders Processed" value="1,024" theme={theme} />
//         <StatCard icon={<Cpu className="h-8 w-8 text-purple-500" />} title="System Load" value="23%" theme={theme} />
//         <StatCard icon={<Layers className="h-8 w-8 text-pink-500" />} title="Active Nodes" value="16" theme={theme} />
//       </div>

//       {/* Recent Activity Section */}
//       <div className={`py-6 px-2 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg mb-8`}>
//         <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
//         <div className="space-y-4">
//           {orderData.orders.slice(0, 5).map((order, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedOrder(order)}
//               className={`cursor-pointer p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-between hover:ring-2 hover:ring-purple-400 transition`}
//             >
//               <div className="flex items-center space-x-3">
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-500'}`}>🍕</div>
//                 <div>
//                   <p className="font-medium">Order #{order.id} - {order.customerName}</p>
//                   <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
//                     {new Date(order.orderDate).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//               <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Completed' ? 'bg-green-200 text-green-800' : order.status === 'Preparing' ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'}`}>
//                 {order.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Order Details Modal */}
//       {selectedOrder && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className={`w-full max-w-xl p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white'} shadow-lg relative`}>
//             <button
//               onClick={() => setSelectedOrder(null)}
//               className="absolute top-2 right-2 text-xl font-bold text-red-500 hover:text-red-700"
//             >
//               ×
//             </button>
//             <h3 className="text-2xl font-bold mb-4">Order Details #{selectedOrder.id}</h3>
//             <p><strong>Pizza Type:</strong>{selectedOrder.pizzaType}</p>
//             <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
//             <p><strong>Date:</strong> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
//             <p><strong>Status:</strong> {selectedOrder.status}</p>
//             <p><strong>Price:</strong>{selectedOrder.price}</p>
//             <p><strong>Quantity:</strong>{selectedOrder.quantity}</p>
//             <p><strong>Preparation:</strong>{selectedOrder.preparationMode}</p>
//             <ul className="list-disc ml-6">
//               {selectedOrder.items?.map((item: string, i: number) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Bottom Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg`}>
//           <h2 className="text-xl font-bold mb-4">Popular Pizza Types</h2>
//           <div className="space-y-4">
//             <ProgressBar label="Margherita" value={85} color="bg-blue-500" theme={theme} />
//             <ProgressBar label="Pepperoni" value={72} color="bg-purple-500" theme={theme} />
//             <ProgressBar label="Veggie Supreme" value={64} color="bg-green-500" theme={theme} />
//             <ProgressBar label="Hawaiian" value={48} color="bg-yellow-500" theme={theme} />
//             <ProgressBar label="BBQ Chicken" value={36} color="bg-red-500" theme={theme} />
//           </div>
//         </div>

//         <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg`}>
//           <h2 className="text-xl font-bold mb-4">Order Status Distribution</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <StatusCard label="Pending" value={12} color="bg-yellow-500" theme={theme} />
//             <StatusCard label="Preparing" value={8} color="bg-blue-500" theme={theme} />
//             <StatusCard label="Out for Delivery" value={5} color="bg-purple-500" theme={theme} />
//             <StatusCard label="Delivered" value={24} color="bg-green-500" theme={theme} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface StatCardProps {
//   icon: React.ReactNode;
//   title: string;
//   value: string;
//   theme: 'light' | 'dark';
// }

// const StatCard: React.FC<StatCardProps> = ({ icon, title, value, theme }) => (
//   <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg flex items-center space-x-4`}>
//     <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>{icon}</div>
//     <div>
//       <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
//       <p className="text-2xl font-bold">{value}</p>
//     </div>
//   </div>
// );

// interface ProgressBarProps {
//   label: string;
//   value: number;
//   color: string;
//   theme: 'light' | 'dark';
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color, theme }) => (
//   <div>
//     <div className="flex justify-between mb-1">
//       <span>{label}</span>
//       <span>{value}%</span>
//     </div>
//     <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
//       <div className={`h-2 rounded-full ${color}`} style={{ width: `${value}%` }}></div>
//     </div>
//   </div>
// );

// interface StatusCardProps {
//   label: string;
//   value: number;
//   color: string;
//   theme: 'light' | 'dark';
// }

// const StatusCard: React.FC<StatusCardProps> = ({ label, value, color, theme }) => (
//   <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
//     <div className="flex justify-between items-center mb-4">
//       <span className={`w-3 h-3 rounded-full ${color}`}></span>
//       <span className="text-2xl font-bold">{value}</span>
//     </div>
//     <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
//   </div>
// );

// export default Dashboard;


















import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { Cpu, Database, Globe, Layers } from 'lucide-react';
import orderData from '../data/orders.json';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import StatusCard from '../components/StatusCard';
import RecentActivity from '../components/RecentActivity';
import OrderDetailsModal from '../components/OrderDetailsModal';

interface DashboardProps {
  user: User;
  theme: 'light' | 'dark';
}

const Dashboard: React.FC<DashboardProps> = ({ user, theme }) => {
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  return (
    <div className="container mx-auto">
      {/* Greeting Section */}
      <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg mb-8`}>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.photoURL || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-purple-500"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-400 p-1 rounded-full border-2 border-gray-800"></div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Hello, {user.displayName}!
            </h1>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to Dashboard</p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Globe className="h-8 w-8 text-blue-500" />} title="Network Status" value="Connected" theme={theme} />
        <StatCard icon={<Database className="h-8 w-8 text-green-500" />} title="Orders Processed" value="1,024" theme={theme} />
        <StatCard icon={<Cpu className="h-8 w-8 text-purple-500" />} title="System Load" value="23%" theme={theme} />
        <StatCard icon={<Layers className="h-8 w-8 text-pink-500" />} title="Active Nodes" value="16" theme={theme} />
      </div>

      {/* Recent Activity */}
      <RecentActivity orders={orderData.orders} theme={theme} setSelectedOrder={setSelectedOrder} />

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal order={selectedOrder} theme={theme} onClose={() => setSelectedOrder(null)} />
      )}

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg`}>
          <h2 className="text-xl font-bold mb-4">Popular Pizza Types</h2>
          <div className="space-y-4">
            <ProgressBar label="Margherita" value={85} color="bg-blue-500" theme={theme} />
            <ProgressBar label="Pepperoni" value={72} color="bg-purple-500" theme={theme} />
            <ProgressBar label="Veggie Supreme" value={64} color="bg-green-500" theme={theme} />
            <ProgressBar label="Hawaiian" value={48} color="bg-yellow-500" theme={theme} />
            <ProgressBar label="BBQ Chicken" value={36} color="bg-red-500" theme={theme} />
          </div>
        </div>

        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg`}>
          <h2 className="text-xl font-bold mb-4">Order Status Distribution</h2>
          <div className="grid grid-cols-2 gap-4">
            <StatusCard label="Pending" value={12} color="bg-yellow-500" theme={theme} />
            <StatusCard label="Preparing" value={8} color="bg-blue-500" theme={theme} />
            <StatusCard label="Out for Delivery" value={5} color="bg-purple-500" theme={theme} />
            <StatusCard label="Delivered" value={24} color="bg-green-500" theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
