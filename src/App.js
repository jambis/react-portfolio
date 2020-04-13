import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import Main from "./Components/Main";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import ScrollButton from "./Components/ScrollButton";
import Blog from "./Components/Blog/Blog";
import ViewPost from "./Components/Blog/ViewPost";

import "./Styles/Index.scss";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const handleOnScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={ViewPost} />
      {show ? <ScrollButton /> : null}
    </div>
  );
}

export default App;
