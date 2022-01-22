import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const PaperStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Title = ({ title }: { title: string }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      <PaperStyled sx={{ width: "40%", height: ".25rem" }}></PaperStyled>
    </Box>
  );
};

export default Title;
