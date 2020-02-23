import React, { Component } from 'react';

import { render } from '@testing-library/react';

import "./styles.css";
import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);
  
    


export default App;
