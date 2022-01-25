import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import React from "react";

const Paragraph = ({ children, sx }: { children: string; sx?: Object }) => {
  return (
    <Typography sx={{ color: `${grey[300]}`, lineHeight: "2rem", ...sx }}>
      {children}
    </Typography>
  );
};

export default Paragraph;
