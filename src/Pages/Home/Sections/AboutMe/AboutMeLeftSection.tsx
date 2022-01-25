import React from "react";
import { Box } from "@mui/material";
import Title from "../../../../Components/Title/Title";
import Paragraph from "../../../../Components/Paragraph/Paragraph";

const AboutMeLeftSection = () => {
  return (
    <Box
      sx={{
        flex: "1 1 0",
      }}
    >
      <Title sx={{ display: "inline-block" }}>About Me</Title>
      <Box sx={{ marginTop: "5rem" }}>
        <Paragraph>
          &emsp;My name is Renzo Visperas. I like to craft solid and scalable
          frontend products with great user experiences. I use best practices
          and web standards guidelines, resulting in semantic HTML and CSS.
        </Paragraph>
        <Paragraph sx={{ marginTop: "2rem" }}>
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
