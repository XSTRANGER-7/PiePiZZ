import React from 'react';

interface OrderDetailsProps {
  order: any;
  theme: 'light' | 'dark';
  onClose: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsProps> = ({ order, theme, onClose }) => (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className={`w-full max-w-xl p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white'} shadow-lg relative`}>
      <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold text-red-500 hover:text-red-700">×</button>
      <h3 className="text-2xl font-bold mb-4">Order Details #{order.id}</h3>
      <p><strong>Pizza Type:</strong> {order.pizzaType}</p>
      <p><strong>Customer Name:</strong> {order.customerName}</p>
      <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Price:</strong> {order.price}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Preparation:</strong> {order.preparationMode}</p>
      <ul className="list-disc ml-6">
        {order.items?.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default OrderDetailsModal;
