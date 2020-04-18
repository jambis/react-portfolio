import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useTransition } from "react-spring";

import Header from "./Components/Navbar/Header";
import Main from "./Components/Main";
import AboutMe from "./Components/AboutMe";
import ProjectList from "./Components/ProjectList";
import ScrollButton from "./Components/ScrollButton";

import "./Styles/Index.scss";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const transitions = useTransition(show, null, {
    from: { opacity: 0, bottom: "0em" },
    enter: { opacity: 1, bottom: "2.3em" },
    leave: { opacity: 0, bottom: "0em" },
  });

  const handleOnScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const renderScrollBtn = () => {
    return transitions.map(
      ({ item, key, props }) =>
        item && <ScrollButton key={key} setShow={setShow} transition={props} />
    );
  };

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={ProjectList} />
      {renderScrollBtn()}
    </div>
  );
}

export default App;
