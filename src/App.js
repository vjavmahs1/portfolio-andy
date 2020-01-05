import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/home'
import Publications from './components/publication/publications'
import Interest from './components/Interest/interest'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path = "/" component={Home}/>
        <Route exact path = '/publications' component={Publications} />
        <Route exact path = '/interest' component={Interest} />
        <Route exact path = '/cv' component={Interest} />
        <Route exact path = '/about' component={Interest} />


      </BrowserRouter>
    </div>
  );
}

export default App;
