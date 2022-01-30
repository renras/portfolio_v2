import React, { useEffect, useRef } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { setIsNavSticky } from "../../../../store/appSlice";

import { Container, Typography } from "@mui/material";
import MainButtonGroup from "./MainButtonGroup";

const Main = () => {
  const mainRef = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const main = mainRef.current;

    const stickyNav = (entries: any): void => {
      const [entry] = entries;
      dispatch(setIsNavSticky(!entry.isIntersecting));
      console.log(entry.isIntersecting);
    };

    const options: { root: any; threshold: number; rootMargin: string } = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };

    const headerObserver = new IntersectionObserver(stickyNav, options);

    headerObserver.observe(main);

    return () => {
      headerObserver.unobserve(main);
    };
  }, []);

  return (
    <Container
      id="main"
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
      ref={mainRef}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography variant="h2" component="h1" sx={{ textAlign: "center" }}>
          Hello, I'm Ren and <br />
          I'm a{" "}
          <Typography variant="h2" component="span" color="primary">
            Front End Developer
          </Typography>
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{ marginTop: "2rem", textAlign: "center" }}
        >
          I focus on writing clean, elegant and efficient code.
        </Typography>
        <MainButtonGroup />
      </Container>
    </Container>
  );
};

export default Main;
