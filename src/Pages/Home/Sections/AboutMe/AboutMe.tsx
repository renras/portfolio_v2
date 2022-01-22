import React from "react";
import { Container, Paper, Box } from "@mui/material";
import AboutMeLeftSection from "./AboutMeLeftSection";
import AboutMeRightSection from "./AboutMeRightSection";

const AboutMe = () => {
  return (
    <Paper elevation={1}>
      <Container maxWidth="xl">
        <Box sx={{ padding: "10rem 0", display: "flex", gap: "10rem" }}>
          <AboutMeLeftSection />
          <AboutMeRightSection />
        </Box>
      </Container>
    </Paper>
  );
};

export default AboutMe;
