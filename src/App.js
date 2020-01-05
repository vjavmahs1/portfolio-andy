import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './/components/home/home'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path = "/" component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
