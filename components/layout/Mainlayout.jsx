import React from 'react';
import Footer from './Footer';
import NavBar from './Nav';

function Mainlayout({ children }) {
  return (
    <div>
      <NavBar />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Mainlayout;
