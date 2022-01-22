import React from "react";
import { Box } from "@mui/material";
import Title from "../../../../Components/Title/Title";
import Paragraph from "../../../../Components/Paragraph/Paragraph";

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
      <Title>About Me</Title>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Paragraph>
          &emsp;My name is Renzo Visperas. I like to craft solid and scalable
          frontend products with great user experiences. I use best practices
          and web standards guidelines, resulting in semantic HTML and CSS.
        </Paragraph>
        <Paragraph>
          &emsp;For building my projects, I like to design my web application
          using various tools like SASS, Tailwind CSS, Bootstrap, Material UI
          and Styled Components. I like to build my user interfaces using a
          JavaScript libraries such as Jquery and React. I also implement
          Typescript to have more control over my project and for efficient
          development. I also do my own custom webpack configurations.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default AboutMeLeftSection;
