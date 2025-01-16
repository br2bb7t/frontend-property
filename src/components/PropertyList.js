import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.idOwner} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
