import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import FoodView from './foodview';
import FoodDetail from './fooddetail';
import FoodForm from './foodform';

const Home = () => {
    
    
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Function to handle successful retrieval of geolocation coordinates
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    };

    // Function to handle error in retrieving geolocation coordinates
    const errorCallback = (error) => {
      console.error('Error getting geolocation:', error);
    };

    // Check if Geolocation API is supported by the browser
    if (navigator.geolocation) {
      // Use Geolocation API to get current position
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className='container'>
      <Navbar />
      {/* Your home page content goes here */}
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <FoodView food={{distance:"2km", expiry:"3Hours", name:"Heemali", address:"abc"}} />
      
    </div>
      <Footer />
    </div>
  );
};

export default Home;
