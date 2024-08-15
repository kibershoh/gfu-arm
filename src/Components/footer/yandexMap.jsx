import React, { useState, useEffect } from 'react';

function YandexMap() {
  const [position, setPosition] = useState({ latitude: null, longitude: null, cityName: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (geoPosition) => {
        setPosition({
          latitude: 123.456,
          longitude: -78.901,
          cityName: await fetchCityName(geoPosition.coords.latitude, -78.901),
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  async function fetchCityName(latitude, longitude) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const data = await response.json();
      return data.address.city || data.address.town || data.address.village || null;
    } catch (error) {
      console.error("Error fetching city name:", error);
      return null;
    }
  }

  console.log(position);

  return (
    <div>
      <h2>My Current Location</h2>
      {position.latitude && position.longitude ? (
        <p>
          Latitude: {position.latitude}, Longitude: {position.longitude}<br />
          {position.cityName ? `City: ${position.cityName}` : null}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      {position.cityName && (
        <h2>{position.cityName} shaharining nomini olish uchun joylashgan kochali</h2>
      )}
    </div>
  );
}

export default YandexMap;
