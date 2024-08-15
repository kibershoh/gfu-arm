import React from 'react';
import { Link } from 'react-router-dom';

const MapLink = ({ address, latitude, longitude }) => {
  const handleClick = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <Link to="/" onClick={handleClick}>
      {address}
    </Link>
  );
};

export default MapLink;
