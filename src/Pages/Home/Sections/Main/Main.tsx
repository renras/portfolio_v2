import React from "react";
import { Container, Typography } from "@mui/material";
import MainButtonGroup from "./MainButtonGroup";

const Main = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
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
