import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import Title from "../../../../Components/Title/Title";

const AboutMeLeftSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0",
        gap: "5rem",
        alignItems: "flex-start",
      }}
    >
      <Title title="About Me" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Typography variant="body1" sx={{ color: `${grey[300]}` }}>
          My name is Renzo Visperas. I like to craft solid and scalable frontend
          products with great user experiences. I use best practices and web
          standards guidelines, resulting in semantic HTML and CSS.
        </Typography>
        <Typography variant="body1" sx={{ color: `${grey[300]}` }}>
          For building my projects, I like to design my layout using Figma, then
          Visual Studio Code to produce clean semantic HTML and CSS. I like to
          build my user interfaces using a JavaScript library called React. I
          also implement Typescript to have more control over my project and for
          efficient development.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMeLeftSection;
