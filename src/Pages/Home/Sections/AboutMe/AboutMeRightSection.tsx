import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import Title from "../../../../Components/Title/Title";

const AboutMeRightSection = () => {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "Redux",
    "Webpack",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        flex: "1 1 0",
        alignItems: "flex-start",
      }}
    >
      <Title title="Skills" />
      <Box sx={{ display: "flex", flexFlow: "row wrap", gap: "1rem" }}>
        {skills.map((skill) => {
          return (
            <Paper elevation={2} sx={{ padding: ".5rem 1rem" }}>
              <Typography>{skill}</Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default AboutMeRightSection;
