import React, { useState } from "react";
import Title from "../../../../Components/Title/Title";
import { Container, Box } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";

const Work = () => {
  const [activeChipIndex, setActiveChipIndex] = useState(0);
  const technologies: string[] = [
    "All",
    ...useAppSelector((state) => state.app.technologies),
  ];

  const chipHandleClick = (index: number) => {
    setActiveChipIndex(index);
  };

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
        <Stack direction="row" spacing={2}>
          {technologies.map((technology, index) => {
            return (
              <Chip
                color={index === activeChipIndex ? "primary" : "default"}
                key={index}
                label={`${technology}`}
                size="small"
                sx={{ padding: "1rem 1rem" }}
                onClick={() => chipHandleClick(index)}
              ></Chip>
            );
          })}
        </Stack>
      </Box>
    </Container>
  );
};

export default Work;
