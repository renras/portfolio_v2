import React from "react";

import { Stack } from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";

const IconGroup = () => {
  return (
    <Stack direction="row" spacing={2}>
      <LinkedIn
        sx={{ cursor: "pointer" }}
        onClick={() =>
          window.open("https://www.linkedin.com/in/renzo-visperas-55353321a/")
        }
      ></LinkedIn>
      <GitHub
        sx={{ cursor: "pointer" }}
        onClick={() => window.open("https://www.github.com/renras")}
      ></GitHub>
    </Stack>
  );
};

export default IconGroup;
