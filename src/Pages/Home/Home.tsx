import React, { useRef } from "react";

import Main from "./Sections/Main/Main";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";

const Home = () => {
  return (
    <>
      <main id="main">
        <Main />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
