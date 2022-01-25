import React, { useState } from "react";
import { Chip, Stack } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";

const ProjectsChips = () => {
  const [activeChipIndex, setActiveChipIndex] = useState(0);
  const technologies: string[] = [
    "All",
    ...useAppSelector((state) => state.app.technologies),
  ];

  const chipHandleClick = (index: number) => {
    setActiveChipIndex(index);
  };

  return (
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
  );
};

export default ProjectsChips;
