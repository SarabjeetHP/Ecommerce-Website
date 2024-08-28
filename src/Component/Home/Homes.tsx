import React from 'react';
import Navbar from '../Shared/Header/Navbar';

import Midd1 from './Mid1';

import Midd2 from './Mid2';

import Midd3 from './Mid3';
import Cta from '../Shared/CTA/Cta';

 // Import the Navbar component

const HomePage: React.FC = () => {
  return (
    <header>
      <Navbar/>
      <Midd1/>
      <Midd2/>
      <Midd3/>
      <Cta/>
    </header>
  );
}

export default HomePage;
