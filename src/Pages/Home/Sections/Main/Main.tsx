import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Span = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Main = () => {
  const buttons: string[] = ["CONTACT ME", "CHECK MY WORK"];

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Hello, I'm Ren and <br />
              I'm a <Span>Front End Developer</Span>
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              sx={{ marginTop: "1rem", textAlign: "center" }}
            >
              I focus on writing clean, elegant and efficient code.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
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
        </Box>
      </Container>
    </Container>
  );
};

export default Main;
