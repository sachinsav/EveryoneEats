import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const FoodDetail = ({ foodItems }) => {
  const isCentered = foodItems.length <= 2;
  


  const [destination, setDestination] = useState({lat:19.123970,lang:72.897181});
  

  const openMap = ({ lat, lang }) => {
    const currentLocation = navigator.geolocation;

    if (currentLocation) {
      currentLocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${lat},${lang}`;
        window.open(url, '_blank');
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };


  return (
    
    <div className="container">
    <Navbar />
    <div>

    </div>
      <h2 className={`text-center mb-4 ${isCentered ? 'mx-auto' : ''}`}>Food Details</h2>
      <h5>Address: abc def fjdlsaj fj fdslj f{foodItems.address}</h5>
      <h5>Expiry: 3 hours{foodItems.address}</h5>
      <div className={`row ${isCentered ? 'justify-content-center' : ''}`}>
        {foodItems.map((food, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">Quantity: {food.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        {foodItems.length > 0 && (
          <button className="btn btn-primary" onClick={()=>openMap(destination)}>
            View on Map
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FoodDetail;
