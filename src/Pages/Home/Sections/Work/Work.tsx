import React from "react";
import Title from "../../../../Components/Title/Title";
import { Container, Box } from "@mui/material";

const Work = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Title center>Work</Title>
      </Box>
    </Container>
  );
};

export default Work;
