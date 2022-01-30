import React from "react";
import { Box } from "@mui/material";
import Title from "../../../../Components/Title/Title";
import Paragraph from "../../../../Components/Paragraph/Paragraph";
import { useMediaQuery } from "@mui/material";

const AboutMeLeftSection = () => {
  const minWidth600 = useMediaQuery("(min-width:900px)");

  return (
    <Box
      sx={{
        flex: "1 1 0",
        textAlign: { xs: "center", sm: "start" },
      }}
    >
      <Title
        sx={{ display: "inline-block" }}
        center
        {...(minWidth600 && { center: false })}
      >
        About Me
      </Title>
      <Box sx={{ marginTop: "5rem" }}>
        <Paragraph sx={{ lineHeight: "2rem" }}>
          &emsp;My name is Renzo Visperas. I craft solid and scalable frontend
          products with great user experiences. I use best practices and web
          standards guidelines, resulting in semantic HTML and CSS.
        </Paragraph>
        <Paragraph sx={{ marginTop: "2rem", lineHeight: "2rem" }}>
          &emsp;For building my projects, I various tools to design my web
          application like SASS, Tailwind CSS, Bootstrap, Material UI and Styled
          Components. I build my user interfaces using JavaScript libraries such
          as Jquery and React. I implement Typescript to have more control over
          my project and for efficient development. I also do my own custom
          webpack configurations.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default AboutMeLeftSection;
