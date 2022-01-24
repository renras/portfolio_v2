import React from "react";
import Title from "../../../../Components/Title/Title";
import { Container, Box } from "@mui/material";
import Paragraph from "../../../../Components/Paragraph/Paragraph";

const Work = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10rem 0",
          gap: "5rem",
        }}
      >
        <Title center>Projects</Title>
        <Box></Box>
      </Box>
    </Container>
  );
};

export default Work;
