import React from "react";
import { Box, Button } from "@mui/material";

const NavLinks = ({ sx }: { sx?: Object }) => {
  const buttons: string[] = ["Home", "About", "Projects", "Contact"];

  return (
    <Box sx={sx}>
      {buttons.map((button, index) => {
        return <Button key={index}>{button}</Button>;
      })}
    </Box>
  );
};

export default NavLinks;
