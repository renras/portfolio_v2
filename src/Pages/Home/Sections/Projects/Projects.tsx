import React from "react";

import { Container, Box } from "@mui/material";
import Title from "../../../../Components/Title/Title";
import ProjectsChips from "./ProjectsChips";
import ListOfProjects from "./ListOfProjects";

const Work = () => {
  return (
    <Container maxWidth="xl">
      <Container
        maxWidth="lg"
        sx={{
          padding: "10rem 0",
          textAlign: "center",
        }}
      >
        <Title center sx={{ display: "inline-block" }}>
          Projects
        </Title>
        <ProjectsChips />
        <ListOfProjects />
      </Container>
    </Container>
  );
};

export default Work;
