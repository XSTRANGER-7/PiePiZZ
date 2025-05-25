import React from 'react';

interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  status: string;
}

interface RecentActivityProps {
  orders: Order[];
  theme: 'light' | 'dark';
  setSelectedOrder: (order: Order) => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ orders, theme, setSelectedOrder }) => (
  <div className={`py-6 px-2 rounded-lg ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} shadow-lg mb-8`}>
    <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
    <div className="space-y-4">
      {orders.slice(0, 5).map((order, index) => (
        <div
          key={index}
          onClick={() => setSelectedOrder(order)}
          className={`cursor-pointer p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-between hover:ring-2 hover:ring-purple-400 transition`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-500'}`}>🍕</div>
            <div>
              <p className="font-medium">Order #{order.id} - {order.customerName}</p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {new Date(order.orderDate).toLocaleString()}
              </p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Completed' ? 'bg-green-200 text-green-800' : order.status === 'Preparing' ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'}`}>
            {order.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActivity;
