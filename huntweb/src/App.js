import React, { Component } from 'react';
import Routes from './routes';

import { render } from '@testing-library/react';

import "./styles.css";
import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
