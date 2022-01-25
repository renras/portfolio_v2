import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const PaperStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Title = ({
  children,
  center,
  sx,
}: {
  children: string;
  center?: boolean;
  sx?: Object;
}) => {
  return (
    <Box sx={sx}>
      <Typography variant="h2" component="h2">
        {children}
      </Typography>
      <PaperStyled
        sx={{
          width: "40%",
          height: ".25rem",
          margin: `${center ? "auto" : "0"}`,
        }}
      ></PaperStyled>
    </Box>
  );
};

export default Title;
