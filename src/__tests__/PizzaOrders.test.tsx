import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PizzaOrders from '../pages/PizzaOrders';

describe('PizzaOrders Component', () => {
  it('renders without crashing', () => {
    render(<PizzaOrders theme="light" />);
    expect(screen.getByText('Pizza Orders')).toBeInTheDocument();
  });

  it('filters orders by search term', () => {
    render(<PizzaOrders theme="light" />);
    const searchInput = screen.getByPlaceholderText('Search orders...');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('filters orders by status', () => {
    render(<PizzaOrders theme="light" />);
    const statusFilter = screen.getByRole('combobox');
    fireEvent.change(statusFilter, { target: { value: 'Delivered' } });
    expect(screen.getByText('Delivered')).toBeInTheDocument();
  });

  it('sorts orders when clicking column headers', () => {
    render(<PizzaOrders theme="light" />);
    const orderIdHeader = screen.getByText('Order ID');
    fireEvent.click(orderIdHeader);
    // Add assertions for sorting
  });

  it('handles pagination correctly', () => {
    render(<PizzaOrders theme="light" />);
    const nextPageButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextPageButton);
    // Add assertions for pagination
  });
});