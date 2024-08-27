import React from 'react';
import Navbar from './Navbar';
 // Import the Navbar component

const Header: React.FC = () => {
  return (
    <header>
      <Navbar/> {/* Include the Navbar inside the Header */}
    </header>
  );
}

export default Header;
