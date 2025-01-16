import React, { useState } from 'react';

const PropertyList = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetails = () => {
    setSelectedProperty(null);
  };

  return (
    <div>
      <h2>Property List</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-item">
            <h3>{property.name}</h3>
            <p>{property.address}</p>
            <p>Price: ${property.price}</p>
            <button onClick={() => handleViewDetails(property)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="property-details">
          <h2>Property Details</h2>
          <p><strong>Name:</strong> {selectedProperty.name}</p>
          <p><strong>Address:</strong> {selectedProperty.address}</p>
          <p><strong>Price:</strong> ${selectedProperty.price}</p>
          <p><strong>Description:</strong> {selectedProperty.description}</p> {}
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
