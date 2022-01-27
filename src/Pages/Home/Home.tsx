import React from "react";

import Main from "./Sections/Main/Main";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";

const Home = () => {
  return (
    <>
      <Main />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
