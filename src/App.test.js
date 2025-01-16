import { render, screen } from '@testing-library/react';
import PropertyCard from './components/PropertyCard';
const axios = require('axios');

test('renders property card with correct data', () => {
  const mockProperty = {
    propertyName: "Luxury Villa",
    propertyAddress: "123 Sunset Blvd",
    ownerName: "John Doe",
    propertyPrice: 500000
  };

  render(<PropertyCard property={mockProperty} />);

  expect(screen.getByText(/Luxury Villa/i)).toBeInTheDocument();
  expect(screen.getByText(/123 Sunset Blvd/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/\$[\d,]+/i)).toBeInTheDocument();
});


test('renders the property name correctly', () => {
  const mockProperty = {
    propertyName: "Oceanfront Mansion",
    propertyAddress: "789 Beach Ave",
    ownerName: "Jane Smith",
    propertyPrice: 1500000,
  };

  render(<PropertyCard property={mockProperty} />);
  
  expect(screen.getByText(/Oceanfront Mansion/i)).toBeInTheDocument();
});


test('renders PropertyCard without crashing', () => {
  const mockProperty = {
    propertyName: "Luxury Villa",
    propertyAddress: "123 Sunset Blvd",
    ownerName: "John Doe",
    propertyPrice: 500000,
  };

  render(<PropertyCard property={mockProperty} />);
  
  expect(screen.getByText(/Luxury Villa/i)).toBeInTheDocument();
  expect(screen.getByText(/123 Sunset Blvd/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
});