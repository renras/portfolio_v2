import React from "react";
import { Container, Paper, Box, Divider } from "@mui/material";
import AboutMeLeftSection from "./AboutMeLeftSection";
import AboutMeRightSection from "./AboutMeRightSection";

const AboutMe = () => {
  return (
    <Paper id="aboutme" elevation={1}>
      <Container maxWidth="xl">
        <Box
          sx={{
            padding: "10rem 0",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "5rem",
          }}
        >
          <AboutMeLeftSection />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "block" } }}
          />
          <AboutMeRightSection />
        </Box>
      </Container>
    </Paper>
  );
};

export default AboutMe;
