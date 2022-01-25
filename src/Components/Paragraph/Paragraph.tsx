import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import React from "react";

const Paragraph = ({
  children,
  variant = "body1",
  sx,
}: {
  children: string;
  sx?: Object;
  variant?: any;
}) => {
  return (
    <Typography variant={variant} sx={{ color: `${grey[300]}`, ...sx }}>
      {children}
    </Typography>
  );
};

export default Paragraph;
