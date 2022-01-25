import React from "react";
import { Chip, Stack } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { setActiveChip } from "../../../../store/appSlice";

const ProjectsChips = () => {
  const dispatch = useAppDispatch();
  const activeChip: string = useAppSelector((state) => state.app.activeChip);
  const technologies: string[] = [
    "All",
    ...useAppSelector((state) => state.app.technologies),
  ];

  const chipHandleClick = (technology: string) => {
    dispatch(setActiveChip(technology));
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
            color={technology === activeChip ? "primary" : "default"}
            key={index}
            label={`${technology}`}
            sx={{ padding: "1rem 1rem" }}
            onClick={() => chipHandleClick(technology)}
          ></Chip>
        );
      })}
    </Stack>
  );
};

export default ProjectsChips;
