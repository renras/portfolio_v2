import React from "react";
import { Container, Typography, Box, Button, ButtonGroup } from "@mui/material";

const Main = () => {
  const buttons: string[] = ["CONTACT ME", "CHECK MY WORK"];

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
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          {buttons.map((button, index) => {
            return (
              <Button
                size="large"
                variant={`${index == 0 ? "contained" : "outlined"}`}
                sx={{ fontWeight: "bold" }}
                key={index}
              >
                {button}
              </Button>
            );
          })}
        </Box>
      </Container>
    </Container>
  );
};

export default Main;
