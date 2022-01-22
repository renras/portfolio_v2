import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import React from "react";

const Paragraph = ({ children }: { children: string }) => {
  return (
    <Typography sx={{ color: `${grey[300]}`, lineHeight: "2rem" }}>
      {children}
    </Typography>
  );
};

export default Paragraph;
