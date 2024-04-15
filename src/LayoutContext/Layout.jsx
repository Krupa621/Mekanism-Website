import React from 'react';
// import Navbar from '../component/Navbar/Navbar';
// import HeroSection from '../component/HeroSection/HeroSection';

import BusinessContactInfo from '../component/pages/HomePage/BusinessContactInfo/BusinessContactInfo';
import Footer from '../component/pages/HomePage/Footer/Footer';
// import TitleBar from '../component/ReUsableComponents/TitleBar/TitleBar';

const Layout = ({ children }) => {
  return (
    <main>
      {/* <TitleBar /> */}
      {children}
      <BusinessContactInfo />
      <Footer />
    </main>
  );
};

export default Layout;
