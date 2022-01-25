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
        flex: "1 1 0",
      }}
    >
      <Title sx={{ display: "inline-block" }}>Skills</Title>
      <Box
        sx={{
          marginTop: "5rem",
          display: "flex",
          flexFlow: "row wrap",
          gap: "1rem",
        }}
      >
        {skills.map((skill, index) => {
          return (
            <Paper key={index} elevation={2} sx={{ padding: ".5rem 1rem" }}>
              <Typography>{skill}</Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default AboutMeRightSection;
