// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Destination</h1>
        </header>
        <Quote
          destination="Toulouse"
          country="France"
          image="https://www.edreams.com/blog/wp-content/uploads/sites/3/2018/02/Toulouse-Saint-Pierre-Bridge.jpg"
          distance="883"
        />
        <Quote
          destination="Moscou"
          country="Russie"
          image="https://www.voyageursdumonde.fr/vdm/imgProduits/RUS/408728.ori.jpg"
          distance="2 594"
        />
      </div>
    );
  }
}

export default App;