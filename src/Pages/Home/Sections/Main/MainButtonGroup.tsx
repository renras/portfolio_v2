import React from "react";
import { Box, Button } from "@mui/material";

const MainButtonGroup = () => {
  const buttons: string[] = ["CONTACT ME", "CHECK MY WORK"];

  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "2rem",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      {buttons.map((button, index) => {
        return (
          <Button
            size="large"
            variant={`${index == 0 ? "contained" : "outlined"}`}
            sx={{ fontWeight: "bold" }}
            key={index}
          >
            {button}
          </Button>
        );
      })}
    </Box>
  );
};

export default MainButtonGroup;
