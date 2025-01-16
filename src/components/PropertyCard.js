import React, { useEffect, useState } from 'react';
import '../styles/PropertyCard.css';
import axios from 'axios';

const PropertyCard = ({ property }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?query=house&client_id=KpYQj2Wz8twCsx9yWQbVSNheBa6BGqQ5Vw7wgll_c9w`
        );
        
        setImageUrl(response.data.urls.thumb);
      } catch (err) {
        console.error('Error fetching the image:', err);
        setError(true);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="property-card">
      <table>
        <thead>
          <tr>
            <th colSpan="2" className="table-header">Property Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Property Name:</strong></td>
            <td>{property.propertyName}</td>
          </tr>
          <tr>
            <td><strong>Property Address:</strong></td>
            <td>{property.propertyAddress}</td>
          </tr>
          <tr>
            <td><strong>Owner Name:</strong></td>
            <td>{property.ownerName}</td>
          </tr>
          <tr>
            <td><strong>Price:</strong></td>
            <td>${property.propertyPrice.toLocaleString()}</td>
          </tr>
          <tr>
            <td><strong>Image:</strong></td>
            <td>
              {error ? (
                <p>Could not load image</p>
              ) : (
                imageUrl ? (
                  <img src={imageUrl} alt={property.propertyName} className="property-image" />
                ) : (
                  <p>Loading image...</p>
                )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PropertyCard;
