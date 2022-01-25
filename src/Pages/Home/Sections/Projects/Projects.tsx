import React from "react";
import { useAppSelector } from "../../../../store/hooks";

import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Title from "../../../../Components/Title/Title";
import ProjectsChips from "./ProjectsChips";

const Work = () => {
  const projects: any = useAppSelector((state) => state.app.projects);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          padding: "10rem 0",
          textAlign: "center",
        }}
      >
        <Title center sx={{ display: "inline-block" }}>
          Projects
        </Title>
        <ProjectsChips />
        <Box sx={{ display: "flex", gap: "5rem", marginTop: "5rem" }}>
          {projects.map((project: any, index: number) => {
            return (
              <>
                {projects !== undefined && (
                  <Card key={index}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.img}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="h3"
                        sx={{ textAlign: "start" }}
                      >
                        {project.title}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Work;
