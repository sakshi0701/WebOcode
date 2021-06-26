import React from 'react';

import SideNav from './components/SideNav/SideNav';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';

import './App.css';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <>
      <SideNav />
      <div className="App">
        <Main />
        <Offers />
        <Footer />
      </div>
    </>
  );
}

export default App;