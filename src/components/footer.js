import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center mt-5">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} EveryoneEats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
