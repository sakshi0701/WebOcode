import React from 'react';

import SideNav from './components/SideNav/SideNav';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Offers from './components/Offers/Offers';
import Games from './components/Games/Games';
import StartBtn from './components/StartButton/StartBtn';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <SideNav />
      <div className="App">
        <Navbar />
        {/* <SideNav /> */}
        <Main />
        <Offers />
        <Games />
        <StartBtn />
        <Footer />
      </div>
    </>
  );
}

export default App;