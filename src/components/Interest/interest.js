import React, { Component } from "react";
import Header from "../header/header";
import "./interest.css";
import Research from "./researches/research";

class Interest extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className="header">Research Interests</h1>
        <div className="root">
          <Research />
          <Research />
          <Research />
        </div>
      </div>
    );
  }
}

export default Interest;
