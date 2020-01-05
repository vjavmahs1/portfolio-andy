
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Publications from "./components/publications/publications";
import Interest from "./components/Interest/interest";
//import Resume from "./components/resume/resume";
import AboutMe from "./components/aboutme/about";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/interest" component={Interest} />
        <Route exact path="/about" component={AboutMe} />
      </BrowserRouter>
    </div>
  );
}

export default App;
