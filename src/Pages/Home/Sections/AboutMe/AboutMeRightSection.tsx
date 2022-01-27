import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import Title from "../../../../Components/Title/Title";
import { useMediaQuery } from "@mui/material";

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

  const minWidth600 = useMediaQuery("(min-width:600px)");

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
        Skills
      </Title>
      <Box
        sx={{
          marginTop: "5rem",
          display: "flex",
          flexFlow: "row wrap",
          gap: "1rem",
          justifyContent: { xs: "center", sm: "flex-start" },
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
