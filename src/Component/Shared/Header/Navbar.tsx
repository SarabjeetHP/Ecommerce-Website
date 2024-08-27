import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 w-8 mr-4" />
        <span className="text-lg font-bold">Brand Name</span>
      </div>
      <ul className="flex justify-end">
        <li className="mr-6">
          <a href="#" className="text-lg hover:text-gray-300">Home</a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-lg hover:text-gray-300">About</a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-lg hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
