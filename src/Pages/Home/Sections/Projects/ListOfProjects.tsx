import React from "react";
import { useAppSelector } from "../../../../store/hooks";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import Paragraph from "../../../../Components/Paragraph/Paragraph";

const ListOfProjects = () => {
  const activeChip: string = useAppSelector((state) => state.app.activeChip);
  const projects: any[] = useAppSelector((state) => state.app.projects).filter(
    (project) => {
      return activeChip !== "All"
        ? project.technologies.includes(activeChip)
        : !project.technologies.includes(activeChip);
    }
  );

  return (
    <Box
      sx={{
        display: "flex",
        gap: "5rem",
        marginTop: "5rem",
        justifyContent: "center",
      }}
    >
      {projects.map((project: any, index: number) => {
        return (
          <Card
            key={index}
            onClick={() => window.open(project.link)}
            sx={{ cursor: "pointer", maxWidth: "330.67px" }}
          >
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
                sx={{ textAlign: "start", fontWeight: "bold" }}
              >
                {project.title}
              </Typography>
              <Stack direction="row" spacing={1}>
                {project.technologies.map(
                  (technology: string, index: number) => {
                    return (
                      <Chip
                        key={index}
                        size="small"
                        label={technology}
                        sx={{ fontSize: "11px" }}
                      />
                    );
                  }
                )}
              </Stack>
              <Paragraph
                sx={{ fontSize: "12px", textAlign: "start", marginTop: "1rem" }}
              >
                {project.description}
              </Paragraph>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default ListOfProjects;
