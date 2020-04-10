import React from "react";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import Main from "./Components/Main";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";

import "./Styles/Index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
