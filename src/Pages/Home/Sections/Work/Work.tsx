import React, { useState } from "react";
import Title from "../../../../Components/Title/Title";
import { Container, Box } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";

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
          padding: "10rem 0",
          textAlign: "center",
        }}
      >
        <Title center sx={{ display: "inline-block" }}>
          Projects
        </Title>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "5rem" }}
        >
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
        <Box sx={{ display: "flex", gap: "5rem" }}>
          <Card></Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Work;
