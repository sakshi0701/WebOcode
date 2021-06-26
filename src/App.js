import React from 'react';

import SideNav from './components/SideNav/SideNav';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <SideNav />
      <h1>Hello world</h1>
      <Footer />
    </div>
  );
}

export default App;