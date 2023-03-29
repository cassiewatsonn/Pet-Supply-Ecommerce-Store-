import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutUs from './pages/AboutUs';
import Toys from './pages/Toys';
import Treats from './pages/Treats';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Header from './Header';
import Footer from './Footer';

export default function EcomContainer() {
    const [currentPage, setCurrentPage] = useState('AboutUs');

    const renderPage = () => {
      if (currentPage === 'AboutUs') {
        return <AboutUs />;
      }
      if (currentPage === 'Toys') {
        return < Toys/>;
      }
      if (currentPage === 'Treats') {
        return <Treats />;
      }
      if (currentPage === 'SignIn') {
        return <SignIn />;
      }
      return <Cart />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Header>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </Header>
        {renderPage()}
        <Footer>
          <div></div>
        </Footer>
      </div>

);
}
      
    